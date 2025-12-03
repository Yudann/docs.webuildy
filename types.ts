export interface DocSection {
  id: string;
  title: string;
  category: 'Architecture' | 'Flows' | 'Database' | 'Components' | 'Analysis';
  description: string;
  nodes?: any[]; // ReactFlow Node[]
  edges?: any[]; // ReactFlow Edge[]
  direction?: 'TB' | 'LR'; // Layout direction
  content?: string[]; // Bullet points for text-only sections
}

export interface SidebarItem {
  category: string;
  items: DocSection[];
}