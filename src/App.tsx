import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Zap, 
  Building2, 
  Shield, 
  Clock, 
  Wrench, 
  Star, 
  ChevronRight, 
  Heart, 
  Award, 
  CheckCircle, 
  Lightbulb, 
  Home, 
  Power,
  Sun, 
  Network,
  Menu,
  X,
  Settings,
  Plug
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    serviceType: '',
    projectDetails: '',
    consent: false
  });

  const serviceTypes = [
    'Residential Electrical',
    'Commercial Electrical',
    'Emergency Services',
    'Electrical Repairs',
    'Lighting Installation',
    'EV Charging Solutions',
    'Solar Installation',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      consent: e.target.checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md border-b border-gray-100' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">Coastline Current</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Services</a>
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium transition-colors">About</a>
              <a href="#" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Contact</a>
              <a href="tel:1234567890" className="flex items-center text-gray-900 font-semibold hover:text-red-600 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                (123) 456-7890
              </a>
              <button className="bg-red-600 text-white px-6 py-2.5 font-semibold tracking-wide hover:bg-red-700 transition-colors">
                Get FREE Quote
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-gray-700 hover:text-red-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Services</a>
                <a href="#" className="text-gray-700 hover:text-red-600 font-medium transition-colors">About</a>
                <a href="#" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Contact</a>
                <a href="tel:1234567890" className="flex items-center text-gray-900 font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  (123) 456-7890
                </a>
                <button className="bg-red-600 text-white px-6 py-2.5 font-semibold tracking-wide hover:bg-red-700 transition-colors w-full">
                  Get FREE Quote
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-8 relative">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-1/2 pt-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Expert Electrical Services for Your
                <span className="text-red-600"> Peace of Mind</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                Serving Homes & Businesses with Professional Excellence and Unmatched Expertise
              </p>
              
              {/* Image Placeholder */}
              <div className="relative">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80" 
                    alt="Professional Electrician at Work"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white px-6 py-3 shadow-xl rounded-xl">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="font-bold text-gray-900">4.9/5</span>
                    <span className="text-gray-600">(2,000+ Reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full lg:-mt-8">
              <div className="bg-white p-8 shadow-xl rounded-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Get Your Free Quote</h3>
                    <p className="text-gray-600 mt-1">We'll get back to you within 24 hours</p>
                  </div>
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors"
                        placeholder="(123) 456-7890"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Type of Service</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors appearance-none bg-white"
                    >
                      <option value="">Select a service</option>
                      {serviceTypes.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Project Details</label>
                    <textarea
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors"
                      rows={4}
                      placeholder="Tell us about your project needs..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleConsentChange}
                      className="mt-1.5 rounded border-gray-300 text-red-600 focus:ring-2 focus:ring-red-500"
                    />
                    <label className="text-sm text-gray-600">
                      I consent to receive SMS notifications, alerts & occasional marketing communication from Coastline Current Solutions.
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold tracking-wide hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Get Your Free Quote</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our{' '}
                    <a href="#" className="text-red-600 hover:text-red-700">Privacy Policy</a>
                    {' '}and{' '}
                    <a href="#" className="text-red-600 hover:text-red-700">Terms of Service</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold">Licensed & Insured</h3>
                <p className="text-sm text-gray-600">Full protection & peace of mind</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold">24/7 Service</h3>
                <p className="text-sm text-gray-600">Always here when you need us</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold">40+ Years Experience</h3>
                <p className="text-sm text-gray-600">Trusted expertise you can rely on</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold">10,000+ Projects</h3>
                <p className="text-sm text-gray-600">Successfully completed projects</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold">100% Vetted Experts</h3>
                <p className="text-sm text-gray-600">Professional certified team</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold">4.9/5 Rating</h3>
                <p className="text-sm text-gray-600">2,000+ satisfied customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Professional solutions for all your electrical needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Residential & Commercial",
                description: "From installations to maintenance and safety checks, our licensed electricians ensure your space meets all electrical standards.",
                color: "blue"
              },
              {
                icon: Settings,
                title: "Repairs and Upgrades",
                description: "Whether you need urgent repairs, system upgrades, or routine maintenance, we're here to help ensure your home's electrical system is modern, compliant, and safe.",
                color: "orange"
              },
              {
                icon: Home,
                title: "New Home Builds",
                description: "We provide expert wiring, lighting, and smart home integration to make your new house safe and energy-efficient from the start.",
                color: "green"
              },
              {
                icon: Zap,
                title: "Emergency Services",
                description: "Available 24/7 for emergency electrical services. Quick response times to address urgent issues, preventing potential hazards and minimizing downtime.",
                color: "red"
              },
              {
                icon: Power,
                title: "Generator Installation & Maintenance",
                description: "Ideal for residential and commercial properties that require backup power solutions to safeguard against unexpected power outages.",
                color: "purple"
              },
              {
                icon: Plug,
                title: "EV Charger Installation",
                description: "We provide both residential and commercial installation solutions that are compatible with all leading electric vehicle models.",
                color: "cyan"
              },
              {
                icon: Sun,
                title: "Solar Power Systems",
                description: "Harness the power of the sun with our solar installation services. We offer design, installation, and maintenance of solar panels for homes and businesses looking to reduce energy costs.",
                color: "yellow"
              },
              {
                icon: Network,
                title: "Data & Communication Lines",
                description: "We install and repair all forms of data and communication lines, including telephone and Ethernet cables, ensuring your home or business stays connected with reliable and high-speed communication networks.",
                color: "indigo"
              },
              {
                icon: Lightbulb,
                title: "Outdoor Lighting",
                description: "Our services include the design and installation of pathway lights, security lights, decorative lighting, and outdoor CCTV to enhance and secure exterior spaces.",
                color: "amber"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <service.icon className={`w-6 h-6
                      ${service.color === 'blue' ? 'text-blue-500' : ''}
                      ${service.color === 'orange' ? 'text-orange-500' : ''}
                      ${service.color === 'green' ? 'text-green-500' : ''}
                      ${service.color === 'red' ? 'text-red-500' : ''}
                      ${service.color === 'purple' ? 'text-purple-500' : ''}
                      ${service.color === 'cyan' ? 'text-cyan-500' : ''}
                      ${service.color === 'yellow' ? 'text-yellow-500' : ''}
                      ${service.color === 'indigo' ? 'text-indigo-500' : ''}
                      ${service.color === 'amber' ? 'text-amber-500' : ''}
                    `} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <a href="#" className="text-gray-600 hover:text-gray-900 text-sm inline-flex items-center transition-colors">
                      Learn more
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600">What sets us apart from the rest</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              {
                icon: Heart,
                title: "Family-Owned & Operated",
                description: "Our team treats every project like it's for our own home, delivering personalized service with a genuine care for your needs.",
                iconColor: "pink"
              },
              {
                icon: Shield,
                title: "Fully Licensed & Insured",
                description: "Rest easy knowing our team holds all relevant certifications and comprehensive insurance coverage for your protection.",
                iconColor: "blue"
              },
              {
                icon: Award,
                title: "Satisfaction Guaranteed",
                description: "With a 99% client satisfaction rate, we stand behind our work with a commitment to excellence and customer satisfaction.",
                iconColor: "yellow"
              }
            ].map((reason, index) => (
              <div key={index} className="relative bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center justify-center w-16 h-16 mb-6">
                  <reason.icon className={`w-8 h-8
                    ${reason.iconColor === 'pink' ? 'text-pink-500' : ''}
                    ${reason.iconColor === 'blue' ? 'text-blue-500' : ''}
                    ${reason.iconColor === 'yellow' ? 'text-yellow-500' : ''}
                  `} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Real feedback from our valued customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                content: "My mum had Caileb and Jesse from Coastal Current Solutions install a new electric oven for her. She was really happy with their work. They were friendly, on time and she would highly recommend them to anyone else.",
                author: "Rhonda Butt",
                image: "/testimonials/person1.jpg"
              },
              {
                content: "Big shoutout to team at Coastline Current Solutions! My hot water system died on me, and they came out quick to sort it. While they were here, they even fixed up the dodgy lighting in my shed without me even asking. Legends! Can't thank them enough – everything's running sweet now. If you need a sparkie, these are the ones to call!",
                author: "Jordan Nikora",
                image: "/testimonials/person2.jpg"
              },
              {
                content: "Massive thank you to the team at Coastline Current Solutions. They went above and beyond to provide outstanding service to our family when we were in need. The team were very friendly and reliable and showed up on time. Their quality of work is very professional, and I will definitely be using the team at Coastline Current Solutions again. Big Thank you once again.",
                author: "Tristen Mar",
                image: "/testimonials/person3.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 inline-block text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <span className="font-medium text-gray-900">{testimonial.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-600 to-red-500 rounded-2xl overflow-hidden">
            <div className="px-8 py-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
                Contact us today for a free quote and experience the difference of working with true professionals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-red-600 font-medium hover:bg-red-50 transition-colors">
                  Get Free Quote
                </a>
                <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-red-700 text-white font-medium hover:bg-red-800 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 pt-20 pb-10 text-gray-400">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Zap className="w-8 h-8 text-red-500" />
                <span className="text-xl font-bold text-white">Coastline Current</span>
              </div>
              <p>Licensed Electrical Contractor</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-red-500 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-red-500 transition-colors">Residential</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Commercial</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Emergency</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Solar & EV</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Contact</h4>
              <ul className="space-y-4">
                <li>Mon-Fri: 8am - 6pm</li>
                <li>24/7 Emergency Service</li>
                <li>
                  <a href="tel:1234567890" className="text-red-500 font-semibold hover:text-red-400 transition-colors">
                    (123) 456-7890
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p> 2024 Coastline Current. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;