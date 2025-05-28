import React, { useState, memo } from 'react';
import { PhoneIcon, MapPinIcon, StarIcon, CarIcon, UtensilsIcon, FlowerIcon, UsersIcon, WindIcon, MusicIcon, FacebookIcon, InstagramIcon, TwitterIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
export function LandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    guests: '',
    phone: '',
    message: ''
  });
  const testimonials = [{
    name: 'Priya & Arjun',
    text: 'Jalsa made our wedding day absolutely magical! The attention to detail and elegant decor exceeded our expectations.',
    rating: 5
  }, {
    name: 'Meera Sharma',
    text: 'Perfect venue for our anniversary celebration. The staff was incredibly professional and the ambiance was stunning.',
    rating: 5
  }, {
    name: 'Rajesh Kumar',
    text: 'Outstanding service and beautiful interiors. Our guests are still talking about the wonderful experience at Jalsa.',
    rating: 5
  }];
  const galleryImages = ['https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop', 'https://images.unsplash.com/photo-1520637836862-4d197d17c92a?w=600&h=400&fit=crop'];
  const amenities = [{
    icon: WindIcon,
    title: 'Air Conditioning',
    description: 'Climate controlled comfort'
  }, {
    icon: CarIcon,
    title: 'Valet Parking',
    description: 'Complimentary parking service'
  }, {
    icon: UtensilsIcon,
    title: 'Premium Catering',
    description: 'Multi-cuisine dining options'
  }, {
    icon: FlowerIcon,
    title: 'Decoration Services',
    description: 'Elegant floral arrangements'
  }, {
    icon: UsersIcon,
    title: '500+ Seating',
    description: 'Spacious accommodation'
  }, {
    icon: MusicIcon,
    title: 'Audio Visual',
    description: 'Professional sound & lighting'
  }];
  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&h=1080&fit=crop')`
    }}>
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-serif mb-4 text-amber-100">
            Jalsa
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
            Where Celebrations Begin
          </p>
          <button className="bg-gradient-to-r from-amber-400 to-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-500 hover:to-amber-700 transition-all duration-300 shadow-lg">
            Book Now
          </button>
        </div>
      </section>
      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-b from-rose-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif text-gray-800 mb-6">
                About Jalsa
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Established in 2022, Jalsa has quickly become the premier
                destination for weddings and celebrations in the city. Our
                commitment to elegance and grandeur ensures that every event
                becomes a cherished memory.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With our blend of traditional Indian aesthetics and modern
                amenities, we create the perfect ambiance for your special
                moments. From intimate gatherings to grand celebrations, Jalsa
                is where your dreams come to life.
              </p>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop" alt="Jalsa Banquet Hall Interior" className="rounded-lg shadow-2xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center text-gray-800 mb-12">
            Our Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Amenities Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-rose-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center text-gray-800 mb-12">
            Our Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <amenity.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {amenity.title}
                  </h3>
                </div>
                <p className="text-gray-600">{amenity.description}</p>
              </div>)}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center text-gray-800 mb-12">
            What Our Clients Say
          </h2>
          <div className="relative">
            <div className="bg-gradient-to-r from-rose-50 to-amber-50 p-8 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-amber-400 fill-current" />)}
              </div>
              <p className="text-lg text-gray-700 text-center mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-center font-semibold text-gray-800">
                - {testimonials[currentTestimonial].name}
              </p>
            </div>
            <button onClick={prevTestimonial} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
            </button>
            <button onClick={nextTestimonial} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-rose-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center text-gray-800 mb-12">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <MapPinIcon className="w-6 h-6 text-amber-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Address
                  </h3>
                </div>
                <p className="text-gray-700 ml-9">
                  123 Wedding Street, Celebration City
                  <br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <PhoneIcon className="w-6 h-6 text-amber-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                </div>
                <p className="text-gray-700 ml-9">+91 98765 43210</p>
              </div>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Google Maps Integration</p>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" required />
                  <input type="date" name="date" placeholder="Event Date" value={formData.date} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input type="number" name="guests" placeholder="Number of Guests" value={formData.guests} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" required />
                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" required />
                </div>
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 mb-4"></textarea>
                <button type="submit" className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-white py-3 rounded-lg font-semibold hover:from-amber-500 hover:to-amber-700 transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-serif mb-4 text-amber-400">Jalsa</h3>
              <p className="text-gray-400">Where Celebrations Begin</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <FacebookIcon className="w-6 h-6 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors duration-300" />
                <InstagramIcon className="w-6 h-6 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors duration-300" />
                <TwitterIcon className="w-6 h-6 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors duration-300" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Jalsa Banquet Hall. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>;
}