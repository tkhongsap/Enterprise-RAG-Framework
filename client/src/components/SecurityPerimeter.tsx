import { FC } from "react";
import DataSources from "./DataSources";
import RagPipeline from "./RagPipeline";
import LLMSection from "./LLMSection";
import EvaluationSection from "./EvaluationSection";
import UserInterfaces from "./UserInterfaces";
import DataFlow from "./DataFlow";

const SecurityPerimeter: FC = () => {
  return (
    <div className="relative border-4 border-dashed border-red-500 p-6 md:p-10 rounded-xl bg-white mb-8">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-1 rounded-full font-bold text-sm md:text-base">
        ENTERPRISE SECURITY PERIMETER
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Internal Data Sources */}
        <DataSources />

        {/* RAG Pipeline Section */}
        <div className="lg:col-span-2">
          <RagPipeline />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* On-Premise LLM */}
            <LLMSection />
            
            {/* Evaluation */}
            <EvaluationSection />
          </div>
        </div>
      </div>

      {/* User Interfaces Section */}
      <UserInterfaces />
      
      {/* Interactive Data Flow Visualization */}
      <DataFlow />
    </div>
  );
};

export default SecurityPerimeter;
