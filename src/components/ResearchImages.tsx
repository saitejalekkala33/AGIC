import graphNetworks from "@/assets/graph-networks.jpg";
import dataFlow from "@/assets/data-flow.jpg";

const ResearchImages = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12 text-center">
          Research Visualization
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Graph Networks Visualization */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img 
              src={graphNetworks}
              alt="Graph Neural Networks Visualization"
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-serif text-xl font-semibold mb-2">Graph Neural Networks</h3>
              <p className="text-sm">Interconnected node structures in GNN architectures</p>
            </div>
          </div>
          
          {/* Data Flow Visualization */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img 
              src={dataFlow}
              alt="Data Flow Visualization"
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-serif text-xl font-semibold mb-2">Corrective Unlearning</h3>
              <p className="text-sm">Data flow patterns in machine learning systems</p>
            </div>
          </div>
        </div>
        
        {/* Performance Metrics */}
        <div className="bg-secondary/50 rounded-lg p-8">
          <h3 className="font-serif text-2xl font-semibold mb-6 text-center text-agic">
            Model Performance
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-academic-blue mb-2">85%</div>
              <div className="text-lg text-academic-gray">Clean Accuracy</div>
              <div className="w-full bg-academic-gray-light rounded-full h-2 mt-2">
                <div className="bg-academic-blue h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-agic mb-2">20%</div>
              <div className="text-lg text-academic-gray">Affected Accuracy</div>
              <div className="w-full bg-academic-gray-light rounded-full h-2 mt-2">
                <div className="bg-agic h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-sm text-academic-gray mt-4">
            * Values shown are representative metrics from the agic methodology
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResearchImages;