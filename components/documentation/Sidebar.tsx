import React from "react";
import {
  Layout,
  GitGraph,
  Database,
  Box,
  Activity,
  X,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { DocSection } from "../../types/documentation";

interface SidebarProps {
  activeId: string;
  onSelect: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
  categories: string[];
  data: DocSection[];
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeId,
  onSelect,
  isOpen,
  onClose,
  categories,
  data,
}) => {
  const getIcon = (category: string) => {
    const iconProps = { size: 18, strokeWidth: 2.5 };
    switch (category) {
      case "Architecture":
        return <Layout {...iconProps} />;
      case "Flows":
        return <GitGraph {...iconProps} />;
      case "Database":
        return <Database {...iconProps} />;
      case "Components":
        return <Box {...iconProps} />;
      case "Analysis":
        return <Activity {...iconProps} />;
      default:
        return <Box {...iconProps} />;
    }
  };

  const sidebarClasses = `
    fixed inset-y-0 left-0 z-40 w-72 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-slate-100 transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    lg:relative lg:translate-x-0 shadow-2xl
  `;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <aside className={sidebarClasses}>
        <div className="p-6 flex items-center justify-between border-b border-slate-700/50 bg-gradient-to-r from-indigo-600/20 to-purple-600/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/50 ring-2 ring-white/20">
              <Sparkles className="text-white" size={20} />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight block">
                Webuildy V2
              </span>
              <span className="text-xs text-slate-400">Documentation</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-6 overflow-y-auto h-[calc(100vh-100px)] custom-scrollbar">
          {categories.map((category) => (
            <div key={category} className="space-y-2">
              <h3 className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-3">
                {getIcon(category)}
                <span>{category}</span>
              </h3>
              <ul className="space-y-1">
                {data
                  .filter((doc) => doc.category === category)
                  .map((doc) => (
                    <li key={doc.id}>
                      <button
                        onClick={() => {
                          onSelect(doc.id);
                          if (window.innerWidth < 1024) onClose();
                        }}
                        className={`
                          w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-200 group relative overflow-hidden
                          ${
                            activeId === doc.id
                              ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-900/50 font-semibold scale-[1.02]"
                              : "text-slate-300 hover:bg-slate-800/50 hover:text-white hover:translate-x-1"
                          }
                        `}
                      >
                        <div className="flex items-center justify-between">
                          <span>{doc.title}</span>
                          <ChevronRight
                            size={16}
                            className={`transition-transform duration-200 ${
                              activeId === doc.id
                                ? "translate-x-1"
                                : "opacity-0 group-hover:opacity-100"
                            }`}
                          />
                        </div>
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </nav>

        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(15, 23, 42, 0.3);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(100, 116, 139, 0.5);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(100, 116, 139, 0.7);
          }
        `}</style>
      </aside>
    </>
  );
};
