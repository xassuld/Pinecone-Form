import { Input } from "@/components/form-input";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Back } from "@/components/Back";

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (value === "") {
      console.log("yum alga");
    } else {
      console.log(`${name}: ${value}`);
    }
  };

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
                  name="firstName"
                  text="First name"
                  placeholder="Your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastName"
                  text="Last name"
                  placeholder="Your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="userName"
                  text="Username"
                  placeholder="Your username"
                  value={formData.userName}
                  onChange={handleChange}
                />
              </div>
            )}

            {/* SECOND SECTION */}
            {step === 2 && (
              <div className="w-[416px] flex flex-col gap-3">
                <Input
                  type="email"
                  text="Email"
                  placeholder="Your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="number"
                  name="phoneNumber"
                  text="Phone Number"
                  placeholder="Your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                <Input
                  type="password"
                  name="password"
                  text="Password"
                  placeholder="Your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <Input
                  type="password"
                  name="confirmPassword"
                  text="Confirm password"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            )}

            {/* THIRD SECTION */}
            {step === 3 && (
              <div className="w-[416px] flex flex-col gap-3">
                <Input
                  text="Date of birth"
                  placeholder="Your birthday"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          {/* CONTINUE BUTTON */}
          <div className="flex w-full gap-2">
            {(step === 2 || step === 3) && (
              <Back step={step} setStep={setStep} />
            )}
            <button
              onClick={() => {
                // VERIFICATION OF STEP 1
                if (step === 1) {
                  if (
                    formData.firstName === "" ||
                    formData.lastName === "" ||
                    formData.userName === ""
                  ) {
                    alert("Please fill in all fields before continuing.");
                    return;
                  }
                }

                // VERIFICATION OF STEP 2
                if (step === 2) {
                  if (
                    formData.email === "" ||
                    formData.phoneNumber === "" ||
                    formData.password === "" ||
                    formData.confirmPassword === ""
                  ) {
                    alert("Please fill in all fields before continuing.");
                    return;
                  }
                }

                // VERIFICATION OF STEP 3
                if (step === 3) {
                  if (formData.dob === "") {
                    alert("Please fill in all fields before continuing.");
                    return;
                  }
                }

                // STEP SOLIH
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
