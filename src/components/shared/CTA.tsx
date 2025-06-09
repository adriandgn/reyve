import React, { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={ctaRef}
      className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 animate-on-scroll opacity-0"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0 md:w-2/3">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to experience the next generation of humanoid robotics?
          </h2>
          <p className="text-lg text-blue-100">
            Be among the first to explore the capabilities of our cutting-edge humanoid robot. Request early access or join our waitlist today.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 md:w-1/3 justify-end">
          <a href="#contact" className="button-primary group flex items-center justify-center w-full sm:w-auto">
            Request Early Access
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#" className="button-secondary w-full sm:w-auto text-center">
            Join Waitlist
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;

