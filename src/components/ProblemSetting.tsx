const ProblemSetting = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-8 text-center">
          Problem Setting
        </h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-foreground/90 leading-relaxed mb-6">
            We focus on semi-supervised node classification using GNNs and formulate the <em>Corrective Unlearning</em> 
            problem for graph-structured data. Consider a graph <em>G=(V,E)</em>, where <em>V</em> and <em>E</em> 
            represent the constituent set of nodes and edges respectively.
          </p>
          
          <p className="text-foreground/90 leading-relaxed mb-6">
            Unlearning requests can be of the form to unlearn one or more of nodes and edges of the graph, 
            where for each node <em>V<sub>i</sub> ∈ V</em>, we have a feature vector <em>X<sub>i</sub></em> 
            and label <em>Y<sub>i</sub></em>, where <em>V = (X, Y)</em>.
          </p>
          
          <p className="text-foreground/90 leading-relaxed">
            <strong>Can we unlearn the effect of all the devil nodes (red and black) while discovering only a few (red)?</strong> 
            This problem is interesting in graphs because the effect of a node can propagate to other nodes through message passing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSetting;