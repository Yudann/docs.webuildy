import React from "react";
import { Menu } from "lucide-react";
import { Badge } from "../ui/Badge";

interface HeaderProps {
  title: string;
  description: string;
  category: string;
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  description,
  category,
  onMenuClick,
}) => {
  return (
    <header className="bg-white/70 backdrop-blur-xl border-b border-slate-200/50 px-6 py-5 flex items-center justify-between shadow-sm z-20">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2.5 -ml-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-all hover:scale-105"
        >
          <Menu size={22} />
        </button>
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-sm text-slate-600 mt-1 hidden sm:block">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Badge>{category}</Badge>
      </div>
    </header>
  );
};
