import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Database, Users, FileText, Mail, Code, BookOpen, Shield, CheckCircle } from "lucide-react";

interface DataSourceItemProps {
  icon: React.ReactNode;
  label: string;
  tooltip: string;
}

const DataSourceItem: FC<DataSourceItemProps> = ({ icon, label, tooltip }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="bg-white rounded-md p-3 border border-neutral-300 flex items-center hover:bg-neutral-50 cursor-pointer transition-colors">
            {icon}
            <span className="ml-2">{label}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs w-48">{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const DataSources: FC = () => {
  const dataSources = [
    {
      icon: <Database className="w-4 h-4 text-primary" />,
      label: "Database",
      tooltip: "SQL, NoSQL, and other structured data sources"
    },
    {
      icon: <FileText className="w-4 h-4 text-primary" />,
      label: "Documents",
      tooltip: "PDFs, docx, and other document formats"
    },
    {
      icon: <Code className="w-4 h-4 text-primary" />,
      label: "APIs",
      tooltip: "Internal REST/GraphQL endpoints"
    }
  ];

  const securityFeatures = [
    "Data never leaves premises",
    "Full control over models",
    "No external API calls",
    "Access controls"
  ];

  return (
    <Card className="bg-neutral-100 border-neutral-300 transition-all duration-300 hover:shadow-md">
      <CardContent className="p-4">
        <h2 className="text-xl text-primary font-semibold mb-4 flex items-center">
          <span className="mr-2 flex items-center justify-center bg-primary text-white w-8 h-8 rounded-full">
            <Database className="w-4 h-4" />
          </span>
          Your Internal Data
        </h2>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          {dataSources.map((source, index) => (
            <DataSourceItem
              key={index}
              icon={source.icon}
              label={source.label}
              tooltip={source.tooltip}
            />
          ))}
        </div>
        
        <div className="border-t border-neutral-300 pt-4 mt-4">
          <div className="bg-amber-50 border border-amber-200 rounded-md p-3">
            <h3 className="font-medium text-neutral-800 flex items-center mb-2">
              <Shield className="w-4 h-4 mr-2 text-primary" />
              Security Features
            </h3>
            <ul className="text-sm text-neutral-700 space-y-2">
              {securityFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataSources;
