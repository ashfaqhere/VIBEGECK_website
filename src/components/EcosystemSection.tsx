import React from 'react';

export const EcosystemSection: React.FC = () => {
  return (
    <section id="ecosystem" className="py-16 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-3">
            GECK's Startup Launchpad
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            VIBE Ecosystem
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed">
            <strong className="text-primary font-bold">Venture for Innovation, Business and Entrepreneurship (VIBE)</strong> is GECK's ultimate startup launchpad, turning your boldest ideas into market-ready ventures through grants, mentorship, and incubation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                Partnered with KSUM
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">IEDC</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The grassroots launchpad for hackathons, bootcamps, ideation grants, and building your first MVP.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-primary">
              <span>Stage 01</span>
              <span>Ideate &amp; Prototype</span>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                MoE Innovation Cell
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">IIC</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The strategic wing driving national challenges, design-thinking workshops, and IP/patent guidance.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-primary">
              <span>Stage 02</span>
              <span>Validate &amp; Protect</span>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                Official Incubation Engine
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">TBI</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Providing co-working space, legal support, executive mentorship, and direct access to seed funding.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-primary">
              <span>Stage 03</span>
              <span>Incubate &amp; Scale</span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 text-white shadow-xl">
          <h3 className="text-xs font-bold uppercase tracking-widest text-primary text-center mb-6">
            The VIBE Startup Pipeline
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="flex-1 p-4 rounded-2xl bg-white/5 border border-white/10 w-full">
              <div className="text-xs text-primary font-bold uppercase tracking-wider mb-1">Step 1 • IEDC</div>
              <div className="text-base font-bold text-white">Ideate &amp; Prototype</div>
            </div>

            <div className="text-primary font-bold text-xl rotate-90 md:rotate-0">→</div>

            <div className="flex-1 p-4 rounded-2xl bg-white/5 border border-white/10 w-full">
              <div className="text-xs text-primary font-bold uppercase tracking-wider mb-1">Step 2 • IIC</div>
              <div className="text-base font-bold text-white">Validate &amp; Protect</div>
            </div>

            <div className="text-primary font-bold text-xl rotate-90 md:rotate-0">→</div>

            <div className="flex-1 p-4 rounded-2xl bg-white/5 border border-white/10 w-full">
              <div className="text-xs text-primary font-bold uppercase tracking-wider mb-1">Step 3 • TBI</div>
              <div className="text-base font-bold text-white">Incubate &amp; Scale</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
