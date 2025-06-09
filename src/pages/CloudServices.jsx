import { useState } from "react";

// Cloud provider options
const cloudOptions = [
  {
    value: "aws",
    name: "AWS",
    advantages: [
      "Largest global presence",
      "Widest range of services",
      "Strong security and compliance",
      "Mature ecosystem",
    ],
    disadvantages: [
      "Complex pricing",
      "Steep learning curve",
      "Some services can be overwhelming",
    ],
    bestFor: [
      "Large enterprises",
      "Startups needing scalability",
      "Global deployments",
    ],
  },
  {
    value: "azure",
    name: "Azure",
    advantages: [
      "Seamless integration with Microsoft products",
      "Strong hybrid cloud capabilities",
      "Good enterprise support",
    ],
    disadvantages: [
      "Can be complex for beginners",
      "Some services less mature than AWS",
    ],
    bestFor: [
      "Organizations using Microsoft stack",
      "Hybrid cloud solutions",
      "Enterprises",
    ],
  },
  {
    value: "gcp",
    name: "Google Cloud",
    advantages: [
      "Excellent data analytics and machine learning",
      "Simple pricing",
      "Strong Kubernetes and container support",
    ],
    disadvantages: [
      "Smaller service catalog",
      "Less global reach than AWS/Azure",
    ],
    bestFor: [
      "Data-driven projects",
      "Startups",
      "Machine learning and analytics",
    ],
  },
];

// Suggestions for use cases
const suggestionMap = {
  library:
    "Google Cloud is great for scalable, data-driven library management systems.",
  uims: "Azure is ideal for University Information Management Systems, especially if you use Microsoft products.",
  erp: "AWS is best for large-scale ERP deployments needing high scalability.",
};

const CloudServices = () => {
  const [selected, setSelected] = useState("aws");
  const [useCase, setUseCase] = useState("");

  const selectedCloud = cloudOptions.find((opt) => opt.value === selected);

  // Determine suggestion based on useCase
  let suggestion = "";
  if (useCase) {
    if (useCase.toLowerCase().includes("library")) {
      suggestion = suggestionMap.library;
    } else if (useCase.toLowerCase().includes("uims")) {
      suggestion = suggestionMap.uims;
    } else if (useCase.toLowerCase().includes("erp")) {
      suggestion = suggestionMap.erp;
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-black min-h-screen text-white">
      {/* Modern Navbar */}
      <nav className="bg-gray-900 p-5 mb-10 rounded-lg flex items-center">
        <a
          href="/"
          className="text-white text-2xl font-bold no-underline tracking-wide"
        >
          Home
        </a>
      </nav>

      <h1 className="text-4xl mb-4 font-bold">Choose Your Cloud Service</h1>
      <p className="text-xl mb-8">
        Select a cloud provider to see its advantages, disadvantages, and when
        you should choose it.
      </p>
      <div className="flex gap-6 mb-8">
        {cloudOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setSelected(opt.value)}
            className={`px-9 py-4 text-xl rounded-lg font-semibold transition-all border-2 ${
              selected === opt.value
                ? "border-blue-500 bg-gray-800 text-blue-400"
                : "border-gray-600 bg-gray-900 text-white"
            }`}
          >
            {opt.name}
          </button>
        ))}
      </div>
      <div className="bg-gray-900 text-white p-9 rounded-xl min-h-[320px] text-lg shadow-lg">
        {selectedCloud ? (
          <>
            <h2 className="text-2xl font-bold">{selectedCloud.name}</h2>
            <h3 className="text-xl mt-6 font-semibold">Advantages</h3>
            <ul className="list-disc ml-6">
              {selectedCloud.advantages.map((adv, i) => (
                <li key={i}>{adv}</li>
              ))}
            </ul>
            <h3 className="text-xl mt-5 font-semibold">Disadvantages</h3>
            <ul className="list-disc ml-6">
              {selectedCloud.disadvantages.map((dis, i) => (
                <li key={i}>{dis}</li>
              ))}
            </ul>
            <h3 className="text-xl mt-5 font-semibold">Best For</h3>
            <ul className="list-disc ml-6">
              {selectedCloud.bestFor.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </>
        ) : (
          <p>No cloud selected.</p>
        )}
      </div>

      {/* Use case suggestion input */}
      <div className="mt-10 bg-gray-800 p-7 rounded-lg">
        <h2 className="text-2xl font-bold">
          Get a Suggestion for Your Use Case
        </h2>
        <input
          type="text"
          placeholder="e.g. Library Management, UIMS Management, ERP Management"
          value={useCase}
          onChange={(e) => setUseCase(e.target.value)}
          className="w-full p-4 text-lg rounded-md border-2 border-blue-500 mt-4 mb-4 bg-gray-900 text-white placeholder-gray-400"
        />
        {suggestion && (
          <div className="bg-blue-900 p-4 rounded-md text-lg text-blue-300 font-bold">
            {suggestion}
          </div>
        )}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold">Which Cloud Should You Choose?</h2>
        <ul className="text-lg list-disc ml-6 mt-2">
          <li>
            <b>AWS</b>: Best for large-scale, global, and highly scalable
            projects, or if you need the widest range of services.
          </li>
          <li>
            <b>Azure</b>: Ideal if your organization already uses Microsoft
            products or needs hybrid cloud solutions.
          </li>
          <li>
            <b>Google Cloud</b>: Great for data analytics, machine learning, or
            if you prefer simple pricing and strong container support.
          </li>
        </ul>
        <p className="text-base mt-3 text-gray-300">
          Consider your team's expertise, existing infrastructure, and project
          requirements before choosing a provider.
        </p>
      </div>
    </div>
  );
};

export default CloudServices;
