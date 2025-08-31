export default function About() {
  return (
    <section id="about" className="py-20 text-center bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent mb-6 animate-fade-in-down">
          WHO AM I?
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-lg md:text-xl leading-relaxed animate-fade-in-up">
         I'm Vivekanand, a creative video editor and visual storyteller with a passion for making content that grabs attention and keeps audiences hooked. Over time, I've helped brands and creators generate 15M+ views through high-retention edits, thumbnails, and trend-based content.

Beyond editing, I bring experience in shoots, camera handling, and storytelling, along with a unique mix of creativity and technical skill. With a love for cinema, acting, and visual design, I aim to craft content that not only looks good—but connects deeply with people.
        </p>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent mb-6 animate-fade-in-down">
          WHAT I DO?
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: "🎬 Video Editing", desc: "Crafting engaging short-form and long-form edits tailored for social media and brands. Specialized in retention-focused storytelling that grabs attention and keeps viewers watching." },
            { title: "🎨 Color Grading & Visuals", desc: "Enhancing footage with professional color correction, grading, and creative visuals to deliver cinematic quality." },
            { title: "🖼️ Thumbnails & Design", desc: "Designing scroll-stopping thumbnails and graphics that increase clicks, impressions, and engagement." },
            { title: "🎥 Production Assistance", desc: "Experience in on-set production — camera handling, outdoor shoots, script narration, and ensuring smooth flow during shoots." },
            { title: "🤖 AI-Powered Creativity", desc: "Leveraging AI tools and prompt engineering to speed up editing workflows, generate ideas, and push creative boundaries." },
            { title: "🎭 Acting & Performance", desc: "With a background in theatre, I bring creative expression and performance insights that add depth to storytelling." },
          ].map((s, i) => (
            <div key={i} className="bg-white/5 border border-purple-500/30 backdrop-blur-md p-6 rounded-xl 
            hover:-translate-y-2 hover:shadow-xl transition-all duration-300 
            hover:border-red-500/30 hover:bg-white/10 animate-fade-in-up">
              <h3 className="text-purple-500 font-bold mb-2">{s.title}</h3>
              <p className="text-gray-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
