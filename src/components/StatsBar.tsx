export default function StatsBar() {
  return (
    <section className="bg-background py-10 md:py-24">
      <div className="mx-auto grid w-fit max-w-7xl grid-cols-1 items-start justify-center gap-9 px-6 md:grid-cols-[auto_auto_auto] md:gap-[60px]">
        {/* Left - Heading */}
        <div className="max-w-md text-center md:text-left">
          <h2 className="font-heading mb-4 text-[36px] font-normal leading-[1.12] text-primary-dark sm:text-[52px]">
            Clinically Proven
            <br />
            Vein Care
          </h2>
          <p
            className="mx-auto max-w-md text-[15px] leading-[1.7] text-gray-600 sm:text-[17px] sm:leading-[1.75] md:mx-0"
            style={{ marginTop: "24px", marginBottom: "20px" }}
          >
            Our approach focuses on early diagnosis, personalised treatment
            plans, and modern minimally invasive therapies to restore healthy
            circulation and improve long-term quality of life.
          </p>
        </div>

        {/* Stat 1 */}
        <div className="flex flex-col items-center self-start pt-1 text-center md:items-start md:text-left">
          <div
            className="font-heading mb-3 leading-none text-primary-dark"
            style={{ fontSize: "clamp(44px, 6vw, 96px)", fontWeight: 700 }}
          >
            95%+
          </div>
          <p className="mx-auto max-w-[260px] text-[15px] font-normal leading-[1.6] tracking-[0.3px] text-gray-600 sm:text-[17px] sm:leading-[1.65] md:mx-0 md:max-w-[290px]">
            of patients experience significant relief in{" "}
            <strong className="font-semibold tracking-[0.1px] text-primary-dark">
              4 weeks or less
            </strong>
          </p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center self-start pt-1 text-center md:items-start md:text-left">
          <div
            className="font-heading mb-3 leading-none text-primary-dark"
            style={{ fontSize: "clamp(44px, 6vw, 96px)", fontWeight: 700 }}
          >
            98%
          </div>
          <p className="mx-auto max-w-[260px] text-[15px] font-normal leading-[1.6] tracking-[0.3px] text-gray-600 sm:text-[17px] sm:leading-[1.65] md:mx-0 md:max-w-[290px]">
            of patients return to normal activity{" "}
            <strong className="font-semibold tracking-[0.1px] text-primary-dark">
              within 24 hours
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
