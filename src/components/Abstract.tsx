const Abstract = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="w-full px-8 max-w-8xl mx-auto relative z-10 bg-background/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-border/20">
        <h2 className="font-serif text-4xl md:text-6xl font-bold mb-12 text-center text-foreground">
          Abstract
        </h2>
        
        <div className="flex max-w-full gap-16">
          <div className="basis-3/5 prose prose-lg max-w-none">
                         <p className="text-foreground/90 leading-relaxed mb-8 text-justify font-['Times_New_Roman'] text-2xl tracking-wide">
               Despite significant progress in image captioning, generating accurate and descriptive captions remains a long-standing challenge. In this study, we propose <span className="font-bold italic">Attention-Guided Image Captioning (AGIC)</span>, which amplifies salient visual regions directly in the feature space to guide caption generation. We further introduce a hybrid decoding strategy that combines deterministic and probabilistic sampling to balance fluency and diversity. To evaluate AGIC, we conduct extensive experiments on the Flickr8k and Flickr30k datasets. The results show that AGIC matches or surpasses several state-of-the-art models while achieving faster inference. Moreover, AGIC demonstrates strong performance across multiple evaluation metrics, offering a scalable and interpretable solution for image captioning.
             </p>
          </div>

          <div className="basis-2/5 flex flex-col items-center justify-center">
                         <div className="w-full h-full flex flex-col items-center justify-center bg-background/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-border/30">
              <div className="flex gap-6 items-start">
                <img src="/images/paper_example.jpg" alt="Illustration" className="w-2/5 h-auto object-contain rounded-md shadow-sm" />
                  <div className="w-3/5 text-xs space-y-5 text-left">
                   <p className="leading-tight"><span className="font-bold italic text-red-500">LlaVA:</span> Two little girls are playing with bubbles in the park.</p>
                   <p className="leading-tight"><span className="font-bold italic text-red-500">Qwen:</span> Two young friends share a joyful moment, creating a world of bubbles in the park.</p>
                   <p className="leading-tight"><span className="font-bold italic text-red-500">Fuyu:</span> Two little girls blowing bubbles in the park.</p>
                   <p className="leading-tight"><span className="font-bold italic text-cyan-500">BRNN:</span> Two girls playing in the park.</p>
                   <p className="leading-tight"><span className="font-bold italic text-cyan-500">LSTNet:</span> A young girl is blowing bubbles, holding them in her hands.</p>
                   <p className="leading-tight"><span className="font-bold italic text-violet-500">R²M:</span> Two young girls playing with bubbles in grass.</p>
                                       <p className="leading-tight"><span className="font-bold italic text-blue-900">AGIC:</span> <span className="text-pink-500">Two young girls wearing floral dress blowing bubbles in a park covered with grass.</span></p>
                 </div>
              </div>
              <p className="text-sm text-center text-foreground/70 leading-tight mt-6 px-4 py-2 bg-background/50 rounded-md">
                Figure 1: Comparison of various image caption generation models.{" "}
                <span className="text-red-500 font-medium">red</span>: zero-shot,{" "}
                <span className="text-cyan-500 font-medium">cyan</span>: supervised,{" "}
                <span className="text-violet-500 font-medium">violet</span>: unsupervised approaches and{" "}
                <span className="text-blue-900 font-medium">blue</span>: our approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abstract;