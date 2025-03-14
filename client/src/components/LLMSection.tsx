import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu } from "lucide-react";
import { motion } from "framer-motion";

const LLMSection: FC = () => {
  const models = ["Llama 3", "Gemma", "Qwen"];

  return (
    <Card className="bg-red-50 border-red-200 transition-all duration-300 hover:shadow-md">
      <CardContent className="p-4">
        <h2 className="text-lg text-red-500 font-semibold mb-3 flex items-center">
          <Cpu className="w-5 h-5 mr-2" />
          On-Premise LLM
        </h2>
        <div className="mb-2 text-sm text-neutral-700">Open Source Models</div>
        <div className="space-y-2">
          {models.map((model, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded p-2 border border-neutral-200 flex items-center"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
              <span>{model}</span>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LLMSection;
