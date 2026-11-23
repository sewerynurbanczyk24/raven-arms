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
      title: "AR15 BUILD",
      image: "/gallery/ar15.jpg",
    },
    {
      title: "CNC DETAILS",
      image: "/gallery/cnc.jpg",
    },
    {
      title: "PRODUCTION",
      image: "/gallery/cnc.jpg",
    },
    {
      title: "ANODIZING",
      image: "/gallery/cnc.jpg",
    },
  ];

  return (
    <section
  id="gallery"
  className="border-t border-zinc-900 bg-black"
>
      <div className="max-w-7xl mx-auto px-6 py-24">

        <p className="uppercase tracking-[4px] text-red-600 text-sm">
          Products In Action
        </p>

        <h2 className="mt-4 text-5xl lg:text-7xl font-black uppercase">
          PERFORMANCE
          <br />
          WITHOUT COMPROMISE
        </h2>

        <p className="mt-6 text-zinc-500 max-w-2xl">
          Od platform AR15 i PCC po pistolety sportowe oraz
          produkcję CNC. Każdy element Raven Arms powstaje
          z myślą o niezawodności i najwyższej jakości wykonania.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-16">

          {gallery.map((item) => (
            <div
              key={item.title}
              className="
                relative
                overflow-hidden
                border
                border-zinc-900
                group
                h-[260px]
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-110
                  transition-all
                  duration-700
                "
              />

              <div className="absolute inset-0 bg-black/40" />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-transparent
                  to-transparent
                "
              />

              <div className="absolute bottom-6 left-6">
                <h3
                  className="
                    text-lg
                    lg:text-xl
                    font-black
                    uppercase
                    tracking-wide
                  "
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}