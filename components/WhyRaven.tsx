export default function WhyRaven() {
  const features = [
    {
      title: "7075-T6",
      subtitle: "Aircraft Grade Aluminium",
    },
    {
      title: "CNC",
      subtitle: "Precision Machined",
    },
    {
      title: "ANODIZED",
      subtitle: "Durable Finish",
    },
    {
      title: "POLAND",
      subtitle: "Designed & Manufactured",
    },
  ];

  return (
    <section className="border-t border-zinc-900 bg-zinc-950">

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="mb-16">

          <p className="uppercase tracking-[4px] text-red-600 text-sm">
            Why Raven Arms
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-black">
            ENGINEERED FOR
            <br />
            WHAT MATTERS
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {features.map((item) => (
            <div
              key={item.title}
              className="
                border
                border-zinc-800
                rounded-2xl
                p-8
                hover:border-red-700
                transition
              "
            >
              <h3 className="text-2xl font-black text-red-600">
                {item.title}
              </h3>

              <p className="text-zinc-500 mt-3">
                {item.subtitle}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}