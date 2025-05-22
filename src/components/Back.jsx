import { ChevronLeft } from "lucide-react";

export const Back = ({ step, setStep }) => {
  return (
    <button
      onClick={() => {
        if (step > 1) {
          setStep(step - 1);
        }
      }}
      className="w-[128px] py-[10px] px-[12px] flex justify-center items-center gap-0.5 border border-[#CBD5E1] rounded-md hover:cursor-pointer"
    >
      <ChevronLeft className="w-[24px] h-[24px]" />
      <p className="text-[#202124] text-[16px] font-[500]">Back</p>
    </button>
  );
};
