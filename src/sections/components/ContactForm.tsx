import "../css/form.css";

function ContactForm() {
  return (
    <div className="main-container ml-5 w-[60vw] h-[80vh] bg-[#04364A] rounded-lg flex justify-around">
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

      <div className="form-card w-[40vw] m-12 ml-0 bg-white rounded-lg z-1">
        <form action="" className="m-5">
          <h1 className="text-[clamp(10px,1.5vw,30px)] font-semibold text-[#3C829A] mb-2">
            I'm Interested in,
          </h1>
          <div className="field-buttons text-gray-400">
            <button className=" field-button">UI /UX Design</button>
            <button className="field-button">Web Development</button>
            <button className="field-button ">Cyber Security</button>
            <button className="field-button ">Large Language models</button>
          </div>
          <div className="Name-container text-gray-400 mt-5">
            <label htmlFor="">You're Name</label> <br />
            <input type="text" className="w-[25vw] border-b-[3px]" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
