import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Users, MessageCircle, Search, FileText, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

interface InterfaceItemProps {
  icon: React.ReactNode;
  title: string;
  tooltip: string;
}

const InterfaceItem: FC<InterfaceItemProps> = ({ icon, title, tooltip }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div 
            className="bg-white rounded-md p-4 border border-purple-200 hover:bg-purple-50 transition-colors cursor-pointer"
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" 
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-purple-700 mb-3 flex justify-center">
              {icon}
            </div>
            <h3 className="font-medium text-center">{title}</h3>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs w-48">{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const UserInterfaces: FC = () => {
  const interfaces = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Chat Interface",
      tooltip: "Interactive conversational interface for querying the system"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Search Tool",
      tooltip: "Advanced search capabilities with semantic understanding"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Document Q&A",
      tooltip: "Ask questions directly about specific documents"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Knowledge Portal",
      tooltip: "Centralized interface for browsing and discovering information"
    }
  ];

  return (
    <Card className="mt-8 bg-purple-50 border-purple-200 transition-all duration-300 hover:shadow-md">
      <CardContent className="p-4">
        <h2 className="text-xl text-primary font-semibold mb-4 flex items-center">
          <span className="mr-2 flex items-center justify-center bg-primary text-white w-8 h-8 rounded-full">
            <Users className="w-4 h-4" />
          </span>
          Secure User Interfaces
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {interfaces.map((item, index) => (
            <InterfaceItem
              key={index}
              icon={item.icon}
              title={item.title}
              tooltip={item.tooltip}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInterfaces;
