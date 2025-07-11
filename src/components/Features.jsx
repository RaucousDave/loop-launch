import { Sparkles, Brain, Activity } from "lucide-react";

export default function WhyLoopAI() {
  const features = [
    {
      icon: <Sparkles size={28} />,
      title: "AI-Powered Captions",
      description:
        "No more creative blocks. Generate culturally relevant, scroll-stopping captions in seconds — tailored to your tone and niche.",
    },
    {
      icon: <Brain size={28} />,
      title: "Trend-Aware Content Ideas",
      description:
        "Get content suggestions based on what’s hot in your region and industry. Stay 10 steps ahead of the algorithm, every single time.",
    },
    {
      icon: <Activity size={28} />,
      title: "Voice-Matching Personalization",
      description:
        "Your voice, your vibe. Loop.AI learns how you speak so your content always sounds authentically you — not some generic AI bot.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-9500 to-violet-950 text-slate-300 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Loop.AI?</h2>
        <p className="text-lg text-slate-100 mb-12 max-w-2xl mx-auto">
          Built with the African creator in mind, Loop.AI helps you move faster,
          stay relevant, and create without burnout.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {features.map((item, i) => (
            <li
              key={i}
              className="relative bg-white/10 rounded-xl shadow-lg p-6 pt-16 text-left font-medium hover:shadow-xl transition"
            >
              {/* Floating Icon */}
              <div className="absolute -top-6 left-6 bg-pink-500 text-white p-3 rounded-full shadow-md animate-bounce-slow">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-300">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
