import React from "react";
import { FaMicrochip, FaRobot, FaImage } from "react-icons/fa6";

const AboutAIModels = () => {
  return (
    <section className="w-11/12 mx-auto py-16">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-4xl font-bold not-dark:text-primary dark:text-secondary">
          About AI Models
        </h2>
        <p className="text-base mt-4 text-gray-600 dark:text-gray-300">
          AI models learn patterns from data and enable systems to perform tasks
          like language understanding, image recognition, and smart
          decision-making used in real-world applications.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl dark:bg-base-300 not-dark:bg-base-200 shadow hover:shadow-lg transition">
          <FaMicrochip className="w-12 h-12 not-dark:text-primary dark:text-secondary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Neural Networks</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Inspired by the human brain, neural networks learn from data and
            improve accuracy for tasks like speech and handwriting recognition.
          </p>
        </div>

        <div className="p-6 rounded-xl dark:bg-base-300 not-dark:bg-base-200 shadow hover:shadow-lg transition">
          <FaRobot className="w-12 h-12 not-dark:text-primary dark:text-secondary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Chatbots & Assistants</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Models like GPT build assistants that understand natural language
            and communicate meaningfully.
          </p>
        </div>

        <div className="p-6 rounded-xl dark:bg-base-300 not-dark:bg-base-200 shadow hover:shadow-lg transition">
          <FaImage className="w-12 h-12 not-dark:text-primary dark:text-secondary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Image Recognition</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            AI helps detect objects, faces, and scenes — used in cameras,
            medical imaging, and smart city surveillance systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutAIModels;
