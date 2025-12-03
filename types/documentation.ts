import { Node, Edge } from 'reactflow';

export interface DocSection {
  id: string;
  title: string;
  category: 'Architecture' | 'Flows' | 'Database' | 'Components' | 'Analysis';
  description: string;
  nodes?: Node[];
  edges?: Edge[];
  direction?: 'TB' | 'LR';
  content?: string[];
}

export interface SidebarItem {
  category: string;
  items: DocSection[];
}