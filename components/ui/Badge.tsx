import { cn } from "@/utils/cn";
import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "success" | "warning" | "destructive";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className = "",
}) => {
  const variantClasses = {
    default: "bg-gradient-to-r from-indigo-500 to-purple-500 text-white",
    secondary: "bg-gradient-to-r from-slate-500 to-slate-700 text-white",
    success: "bg-gradient-to-r from-emerald-500 to-green-500 text-white",
    warning: "bg-gradient-to-r from-amber-500 to-orange-500 text-white",
    destructive: "bg-gradient-to-r from-rose-500 to-pink-500 text-white",
  };

  return (
    <span
      className={cn(
        "text-xs font-semibold px-4 py-2 rounded-full shadow-lg inline-block",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
