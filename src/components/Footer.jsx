export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div>
          <img
            src="/logos/logo-3.png"
            alt="Loop.AI Logo"
            className="w-10 mb-4"
          />
          <p className="text-white/70 text-sm">
            Loop.AI is a creative tool built for African content creators.
            Smarter workflows, better reach, less burnout.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#whyloopai" className="hover:text-white">
                Why Loop.AI
              </a>
            </li>
            <li>
              <a href="#register" className="hover:text-white">
                Register
              </a>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>
              <a href="mailto:hello@loop.africa" className="hover:text-white">
                hello@loop.africa
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-white/50">
        &copy; {new Date().getFullYear()} Loop.AI. All rights reserved.
      </div>
    </footer>
  );
}
