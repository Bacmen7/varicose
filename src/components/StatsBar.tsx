export default function StatsBar() {
  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] items-start gap-8 md:gap-10">
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
            className="text-[14px] leading-[1.7] text-gray-500 max-w-md mx-auto md:mx-0"
            style={{ marginTop: "20px", marginBottom: "16px" }}
          >
            Our approach focuses on early diagnosis, personalised treatment plans, and modern minimally invasive therapies to restore healthy circulation and improve long-term quality of life.
          </p>
        </div>

        {/* Stat 1 */}
        <div className="self-start pt-1 flex flex-col items-center text-center md:items-start md:text-left">
          <p
            className="font-heading leading-none mb-2 text-primary"
            style={{ fontSize: "clamp(36px, 4.5vw, 62px)", fontWeight: 500 }}
          >
            95%+
          </p>
          <p className="max-w-[240px] text-[14px] leading-[1.6] font-light tracking-[0.3px] text-gray-500 mx-auto md:mx-0">
            of patients experience significant relief in{" "}
            <strong className="font-semibold tracking-[0.1px] text-secondary">4 weeks or less</strong>
          </p>
        </div>

        {/* Stat 2 */}
        <div className="self-start pt-1 flex flex-col items-center text-center md:items-start md:text-left">
          <p
            className="font-heading leading-none mb-2 text-primary"
            style={{ fontSize: "clamp(36px, 4.5vw, 62px)", fontWeight: 500 }}
          >
            98%
          </p>
          <p className="max-w-[240px] text-[14px] leading-[1.6] font-light tracking-[0.3px] text-gray-500 mx-auto md:mx-0">
            of patients return to normal activity{" "}
            <strong className="font-semibold tracking-[0.1px] text-secondary">within 24 hours</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
