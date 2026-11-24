export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* TŁO */}

      <img
        src="/hero/raven-shooter.png"
        alt="Raven Arms"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      {/* Przyciemnienie */}

      <div className="absolute inset-0 bg-black/50" />

      {/* Gradient */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black
          via-black/60
          to-transparent
        "
      />

      {/* Zawartość */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          min-h-screen
          flex
          items-center
        "
      >
        <div className="max-w-3xl">

          <p
            className="
              uppercase
              tracking-[6px]
              text-red-600
              text-sm
              mb-6
            "
          >
            TACTICAL PARTS. HIGHER PERFORMANCE.
          </p>

          <h1
            className="
              text-6xl
              md:text-7xl
              xl:text-8xl
              font-black
              leading-none
              uppercase
            "
          >
            RAVEN
            <br />
            ARMS
          </h1>

          <div className="mt-8 space-y-2">

            <p
              className="
                uppercase
                tracking-[4px]
                text-zinc-200
                text-lg
              "
            >
              PRECISION ENGINEERED.
            </p>

            <p
              className="
                uppercase
                tracking-[4px]
                text-zinc-400
                text-lg
              "
            >
              BUILT FOR PERFORMANCE.
            </p>

          </div>

          <p
            className="
              mt-10
              text-lg
              lg:text-xl
              text-zinc-300
              max-w-2xl
              leading-relaxed
            "
          >
            Projektujemy i produkujemy komponenty CNC klasy premium
            dla platform AR15, PCC, pistoletów sportowych oraz
            strzelb. Tworzone z myślą o najbardziej wymagających
            strzelcach oraz partnerach handlowych na całym świecie.
          </p>

          <div className="flex flex-wrap gap-4 mt-12">

            <a
              href="#products"
              className="
                bg-red-700
                hover:bg-red-600
                transition
                px-8
                py-4
                uppercase
                tracking-wider
                font-black
              "
            >
              ZOBACZ PRODUKTY →
            </a>

            <a
              href="#dealers"
              className="
                border
                border-zinc-700
                hover:border-zinc-500
                transition
                px-8
                py-4
                uppercase
                tracking-wider
                font-black
              "
            >
              PARTNERZY
            </a>

          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg">

            <div>
              <div className="text-red-600 text-xl font-black">
                7075-T6
              </div>

              <div className="text-zinc-500 text-xs uppercase mt-2">
                Aluminium
              </div>
            </div>

            <div>
              <div className="text-red-600 text-xl font-black">
                CNC
              </div>

              <div className="text-zinc-500 text-xs uppercase mt-2">
                Machined
              </div>
            </div>

            <div>
              <div className="text-red-600 text-xl font-black">
                HARD
              </div>

              <div className="text-zinc-500 text-xs uppercase mt-2">
                Anodized
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}