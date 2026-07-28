export default function StatsBar() {
  return (
    <section className="relative py-14 md:py-20 bg-background">
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 grid grid-cols-1 lg:grid-cols-3 items-start gap-10 lg:gap-16">
        {/* Left - Heading */}
        <div className="text-center md:text-left">
          <h2
            className="font-heading font-normal leading-[1.12] tracking-tight text-primary-dark whitespace-nowrap"
            style={{ fontSize: "clamp(1.85rem, 3vw, 2.85rem)" }}
          >
            Clinically Proven
            <br />
            Vein Care
          </h2>
          <p className="mt-6 max-w-[390px] mx-auto md:mx-0 text-base leading-[1.75] text-gray-600">
            Our approach focuses on early diagnosis, personalised treatment
            plans, and modern minimally invasive therapies to restore healthy
            circulation and improve long-term quality of life.
          </p>
        </div>

        {/* Right - Stats */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p
            className="font-heading leading-none text-primary-dark"
            style={{ fontSize: "clamp(3rem, 5.2vw, 4.6rem)", fontWeight: 800 }}
          >
            95%+
          </p>
          <p className="mt-5 max-w-[330px] text-base leading-[1.7] text-gray-600">
            of patients experience significant relief in{" "}
            <strong className="font-semibold text-primary-dark">
              4 weeks or less
            </strong>
          </p>
        </div>

        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p
            className="font-heading leading-none text-primary-dark"
            style={{ fontSize: "clamp(3rem, 5.2vw, 4.6rem)", fontWeight: 800 }}
          >
            98%
          </p>
          <p className="mt-5 max-w-[330px] text-base leading-[1.7] text-gray-600">
            of patients return to normal activity{" "}
            <strong className="font-semibold text-primary-dark">
              within 24 hours
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
