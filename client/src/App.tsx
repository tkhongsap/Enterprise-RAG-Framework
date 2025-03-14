import EnterpriseRAG from "@/components/EnterpriseRAG";
import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-neutral-100 p-4 md:p-8">
        <EnterpriseRAG />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
