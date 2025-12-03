import React, { useState } from "react";
import { Sidebar } from "../components/documentation/Sidebar";
import { Header } from "../components/documentation/Header";
import { ContentCard } from "../components/documentation/ContentCard";
import { AnalysisCard } from "../components/documentation/AnalysisCard";
import { FlowChart } from "../components/documentation/FlowChart";
import {
  DOCUMENTATION_DATA,
  getUniqueCategories,
  getActiveDocument,
} from "../data/documentationData";
import { DocSection } from "../types/documentation";

export const Documentation: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("system-arch");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const categories = getUniqueCategories(DOCUMENTATION_DATA);
  const activeDoc: DocSection = getActiveDocument(DOCUMENTATION_DATA, activeId);

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 overflow-hidden">
      <Sidebar
        activeId={activeId}
        onSelect={setActiveId}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        categories={categories}
        data={DOCUMENTATION_DATA}
      />

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <Header
          title={activeDoc.title}
          description={activeDoc.description}
          category={activeDoc.category}
          onMenuClick={() => setSidebarOpen(true)}
        />

        <div className="flex-1 overflow-auto p-6 md:p-8">
          <div className=" mx-auto space-y-6 h-full flex flex-col">
            <ContentCard description={activeDoc.description} />

            {activeDoc.nodes ? (
              <div className="flex-1 min-h-[600px] w-full relative">
                <FlowChart
                  key={activeDoc.id}
                  id={activeDoc.id}
                  initialNodes={activeDoc.nodes}
                  initialEdges={activeDoc.edges || []}
                  direction={activeDoc.direction || "TB"}
                />
                <div className="text-center py-4">
                  <p className="text-xs text-slate-500 font-medium">
                    💡 <span className="font-semibold">Interactive Chart:</span>{" "}
                    Scroll to Zoom • Drag to Pan • Drag Nodes to Rearrange
                  </p>
                </div>
              </div>
            ) : activeDoc.content ? (
              <AnalysisCard items={activeDoc.content} />
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Documentation;
