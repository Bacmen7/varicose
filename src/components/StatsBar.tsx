export default function StatsBar() {
  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="max-w-[1320px] mx-auto px-3 md:px-4 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] items-start gap-8 md:gap-12">
        {/* Left - Heading */}
        <div className="flex-[1.5] text-center md:text-left">
          <h2
            className="font-heading leading-[1.1] font-normal mb-4 text-primary text-[2rem] sm:text-[2.4rem]"
          >
            Clinically Proven
            <br />
            Vein Care
          </h2>
          <p
            className="text-base leading-relaxed text-gray-600 max-w-xl mx-auto md:mx-0"
            style={{ marginTop: "20px", marginBottom: "16px" }}
          >
            Our approach focuses on early diagnosis, personalised treatment plans,
            <br className="hidden lg:block" />
            and modern minimally invasive therapies to restore healthy circulation
            <br className="hidden lg:block" />
            and improve long-term quality of life.
          </p>
        </div>

        {/* Right - Stats */}
        <div className="grid grid-cols-1 gap-6 self-start sm:grid-cols-2 lg:translate-x-4 lg:justify-self-end lg:pt-2 xl:translate-x-8">
          <div className="flex flex-col items-center text-center sm:-translate-x-8 sm:items-start sm:text-left lg:-translate-x-12">
            <p
              className="font-heading leading-none mb-2 text-primary"
              style={{ fontSize: "clamp(38px, 4.8vw, 68px)", fontWeight: 800 }}
            >
              95%+
            </p>
            <p className="text-base leading-relaxed font-normal text-gray-600">
              <span className="block sm:whitespace-nowrap">
                of patients experience significant relief
              </span>
              <span className="block">
                in{" "}
                <strong className="font-semibold text-secondary">4 weeks or less</strong>
              </span>
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
