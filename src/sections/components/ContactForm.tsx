import { useState } from "react";
import emailjs from "emailjs-com";
import "../css/form.css";

function ContactForm() {
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toggleButton = (label: string) => {
    if (selectedButtons.includes(label)) {
      setSelectedButtons(selectedButtons.filter((btn) => btn !== label));
    } else {
      setSelectedButtons([...selectedButtons, label]);
    }
  };

  const isSelected = (label: string) => {
    return selectedButtons.includes(label);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const selectedFields = selectedButtons.join(", ");

    // Replace with your actual EmailJS credentials
    const serviceId = "service_dzcyzpg";
    const templateId = "template_zkjqy8p";
    const userId = "JRxpWnHu2CPz8Gt-L";

    // Send email using EmailJS
    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          message: message,
          selected: selectedFields,
        },
        userId
      )
      .then(
        (response) => {
          console.log(selectedFields);
          console.log(typeof selectedFields);
          setFormData({ name: "", email: "", message: "" });
          setSelectedButtons([]);
        },
        (error) => {
          alert("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <div className="main-container">
      <div className="title-container">
        <div className="relative">
          <h1 className="line-one">Let's Create Something</h1>
          <h1 className="line-two">Incredible</h1>
          <h1 className="line-three">Together</h1>
        </div>
      </div>

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <h1>I'm Interested in,</h1>
          <div className="field-buttons">
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

          <div className="Name-container">
            <input
              type="text"
              name="name"
              placeholder="John doe"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="name" className="name-label">
              Your Name
            </label>
          </div>

          <div className="email-container">
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="email" className="email-label">
              Your Email
            </label>
          </div>

          <div className="description-area">
            <label htmlFor="message" className="message-label">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <div>
            <button type="submit">
              <i className="fa fa-paper-plane"></i> Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
