function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-[#240000]">
  <div className="container-main flex min-h-screen flex-col items-center justify-center">

    {/* Heading */}
    <h1 className="text-5xl font-bold text-[#E69A00]">
      EXPERTISE
    </h1>

    <h2 className="mt-4 text-center text-3xl font-bold text-white">
      What I can help you with
    </h2>

    {/* Expertise Cards */}
    <div className="mt-12 grid w-full grid-cols-1 gap-6 p-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Data & Processing */}
      <div className="rounded-2xl border border-[#E69A00]/20 bg-[#300000] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#E69A00]/60">
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
      <div className="rounded-2xl border border-[#E69A00]/20 bg-[#300000] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#E69A00]/60">
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
      <div className="rounded-2xl border border-[#E69A00]/20 bg-[#300000] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#E69A00]/60">
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
