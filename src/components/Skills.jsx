import useScrollReveal from "../hooks/useScrollReveal";

function Skills() {
  const sectionRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="skills" className="min-h-screen bg-[#240000]">
  <div
    ref={sectionRef}
    className="scroll-reveal container-main flex min-h-screen flex-col items-center justify-center"
  >

    {/* Heading */}
    <h1 className="scroll-reveal visible delay-100 text-5xl font-bold text-[#E69A00]">
      EXPERTISE
    </h1>

    <h2 className="scroll-reveal visible delay-200 mt-4 text-center text-3xl font-bold text-white">
      What I can help you with
    </h2>

    {/* Expertise Cards */}
    <div className="mt-12 grid w-full grid-cols-1 gap-6 p-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Data & Processing */}
      <div className="scroll-reveal visible delay-100 rounded-2xl border border-[#E69A00]/20 bg-[#300000] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#E69A00]/60 hover:shadow-[0_0_20px_0_rgba(230,154,0,0.15)]">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E69A00]/10 text-2xl">
          🗂️
        </div>

        <h3 className="mb-5 text-xl font-bold text-[#E69A00]">
          Data & Processing
        </h3>

        <ul className="space-y-3 text-white/80">
          <li>• Data Entry</li>
          <li>• Data Processing</li>
          <li>• Data Validation</li>
          <li>• Records Management</li>
          <li>• File Organization</li>
        </ul>
      </div>

      {/* Administrative Support */}
      <div className="scroll-reveal visible delay-200 rounded-2xl border border-[#E69A00]/20 bg-[#300000] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#E69A00]/60 hover:shadow-[0_0_20px_0_rgba(230,154,0,0.15)]">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E69A00]/10 text-2xl">
          📁
        </div>

        <h3 className="mb-5 text-xl font-bold text-[#E69A00]">
          Administrative Support
        </h3>

        <ul className="space-y-3 text-white/80">
          <li>• Administrative Support</li>
          <li>• Office Documentation</li>
          <li>• Document Preparation</li>
          <li>• Records Filing</li>
          <li>• Confidential Information Handling</li>
        </ul>
      </div>

      {/* Professional Skills */}
      <div className="scroll-reveal visible delay-300 rounded-2xl border border-[#E69A00]/20 bg-[#300000] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#E69A00]/60 hover:shadow-[0_0_20px_0_rgba(230,154,0,0.15)]">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E69A00]/10 text-2xl text-white">
          ✦
        </div>

        <h3 className="mb-5 text-xl font-bold text-[#E69A00]">
          Professional Skills
        </h3>

        <ul className="space-y-3 text-white/80">
          <li>• Attention to Detail</li>
          <li>• Organization</li>
          <li>• Time Management</li>
          <li>• Communication</li>
          <li>• Teamwork</li>
          <li>• Adaptability</li>
        </ul>
      </div>

    </div>
  </div>
</section>
  );
}

export default Skills;
