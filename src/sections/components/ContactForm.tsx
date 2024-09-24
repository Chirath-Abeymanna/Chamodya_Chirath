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
    <div className="main-container">
      {/* Left side container */}
      <div className="title-container">
        <div className="relative">
          <h1 className="line-one">Let's Create Something</h1>
          <h1 className="line-two">Incredible</h1>
          <h1 className="line-three">Together</h1>
        </div>
      </div>

      {/* Creating form part */}

      <div className=" form-card ">
        <form action="" className=" ">
          <h1 className="">I'm Interested in,</h1>
          <div className="field-buttons ">
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
          <div className="Name-container ">
            <input type="text" placeholder="John doe" className="" required />
            <label htmlFor="" className="name-label">
              You're Name
            </label>
          </div>
          <div className="email-container">
            <input
              type="email"
              placeholder="example@mail.com"
              className=""
              required
            />
            <label htmlFor="" className="email-label">
              You're Email
            </label>
          </div>
          <div className="description-area">
            <br />
            <textarea name="" id="" className=""></textarea>
            <label htmlFor="" className="meassage-label">
              You're Message
            </label>
          </div>
          <div className="">
            <button type="submit" className="">
              <i className="fa fa-paper-plane"></i> Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
