import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { ZoomIn, ZoomOut, RefreshCw } from 'lucide-react';

interface MermaidChartProps {
  code: string;
  id: string;
}

const MermaidChart: React.FC<MermaidChartProps> = ({ code, id }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'neutral',
      securityLevel: 'loose',
      fontFamily: 'Inter',
    });
  }, []);

  useEffect(() => {
    const renderChart = async () => {
      if (!containerRef.current) return;
      setError(null);
      
      try {
        const uniqueId = `mermaid-${id}-${Date.now()}`;
        const { svg } = await mermaid.render(uniqueId, code);
        setSvgContent(svg);
      } catch (err) {
        console.error('Mermaid rendering error:', err);
        setError('Failed to render diagram. Syntax might be invalid.');
      }
    };

    renderChart();
    // Reset zoom when code changes
    setZoom(1);
  }, [code, id]);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.5));
  const handleReset = () => setZoom(1);

  if (error) {
    return (
      <div className="p-4 border-2 border-red-200 bg-red-50 text-red-600 rounded-lg flex items-center justify-center min-h-[200px]">
        {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full relative overflow-hidden bg-white rounded-xl shadow-sm border border-slate-200">
      {/* Controls */}
      <div className="absolute top-4 right-4 z-10 flex gap-2 bg-white/90 backdrop-blur p-1 rounded-lg border border-slate-200 shadow-sm">
        <button 
          onClick={handleZoomOut}
          className="p-1.5 hover:bg-slate-100 rounded-md text-slate-600 transition-colors"
          title="Zoom Out"
        >
          <ZoomOut size={18} />
        </button>
        <button 
          onClick={handleReset}
          className="p-1.5 hover:bg-slate-100 rounded-md text-slate-600 transition-colors"
          title="Reset Zoom"
        >
          <span className="text-xs font-medium w-8 text-center inline-block">
            {Math.round(zoom * 100)}%
          </span>
        </button>
        <button 
          onClick={handleZoomIn}
          className="p-1.5 hover:bg-slate-100 rounded-md text-slate-600 transition-colors"
          title="Zoom In"
        >
          <ZoomIn size={18} />
        </button>
      </div>

      {/* Diagram Container */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-auto p-8 flex items-center justify-center min-h-[500px]"
      >
        <div 
          className="transition-transform duration-200 ease-out origin-center"
          style={{ transform: `scale(${zoom})` }}
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      </div>
    </div>
  );
};

export default MermaidChart;