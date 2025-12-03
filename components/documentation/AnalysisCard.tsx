import React from "react";
import { ShieldCheck, AlertTriangle } from "lucide-react";
import { Card } from "../ui/Card";

interface AnalysisCardProps {
  items: string[];
}

export const AnalysisCard: React.FC<AnalysisCardProps> = ({ items }) => {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, idx) => {
        const isStrength = item.startsWith("Strengths:");
        return (
          <Card
            key={idx}
            hoverEffect
            glassEffect
            className={`border-l-4 group hover:scale-[1.02] ${
              isStrength
                ? "border-l-emerald-500 hover:border-emerald-400"
                : "border-l-amber-500 hover:border-amber-400"
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`p-2 rounded-lg ${
                  isStrength ? "bg-emerald-100" : "bg-amber-100"
                }`}
              >
                {isStrength ? (
                  <ShieldCheck className="text-emerald-600" size={22} />
                ) : (
                  <AlertTriangle className="text-amber-600" size={22} />
                )}
              </div>
              <span
                className={`font-bold text-sm uppercase tracking-wide ${
                  isStrength ? "text-emerald-700" : "text-amber-700"
                }`}
              >
                {isStrength ? "Strength" : "Improvement"}
              </span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              {item.split(": ")[1]}
            </p>
          </Card>
        );
      })}
    </div>
  );
};
