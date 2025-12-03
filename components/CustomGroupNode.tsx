import React from "react";
import { Handle, Position, NodeProps } from "reactflow";

const CustomGroupNode: React.FC<NodeProps> = ({ data, selected }) => {
  return (
    <div
      className={`group-node ${
        selected ? "ring-2 ring-blue-500 ring-offset-2" : ""
      }`}
      style={{
        ...data.style,
        position: "relative",
      }}
    >
      <div className="p-4">
        <div className="font-bold text-center mb-1">{data.label}</div>
        {data.description && (
          <div className="text-xs text-center opacity-75">
            {data.description}
          </div>
        )}
      </div>

      {/* Handles for connections */}
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: "#94a3b8", width: 8, height: 8 }}
      />
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: "#94a3b8", width: 8, height: 8 }}
      />
      <Handle
        type="source"
        position={Position.Left}
        style={{ background: "#94a3b8", width: 8, height: 8 }}
      />
      <Handle
        type="target"
        position={Position.Right}
        style={{ background: "#94a3b8", width: 8, height: 8 }}
      />
    </div>
  );
};

export default CustomGroupNode;
