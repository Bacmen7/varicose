
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "@/compat/Image";
import Link from "@/compat/Link";
import { useRef } from "react";

const conditions = [
  {
    name: "Varicose Veins",
    href: "/conditions/varicose-veins",
    image: "/user/varicose veins.png",
  },
  {
    name: "Spider Veins",
    href: "/conditions/spider-veins",
    image: "/user/spider vein.png",
  },
  {
    name: "Deep Vein Reflux",
    href: "/conditions/deep-vein-reflux",
    image: "/user/deep vein reflux.png",
  },
  {
    name: "Chronic Venous Insufficiency",
    href: "/conditions/chronic-venous-insufficiency",
    image: "/user/chronic venus insufficiency.png",
  },
  {
    name: "Leg Pain & Heaviness",
    href: "/conditions/leg-pain-heaviness",
    image: "/user/leg pain and heaviness.png",
  },
  {
    name: "Swelling, Skin Changes, Non-healing Ulcers",
    href: "/conditions/swelling-skin-changes",
    image:
      "/user/swelling, skin changes, non-healing ulcers swelling, skin changes, non-healing ulcers.png",
  },
];

export default function ConditionsSection() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    carouselRef.current?.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-accent-light py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 text-center">
        <h2 className="font-heading font-normal tracking-tight leading-[1.15] text-[1.9rem] sm:text-[2.3rem] text-secondary">
          Expert care for all vein
          <br className="hidden sm:block" />
          symptoms and conditions
        </h2>
        <p className="font-body mx-auto mt-5 max-w-2xl text-[15px] md:text-base leading-relaxed text-gray-600">
          Varicose veins aren&apos;t just cosmetic &mdash; they signal deeper
          circulation issues. We help you find care for{" "}
          <span className="rounded-[3px] bg-primary px-2 py-0.5 font-semibold text-white">
            vein and circulation conditions
          </span>
          .
        </p>
      </div>

      <button
        type="button"
        aria-label="Previous conditions"
        onClick={() => scrollCarousel("left")}
        className="absolute left-2 top-[62%] z-20 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-sm transition hover:bg-accent-lighter md:flex"
      >
        <ChevronLeft size={24} />
      </button>

      <div
        ref={carouselRef}
        className="scrollbar-hidden mt-10 flex gap-6 overflow-x-auto px-5 pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:px-8"
        style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
      >
        {conditions.map((condition) => (
          <Link
            key={condition.name}
            href={condition.href}
            className="group w-[250px] shrink-0 text-center"
          >
            <div className="relative h-[330px] w-full overflow-hidden rounded-xl bg-white">
              <Image
                src={condition.image}
                alt={condition.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="250px"
              />
            </div>
            <h3 className="mt-[14px] text-[16px] font-semibold leading-6 text-secondary">
              {condition.name}
            </h3>
          </Link>
        ))}
      </div>

      <button
        type="button"
        aria-label="Next conditions"
        onClick={() => scrollCarousel("right")}
        className="absolute right-2 top-[62%] z-20 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-sm transition hover:bg-accent-lighter md:flex"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
}
