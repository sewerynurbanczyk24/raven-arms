export default function WhyRaven() {
  const features = [
    {
      title: "CNC MACHINED",
      description:
        "Precyzja w każdym detalu. Powtarzalna jakość dzięki nowoczesnej obróbce CNC.",
      icon: "⚙",
    },
    {
      title: "HARD ANODIZED",
      description:
        "Wytrzymała powierzchnia odporna na intensywne użytkowanie.",
      icon: "🛡",
    },
    {
      title: "COMPETITION TESTED",
      description:
        "Sprawdzone przez strzelców sportowych i wymagających użytkowników.",
      icon: "◎",
    },
    {
      title: "MADE IN POLAND",
      description:
        "Projektowane i produkowane w Polsce według najwyższych standardów.",
      icon: "🇵🇱",
    },
  ];

  return (
    <section className="border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <p className="uppercase tracking-[4px] text-red-600 text-sm">
          Why Raven Arms
        </p>

        <h2 className="mt-4 text-5xl lg:text-7xl font-black uppercase">
          ENGINEERED FOR
          <br />
          WHAT MATTERS
        </h2>

        <div className="grid lg:grid-cols-[60%_40%] gap-12 mt-20">

          {/* LEWA STRONA */}
          <div className="grid md:grid-cols-2">

            {features.map((item) => (
              <div
                key={item.title}
                className="
                  p-8
                  border
                  border-zinc-900
                  hover:border-red-700
                  transition
                "
              >
                <div className="text-4xl text-red-600">
                  {item.icon}
                </div>

                <h3
                  className="
                    mt-6
                    text-xl
                    font-black
                    uppercase
                  "
                >
                  {item.title}
                </h3>

                <p className="mt-4 text-zinc-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

          {/* PRAWA STRONA */}

          <div className="relative overflow-hidden border border-zinc-900">

            <img
              src="/gallery/ar15.jpg"
              alt="Raven Arms"
              className="
                w-full
                h-full
                object-cover
                opacity-70
              "
            />

            <div className="absolute inset-0 bg-black/35" />

            <div
              className="
                absolute
                bottom-8
                right-8
                text-right
              "
            >
              <p
                className="
                  text-white
                  uppercase
                  tracking-[4px]
                  text-lg
                "
              >
                SHOOT
              </p>

              <p
                className="
                  text-white
                  uppercase
                  tracking-[4px]
                  text-lg
                "
              >
                TUNE
              </p>

              <p
                className="
                  text-white
                  uppercase
                  tracking-[4px]
                  text-lg
                "
              >
                IMPROVE
              </p>

              <p
                className="
                  text-red-600
                  uppercase
                  tracking-[4px]
                  text-lg
                "
              >
                REPEAT
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}