export function Portfolio() {
  return (
    <section className="py-section-gap max-w-[1280px] mx-auto px-container-padding">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div>
          <h2 className="font-headline-lg text-headline-lg mb-4 text-on-surface">
            Latest Projects
          </h2>
          <p className="text-on-surface font-medium">
            Helping creators dominate every platform.
          </p>
        </div>
        <div className="flex bg-surface-container rounded-full p-1 border-2 border-on-surface/20">
          <button className="px-6 py-2 rounded-full text-label-sm font-label-sm bg-primary text-on-primary font-bold transition-all">
            ALL
          </button>
          <button className="px-6 py-2 rounded-full text-label-sm font-label-sm text-on-surface hover:bg-on-surface/10 transition-all font-bold">
            SHORTS
          </button>
          <button className="px-6 py-2 rounded-full text-label-sm font-label-sm text-on-surface hover:bg-on-surface/10 transition-all font-bold">
            FULL EPISODES
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-grid-gutter">
        <div className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-xl aspect-video bg-surface-container border-2 border-on-surface/10 mb-4">
            <img
              alt="The Business Lab"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6pqFVNRccG5No-3OFGLqEDVkHHIpJInvegkrpURpZb1t7iozj14xO8U1fwb1i_X3k87HlTTOtZEFhR5RpEXyUawjahC5pjp0509G5BPB7UZIX9xnBOabyEH2shuygx6JHR87zSPsYCGErUI0YDkapEuQu52_rZNefLX9Qk-Ant3W4IHD17JGNR5efPbYh5ym3IvaQdJ9RKvcLMFaZMXFDZpRpXjA6c5Mk8oYRuky7Zk7HIoZ7KCR-5U31U5iR-VUr3vKhxhGSNjY"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                <span
                  className="material-symbols-outlined text-on-primary text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-headline-md text-xl mb-1 text-on-surface">
                The Business Lab
              </h3>
              <p className="text-on-surface text-sm font-medium">
                Full Episode Production
              </p>
            </div>
            <div className="text-on-primary font-bold text-sm bg-primary px-3 py-1 rounded">
              1.2M VIEWS
            </div>
          </div>
        </div>
        <div className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-xl aspect-video bg-surface-container border-2 border-on-surface/10 mb-4">
            <img
              alt="Founders Series"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVzfX7htPWE4os00k88q6uSnheWM_Nc2frGqh8XQI-RqbMR9Wy_5QV7rlMRRznMYz94dTGBk-_CzDXajGX2Oqnvq06viIk_1dVd8ieVv2OXXqZ-OdpJCEEilLL2x7gHqom5YKroPhmv-FK_YJkUHv3ZztYh3f6r_JvXaMGbV_9N3WftSqqhYrCLOY5aCBjNcT_lLgaFOsFjdmVfdTdS3ukY5-KDcIH9BWlV_JUdQh8JfBovyHCHRo_WBfmU6wjp6leM9EsGV8CZqY"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                <span
                  className="material-symbols-outlined text-on-primary text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-headline-md text-xl mb-1 text-on-surface">
                Founders Series
              </h3>
              <p className="text-on-surface text-sm font-medium">
                Vertical Shorts Strategy
              </p>
            </div>
            <div className="text-on-primary font-bold text-sm bg-primary px-3 py-1 rounded">
              850K VIEWS
            </div>
          </div>
        </div>
        <div className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-xl aspect-video bg-surface-container border-2 border-on-surface/10 mb-4">
            <img
              alt="Creative Minds"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN_tN4D2w2lBdYzwjtadNmVylFrOR9_b5mckuintnzD45FyB3mmR3AlSNkA20diz_CaG2x5xbuDfT9caIDh5k7i3v-2QzRukvkiI-EFFyYYS8L0WJA8N6u1zt5TOuUvgVGf6RRoLamCyhh0IRVMYhVliOfWJQK5X1OMW6DiPKNoAXf5W-5cP4-71-FjFRmWpbjDSuqFxGVjIwmGWlqXPv8O-W2T50vJkOBhlQfGowWoiMnT2bcj3_uCOA_0Sp12DBNJ1kYTAv0z7U"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                <span
                  className="material-symbols-outlined text-on-primary text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-headline-md text-xl mb-1 text-on-surface">
                Creative Minds
              </h3>
              <p className="text-on-surface text-sm font-medium">
                Hybrid Production
              </p>
            </div>
            <div className="text-on-primary font-bold text-sm bg-primary px-3 py-1 rounded">
              2.4M VIEWS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
