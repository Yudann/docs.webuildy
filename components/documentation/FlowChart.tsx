import React, { useCallback, useEffect } from "react";
import ReactFlow, {
  Controls,
  Background,
  BackgroundVariant,
  MiniMap,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
  Position,
  ReactFlowInstance,
} from "reactflow";
import "reactflow/dist/style.css";
import dagre from "dagre";

interface FlowChartProps {
  initialNodes: any[];
  initialEdges: any[];
  direction?: "TB" | "LR";
  id: string;
}

const getLayoutedElements = (nodes: any[], edges: any[], direction = "TB") => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({
    rankdir: direction,
    nodesep: 80,
    ranksep: 100,
    marginx: 50,
    marginy: 50,
  });

  nodes.forEach((node) => {
    const width = node.style?.width || 220;
    const height = node.style?.height || 80;
    dagreGraph.setNode(node.id, { width, height });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    const width = node.style?.width || 220;
    const height = node.style?.height || 80;

    return {
      ...node,
      targetPosition: direction === "LR" ? Position.Left : Position.Top,
      sourcePosition: direction === "LR" ? Position.Right : Position.Bottom,
      position: {
        x: nodeWithPosition.x - width / 2,
        y: nodeWithPosition.y - height / 2,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
};

export const FlowChart: React.FC<FlowChartProps> = ({
  initialNodes,
  initialEdges,
  direction = "TB",
  id,
}) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onInit = useCallback(
    (reactFlowInstance: ReactFlowInstance) => {
      setTimeout(() => {
        reactFlowInstance.fitView({ padding: 0.2, duration: 400 });
      }, 100);
    },
    [id]
  );

  useEffect(() => {
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
      initialNodes,
      initialEdges,
      direction
    );
    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
  }, [initialNodes, initialEdges, direction, setNodes, setEdges, id]);

  const nodeColor = (node: any) => {
    if (node.style?.background) return node.style.background;
    return "#fff";
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-2xl">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        connectionLineType={ConnectionLineType.SmoothStep}
        onInit={onInit}
        fitView
        nodesDraggable={true}
        className="touchdevice-flow"
      >
        <Controls
          showInteractive={false}
          className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-lg shadow-lg"
        />
        <Background
          variant={BackgroundVariant.Dots}
          gap={16}
          size={1.5}
          color="#cbd5e1"
        />
        <MiniMap
          nodeColor={nodeColor}
          nodeStrokeWidth={3}
          zoomable
          pannable
          className="bg-white/90 backdrop-blur-sm border-2 border-slate-200 rounded-xl shadow-lg"
          style={{ height: 120, width: 180 }}
        />
      </ReactFlow>
    </div>
  );
};
