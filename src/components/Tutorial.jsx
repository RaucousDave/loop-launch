export default function Tutorial() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-violet-950 to-slate-950 text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">How It Works</h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12">
          Loop.AI fits seamlessly into your content workflow. You bring the
          creativity, we bring the AI magic.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md shadow">
            <h3 className="text-xl font-semibold mb-2">
              Step 1: Describe Your Idea
            </h3>
            <p className="text-white/80 text-sm">
              Tell Loop.AI what you're trying to create — a post, a caption, a
              vibe, or just a random idea in your head.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md shadow">
            <h3 className="text-xl font-semibold mb-2">
              Step 2: Loop Generates For You
            </h3>
            <p className="text-white/80 text-sm">
              The AI instantly gives you context-aware suggestions: captions,
              hashtags, punchlines, or hooks that work.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md shadow">
            <h3 className="text-xl font-semibold mb-2">Step 3: Edit & Post</h3>
            <p className="text-white/80 text-sm">
              You make it yours. Add your voice. Hit post. Go viral. Or at least
              look like you tried really hard 😎.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
