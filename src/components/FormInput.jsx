function FormInput({ label, name, type = "text", register, rules, error, placeholder }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-bold text-[#252B42]">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="rounded border border-[#DDDDDD] px-4 py-3 text-sm outline-none focus:border-[#23A6F0]"
        {...register(name, rules)}
      />
      {error && <span className="text-xs text-red-500">{error.message}</span>}
    </div>
  );
}

export default FormInput;