import { cn } from "@/utils/cn";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glassEffect?: boolean;
  gradient?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverEffect = false,
  glassEffect = false,
  gradient = false,
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/50 p-6 shadow-xl",
        glassEffect && "bg-white/80 backdrop-blur-sm",
        gradient && "bg-gradient-to-br from-white to-slate-50",
        !glassEffect && !gradient && "bg-white",
        hoverEffect &&
          "transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]",
        className
      )}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = "",
}) => <div className={cn("mb-4", className)}>{children}</div>;

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className = "",
}) => (
  <h3 className={cn("font-bold text-slate-900 text-lg mb-2", className)}>
    {children}
  </h3>
);

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className = "",
}) => (
  <div className={cn("text-slate-600 leading-relaxed", className)}>
    {children}
  </div>
);
