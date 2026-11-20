export default function Categories() {
  return (
    <section className="py-24 border-t border-zinc-900">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-black mb-12">
          Platformy
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              title: "AR15",
              desc: "Charging Handles, Selectors"
            },
            {
              title: "PCC",
              desc: "Competition Components"
            },
            {
              title: "PISTOLETY",
              desc: "Beretta, CZ, Glock"
            },
            {
              title: "SHOTGUN",
              desc: "Huglu, Beretta, Mossberg"
            }
          ].map((item) => (
            <div
              key={item.title}
              className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-red-700 transition"
            >
              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-zinc-500">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}