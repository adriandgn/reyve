import React from "react";

const DetailsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The Future of Robotics is Here
          </h2>
          <p className="text-lg text-gray-600">
            Our humanoid robot combines advanced AI, precision engineering, and human-centric design to deliver unparalleled performance and adaptability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Intelligent Perception</h3>
            <p className="text-gray-700">
              Equipped with state-of-the-art sensors and vision systems, our robot perceives and interacts with its environment in real-time.
            </p>
          </div>
          <div className="bg-indigo-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">Human-Like Dexterity</h3>
            <p className="text-gray-700">
              Advanced actuators and control algorithms enable precise, fluid movements and manipulation of objects.
            </p>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Adaptive Intelligence</h3>
            <p className="text-gray-700">
              Machine learning and adaptive behaviors allow the robot to learn from experience and continuously improve its capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;

