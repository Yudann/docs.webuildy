import React from "react";
import { Handle, Position, NodeProps } from "reactflow";

const CustomDiamondNode: React.FC<NodeProps> = ({ data, selected }) => {
  return (
    <div
      className={`diamond-node ${
        selected ? "ring-2 ring-blue-500 ring-offset-2" : ""
      }`}
      style={{
        ...data.style,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          transform: "rotate(45deg)",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:
            data.style?.background || data.style?.backgroundColor || "#fff",
          border: data.style?.border || "2px solid #6b7280",
        }}
      >
        <div
          style={{
            transform: "rotate(-45deg)",
            textAlign: "center",
            fontSize: "12px",
            fontWeight: 600,
            color: data.style?.color || "#111827",
          }}
        >
          {data.label}
        </div>
      </div>

      {/* Handles at the corners */}
      <Handle
        type="source"
        position={Position.Top}
        style={{ background: "#94a3b8", width: 8, height: 8 }}
      />
      <Handle
        type="target"
        position={Position.Bottom}
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

export default CustomDiamondNode;
