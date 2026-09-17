import Dimp from "../assets/Dimp.png";

function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-linear-[68deg]
        from-[#460000] from-25%
        via-[#800000]
        to-[#460000] to-75%
      "
    >
      {/* Bottom Dark Gradient - Full Screen */}
      <div
        className="
          absolute inset-x-0 bottom-0 z-0
          h-[40%]
          bg-gradient-to-t from-[#240000]/100 to-transparent
          md:h-[35%]
        "
      ></div>

      {/* Global Width Container */}
      <div className="container-main !py-0">
        
        {/* Center Hero Canvas */}
        <div className="flex min-h-screen items-center">
          
          {/* Hero Canvas */}
          <div className="relative h-[650px] w-full">
            
            {/* Background Text */}
            <h1
              className="
                absolute top-20 left-1/2 z-0
                -translate-x-1/2
                scale-x-[1.1] scale-y-[1.6]
                text-[70px]
                font-semibold
                text-[#b65353]
                roboto-regular
                md:top-10
                md:text-[100px]
                md:scale-y-[1.3]
                lg:text-[200px]
              "
            >
              PORTFOLIO
            </h1>

            {/* Profile Image */}
            <img
              src={Dimp}
              alt="Dimp"
              className="
                absolute left-1/2 top-15 z-10
                w-[440px]
                -translate-x-1/2
                mask-b-from-60%
                mask-b-to-90%
              "
            />

            {/* Dashed Line */}
            <div
              className="
                absolute
                top-80 left-[80%]
                z-10
                h-60 w-[2px]
                bg-[repeating-linear-gradient(to_bottom,#9F9F9F_0px,#9F9F9F_30px,transparent_30px,transparent_45px)]

                md:top-[390px]
                md:left-[67%]
                md:right-0
                md:h-[2px]
                md:w-auto
                md:bg-[repeating-linear-gradient(to_right,#9F9F9F_0px,#9F9F9F_50px,transparent_50px,transparent_70px)]
              "
            ></div>

            {/* Get in Touch Button */}
            <button
              className="
                absolute
                top-[314px] left-[66%]
                z-20
                -translate-x-[0%]
                rounded-lg
                bg-[#E69A00]
                px-2 py-3
                text-sm
                font-bold
                text-[#460000]

                md:top-[365px]
                md:left-[62%]
                md:-translate-x-[50%]
                md:px-4 md:py-3
                md:text-lg

                transition-all duration-300
                hover:bg-[#f2a100]
                hover:shadow-[0_0_30px_0_#ffba66]
              "
            >
              Get in Touch
            </button>

            {/* Introduction */}
            <div
              className="
                absolute
                top-120
                left-0
                right-0
                z-10
                md:top-80
              "
            >
              <div className="flex flex-col md:flex-row md:items-end md:justify-between">
                
                {/* Intro */}
                <div className="max-w-xl">
                  <p className="text-lg text-[#E69A00]">
                    Hi, I'm
                  </p>

                  <h2
                    className="
                      text-6xl
                      font-bold
                      text-[#f9f3f3]
                      hurricane-regular
                      md:text-[110px]
                    "
                  >
                    Dimple Kay
                  </h2>

                  <p
                    className="
                      mt-2
                      text-3xl
                      text-[#fcb8b8]
                      roboto-regular
                    "
                  >
                    Administrative Assistant
                  </p>
                </div>

                {/* Description */}
                <div className="max-w-md">
                  <p
                    className="
                      text-justify
                      text-[18px]
                      leading-relaxed
                      text-[#fcb8b8]
                      marck-script-regular
                    "
                  >
                    I provide reliable administrative support through accurate
                    data entry, organized records, document processing, and
                    efficient office operations.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;