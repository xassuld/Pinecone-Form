export const Input = ({ type, text, placeholder, value, onChange, name }) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <div className="flex gap-1">
        <p className="text-[#334155] text-[14px] font-[600]">{text}</p>
        <p className="text-[#E14942] text-[14px]">*</p>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="p-3 border w-full rounded-md border-[#CBD5E1]"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
