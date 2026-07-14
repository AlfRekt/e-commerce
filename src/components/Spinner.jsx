function Spinner({ size = 48 }) {
  return (
    <div className="flex w-full justify-center py-16">
      <span
        role="status"
        aria-label="Loading"
        className="animate-spin rounded-full border-4 border-[#E5E5E5] border-t-[#23A6F0]"
        style={{ width: size, height: size }}
      />
    </div>
  );
}

export default Spinner;