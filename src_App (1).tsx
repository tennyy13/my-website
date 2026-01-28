import { useState, FormEvent, useEffect } from 'react';
import { 
  BookOpen, 
  Check, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Star, 
  Layers, 
  Palette, 
  Megaphone, 
  Users,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  package?: string;
}

export function App() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    package: '',
  });

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.firstName}! Your message has been sent to katiejones.reads@gmail.com. I will reply as fast as I can.`);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '', package: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const packages = [
    {
      name: "Starter Package",
      price: "$230",
      features: [
        "Placement in 5–7 carefully matched book clubs",
        "21–32 verified reviews (Amazon, Goodreads, BookBub)",
        "Targeted introduction to ideal readers",
        "Campaign completed in 3–4 weeks"
      ]
    },
    {
      name: "Growth Package",
      price: "$293",
      features: [
        "Placement in 8–10 active book clubs",
        "37–47 verified reviews with meaningful feedback",
        "Buzz through discussions and organic shares",
        "Duration: 3–4 weeks"
      ]
    },
    {
      name: "Momentum Package",
      price: "$366",
      recommended: true,
      features: [
        "Placement in 12–15 high-engagement clubs",
        "52–68 verified reviews plus extended reader commentary",
        "Amplified exposure via social media and blogs",
        "Duration: 4–5 weeks"
      ]
    },
    {
      name: "Prime Exposure",
      price: "$440",
      authorsChoice: true,
      features: [
        "Placement in 15–18 top-performing clubs",
        "Including influencer groups",
        "74–89 verified reviews with added reach",
        "Engagement performance snapshot provided",
        "Duration: 4–6 weeks"
      ]
    },
    {
      name: "Ultimate Impact",
      price: "$524",
      features: [
        "Placement in 20–25 elite book clubs",
        "High-influence communities",
        "105+ verified reviews",
        "Fan videos, podcasts & influencer boosts",
        "Comprehensive campaign report",
        "Personalized growth consultation",
        "Runs for 5–6 weeks"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCFBF9] text-[#1A1A1A] font-[Inter] selection:bg-[#5D4037] selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 bg-[#5D4037] flex items-center justify-center rounded-lg text-white group-hover:rotate-12 transition-transform">
              <BookOpen size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#5D4037]">KATIE JONES READS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium">
            <button onClick={() => scrollToSection('about')} className="hover:text-[#5D4037] transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-[#5D4037] transition-colors">Services</button>
            <button onClick={() => scrollToSection('packages')} className="hover:text-[#5D4037] transition-colors">Packages</button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-[#5D4037] text-white rounded-full hover:bg-[#3E2723] transition-all shadow-lg hover:shadow-[#5D4037]/20"
            >
              Get Free Check
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-[#5D4037]/5 rounded-l-[100px] hidden lg:block" />
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5D4037]/10 text-[#5D4037] rounded-full text-sm font-semibold uppercase tracking-wider">
                <Star size={16} fill="currentColor" />
                eBook Promotion Specialist
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-[#1A1A1A]">
                Get Your Book Ready to <span className="text-[#5D4037]">Rank, Sell & Reach</span> More Readers
              </h1>
              <p className="text-xl text-zinc-600 leading-relaxed">
                I help authors format their books, find the right keywords, set up categories, design covers, and promote their books in active reading communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-[#5D4037] text-white text-lg font-bold rounded-2xl hover:bg-[#3E2723] transition-all shadow-xl hover:shadow-[#5D4037]/30 flex items-center justify-center gap-2"
                >
                  Get a Free Check <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => scrollToSection('packages')}
                  className="px-8 py-4 bg-white border-2 border-[#5D4037] text-[#5D4037] text-lg font-bold rounded-2xl hover:bg-[#5D4037]/5 transition-all"
                >
                  View Packages
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border-[12px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop" 
                  alt="Reading Specialist" 
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl z-20 hidden md:block border-l-8 border-[#5D4037]">
                <p className="text-4xl font-bold text-[#5D4037]">100+</p>
                <p className="text-zinc-500 font-medium">Authors Helped</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/3">
                <div className="aspect-square rounded-full overflow-hidden border-[10px] border-[#FCFBF9] shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" 
                    alt="Katie Jones" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 space-y-6">
                <h2 className="text-3xl font-bold text-[#5D4037] border-b-4 border-[#5D4037] inline-block pb-1">About Me</h2>
                <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                  <p>
                    I am an eBook specialist who has worked with hundreds of authors across different genres. I started by helping new writers format and prepare their books for publishing, and over time I expanded into keyword research, categories setup, book cover design, and marketing support.
                  </p>
                  <p>
                    Today, I work with authors who want a smooth publishing process and real results. I focus on making sure every book is properly formatted, ranked with the right keywords, placed in strong categories, and promoted to active reading communities. My goal is simple: help you get more visibility, more readers, and more sales.
                  </p>
                  <p className="font-medium italic text-[#5D4037]">
                    Whether you are just starting your first book or you already have a series, I bring experience, patience, and a clear process that gets your book ready for success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#FCFBF9]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Professional Services</h2>
            <div className="w-20 h-1.5 bg-[#5D4037] mx-auto mb-6"></div>
            <p className="text-xl text-zinc-600">Everything you need to turn your manuscript into a bestseller.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "eBook Formatting",
                desc: "I format your eBook for Kindle, PDF, EPUB and other platforms so that it looks clean and professional.",
                icon: <Layers className="text-[#5D4037]" size={32} />,
                img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop"
              },
              {
                title: "Cover Design",
                desc: "Simple, clean and attractive covers that fit your genre and get attention from potential readers.",
                icon: <Palette className="text-[#5D4037]" size={32} />,
                img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop"
              },
              {
                title: "Launch Strategy",
                desc: "I help you promote your book to the right audience with a simple launch plan that actually works.",
                icon: <Megaphone className="text-[#5D4037]" size={32} />,
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
              },
              {
                title: "Community Growth",
                desc: "I share your book in active reading communities so you can grow your readers and get more views.",
                icon: <Users className="text-[#5D4037]" size={32} />,
                img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop"
              }
            ].map((service, i) => (
              <div key={i} className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 flex flex-col h-full">
                <div className="h-48 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 text-white font-bold text-xl">{service.title}</div>
                </div>
                <div className="p-8 space-y-4 flex-grow">
                  <div className="w-12 h-12 bg-[#5D4037]/10 rounded-xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  <p className="text-zinc-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Works Section */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">My Works</h2>
              <p className="text-xl text-zinc-400 max-w-xl">
                Here are some of the books I've worked on. Each project includes formatting, setup, or promotional support.
              </p>
            </div>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[#8D6E63] font-bold hover:text-white transition-colors flex items-center gap-2 mb-2"
            >
              See Case Studies <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-20">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="relative group rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={`https://images.unsplash.com/photo-${item === 1 ? '1543002588-bfa74002ed7a' : 
                         item === 2 ? '1560472354-b33ff0c44a43' : 
                         item === 3 ? '1581578731548-9d101ab9535b' : 
                         item === 4 ? '1608043152266-472d5b29bfd9' : 
                         '1512820790803-83ca734da794'}?w=300&h=450&fit=crop`} 
                  alt={`Book ${item}`} 
                  className="w-full aspect-[2/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#5D4037]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-[#1A1A1A] px-4 py-2 rounded-full font-bold text-sm">View Project</span>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-[#5D4037] p-10 lg:p-16 rounded-[40px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
            <div className="relative z-10 space-y-8 text-center">
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={24} fill="white" />)}
              </div>
              <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed italic">
                "Working with Katie completely changed how my book looked. Readers are commenting on how professional and clean the format feels. My sales jumped within days of launch."
              </blockquote>
              <div>
                <cite className="not-italic text-xl font-bold block">— Maria Santos</cite>
                <span className="text-white/70 italic">Author of Whispers of Dawn</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Book Club Campaign Packages</h2>
            <div className="w-20 h-1.5 bg-[#5D4037] mx-auto mb-6"></div>
            <p className="text-xl text-zinc-600 italic">Tailored to Elevate Your Story</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div 
                key={i} 
                className={`p-8 rounded-[32px] border-2 transition-all duration-300 flex flex-col ${
                  pkg.recommended 
                    ? 'bg-[#5D4037] text-white border-[#5D4037] shadow-2xl lg:scale-105 z-10' 
                    : 'bg-white text-[#1A1A1A] border-[#F1F1F1] hover:border-[#5D4037]/30 shadow-sm hover:shadow-xl'
                }`}
              >
                <div className="mb-8">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`text-2xl font-bold ${pkg.recommended ? 'text-white' : 'text-[#5D4037]'}`}>
                      {pkg.name}
                    </h3>
                    {pkg.recommended && (
                      <span className="bg-white text-[#5D4037] text-[10px] font-black uppercase px-2 py-1 rounded">Highly Recommended</span>
                    )}
                    {pkg.authorsChoice && (
                      <span className="bg-[#5D4037] text-white text-[10px] font-black uppercase px-2 py-1 rounded">Author's Choice</span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black">{pkg.price}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3">
                      <Check size={20} className={pkg.recommended ? 'text-white/70' : 'text-[#5D4037]'} />
                      <span className={pkg.recommended ? 'text-white/90' : 'text-zinc-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => {
                    setFormData({...formData, package: pkg.name});
                    scrollToSection('contact');
                  }}
                  className={`w-full py-4 rounded-2xl font-bold transition-all ${
                    pkg.recommended 
                      ? 'bg-white text-[#5D4037] hover:bg-zinc-100' 
                      : 'bg-[#5D4037] text-white hover:bg-[#3E2723]'
                  }`}
                >
                  Choose {pkg.name.split(' ')[0]}
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-[#FCFBF9] p-8 lg:p-12 rounded-[40px] border border-zinc-100 text-center max-w-4xl mx-auto">
            <p className="text-lg text-zinc-600 mb-0 italic">
              "Your book has a story that deserves to be heard and celebrated. Let’s bring it to the readers who will love it most starting now."
            </p>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 bg-[#FCFBF9] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to get started?</h2>
                <p className="text-xl text-zinc-600 leading-relaxed mb-8">
                  Send me a message with your book title and what you need help with. I’ll reply fast as i can.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-[#5D4037] group-hover:bg-[#5D4037] group-hover:text-white transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500 font-bold uppercase tracking-wider">Email Me</p>
                      <a href="mailto:katiejones.reads@gmail.com" className="text-xl font-bold hover:text-[#5D4037] transition-colors">katiejones.reads@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-[#5D4037] group-hover:bg-[#5D4037] group-hover:text-white transition-colors">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500 font-bold uppercase tracking-wider">Contact</p>
                      <p className="text-xl font-bold">3178158</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[32px] shadow-xl space-y-6 border border-zinc-100">
                <h3 className="text-2xl font-bold">To Begin, Please provide:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-[#5D4037] mt-1" size={18} />
                    <span>Book file (PDF or ePub)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#5D4037] mt-1" size={18} />
                    <span>Preferred sales link (Amazon, Goodreads, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#5D4037] mt-1" size={18} />
                    <span>Optional promo assets (cover, tagline, etc.)</span>
                  </li>
                </ul>
                <div className="h-px bg-zinc-100" />
                <h4 className="font-bold">For invoicing:</h4>
                <p className="text-zinc-600">Full name, Email address, Location (state and country)</p>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-12 rounded-[40px] shadow-2xl shadow-[#5D4037]/5 border border-zinc-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 ml-1">First name*</label>
                    <input 
                      type="text" 
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5D4037]/20 focus:border-[#5D4037] transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 ml-1">Last name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5D4037]/20 focus:border-[#5D4037] transition-all" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700 ml-1">Email*</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5D4037]/20 focus:border-[#5D4037] transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700 ml-1">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your number"
                    className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5D4037]/20 focus:border-[#5D4037] transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700 ml-1">Select Package (Optional)</label>
                  <select 
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5D4037]/20 focus:border-[#5D4037] transition-all appearance-none"
                  >
                    <option value="">Choose a package...</option>
                    {packages.map((pkg, i) => (
                      <option key={i} value={pkg.name}>{pkg.name}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700 ml-1">Write a message</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your book project..."
                    className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5D4037]/20 focus:border-[#5D4037] transition-all resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-5 bg-[#5D4037] text-white font-black text-lg rounded-2xl hover:bg-[#3E2723] shadow-xl hover:shadow-[#5D4037]/20 transition-all flex items-center justify-center gap-2"
                >
                  Submit Request <ArrowRight size={20} />
                </button>
                <p className="text-center text-xs text-zinc-400">I respect your privacy and will never share your details.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#5D4037] flex items-center justify-center rounded text-white">
                  <BookOpen size={18} />
                </div>
                <span className="text-xl font-bold tracking-tight">KATIE JONES READS</span>
              </div>
              <p className="text-zinc-400 max-w-sm leading-relaxed">
                Helping authors transform their books into professional, visible, and successful works through specialized formatting, design, and community promotion.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#5D4037] transition-colors"><Instagram size={20} /></a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#5D4037] transition-colors"><Facebook size={20} /></a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#5D4037] transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-4 text-zinc-400">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">eBook Formatting</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Cover Design</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Launch Strategy</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Community Promotion</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Contact</h4>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex gap-3"><Mail size={18} className="text-[#5D4037]" /> katiejones.reads@gmail.com</li>
                <li className="flex gap-3"><Phone size={18} className="text-[#5D4037]" /> 3178158</li>
                <li className="flex gap-3"><MapPin size={18} className="text-[#5D4037]" /> eBook Specialist</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
            <p>© {new Date().getFullYear()} Katie Jones Reads. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
