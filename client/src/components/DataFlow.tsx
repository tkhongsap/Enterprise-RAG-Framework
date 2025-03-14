import { FC, useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";
import { motion } from "framer-motion";

const DataFlow: FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Define data flow elements
  const dataPoints = [
    { label: 'Data Sources', x: dimensions.width * 0.1, y: dimensions.height * 0.5 },
    { label: 'Loading', x: dimensions.width * 0.3, y: dimensions.height * 0.3 },
    { label: 'Indexing', x: dimensions.width * 0.5, y: dimensions.height * 0.2 },
    { label: 'Storing', x: dimensions.width * 0.7, y: dimensions.height * 0.3 },
    { label: 'Query & Response', x: dimensions.width * 0.9, y: dimensions.height * 0.5 },
    { label: 'LLM', x: dimensions.width * 0.7, y: dimensions.height * 0.7 },
    { label: 'Evaluation', x: dimensions.width * 0.5, y: dimensions.height * 0.8 },
    { label: 'User Interface', x: dimensions.width * 0.3, y: dimensions.height * 0.7 }
  ];

  // Define connections between data points
  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0]
  ];

  const createCurvedPath = (from: typeof dataPoints[0], to: typeof dataPoints[0]) => {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const curve = Math.min(Math.abs(dx), Math.abs(dy)) * 0.5;
    
    let pathData = '';
    if (Math.abs(dx) > Math.abs(dy)) {
      // More horizontal movement
      pathData = `M ${from.x} ${from.y} 
                  C ${from.x + curve} ${from.y}, 
                    ${to.x - curve} ${to.y}, 
                    ${to.x} ${to.y}`;
    } else {
      // More vertical movement
      pathData = `M ${from.x} ${from.y} 
                  C ${from.x} ${from.y + curve}, 
                    ${to.x} ${to.y - curve}, 
                    ${to.x} ${to.y}`;
    }
    
    return pathData;
  };

  return (
    <Card className="mt-8 bg-white border-neutral-300">
      <CardContent className="p-4">
        <h2 className="text-xl text-primary font-semibold mb-4 flex items-center">
          <Activity className="w-5 h-5 mr-2" />
          Interactive Data Flow
        </h2>
        
        <div ref={containerRef} className="relative h-40 overflow-hidden">
          <svg 
            ref={svgRef} 
            width={dimensions.width} 
            height={dimensions.height}
            viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          >
            {/* Draw connections */}
            {connections.map(([fromIndex, toIndex], index) => {
              if (dimensions.width === 0) return null;
              
              const from = dataPoints[fromIndex];
              const to = dataPoints[toIndex];
              
              const pathData = createCurvedPath(from, to);
              
              return (
                <g key={`connection-${index}`}>
                  <motion.path
                    d={pathData}
                    fill="none"
                    stroke="#1E4892"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: index * 0.1 }}
                  />
                  <motion.circle
                    r="4"
                    fill="#EA4335"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                      delay: index * 0.2
                    }}
                  >
                    <animateMotion
                      path={pathData}
                      dur="3s"
                      repeatCount="indefinite"
                      rotate="auto"
                    />
                  </motion.circle>
                </g>
              );
            })}
            
            {/* Draw nodes */}
            {dataPoints.map((point, index) => (
              <g key={`node-${index}`}>
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r="8"
                  fill="#1E4892"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
                <text
                  x={point.x}
                  y={point.y + 20}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#627D98"
                >
                  {point.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataFlow;
