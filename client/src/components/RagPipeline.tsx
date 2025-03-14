import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Settings, Download, Layers, HardDrive, Search } from "lucide-react";
import { motion } from "framer-motion";

interface PipelineStageProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  items: string[];
  tooltip: string;
}

const PipelineStage: FC<PipelineStageProps> = ({ number, icon, title, items, tooltip }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div 
            className="bg-white rounded-md p-4 border border-blue-200 hover:border-primary transition-colors relative"
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" 
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: number * 0.1 }}
          >
            <div className="absolute -top-2 -left-2 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
              {number}
            </div>
            <h3 className="font-medium text-primary mb-2 flex items-center">
              {icon}
              <span className="ml-2">{title}</span>
            </h3>
            <div className="text-xs text-neutral-600 space-y-1">
              {items.map((item, index) => (
                <div key={index} className="flex items-center">
                  <span className="block w-2 h-2 rounded-full bg-blue-400 mr-1.5"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs w-48">{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const RagPipeline: FC = () => {
  const pipelineStages = [
    {
      number: 1,
      icon: <Download className="w-4 h-4 mr-2" />,
      title: "Loading",
      items: ["Data Connectors", "Document Parsing"],
      tooltip: "Connects to and ingests data from various sources"
    },
    {
      number: 2,
      icon: <Layers className="w-4 h-4 mr-2" />,
      title: "Indexing",
      items: ["Text Chunking", "Embeddings Generation"],
      tooltip: "Processes text into chunks and generates vector embeddings"
    },
    {
      number: 3,
      icon: <HardDrive className="w-4 h-4 mr-2" />,
      title: "Storing",
      items: ["Vector Database", "Metadata Storage"],
      tooltip: "Maintains vector database and metadata within security perimeter"
    },
    {
      number: 4,
      icon: <Search className="w-4 h-4 mr-2" />,
      title: "Querying & Response",
      items: ["Retrievers & Routes", "Response Synthesis"],
      tooltip: "Retrieves relevant information and synthesizes responses"
    }
  ];

  return (
    <Card className="bg-blue-50 border-blue-200 transition-all duration-300 hover:shadow-md">
      <CardContent className="p-4">
        <h2 className="text-xl text-primary font-semibold mb-4 flex items-center">
          <span className="mr-2 flex items-center justify-center bg-primary text-white w-8 h-8 rounded-full">
            <Settings className="w-4 h-4" />
          </span>
          Internal RAG System
        </h2>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {pipelineStages.map((stage) => (
              <PipelineStage
                key={stage.number}
                number={stage.number}
                icon={stage.icon}
                title={stage.title}
                items={stage.items}
                tooltip={stage.tooltip}
              />
            ))}
          </div>
          
          {/* Animated Flow Indicators */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-6 -mt-3 z-0">
            <motion.div 
              className="w-full h-0.5 bg-primary absolute top-1/2"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-primary absolute"
              initial={{ left: "0%", opacity: 0 }}
              animate={{ 
                left: ["0%", "100%"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RagPipeline;
