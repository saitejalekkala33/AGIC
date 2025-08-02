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
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main Title */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 leading-tight">
          <span className="text-cognac font-bold">AGIC</span>:
          <span className="text-foreground/80 text-3.5xl md:text-5xl lg:text-6xl">
            Attention-Guided Image Captioning to Improve Caption Relevance
          </span>
        </h1>
        
        {/* Authors */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg">
            <span className="text-academic-blue hover:text-cognac transition-colors cursor-pointer">
              L D M S Sai Teja<sup className="text-sm">1</sup>
            </span>
            <span className="text-academic-blue hover:text-cognac transition-colors cursor-pointer">
              Ashok Urlana <sup className="text-sm">2,3</sup>
            </span>
            <span className="text-academic-blue hover:text-cognac transition-colors cursor-pointer">
              Pruthwik Mishra<sup className="text-sm">4</sup>
            </span>
          </div>

          {/* Affiliations */}
          <div className="text-sm text-academic-gray space-y-1 mt-6">
            <div><sup>1</sup> NIT Silchar • <sup>2</sup> TCS Research</div>
            <div><sup>3</sup> IIIT Hyderabad • <sup>4</sup> SVNIT, Surat</div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button variant="default" size="lg" className="bg-primary hover:bg-cognac-dark transition-all duration-300 shadow-lg">
            <FileText className="mr-2 h-5 w-5" />
            Paper
          </Button>
          <Button variant="outline" size="lg" className="border-academic-blue text-academic-blue hover:bg-academic-blue hover:text-white transition-all duration-300">
            <Github className="mr-2 h-5 w-5" />
            Code
          </Button>
          {/* <Button variant="outline" size="lg" className="border-cognac text-cognac hover:bg-cognac hover:text-white transition-all duration-300">
            <Image className="mr-2 h-5 w-5" />
            Poster
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;