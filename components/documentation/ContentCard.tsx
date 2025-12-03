import React from "react";
import { Info } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";

interface ContentCardProps {
  description: string;
}

export const ContentCard: React.FC<ContentCardProps> = ({ description }) => {
  return (
    <Card glassEffect>
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl shadow-lg shadow-indigo-500/30">
          <Info className="text-white" size={24} />
        </div>
        <div className="flex-1">
          <CardTitle>About this View</CardTitle>
          <CardContent>{description}</CardContent>
        </div>
      </div>
    </Card>
  );
};
