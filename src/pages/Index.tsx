import Hero from "@/components/Hero";
import Abstract from "@/components/Abstract";
import ProblemSetting from "@/components/ProblemSetting";
import ResearchImages from "@/components/ResearchImages";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Abstract />
      <ProblemSetting />
      <ResearchImages />
    </div>
  );
};

export default Index;