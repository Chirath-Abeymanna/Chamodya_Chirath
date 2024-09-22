import TextAnimation from "./components/TextAnimation";
import ContactForm from "./components/ContactForm";
function Contact() {
  return (
    <div className=" w-full min-h-screen bg-background pb-[20vh] overflow-x-hidden">
      <div className="h-[100vh] flex relative left-[20%] ">
        <div className="  pr-5">
          <TextAnimation text="G e t " changeSpeed={0.2} />
        </div>
        <div className=" pr-5">
          <TextAnimation text="  i n" changeSpeed={0.2} />
        </div>
        <div className="">
          <TextAnimation text="T o u c h" changeSpeed={0.2} />
        </div>
      </div>
      <div className="relative form-container w-full h-full flex justify-center overflow-x-hidden">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
