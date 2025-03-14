import { FC } from "react";
import SecurityPerimeter from "./SecurityPerimeter";

const EnterpriseRAG: FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Enterprise RAG System
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Secure Retrieval-Augmented Generation framework for on-premise deployment
        </p>
      </div>

      <SecurityPerimeter />
      
      <div className="text-center text-muted-foreground text-sm mt-8">
        <p>Enterprise RAG System - Secure, on-premise AI solution</p>
        <p className="mt-1">© {new Date().getFullYear()} Your Company - All rights reserved</p>
      </div>
    </div>
  );
};

export default EnterpriseRAG;
