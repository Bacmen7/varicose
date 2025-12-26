// import { ArrowRight, ChevronRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// const conditions = [
//   {
//     name: "Varicose Veins",
//     href: "/conditions/varicose-veins",
//     image: "/user/Varicosevein.png",
//     objectPosition: "center",
//   },
//   {
//     name: "Spider Veins",
//     href: "/conditions/spider-veins",
//     image: "/user/spider.png",
//     objectPosition: "center top",
//   },
//   {
//     name: "Deep Vein Reflux",
//     href: "/conditions/deep-vein-reflux",
//     image: "/user/deep.png",
//     objectPosition: "center top",
//   },
//   {
//     name: "Chronic Venous Insufficiency",
//     href: "/conditions/chronic-venous-insufficiency",
//     image: "/user/chronic.png",
//     objectPosition: "center",
//   },
//   {
//     name: "Leg Pain & Heaviness",
//     href: "/conditions/leg-pain-heaviness",
//     image: "/user/legpain.png",
//     objectPosition: "center",
//   },
//   {
//     name: "Swelling, Skin Changes, Non-healing Ulcers",
//     href: "/conditions/swelling-skin-changes",
//     image: "/user/swelling.png",
//     objectPosition: "center",
//   },
// ];

// export default function ConditionsSection() {
//   return (
//     <section className="py-12 md:py-16 lg:py-24 w-full" style={{ backgroundColor: '#D6E6E5' }}>
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Header */}
//         <div className="max-w-2xl mb-8 md:mb-12">
//           <h2 className="font-heading text-2xl md:text-3xl lg:text-[40px] md:leading-[48px] mb-3 md:mb-4" style={{ color: '#026460' }}>
//             Conditions We Treat
//           </h2>
//           <p className="text-base md:text-lg leading-relaxed" style={{ color: '#48546B' }}>
//             Varicose veins aren&apos;t just cosmetic — they signal deeper circulation issues. We help you find care for:
//           </p>
//         </div>

//         {/* Conditions Carousel */}
//         <div
//           className="flex overflow-x-auto gap-4 md:gap-5 snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden"
//           style={{
//             scrollbarWidth: 'none',
//             msOverflowStyle: 'none'
//           }}
//         >
//           {conditions.map((condition) => (
//             <Link
//               key={condition.name}
//               href={condition.href}
//               className="group relative aspect-[4/3] rounded-lg overflow-hidden hover:ring-4 hover:ring-primary/30 transition-all min-w-[70%] sm:min-w-[45%] md:min-w-[30%] snap-center"
//             >
//               <Image
//                 src={condition.image}
//                 alt={condition.name}
//                 fill
//                 className="object-cover group-hover:scale-105 transition-transform duration-300"
//                 style={{ objectPosition: condition.objectPosition }}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-primary/90 group-hover:to-primary/20 transition-all duration-300 flex items-end p-4 md:p-5">
//                 <div className="flex items-center justify-between w-full">
//                   <h3 className="font-heading text-base md:text-lg font-medium text-white leading-tight">
//                     {condition.name}
//                   </h3>
//                   <ArrowRight size={18} className="text-white group-hover:translate-x-1 transition-transform shrink-0 md:w-5 md:h-5" />
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Scroll Indicator */}
//         <div className="flex justify-end mt-4">
//           <div className="flex items-center gap-2 text-primary">
//             <span className="text-sm font-medium">Scroll for more</span>
//             <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
//               <ChevronRight size={20} className="text-white" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const conditions = [
  {
    name: "Varicose Veins",
    href: "/conditions/varicose-veins",
    image: "/user/varicose veins.png",
    objectPosition: "center",
  },
  {
    name: "Spider Veins",
    href: "/conditions/spider-veins",
    image: "/user/spider vein.png",
    objectPosition: "center",
  },
  {
    name: "Deep Vein Reflux",
    href: "/conditions/deep-vein-reflux",
    image: "/user/deep vein reflux.png",
    objectPosition: "center",
  },
  {
    name: "Chronic Venous Insufficiency",
    href: "/conditions/chronic-venous-insufficiency",
    image: "/user/chronic venus insufficiency.png",
    objectPosition: "center",
  },
  {
    name: "Leg Pain & Heaviness",
    href: "/conditions/leg-pain-heaviness",
    image: "/user/leg pain and heaviness.png",
    objectPosition: "center",
  },
  {
    name: "Swelling, Skin Changes, Non-healing Ulcers",
    href: "/conditions/swelling-skin-changes",
    image: "/user/swelling, skin changes, non-healing ulcers swelling, skin changes, non-healing ulcers.png",
    objectPosition: "center",
  },
];

export default function ConditionsSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    scrollRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="py-12 md:py-16 lg:py-24 w-full"
      style={{ backgroundColor: "#D6E6E5" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-8 md:mb-12">
          <h2
            className="font-heading text-2xl md:text-3xl lg:text-[40px] md:leading-[48px] mb-3 md:mb-4"
            style={{ color: "#026460" }}
          >
            Conditions We Treat
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-2"
            style={{ color: "#48546B" }}
          >
            Varicose veins aren&apos;t just cosmetic — they signal deeper circulation issues.
          </p>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "#48546B" }}
          >
            We help you find care for:
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 md:gap-5 snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {conditions.map((condition) => (
            <Link
              key={condition.name}
              href={condition.href}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden hover:ring-4 hover:ring-primary/30 transition-all min-w-[70%] sm:min-w-[45%] md:min-w-[30%] snap-center cursor-pointer"
            >
              <Image
                src={condition.image}
                alt={condition.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                style={{ objectPosition: condition.objectPosition }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-primary/90 group-hover:to-primary/20 transition-all duration-300 flex items-end p-4 md:p-5">
                <div className="flex items-center justify-between w-full">
                  <h3 className="font-heading text-base md:text-lg font-medium text-white leading-tight">
                    {condition.name}
                  </h3>
                  <ArrowRight
                    size={18}
                    className="text-white group-hover:translate-x-1 transition-transform shrink-0 md:w-5 md:h-5"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Scroll Button */}
        <div className="flex justify-end mt-4">
          <button
            onClick={handleScroll}
            className="flex items-center gap-2 text-primary cursor-pointer"
          >
            <span className="text-sm font-medium underline-offset-4 hover:underline">Scroll for more</span>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 active:scale-95 transition-all duration-200">
              <ChevronRight size={20} className="text-white" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
