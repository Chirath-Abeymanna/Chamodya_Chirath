import { useState } from "react";
import "../css/form.css";

function ContactForm() {
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);

  const toggleButton = (label: string) => {
    // Check if button is already selected
    if (selectedButtons.includes(label)) {
      // Remove it from selected buttons
      setSelectedButtons(selectedButtons.filter((btn) => btn !== label));
    } else {
      // Add it to selected buttons
      setSelectedButtons([...selectedButtons, label]);
    }
  };

  const isSelected = (label: string) => {
    return selectedButtons.includes(label);
  };
  return (
    <div className="main-container ml-5 w-[60vw] h-max bg-[#04364A] rounded-lg flex justify-around items-center">
      {/* Left side container */}
      <div className="w-[27vw]">
        <div className="relative top-[25%] left-3 font-poppins font-medium text-white z-0">
          <h1 className="mb-2 text-[clamp(10px,1.5vw,30px)]">
            Let's Create Something
          </h1>
          <h1 className="mb-2 text-[clamp(15px,3vw,50px)] font-bold text-[#64CCC5]">
            Incredible
          </h1>
          <h1 className=" text-[clamp(22px,4vw,65px)] font-bold">Together</h1>
        </div>
      </div>

      {/* Creating form part */}

      <div className="relative form-card w-[40vw] h-max m-12 ml-0 bg-white rounded-lg z-1 ">
        <form action="" className="m-5 relativep-1 ">
          <h1 className="text-[clamp(10px,1.5vw,30px)] font-semibold text-[#3C829A] mb-2">
            I'm Interested in,
          </h1>
          <div className="field-buttons text-gray-400">
            <button
              type="button"
              className={`field-button ${
                isSelected("UI /UX Design") ? "selected" : ""
              }`}
              onClick={() => toggleButton("UI /UX Design")}
            >
              UI /UX Design
            </button>
            <button
              type="button"
              className={`field-button ${
                isSelected("Web Development") ? "selected" : ""
              }`}
              onClick={() => toggleButton("Web Development")}
            >
              Web Development
            </button>
            <button
              type="button"
              className={`field-button ${
                isSelected("Cyber Security") ? "selected" : ""
              }`}
              onClick={() => toggleButton("Cyber Security")}
            >
              Cyber Security
            </button>
            <button
              type="button"
              className={`field-button ${
                isSelected("Large Language models") ? "selected" : ""
              }`}
              onClick={() => toggleButton("Large Language models")}
            >
              Large Language models
            </button>
          </div>
          <div className="Name-container text-gray-400 mt-5 pt-5">
            <input
              type="text"
              placeholder="John doe"
              className="w-[25vw] border-b-[3px] mt-2"
              required
            />
            <label htmlFor="" className="absolute top-0">
              You're Name
            </label>
          </div>
          <div className="email-container text-gray-400 mt-5 pt-5">
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-[25vw] border-b-[3px] mt-2"
              required
            />
            <label htmlFor="" className="absolute">
              You're Email
            </label>
          </div>
          <div className="description-area text-gray-400 mt-5 relative">
            <br />
            <textarea
              name=""
              id=""
              className="w-[25vw] h-[15vh] border mt-2"
            ></textarea>
            <label htmlFor="" className="absolute">
              You're Message
            </label>
          </div>
          <div className="mt-5 w-full h-max flex justify-end">
            <button
              type="submit"
              className="relative ml-auto p-2 bg-[#3C829A] text-white pl-7 pr-7 rounded-sm hover:bg-[#165e76]"
            >
              <i className="fa fa-paper-plane"></i> Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
