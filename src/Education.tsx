import TextAnimation from "./components/TextAnimation";

function Education() {
  return (
    <div className="relative w-full h-[100vh] bg-[#252525]">
      <div className="relative top-[40%] text-6xl font-poppins">
        <TextAnimation
          paragraph="Extremely new to GSAP and I'm just trying to wrap my head around it. I did an initial google search but I kept on seeing other things mentioned that I don't quite understand yet.

 

Is it possible to remove the inline styles GSAP sets after the animation is complete? I'm just using a basic element.from()... animations that uses x and opacity. Is there a way to remove inline transform and opacity from the element in question after the animation is complete?"
        />
      </div>
    </div>
  );
}

export default Education;
