export default function StatsBar() {
  return (
    <section className="relative py-14 md:py-20 bg-background">
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] items-start gap-6 lg:gap-12">
        {/* Left - Heading */}
        <div className="text-center md:text-left">
          <h2 className="font-heading font-normal tracking-tight leading-[1.15] text-[1.9rem] sm:text-[2.3rem] mb-4 text-secondary">
            Clinically Proven
            <br />
            Vein Care
          </h2>
          <p className="text-[15px] md:text-base leading-relaxed text-gray-600 max-w-2xl mx-auto md:mx-0 mt-5 mb-4">
            Our approach focuses on early diagnosis, personalised treatment plans,
            <br className="hidden lg:block" />
            and modern minimally invasive therapies to restore healthy circulation
            <br className="hidden lg:block" />
            and improve long-term quality of life.
          </p>
        </div>

        {/* Right - Stats */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 self-start sm:grid-cols-2 lg:pt-2">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <p
              className="font-heading leading-none mb-2 text-primary"
              style={{ fontSize: "clamp(38px, 4.8vw, 68px)", fontWeight: 800 }}
            >
              95%+
            </p>
            <p className="max-w-[260px] text-base leading-relaxed font-normal text-gray-600">
              of patients experience significant relief in{" "}
              <strong className="font-semibold text-secondary">4 weeks or less</strong>
            </p>
          </div>

          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <p
              className="font-heading leading-none mb-2 text-primary"
              style={{ fontSize: "clamp(38px, 4.8vw, 68px)", fontWeight: 800 }}
            >
              98%
            </p>
            <p className="max-w-[260px] text-base leading-relaxed font-normal text-gray-600">
              of patients return to normal activity{" "}
              <strong className="font-semibold text-secondary">within 24 hours</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
