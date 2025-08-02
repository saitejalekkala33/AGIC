import React from 'react';

const Method = () => {
  return (
    <section className="py-20 bg-background relative">
      <div className="w-full px-8 max-w-8xl mx-auto relative z-10 bg-background/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-border/20">
        <h2 className="font-serif text-4xl md:text-6xl font-bold mb-12 text-center text-foreground">
          Method
        </h2>

        <div className="prose prose-lg max-w-none mx-auto text-justify font-['Times_New_Roman'] text-2xl tracking-wide">
          <p className="text-foreground/90 leading-relaxed mb-8">
          In the AGIC framework, input images are processed by a pre-trained vision transformer to extract attention weights that highlight semantically relevant regions. Let X<sup>l−1</sup> ∈ ℝ<sup>N × d</sup> denote the patch embeddings at layer l−1. The attention matrix A<sup>l,h</sup> at layer l and head h is computed using the query and key projection matrices W<sub>Q</sub><sup>l,h</sup> and W<sub>K</sub><sup>l,h</sup>, with d<sub>h</sub> as the head dimension. Attention weights a<sub>i</sub><sup>l</sup> are then aggregated across all heads at layer l to capture comprehensive contextual relevance.
          </p>

          <p className="flex gap-4 justify-center items-center text-base lg:text-lg mb-8">
            <span className="w-1/2 text-center">
              A<sup>l,h</sup> = softmax(
              <span className="inline-block align-middle">
                (
                (X<sup>l−1</sup>W<sub>Q</sub><sup>l,h</sup>)(X<sup>l−1</sup>W<sub>K</sub><sup>l,h</sup>)<sup>T</sup>
                / √d<sub>h</sub>
                )
              </span>
              )
            </span>
            <span className="w-1/2 text-center">
              a<sub>i</sub><sup>l</sup> = (1 / H) ∑<sub>h=1</sub><sup>H</sup> A<sub>i</sub><sup>l,h</sup>
            </span>
          </p>

          <p className="text-foreground/90 leading-relaxed mb-8">
            To highlight important image features, we amplify the original image using attention weights with a factor <i>k</i>, where each pixel I<sub>a</sub>(i,j) is computed by multiplying the original value I<sub>o</sub>(i,j) with attention weight a(i,j). The amplified image I<sub>a</sub> is then passed into the captioning model for focused descriptions. To enhance diversity and fluency in caption generation, we use a hybrid decoding strategy combining beam search with Top-k, Top-p sampling, and temperature scaling. Tokens are sampled from a temperature-scaled softmax and filtered via Top-k and Top-p independently within each of the B beams, enabling the model to generate detailed and contextually rich captions.
          </p>

          <p className="flex gap-4 justify-center items-center text-base lg:text-lg mb-8">
            <span className="w-1/2 text-center">
              I<sub>a</sub>(i,j) = I<sub>o</sub>(i,j) · (1 + k · a(i,j))
            </span>
            <span className="w-1/2 text-center">
              x<sub>t</sub> ~ Top-p(Top-k(Softmax(z<sub>t</sub> / T)))
            </span>
          </p>

          {/* <pre className="overflow-x-auto text-sm mb-8">
            <code>
              I<sub>a</sub>(i,j) = I<sub>o</sub>(i,j) · (1 + k · a(i,j))
            </code>
          </pre>
          <pre className="overflow-x-auto text-sm mb-8">
            <code>
              x<sub>t</sub> ~ Top-p(Top-k(Softmax(z<sub>t</sub> / T)))
            </code>
          </pre> */}

          {/* <p className="text-foreground/90 leading-relaxed mb-8">
            Decoding is performed within each of the B beams, selecting the best caption across beams to ensure fluency and diversity.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Method;
