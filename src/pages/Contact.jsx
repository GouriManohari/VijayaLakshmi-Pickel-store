import { useState } from "react"
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi"
import toast from "react-hot-toast"

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // In production, this would send to the backend
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you soon.")
      setForm({ name: "", email: "", subject: "", message: "" })
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#3f704d'}}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            Get in <span style={{color: '#fbbf24'}}>Touch</span>
          </h1>
          <p className="text-gray-200 mt-2">We&apos;d love to hear from you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: <FiPhone size={24} />, title: "Phone", info: "+91 98765 43210", sub: "Mon-Sat, 9am-6pm" },
            { icon: <FiMail size={24} />, title: "Email", info: "info@vijayalakshmi.com", sub: "We reply within 24 hours" },
            { icon: <FiMapPin size={24} />, title: "Address", info: "Hyderabad, Telangana", sub: "India - 500001" },
          ].map((item, i) => (
            <div key={i} className="text-center bg-green-50 p-6 rounded-xl border border-green-200">
              <div style={{color: '#708238'}} className="flex justify-center mb-3">{item.icon}</div>
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-700 mt-1">{item.info}</p>
              <p className="text-sm text-gray-400 mt-1">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto rounded-xl shadow-lg p-8 border border-gray-100" style={{backgroundColor: '#f5f1e8'}}>
          <h2 className="text-xl font-bold text-gray-800 mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#708238] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#708238] focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#708238] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#708238] focus:border-transparent resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer"
              style={{backgroundColor: '#708238'}}
              onMouseEnter={(e) => !loading && (e.target.style.backgroundColor = '#5a6630')}
              onMouseLeave={(e) => !loading && (e.target.style.backgroundColor = '#708238')}
            >
              <FiSend /> {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
