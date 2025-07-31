const Abstract = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-8 text-center">
          Abstract
        </h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-foreground/90 leading-relaxed mb-6">
            Graph Neural Networks (GNNs) are increasingly being used for a variety of ML applications on graph data. 
            Because graph data does not follow the independently and identically distributed (<em>i.i.d.</em>) assumption, 
            adversarial manipulations or incorrect data can propagate to other data points through message passing, 
            which deteriorates the model's performance.
          </p>
          
          <p className="text-foreground/90 leading-relaxed mb-6">
            To allow model developers to remove the adverse effects of manipulated entities from a trained GNN, 
            we study the recently formulated problem of <em>Corrective Unlearning</em>. We find that current graph 
            unlearning methods fail to unlearn the effect of manipulations even when the whole manipulated set is known.
          </p>
          
          <p className="text-foreground/90 leading-relaxed">
            We introduce a new graph unlearning method, <span className="font-semibold text-cognac">COGNAC</span>, 
            which can unlearn the effect of the manipulation set even when only 5% of it is identified.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Abstract;