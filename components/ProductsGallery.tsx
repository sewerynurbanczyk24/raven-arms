export default function ProductsGallery() {
  const gallery = [
    {
      title: "BERETTA 92X",
      image: "/gallery/beretta92x.jpg",
    },
    {
      title: "HUGLU MOHAC",
      image: "/gallery/mohac.jpg",
    },
    {
      title: "AR15 PLATFORM",
      image: "/gallery/ar15.jpg",
    },
    {
      title: "CNC MACHINING",
      image: "/gallery/cnc.jpg",
    },
  ];

  return (
    <section className="border-t border-zinc-900 bg-black">

      <div className="max-w-7xl mx-auto px-6 py-24">

        <p className="uppercase tracking-[4px] text-red-600 text-sm">
          Products In Action
        </p>

        <h2 className="mt-4 text-5xl font-black">
          PERFORMANCE
          <br />
          WITHOUT COMPROMISE
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-16">

          {gallery.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-3xl border border-zinc-800 group"
            >

              <img
                src={item.image}
                alt={item.title}
                className="
                  h-[320px]
                  w-full
                  object-cover
                  opacity-70
                  group-hover:scale-105
                  transition
                  duration-500
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

              <h3 className="
                absolute
                bottom-6
                left-6
                text-2xl
                font-black
              ">
                {item.title}
              </h3>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}