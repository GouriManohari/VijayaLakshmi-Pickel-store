function About() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#3f704d'}}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold">
            <span style={{color: '#fbbf24'}}>Our</span> <span style={{color: '#fbbf24'}}>Story</span>
          </h1>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto text-lg">
            A legacy of taste, tradition, and love — from our kitchen to yours.
          </p>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=400&fit=crop"
              alt="Pickle making"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">From Grandmother&apos;s Kitchen</h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              Vijaya Lakshmi Pickle Store was born from a passion for preserving traditional Indian pickle recipes that have been in our family for over 50 years.
            </p>
            <p className="text-gray-200 leading-relaxed mb-4">
              What started as a small home-based business making pickles for friends and family has grown into a beloved brand trusted by thousands of customers across India.
            </p>
            <p className="text-gray-200 leading-relaxed">
              Every jar of pickle we make carries the same love, care, and authenticity that our grandmother put into her very first batch.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="rounded-2xl p-8 md:p-12 mb-16" style={{backgroundColor: 'rgba(251, 191, 36, 0.1)', borderColor: '#fbbf24', border: '2px solid'}}>
        <h2 className="text-2xl font-bold text-center mb-10" style={{color: '#fbbf24'}}>What We Stand For</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Authenticity", emoji: "🏺", desc: "Traditional recipes with no shortcuts. We use age-old methods of sun-drying, stone grinding, and slow maturation." },
            { title: "Quality", emoji: "⭐", desc: "Every ingredient is carefully sourced — from farm-fresh raw mangoes to the finest mustard oil and spices." },
            { title: "Purity", emoji: "🌿", desc: "Zero preservatives, zero artificial colors, zero chemicals. Just pure, natural goodness in every bite." },
          ].map((v, i) => (
            <div key={i} className="text-center">
              <span className="text-4xl">{v.emoji}</span>
              <h3 className="text-lg font-semibold text-white mt-3">{v.title}</h3>
              <p className="text-gray-200 mt-2 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { number: "50+", label: "Years of Tradition" },
          { number: "20+", label: "Pickle Varieties" },
          { number: "10K+", label: "Happy Customers" },
          { number: "100%", label: "Natural Ingredients" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-3xl font-bold" style={{color: '#708238'}}>{stat.number}</p>
            <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
