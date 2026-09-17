import Dimpgrad from "../assets/dimpgrad.jpg";

function About() {
  return (
    <section id="about" className="section-padding min-h-screen bg-[#240000]">
      <div className="container-main flex min-h-screen items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="flex justify-center lg:justify-center">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 rounded-full bg-[#800000]/30 blur-2xl"></div>

              <img
                src={Dimpgrad}
                alt="About me"
                className="relative w-[250px] sm:w-[320px] lg:w-[330px] rounded-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            {/* Section Label */}
            <div>


            </div>

            {/* Heading */}
            <h2 className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
              A little bit
              <br />
              <span className="text-[#E69A00]">about me.</span>
            </h2>

            {/* Description */}
            <p className="max-w-xl text-justify text-lg leading-8 text-[#fcb8b8]">
              I’m an Information Technology graduate who enjoys learning,
              exploring new ideas, and finding better ways to get things done.
              I’m responsible, adaptable, and always open to learning new
              things. I enjoy working with technology, organizing information,
              and developing new skills through hands-on experience.
            </p>

            <p className="max-w-xl text-justify text-lg leading-8 text-[#fcb8b8]">
              As I begin my professional journey, I’m eager to take on new
              challenges, grow my abilities, and continuously improve both
              personally and professionally.
            </p>

            {/* Small Info */}
            <div className="mt-2 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#E69A00]/40 px-5 py-2 text-sm text-[#E69A00]">
                IT Graduate
              </span>

              <span className="rounded-full border border-[#E69A00]/40 px-5 py-2 text-sm text-[#E69A00]">
                Tech Enthusiast
              </span>

              <span className="rounded-full border border-[#E69A00]/40 px-5 py-2 text-sm text-[#E69A00]">
                Always Learning
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
