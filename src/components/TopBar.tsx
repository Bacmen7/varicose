export default function TopBar() {
  return (
    <div
      className="text-white py-3 text-center"
      style={{
        backgroundColor: '#026460',
        fontFamily: '"Proxima Nova", Arial, sans-serif',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '22px'
      }}
    >
      <p>
        Call <span className="font-semibold">+91 98765 43210</span> to schedule your first visit
      </p>
    </div>
  );
}
