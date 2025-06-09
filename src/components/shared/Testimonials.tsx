import React from "react";

const testimonials = [
  {
    quote: "This humanoid robot is a game changer! The AI and lifelike movement are incredible.",
    name: "Jane Doe",
    title: "Robotics Engineer",
  },
  {
    quote: "I've never seen anything like it. Truly feels like the future is here!",
    name: "John Smith",
    title: "Tech Enthusiast",
  },
  {
    quote: "The adaptability and learning capabilities are unmatched. Highly recommend!",
    name: "Emily Chen",
    title: "AI Researcher",
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What People Are Saying</h2>
          <p className="text-gray-600">
            Hear from some of the first to experience our next-generation humanoid robot.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-6 shadow-md">
              <blockquote className="text-lg text-gray-800 mb-4">“{testimonial.quote}”</blockquote>
              <div className="font-semibold text-blue-700">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

