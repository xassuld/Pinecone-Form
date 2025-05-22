const Form = () => {
  return (
    <div className="w-screen h-screen bg-[#F4F4F4] flex justify-center items-center">
      <div className="w-[480px] h-[655px] p-8 flex flex-col bg-white">
        <div className="flex flex-col gap-7">
          {/* FORM HEADER */}
          <div className="w-[416px] flex flex-col gap-2">
            <img src="pine-logo.png" className="w-[60px] h-[60px]" />
            <p className="text-[#202124] text-[26px] font-[600]">Join Us! 😎</p>
            <p className="text-[18px] text-[#8E8E8E] font-[400]">
              Please provide all current information accurately.
            </p>
          </div>
          {/* FORM CONTAINER */}
          <div className="w-[416px] flex flex-col gap-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Form;
