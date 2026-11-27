function Ingredients() {
  const ingredients = [
    {
      category: "Base Ingredients",
      items: [
        { name: "Raw Mango", desc: "Firm, sour raw mangoes handpicked at the perfect stage", emoji: "🥭" },
        { name: "Lemon", desc: "Fresh, juicy lemons with thick rinds for maximum flavor", emoji: "🍋" },
        { name: "Green Chili", desc: "Spicy green chilies for that perfect kick of heat", emoji: "🌶️" },
        { name: "Amla (Gooseberry)", desc: "Indian gooseberry, rich in Vitamin C", emoji: "🫒" },
        { name: "Ginger", desc: "Fresh ginger root for warming, zesty notes", emoji: "🫚" },
        { name: "Garlic", desc: "Pungent garlic cloves for deep, savory flavor", emoji: "🧄" },
      ]
    },
    {
      category: "Spices",
      items: [
        { name: "Mustard Seeds", desc: "Yellow mustard seeds, roasted and ground fresh", emoji: "🟡" },
        { name: "Fenugreek Seeds", desc: "Methi dana for bitter-sweet complexity", emoji: "🌿" },
        { name: "Red Chili Powder", desc: "Kashmiri & Guntur chilies blended for color and heat", emoji: "🔴" },
        { name: "Turmeric", desc: "Pure haldi for golden color and anti-inflammatory benefits", emoji: "🟠" },
        { name: "Asafoetida (Hing)", desc: "A pinch of hing for the signature Indian aroma", emoji: "✨" },
        { name: "Fennel Seeds", desc: "Saunf for sweet, aromatic undertones", emoji: "🌱" },
      ]
    },
    {
      category: "Oils & Preservatives",
      items: [
        { name: "Mustard Oil", desc: "Cold-pressed kachi ghani mustard oil — the soul of our pickles", emoji: "🫗" },
        { name: "Sesame Oil", desc: "Gingelly oil used in South Indian style pickles", emoji: "🥜" },
        { name: "Rock Salt", desc: "Natural sendha namak, unrefined and mineral-rich", emoji: "🧂" },
        { name: "Jaggery", desc: "Organic gur for sweet pickle varieties", emoji: "🍯" },
      ]
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#3f704d' }}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: '#fbbf24' }}>
            Our Ingredients
          </h1>
          <p className="text-gray-200 mt-2 max-w-xl mx-auto">
            We believe great pickles start with great ingredients. Every component is carefully sourced and 100% natural.
          </p>
        </div>

        <div className="space-y-12">
          {ingredients.map((group, gi) => (
            <div key={gi}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2" style={{ color: '#fbbf24' }}>
                <span className="w-1 h-8 rounded-full" style={{ backgroundColor: '#fbbf24' }}></span>
                {group.category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-xl border-2 shadow-md hover:shadow-lg transition-all hover:scale-105" style={{ backgroundColor: '#e8f5e9', borderColor: '#708238' }}>
                    <span className="text-4xl flex-shrink-0">{item.emoji}</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg" style={{ color: '#708238' }}>{item.name}</h3>
                      <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl p-8 text-center border border-yellow-200" style={{ backgroundColor: 'rgba(251, 191, 36, 0.1)' }}>
          <h2 className="text-2xl font-bold text-white">Our Promise</h2>
          <p className="text-gray-200 mt-3 max-w-2xl mx-auto">
            Every ingredient is sourced from trusted local farmers. We never use artificial preservatives, colors, or flavors.
            What you get is pure, authentic, homemade goodness.
          </p>
          <div className="flex justify-center gap-8 mt-6 text-sm text-gray-200">
            <span>✅ No Preservatives</span>
            <span>✅ No Artificial Colors</span>
            <span>✅ Farm Fresh</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ingredients
