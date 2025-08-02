import React, { useState, useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import Abstract from "@/components/Abstract";
import Method from "@/components/Method";
import ErrorAnalysis from "@/components/ErrorAnalysis";
import Citation from "@/components/Citation";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, Menu, X } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: "hero", component: <Hero /> },
    { id: "abstract", component: <Abstract /> },
    { id: "method", component: <Method /> },
    { id: "error-analysis", component: <ErrorAnalysis /> },
    { id: "citation", component: <Citation /> },
  ];

  useEffect(() => {
    setShowUpArrow(currentSection > 0);
    setShowDownArrow(currentSection < sections.length - 1);
  }, [currentSection, sections.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex((s) => s.id === entry.target.id);
            if (index !== -1 && index !== currentSection) {
              setCurrentSection(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    const sectionElements = document.querySelectorAll("[id]");
    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (sectionIndex: number) => {
    const targetY = sectionIndex * window.innerHeight;
    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  const scrollUp = () => {
    const newSection = Math.max(0, currentSection - 1);
    scrollToSection(newSection);
  };

  const scrollDown = () => {
    const newSection = Math.min(sections.length - 1, currentSection + 1);
    scrollToSection(newSection);
  };

  return (
    <div className="relative">
      <div className="fixed top-4 right-4 z-50" ref={menuRef}>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-white/90 backdrop-blur-sm border-gray-300 hover:bg-white shadow-lg"
        >
          {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>

        {isMenuOpen && (
          <div className="absolute top-12 right-0 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-xl p-2 min-w-[200px]">
            <div className="space-y-1">
              <button
                onClick={() => scrollToSection(0)}
                className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded-md transition-colors"
              >
                Hero
              </button>
              <button
                onClick={() => scrollToSection(1)}
                className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded-md transition-colors"
              >
                Abstract
              </button>
              <button
                onClick={() => scrollToSection(2)}
                className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded-md transition-colors"
              >
                Method
              </button>
              <button
                onClick={() => scrollToSection(3)}
                className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded-md transition-colors"
              >
                Error Analysis
              </button>
              <button
                onClick={() => scrollToSection(4)}
                className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded-md transition-colors"
              >
                Citation
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-4 right-4 z-50 space-y-2">
        {showUpArrow && (
          <Button
            variant="outline"
            size="sm"
            onClick={scrollUp}
            className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-gray-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 shadow-lg transition-all duration-200"
          >
            ↑
          </Button>
        )}
        {showDownArrow && (
          <Button
            variant="outline"
            size="sm"
            onClick={scrollDown}
            className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-gray-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 shadow-lg transition-all duration-200"
          >
            ↓
          </Button>
        )}
      </div>

      <div ref={sectionsRef}>
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="min-h-screen">
            {section.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
