import { useState } from "react";

export default function Home() {
  type SectionKey = "about" | "programs" | "involved" | "lens" | "stories";

  const [openSections, setOpenSections] = useState<Record<SectionKey, boolean>>(
    {
      about: false,
      programs: false,
      involved: false,
      lens: false,
      stories: false,
    }
  );

  const toggleSection = (section: SectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="overflow-x-hidden w-full">
      {/* Top Banner Image */}
      <div>
        <img src="/bino.png" alt="" className="w-full object-cover" />
      </div>

      {/* --- HERO SECTION --- */}
      <section
        aria-label="Tyren feature section"
        className="w-full min-h-screen flex flex-col items-center justify-start py-10 md:py-20 px-4 md:px-12 lg:px-20"
        style={{
          backgroundColor: "#103926",
          backgroundImage:
            "url('/mnt/data/ec7f128e-d97c-4bb7-b45c-5a0b34f54e6c.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-4xl text-center text-cream w-full">
          {/* Hero stacked headline */}
          <div className="mx-auto w-full md:w-[658px] grid justify-center font-rhode">
            <div className="font-extrabold uppercase leading-none tracking-tight -mb-8 md:-mb-10 text-[55px] sm:text-[56px] md:text-[72px] lg:text-[96px]">
              WHEN YOUR
            </div>

            <div
              className="mt-4 font-extrabold uppercase leading-none tracking-tight 
              text-[60px] sm:text-[84px] md:text-[110px] lg:text-[140px]
              flex flex-col items-center justify-center text-center relative"
            >
              {/* Centered crown */}
              <img
                src="/firecrown.png"
                className="w-[120px] md:w-[211px] h-auto md:h-[131px] z-10"
                alt="crown"
              />

              <div className="-mt-2 md:-mt-3 text-[55px] md:text-[72px] lg:text-[96px]">
                MIND
              </div>

              <div className="-mt-2 md:-mt-4 text-[55px] md:text-[80px] lg:text-[103px]">
                CATCHES FIRE
              </div>

              <div className="-mt-2 md:-mt-4 text-[55px] sm:text-[40px] md:text-[72px] lg:text-[96px] text-green-200">
                NATIONS ARE
              </div>

              <div className="-mt-2 md:-mt-3 text-[55px] sm:text-[40px] md:text-[72px] lg:text-[96px] flex flex-col md:flex-row items-center text-green-200">
                REBORN
                <img
                  src="/rednigeria.png"
                  className="-mt-18 -mr-44 md:-ml-5 md:-mt-7 w-[100px] md:w-[173px] h-auto"
                  alt="Nigeria map"
                />
              </div>
            </div>

            {/* short paragraph */}
            <p className="mt-8 md:mt-10 text-sm md:text-base font-futura leading-relaxed text-cream/90 max-w-2xl mx-auto px-4">
              We are the generation that coded apps before we could vote. We made{" "}
              <br className="hidden md:block" /> Afrobeats shake the world while
              our voices trembled in policy rooms. We{" "}
              <br className="hidden md:block" /> built unicorns in Silicon
              Valley but couldn’t fix the potholes on our streets.
              <span className="block font-extrabold mt-2">Enough. </span>
            </p>
          </div>

          {/* Spacer */}
          <div className="h-16 md:h-32" />

          {/* Second headline */}
          <div className="font-rhode min-h-[50vh] md:min-h-screen py-10 md:py-28">
            <div className="font-extrabold uppercase leading-none tracking-tight text-[48px] pb-2 sm:text-[56px] md:text-[72px] lg:text-[96px]">
              <div>FROM</div>
            </div>

            <div className="-mt-4 md:-mt-8 font-extrabold uppercase leading-none text-[48px] sm:text-[56px] md:text-[72px] lg:text-[96px]">
              <div className="flex flex-col items-center -space-y-6 md:space-y-5 w-full">
                {/* Item 1 */}
                <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
                  <span>THOUGHT</span>
                  <span className="text-red-500 text-6xl md:text-[118px] leading-none">
                    ›››
                  </span>
                  <span>THUNDER</span>
                </div>

                {/* Item 2 */}
                <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mt-2 md:-mt-14">
                  <span>SILENCE</span>
                  <span className="text-red-500 text-6xl md:text-[118px] leading-none">
                    ›››
                  </span>
                  <span>SYMPHONY</span>
                </div>

                {/* Item 3 */}
                <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mt-2 md:-mt-14">
                  <span>RAGE</span>
                  <span className="text-red-500 text-6xl md:text-[118px] leading-none">
                    ›››
                  </span>
                  <span>RENAISSANCE</span>
                </div>

                <div className="text-[#E2AAA] flex flex-wrap items-center justify-center mt-3 md:-mt-11 gap-1 md:gap-2 text-[50px] md:text-[118px]">
                  <span>TYREN IS B</span>
                  <div className="flex items-center justify-center">
                    <img
                      src="/logo2.png"
                      alt="icon"
                      className="w-[0.8em] h-[0.8em] object-contain"
                    />
                  </div>
                  <span>RN</span>
                </div>
              </div>
            </div>

            {/* bottom paragraph */}
            <p className="mt-8 font-futura text-sm md:text-base leading-relaxed text-cream/90 max-w-xl mx-auto px-4">
              Nigeria’s youth don’t need another empowerment speech. <br /> We
              need intellectual insurrection. We need civic sorcery. <br />
              We need to architect the audacious. <br /> This is TYREN. This is
              us. This is now.
            </p>
          </div>
        </div>
      </section>

      {/* --- AWAKENING SECTION --- */}
      <img src="/peeps.png" alt="" className="w-full object-cover" />
      <section
        aria-label="Awakening section"
        className="w-full min-h-screen flex flex-col items-center justify-start text-center px-4 md:px-6 py-20 md:py-24"
        style={{ backgroundColor: "#0f3b29" }}
      >
        {/* Top label */}
        <p className="text-sm md:text-[21px] tracking-widest text-green-200/70 mb-6 md:mb-10">
          THIS IS THE AWAKENING
        </p>

        {/* Main headline - FIXED SPACING HERE */}
        <div className="font-extrabold uppercase font-rhode text-cream flex flex-col items-center">
          <div className="text-[40px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-none z-20 relative">
            WE ARE
          </div>

          <div className="text-green-200 z-10 text-[40px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-none -mt-2 md:-mt-6">
            120,000,000
          </div>

          <div className="text-[36px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-none -mt-2 md:-mt-6 z-20 relative">
            DREAMS DEFERRED
          </div>
        </div>

        {/* Center illustration */}
        <div className="-mt-4 md:-mt-12 w-full max-w-[527px] relative z-20">
          <img
            src="blacksred.png"
            alt="Tyren illustration"
            className="w-full h-auto mx-auto"
          />
        </div>

        {/* Bottom headline */}
        <div className="mt-6 md:mt-10 font-rhode font-extrabold uppercase leading-none text-cream">
          <div className="-mt-2 md:-mt-8 text-[40px] sm:text-[64px] md:text-[80px] lg:text-[96px]">
            BUT WE ARE
          </div>
          <div className="text-[40px] sm:text-[64px] md:text-[80px] lg:text-[96px]">
            DONE WAITING.
          </div>
        </div>

        {/* Paragraph */}
        <p className="mt-8 md:mt-10 text-cream/80 font-futura max-w-2xl text-sm md:text-base leading-relaxed px-2">
          They said we were too young to lead. We built fintech that moved
          billions.
          <br className="hidden md:block" />
          They said we didn’t understand governance. We organized protests that
          shook the world.
          <br className="hidden md:block" />
          They said we were uncultured. We gave the world Afrobeats, Nollywood,
          <br className="hidden md:block" />
          and art that breaks records.
        </p>
      </section>

      {/* --- THE OTHER SIDE (BEIGE) --- */}
      <section className="min-h-screen bg-[#e8dcc8] flex items-center justify-center px-4 md:px-6 py-16">
        <div className="max-w-4xl w-full text-center flex flex-col items-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-rhode font-bold text-[#0d4d3a] mb-4 md:mb-8 leading-tight">
            BUT HERE'S
            <br />
            THE OTHER
            <br />
            SIDE
          </h1>

          {/* Hand Illustration */}
          <img
            src="/blackhand.png"
            alt=""
            className="w-62 md:w-auto mx-auto mr-5 md:ml-72 -mt-10 md:-mt-23 relative z-10"
          />

          {/* Body Text */}
          <div className="space-y-2 pt-6 md:pt-10 font-futura text-[#4a5c54] text-sm md:text-base lg:text-lg leading-relaxed px-2">
            <p>While we were being talented, we forgot to be thoughtful.</p>
            <p>While we built apps, we abandoned our civic consciousness.</p>
            <p>While we went viral, we lost our philosophical spine.</p>
            <p>
              The National Youth Policy whispers what we already know—we are
              <br className="hidden md:block" />
              "underutilised, underprepared, excluded." Big words for an obvious
              truth:
            </p>
            <p className="font-extrabold text-[#0d4d3a] text-lg md:text-2xl pt-2">
              Nigeria is wasting its most precious resource. Us.
            </p>
          </div>
        </div>
      </section>
      <img src="/peepsfloor.png" alt="" className="w-full object-cover" />

      {/* --- NOT ANYMORE (RED SECTION) --- */}
      <div className="min-h-screen bg-red-600 flex items-center justify-center px-4 md:px-6 py-16 relative">
        <div className="max-w-6xl w-full">
          {/* Top Images Row */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8 gap-8 md:gap-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop"
              alt="Youth collaboration"
              className="w-full md:w-48 h-48 md:h-32 object-cover rounded shadow-lg"
            />
            <div className="text-center flex-1 px-2 md:px-8">
              <h1 className="text-5xl md:text-8xl font-black text-[#0d4d3a] font-rhode leading-none">
                NOT
                <br />
                ANYMORE!
              </h1>
            </div>
            <img
              src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=300&h=200&fit=crop"
              alt="Nigerian youth"
              className="hidden md:block w-48 h-32 object-cover rounded shadow-lg"
            />
          </div>

          {/* Center Section with Hand and Lightning */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 md:gap-0">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop"
              alt="Team collaboration"
              className="hidden md:block w-48 h-32 object-cover rounded shadow-lg"
            />

            <img
              src="/handsmash.png"
              alt=""
              className="w-48 md:w-auto mx-auto"
            />

            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop"
              alt="Street scene"
              className="w-full md:w-48 h-48 md:h-32 object-cover rounded shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="text-center space-y-4 md:space-y-1 font-futura text-[#0d4d3a] text-sm md:text-lg font-medium max-w-3xl mx-auto px-2">
            <p className="font-bold text-lg md:text-xl">
              TYREN is what happens when Nigeria's brightest minds stop
              <br className="hidden md:block" />
              performing and start reforming.
            </p>
            <p>
              When creativity meets civic duty. When talent marries thought.
            </p>
            <p>This isn't activism. This is architecture.</p>
            <p>This isn't protest. This is philosophy in motion.</p>
            <p>
              This isn't a movement. This is a mental revolution with a business
              plan.
            </p>
          </div>
        </div>
      </div>

      {/* --- FIFTH REVOLUTION --- */}
      <div className="min-h-screen bg-[#1a4d3e] flex items-center justify-center px-4 md:px-6 py-12 md:py-0">
  <div className="max-w-4xl w-full text-center">
    {/* Header */}
    <p className="text-gray-400 text-xs md:text-sm tracking-widest mb-6 pt-0 md:pt-10">
      THE FIFTH REVOLUTION
    </p>

    {/* Main Headline */}
    <h1 className="text-4xl md:text-7xl font-black font-rhode text-white mb-8 md:mb-12 leading-tight md:leading-16">
      YOUR MIND IS THE
      <br />
      FINAL FRONTIER
    </h1>

    {/* Revolution List */}
    <div className="space-y-2 text-gray-300 font-futura text-sm md:text-lg mb-8">
      <p>Africa has had four revolutions in history</p>
      <p>Agrarian — We learned to feed ourselves</p>
      <p>Political — We learned to vote to choose our leaders</p>
      <p>Industrial — We learned to build and use machines</p>
      <p>Digital — We learned to code solutions</p>
      <p>
        Africa needs one more —{" "}
        <span className="text-red-500 font-bold">
          the Intellectual Revolution
        </span>
      </p>
    </div>

    {/* Head Illustration Container */}
    <div className="relative w-full max-w-md md:max-w-full mx-auto">
      {/* Image - Acts as the background frame */}
      <img src="/mangear.png" alt="" className="w-full h-auto object-contain" />

      {/* Text Overlay - Positioned absolutely 'inside' the image bounds */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:pt-40">
        <div className="space-y-1 md:space-y-2 text-[10px] sm:text-xs md:text-base text-white/90 font-medium leading-tight">
          <p>Because what good is a vote if our minds are still colonized?</p>
          <p>What good is a smooth app if our ethics are broken?</p>
          <p>What good is talent if our thoughts are shallow?</p>
          <p>We believe that talent without philosophy is great loss;</p>
          <p>culture without consciousness is just entertainment for the</p>
          <p>world and democracy without civic literacy is very dangerous.</p>
        </div>

        <div className="mt-3 md:mt-6 font-bold text-[11px] sm:text-sm md:text-lg text-white leading-tight">
          <p>
            Africa needs reformers and we are building the intellectual
            <br className="hidden md:block" /> operating system. TYREN is the
            Fifth Revolution —
            <br className="hidden md:block" /> organized, digitized, and
            weaponized for good.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
      {/* --- FLAG / JOIN US --- */}
      <section>
        <div className="relative h-64 md:h-auto overflow-hidden">
          <img
            src="nigeriaflag.png"
            alt="Nigeria Flag"
            className="w-full h-full object-cover"
          />

          <button
            className="absolute inset-0 m-auto flex items-center justify-center 
                     w-32 h-12 border-2 border-white bg-transparent text-white 
                     font-semibold rounded-md hover:bg-white hover:text-black transition"
          >
            Join Us
          </button>
        </div>
      </section>

      {/* --- ACCORDION SECTIONS --- */}
      <section className="bg-[#1a4d3e]">
        {/* More About TYREN */}
        <div className="border-t border-[#9F9786]">
          <div
            className="px-6 py-8 flex justify-between items-center hover:bg-[#0d3d2e] transition-colors cursor-pointer"
            onClick={() => toggleSection("about")}
          >
            <div className="text-left md:text-center flex-1 pr-4">
              <h2 className="text-3xl md:text-5xl font-rhode font-black text-[#9F9786] mb-2">
                MORE ABOUT TYREN
              </h2>
              <p className="text-[#9F9786] text-xs md:text-sm tracking-wider">
                OUR MISSION, PHILOSOPHY & FRAMEWORK
              </p>
            </div>
            <svg
              className={`w-8 h-8 text-gray-400 transform transition-transform ${openSections.about ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openSections.about
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-8 text-gray-300">
              <p className="mb-4">
                TYREN is building the intellectual infrastructure for Africa's
                next generation. We believe that true transformation comes from
                changing how people think, not just what they do.
              </p>
              <p>
                Our framework combines education, civic engagement, and cultural
                preservation to create a new generation of African leaders who
                are both globally competitive and rooted in African values.
              </p>
            </div>
          </div>
        </div>

        {/* Our Programs */}
        <div className="border-t border-[#9F9786]">
          <div className="px-0 py-0 cursor-pointer transition-colors">
            {/* Header Section */}
            <div
              className="flex justify-between items-center p-6 bg-[#0d3d2e] hover:bg-[#124a38] transition-colors"
              onClick={() => toggleSection("programs")}
            >
              <div className="text-left md:text-center flex-1 pr-4">
                <h2 className="text-3xl md:text-5xl font-rhode font-black text-[#F3ECDD] mb-2">
                  OUR PROGRAMS
                </h2>
                <p className="text-[#9F9786] text-xs md:text-sm tracking-wider">
                  HOW WE WILL ACHIEVE THIS
                </p>
              </div>
              <svg
                className={`w-8 h-8 text-white transition-transform ${
                  openSections.programs ? "rotate-0" : "rotate-180"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            </div>

            {/* Grid Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openSections.programs
                  ? "max-h-[5000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 w-full">
                {/* COLUMN 1: EDUCATION */}
                <div className="flex flex-col">
                  {/* Row 1: Top (Light) */}
                  <div className="bg-[#8FD3E9] p-6 md:p-10 flex flex-col items-center justify-start text-center h-auto md:h-[234px]">
                    <h3 className="text-xl font-bold text-black mb-6 uppercase tracking-wider">
                      EDUCATION
                    </h3>
                    <p className="text-sm text-gray-800 leading-relaxed">
                      Our education teaches us what to think, not how <br /> to
                      think. We memorize dates but don't analyse <br /> systems.
                      We have to teach people how to <br /> examine, not just to
                      pass exams.
                    </p>
                  </div>
                  {/* Row 2: Bottom (Vibrant) */}
                  <div className="bg-[#0040FF] p-6 md:p-10 flex flex-col items-center text-center h-auto md:h-[504px]">
                    <div className="flex-1 flex items-center justify-center w-full mb-6">
                      <img
                        src="/mindshift.png"
                        alt="Mindshift Logo"
                        className="max-w-[150px] md:max-w-full h-auto"
                      />
                    </div>

                    <div className="w-full flex flex-col items-center justify-end">
                      <p className="text-[16px] text-black font-medium pb-4 md:pb-0">
                        Mindset engineering and community brainstorming <br />{" "}
                        for critical thinking and leadership.
                      </p>
                      {/* Dots */}
                      <div className="flex gap-2 mt-6">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* COLUMN 2: POLITICS */}
                <div className="flex flex-col">
                  {/* Row 1: Top (Light) */}
                  <div className="bg-[#D6ECA2] p-6 md:p-10 flex flex-col items-center justify-start text-center h-auto md:h-[234px]">
                    <h3 className="text-xl font-bold text-black mb-6 uppercase tracking-wider">
                      POLITICS
                    </h3>
                    <p className="text-sm text-gray-800 leading-relaxed">
                      Government is a black box. Policies happen{" "}
                      <span className="font-bold">to</span> us, not <br />{" "}
                      <span className="font-bold">with</span> us. Budgets are
                      secrets. Accountability is <br /> mythology. This has to
                      change.
                    </p>
                  </div>
                  {/* Row 2: Bottom (Vibrant) */}
                  <div className="bg-[#4ADE60] p-6 md:p-10 flex flex-col items-center text-center h-auto md:h-[504px]">
                    <div className="flex-1 flex items-center justify-center w-full mb-6">
                      <img
                        src="/civic.png"
                        alt="Civiqli Logo"
                        className="max-w-[150px] md:max-w-full h-auto"
                      />
                    </div>
                    <p className="text-[16px] text-[#1a4d3e] font-medium pb-8 md:pb-2">
                      The citizenship app that makes democracy <br />{" "}
                      transparent, participation seamless, and <br />{" "}
                      accountability inescapable.
                    </p>
                  </div>
                </div>

                {/* COLUMN 3: CULTURE */}
                <div className="flex flex-col">
                  {/* Row 1: Top (Light) */}
                  <div className="bg-[#EAB2B9] p-6 md:p-10 flex flex-col items-center justify-start text-center h-auto md:h-[234px]">
                    <h3 className="text-xl font-bold text-black mb-6 uppercase tracking-wider">
                      CULTURE
                    </h3>
                    <p className="text-sm text-gray-800 leading-relaxed">
                      We've consumed foreign culture so much we're <br /> losing
                      our cultural core. We know more about <br /> Wakanda than
                      Wazobia. We need to stan our <br /> indigenous wisdom as
                      we do foreign ideas.
                    </p>
                  </div>
                  {/* Row 2: Bottom (Vibrant) */}
                  <div className="bg-[#FF0000] p-6 md:p-10 flex flex-col items-center text-center h-auto md:h-[504px]">
                    <div className="flex-1 flex items-center justify-center w-full mb-6">
                      <img
                        src="/redd.png"
                        alt="REDDD Logo"
                        className="max-w-[150px] md:max-w-full h-auto"
                      />
                    </div>
                    <p className="text-[16px] text-black font-medium max-w-[90%] pb-6">
                      Republicans Emerge, Deliberate, Decide, and Design <br />{" "}
                      high-powered youth-only civic discourse festivals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to Get Involved */}
        <div className="border-t border-[#9F9786]">
          <div
            className="px-6 py-8 flex justify-between items-center hover:bg-[#0d3d2e] transition-colors cursor-pointer"
            onClick={() => toggleSection("involved")}
          >
            <div className="text-left md:text-center flex-1 pr-4">
              <h2 className="text-3xl md:text-5xl font-rhode font-black text-[#9F9786] mb-2">
                HOW TO GET INVOLVED
              </h2>
              <p className="text-[#9F9786] text-xs md:text-sm tracking-wider">
                FOR THE YOUTH, PARTNERS & GOVERNMENT AGENCIES
              </p>
            </div>
            <svg
              className={`w-8 h-8 text-gray-400 transform transition-transform ${openSections.involved ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openSections.involved
                ? "max-h-[800px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-8 text-gray-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-bold text-white mb-2">FOR YOUTH</h3>
                  <p className="text-sm">
                    Join our bootcamps, engage with civiqli, and become part of
                    the intellectual revolution.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">FOR PARTNERS</h3>
                  <p className="text-sm">
                    Collaborate with us to scale impact and build sustainable
                    programs across Africa.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">FOR GOVERNMENT</h3>
                  <p className="text-sm">
                    Work with us to integrate civic technology and youth
                    engagement into policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TYREN Lens */}
        <div className="border-t border-[#9F9786]">
          <div
            className="px-6 py-8 flex justify-between items-center hover:bg-[#0d3d2e] transition-colors cursor-pointer"
            onClick={() => toggleSection("lens")}
          >
            <div className="text-left md:text-center flex-1 pr-4">
              <h2 className="text-3xl md:text-5xl font-rhode font-black text-[#9F9786] mb-2">
                TYREN LENS
              </h2>
              <p className="text-[9F9786] text-xs md:text-sm tracking-wider text-[#9F9786]">
                THOUGHTS FROM THE REPUBLIC
              </p>
            </div>
            <svg
              className={`w-8 h-8 text-gray-400 transform transition-transform ${openSections.lens ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openSections.lens
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-8 text-gray-300">
              <p className="mb-4">
                TYREN Lens is our thought leadership platform where we analyze
                current events, policy decisions, and cultural shifts through
                the framework of the Fifth Revolution.
              </p>
              <p>
                Expect deep dives, provocative questions, and solutions rooted
                in African philosophy.
              </p>
            </div>
          </div>
        </div>

        {/* Stories from the Republic */}
        <div className="border-t border-[#9F9786]">
          {/* Header Trigger */}
          <div
            className="px-6 py-12 flex items-center bg-[#0d3d2e] hover:bg-[#124a38] transition-colors cursor-pointer relative"
            onClick={() => toggleSection("stories")}
          >
            <h2 className="text-3xl md:text-6xl font-rhode font-black text-[#F3ECDD] flex-1 text-center leading-none pr-8">
              STORIES FROM THE REPUBLIC
            </h2>
            <svg
              className={`w-8 h-8 md:w-10 md:h-10 text-[#F3ECDD] transition-transform flex-shrink-0 absolute right-6 ${
                openSections.stories ? "rotate-45" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>

          {/* Dropdown Content */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openSections.stories
                ? "max-h-[3000px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-[#F3ECDD]">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#9F9786] border-b border-[#9F9786]">
                {/* Story 1 */}
                <div className="p-8 md:p-12 flex flex-col justify-between min-h-auto md:min-h-[529px]">
                  <p className="text-[#1a4d3e] text-sm md:text-base leading-relaxed mb-8 font-medium">
                    "Before TYREN, I thought government was just corruption.
                    After MindShift Bootcamp, I realized it's a system—and
                    systems can be debugged. Now I'm a policy fellow working on
                    education reform."
                  </p>
                  <div className="mt-auto">
                    <div className="w-14 h-14 rounded-full overflow-hidden mb-4 border-2 border-[#1a4d3e]">
                      <img
                        src="/profile.png"
                        alt="Chioma"
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    <h5 className="text-[#1a4d3e] font-bold uppercase text-xs tracking-wider">
                      CHIOMA, 24, LAGOS
                    </h5>
                  </div>
                </div>

                {/* Story 2 */}
                <div className="p-8 md:p-12 flex flex-col justify-between min-h-auto md:min-h-[529px]">
                  <p className="text-[#1a4d3e] text-sm md:text-base leading-relaxed mb-8 font-medium">
                    "REDDD Festival changed my life. I went for the music,
                    stayed for the policy discussion, and left knowing I could
                    actually DO something. Six months later, I'm leading a youth
                    civic group in my LGA."
                  </p>
                  <div className="mt-auto">
                    <div className="w-14 h-14 rounded-full overflow-hidden mb-4 border-2 border-[#1a4d3e]">
                      <img
                        src="/profile.png"
                        alt="Ibrahim"
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    <h5 className="text-[#1a4d3e] font-bold uppercase text-xs tracking-wider">
                      IBRAHIM, 27, KANO
                    </h5>
                  </div>
                </div>

                {/* Story 3 */}
                <div className="p-8 md:p-12 flex flex-col justify-between min-h-auto md:min-h-[529px]">
                  <p className="text-[#1a4d3e] text-sm md:text-base leading-relaxed mb-8 font-medium">
                    "Governance360 helped me track my local government budget. I
                    discovered ₦50 million allocated for a road that was never
                    built. I reported it through the app. Three months later,
                    construction started. That's power."
                  </p>
                  <div className="mt-auto">
                    <div className="w-14 h-14 rounded-full overflow-hidden mb-4 border-2 border-[#1a4d3e]">
                      <img
                        src="/profile.png"
                        alt="Blessing"
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    <h5 className="text-[#1a4d3e] font-bold uppercase text-xs tracking-wider">
                      BLESSING, 22, PORT HARCOURT
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="min-h-[70vh] md:min-h-screen bg-[#1a4d3e] flex items-center justify-center px-4 md:px-6 py-16">
        <div className="max-w-5xl w-full text-center">
          {/* Pentagon Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="/logo2.png"
              alt=""
              className="w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl font-rhode md:text-7xl font-black mb-4 leading-tight md:leading-17">
            <span className="text-gray-400">THE YOUNG REPUBLICANS</span>
            <br />
            <span className="text-white">EMERGE NOW!</span>
          </h1>

          {/* Subtext */}
          <div className="text-gray-400 font-futura text-sm md:text-lg mb-8 space-y-1">
            <p>Not next election. Not next generation.</p>
            <p className="font-bold">NOW.</p>
          </div>

          {/* CTA Button */}
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold font-futura text-base md:text-lg px-8 py-3 md:px-12 md:py-4 rounded transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            JOIN THE REPUBLIC
          </button>
        </div>
      </section>

      {/* --- FOOTER PHILOSOPHY --- */}
      <div className="bg-[#d4a5a5] px-4 md:px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Headlines */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16 mb-6 flex-wrap">
            <h2 className="text-3xl font-rhode md:text-5xl font-black text-[#1a4d3e]">
              PHILOSOPHY
            </h2>

            {/* Pentagon Icon */}
            <img src="/greenlogo.png" alt="" className="w-8 md:w-auto" />

            <h2 className="text-3xl md:text-5xl font-rhode font-black text-[#1a4d3e]">
              INSTITUTION
            </h2>

            {/* Pentagon Icon */}
            <img src="/greenlogo.png" alt="" className="w-8 md:w-auto" />

            <h2 className="text-3xl md:text-5xl font-rhode font-black text-[#1a4d3e]">
              REFORM
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-center font-rhode text-[#1a4d3e] text-xs md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Where Fela Meets Fintech. Where Achebe Meets Algorithms. Where Your
            Mind Catches Fire and Nations Are Reborn.
          </p>
        </div>
      </div>
    </div>
  );
}