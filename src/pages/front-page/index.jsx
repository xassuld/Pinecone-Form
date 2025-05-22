import { Input } from "@/components/form-input";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Back } from "@/components/Back";

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    birthday: "",
  });

  return (
    <div className="w-screen h-screen bg-[#F4F4F4] flex justify-center items-center">
      <div className="w-[480px] h-[655px] p-8 flex flex-col bg-white rounded-[8px]">
        <div className="h-full w-full flex flex-col justify-between">
          <div className="flex flex-col gap-7">
            {/* FORM HEADER */}
            <div className="w-[416px] flex flex-col gap-2">
              <img src="pine-logo.png" className="w-[60px] h-[60px]" />
              <p className="text-[#202124] text-[26px] font-[600]">
                Join Us! 😎
              </p>
              <p className="text-[18px] text-[#8E8E8E] font-[400]">
                Please provide all current information accurately.
              </p>
            </div>

            {/* FORM CONTAINER */}
            {step === 1 && (
              <div className="w-[416px] flex flex-col gap-3">
                <Input
                  type="text"
                  text="First name"
                  placeholder="Your first name"
                />
                <Input
                  type="text"
                  text="Last name"
                  placeholder="Your last name"
                />
                <Input
                  type="text"
                  text="Username"
                  placeholder="Your username"
                />
              </div>
            )}

            {/* SECOND SECTION */}
            {step === 2 && (
              <div className="w-[416px] flex flex-col gap-3">
                <Input type="email" text="Email" placeholder="Your email" />
                <Input
                  type="number"
                  text="Phone Number"
                  placeholder="Your phone number"
                />
                <Input
                  type="password"
                  text="Password"
                  placeholder="Your password"
                />
                <Input
                  type="password"
                  text="Confirm password"
                  placeholder="Confirm password"
                />
              </div>
            )}

            {/* THIRD SECTION */}
            {step === 3 && (
              <div className="w-[416px] flex flex-col gap-3">
                <Input text="Date of birth" placeholder="Your birthday" />
              </div>
            )}
          </div>

          {/* CONTINUE BUTTON */}
          <div className="flex w-full gap-2">
            {step === 2 && <Back step={step} setStep={setStep} />}
            {step === 3 && <Back step={step} setStep={setStep} />}
            <button
              onClick={() => {
                if (step < 3) {
                  setStep(step + 1);
                }
              }}
              className="w-full py-[10px] px-[12px] flex flex-col justify-center items-center border bg-black rounded-md hover:cursor-pointer"
            >
              <div className="text-white flex gap-1 font-[500]">
                <p>Continue</p>
                <p>{step}/3</p>
                <p>
                  <ChevronRight />
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
