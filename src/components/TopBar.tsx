export default function TopBar() {
  return (
    <div
      className="text-white py-2 md:py-3 text-center text-sm md:text-base lg:text-lg"
      style={{
        backgroundColor: '#026460',
        fontFamily: '"Proxima Nova", Arial, sans-serif',
        fontWeight: 400,
      }}
    >
      <p className="px-4">
        Call <span className="font-semibold">+91 98765 43210</span> to schedule your first visit
      </p>
    </div>
  );
}
