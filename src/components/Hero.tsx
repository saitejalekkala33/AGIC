import { Button } from "@/components/ui/button";
import { FileText, Github, Image } from "lucide-react";
import heroImage from "@/assets/research-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Research visualization" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      </div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 text-center bg-background/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-border/30 p-16">
        {/* Main Title */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold mb-8 leading-tight">
          <span className="text-blue-600 font-bold">AGIC</span>:
          <span className="text-slate-800 text-3xl md:text-5xl lg:text-6xl">
            Attention-Guided Image Captioning to Improve Caption Relevance
          </span>
        </h1>
        
        {/* Authors */}
        <div className="mb-8 space-y-4">
                     <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg">
             <span className="text-indigo-700 hover:text-blue-600 transition-colors cursor-pointer bg-white/70 px-3 py-1 rounded-lg backdrop-blur-sm shadow-sm">
               L D M S Sai Teja<sup className="text-sm">1</sup>
             </span>
             <a 
               href="https://ashokurlana.github.io/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-indigo-700 hover:text-blue-600 transition-colors cursor-pointer bg-white/70 px-3 py-1 rounded-lg backdrop-blur-sm shadow-sm hover:shadow-md"
             >
               Ashok Urlana <sup className="text-sm">2,3</sup>
             </a>
             <a 
               href="https://pruthwik.github.io/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-indigo-700 hover:text-blue-600 transition-colors cursor-pointer bg-white/70 px-3 py-1 rounded-lg backdrop-blur-sm shadow-sm hover:shadow-md"
             >
               Pruthwik Mishra<sup className="text-sm">4</sup>
             </a>
           </div>

                     {/* Affiliations */}
           <div className="text-sm text-slate-700 space-y-1 mt-6 bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-sm">
             <div><sup>1</sup> NIT Silchar • <sup>2</sup> TCS Research • <sup>3</sup> IIIT Hyderabad • <sup>4</sup> SVNIT, Surat </div>
           </div>
        </div>
        
                 {/* Action Buttons */}
         <div className="flex flex-wrap justify-center gap-4 mb-12">
           <Button variant="outline" size="lg" className="border-indigo-600 text-indigo-700 hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-xl backdrop-blur-sm bg-white/80">
             <FileText className="mr-2 h-5 w-5" />
             Paper
           </Button>
           <Button variant="outline" size="lg" className="border-indigo-600 text-indigo-700 hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-xl backdrop-blur-sm bg-white/80">
             <Github className="mr-2 h-5 w-5" />
             Code
           </Button>
          {/* <Button variant="outline" size="lg" className="border-agic text-agic hover:bg-agic hover:text-white transition-all duration-300">
            <Image className="mr-2 h-5 w-5" />
            Poster
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;