const Abstract = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-5xl font-semibold mb-8 text-center">
          Abstract
        </h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-foreground/90 leading-relaxed mb-6 text-justify">
            Despite significant progress in image captioning, generating accurate and descriptive captions remains a long-standing challenge. In this study, we propose Attention-Guided Image Captioning (AGIC), which amplifies salient visual regions directly in the feature space to guide caption generation. We further introduce a hybrid decoding strategy that combines deterministic and probabilistic sampling to balance fluency and diversity. To evaluate AGIC, we conduct extensive experiments on the Flickr8k and Flickr30k datasets. The results show that AGIC matches or surpasses several state-of-the-art models while achieving faster inference. Moreover, AGIC demonstrates strong performance across multiple evaluation metrics, offering a scalable and interpretable solution for image captioning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Abstract;