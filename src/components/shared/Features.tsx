import React from "react";
import { Sparkles, Workflow, Infinity as InfinityIcon, Zap } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-blue-600 mb-2" />,
    title: "AI-Powered Intelligence",
    description:
      "Advanced machine learning algorithms enable real-time perception, adaptation, and decision-making.",
  },
  {
    icon: <Workflow className="w-8 h-8 text-indigo-600 mb-2" />,
    title: "Human-Like Dexterity",
    description:
      "Precision actuators and control systems provide fluid, lifelike movement and object manipulation.",
  },
  {
    icon: <InfinityIcon className="w-8 h-8 text-purple-600 mb-2" />,
    title: "Endless Adaptability",
    description:
      "Modular design and adaptive behaviors allow seamless integration into diverse environments.",
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-500 mb-2" />,
    title: "Energy Efficiency",
    description:
      "Optimized power management ensures extended operation and minimal downtime.",
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-lg text-gray-600">
            Discover the groundbreaking capabilities that set our humanoid robot apart from the rest.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

