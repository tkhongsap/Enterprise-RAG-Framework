import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart2 } from "lucide-react";
import { motion } from "framer-motion";

const EvaluationSection: FC = () => {
  const metrics = [
    "Accuracy Metrics",
    "Relevance Assessment",
    "Performance Monitoring"
  ];

  return (
    <Card className="bg-green-50 border-green-200 transition-all duration-300 hover:shadow-md">
      <CardContent className="p-4">
        <h2 className="text-lg text-green-600 font-semibold mb-3 flex items-center">
          <BarChart2 className="w-5 h-5 mr-2" />
          Evaluation
        </h2>
        <div className="space-y-2 text-sm">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded p-2 border border-neutral-200 flex items-center"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              <span>{metric}</span>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EvaluationSection;
