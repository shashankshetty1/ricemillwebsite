import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Carousel state for About section
  const [currentSlide, setCurrentSlide] = useState(0);

  // Rice mill story images
  const storyImages = [
    {
      url: "https://cdn.builder.io/api/v1/assets/56f6efa9d1064da8b2a3be334b211383/own-794882?format=webp&width=800",
      caption: "Our state-of-the-art rice processing machinery",
    },
    {
      url: "https://cdn.builder.io/api/v1/assets/56f6efa9d1064da8b2a3be334b211383/own1-aa3c4e?format=webp&width=800",
      caption: "Harekrishna Ricemill facility exterior",
    },
    {
      url: "https://cdn.builder.io/api/v1/assets/56f6efa9d1064da8b2a3be334b211383/own2-70c647?format=webp&width=800",
      caption: "Rice storage and packaging area",
    },
    {
      url: "https://cdn.builder.io/api/v1/assets/56f6efa9d1064da8b2a3be334b211383/own3-71a278?format=webp&width=800",
      caption: "Modern rice milling equipment in operation",
    },
    {
      url: "https://cdn.builder.io/api/v1/assets/56f6efa9d1064da8b2a3be334b211383/own4-1fa135?format=webp&width=800",
      caption: "Quality control and processing floor",
    },
    {
      url: "https://cdn.builder.io/api/v1/assets/56f6efa9d1064da8b2a3be334b211383/own5-1a29f9?format=webp&width=800",
      caption: "Advanced rice sorting and cleaning machinery",
    },
    {
      url: "https://cdn.builder.io/api/v1/assets/56f6efa9d1064da8b2a3be334b211383/own6-6e61f1?format=webp&width=800",
      caption: "Rice processing and packaging operations",
    },
    {
      url: "https://cdn.builder.io/api/v1/assets/56f6efa9d1064da8b2a3be334b211383/own7-3add38?format=webp&width=800",
      caption: "Premium quality rice ready for distribution",
    },
    {
      url: "https://cdn.builder.io/api/v1/assets/56f6efa9d1064da8b2a3be334b211383/own8-b72762?format=webp&width=800",
      caption: "Hand-selected rice grains ensuring quality",
    },
    {
      url: "https://cdn.builder.io/api/v1/assets/56f6efa9d1064da8b2a3be334b211383/rice-54b1ec?format=webp&width=800",
      caption: "Freshly processed rice varieties",
    },
    {
      url: "https://cdn.builder.io/api/v1/assets/56f6efa9d1064da8b2a3be334b211383/rice2-fa069a?format=webp&width=800",
      caption: "Premium rice grains in expert hands",
    },
    {
      url: "https://cdn.builder.io/api/v1/assets/56f6efa9d1064da8b2a3be334b211383/rice3-8a1e93?format=webp&width=800",
      caption: "Our signature rice blend collection",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % storyImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [storyImages.length]);

  // Carousel navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % storyImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + storyImages.length) % storyImages.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-rice-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-green-700">
                Harekrishna Ricemill
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#home"
                  className="text-green-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-green-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors"
                >
                  About
                </a>
                <a
                  href="#products"
                  className="text-green-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Products
                </a>
                <a
                  href="#contact"
                  className="text-green-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/32572865/pexels-photo-32572865.jpeg')`,
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Harekrishna Ricemill
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-rice-100 font-light leading-relaxed max-w-3xl mx-auto">
            ಸಾಂಪ್ರದಾಯಿಕ ಮೌಲ್ಯಗಳು ಮತ್ತು ಆಧುನಿಕ ತಂತ್ರಜ್ಞಾನದೊಂದಿಗೆ ಪ್ರೀಮಿಯಂ
            ಗುಣಮಟ್ಟದ ಅಕ್ಕಿ ಸಂಸ್ಕರಣೆ. ಮೂರು ದಶಕಗಳಿಗೂ ಹೆಚ್ಚು ���ಾಲ ಅತ್ಯುತ್ತಮ ಅಕ್ಕಿ
            ಉತ್ಪಾದನೆಗಳೊಂದಿಗೆ ಸಮುದಾಯಗಳಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದೆ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-lg"
            >
              Our Products
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg text-lg font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
                Our Story & Mission
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  ಉಡುಪಿ ಜಿಲ್ಲೆಯ ಕೊರ್ಗಿ ಅರ್ಕೋಲಿಯಲ್ಲಿ ವಿಜಯ್ ಶೆಟ್ಟಿ ಸ್ಥಾಪಿಸಿದ
                  ಹರೇಕೃಷ್ಣ ಅಕ್ಕಿ ಗಿರಣಿಯು ಹಲವಾರು ವರ್ಷಗಳಿಂದ ಸ್ಥಳೀಯ ಸಮುದಾಯಕ್ಕೆ
                  ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಬೇಯಿಸಿದ ಅಕ್ಕಿಯೊಂದಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದೆ.
                </p>
                <p>
                  ಸಮಂಜಸವಾದ ಬೆಲೆಯಲ್ಲಿ ಅಕ್ಕಿಯನ್ನು ನೀಡುವುದಕ್ಕೆ ಹೆಸರುವಾಸಿಯಾಗಿರುವ
                  ನಾವು, ವಿಶ್ವಾಸಾರ್ಹತೆ ಮತ್ತು ಶ್ರೇಷ್ಠತೆಗಾಗಿ ಕುಂದಾಪುರದಾದ್ಯಂತ ಬಲವಾದ
                  ಖ್ಯಾತಿಯನ್ನು ಗಳಿಸಿ��್ದೇವೆ.
                </p>
                <p>
                  ಗುಣಮಟ್ಟಕ್ಕೆ ನಮ್ಮ ಬದ್ಧತೆಯು ನಾವು ಒದಗಿಸುವ ಪ್ರತಿಯೊಂದು ಅಕ್ಕಿ
                  ಧಾನ್ಯವು ಅತ್ಯುನ್ನತ ಮಾನದಂಡಗಳನ್ನು ಪೂರೈಸುತ್ತದೆ ಎಂದು
                  ಖಚಿತಪಡಿಸುತ್ತದೆ. ಕುಟುಂಬ ಸ್ವಾಮ್ಯದ ವ್ಯವಹಾರವಾಗಿ, ನಮ್ಮ ಗ್ರಾಹಕರಿಗೆ
                  ಸಮರ್ಪಣೆ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಮೌಲ್ಯಗಳು ಮತ್ತು ಆಧುನಿಕ ಅಗತ್ಯಗಳ ಮೇಲೆ
                  ಕೇಂದ್ರೀಕರಿಸುವ ಮೂಲಕ ಸೇವೆ ಸಲ್ಲಿಸುವಲ್ಲಿ ನಾವು ಹೆಮ್ಮೆಪಡುತ್ತೇವೆ.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl shadow-2xl overflow-hidden h-96 lg:h-full min-h-[400px] bg-gray-100">
              {/* Main carousel image */}
              <div
                className="w-full h-full bg-cover bg-center transition-all duration-500 ease-in-out"
                style={{
                  backgroundImage: `url('${storyImages[currentSlide].url}')`,
                }}
              />

              {/* Navigation arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-sm md:text-base font-medium">
                  {storyImages[currentSlide].caption}
                </p>
              </div>

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {storyImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentSlide
                        ? "bg-white scale-125"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Slide counter */}
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentSlide + 1} / {storyImages.length}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-rice-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Our Premium Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Carefully processed and quality-tested rice varieties to meet all
              your culinary needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Raw Rice */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/586615/pexels-photo-586615.jpeg')`,
                }}
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  Raw Rice
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Unprocessed, natural rice grains with full nutritional value.
                  Perfect for traditional cooking methods and maximum health
                  benefits.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-semibold">
                    Premium Quality
                  </span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Boiled Rice */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/26341190/pexels-photo-26341190.jpeg')`,
                }}
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  Boiled Rice
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Steam-processed rice that retains essential nutrients while
                  offering enhanced texture and longer shelf life. Ideal for
                  daily consumption.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-semibold">
                    Popular Choice
                  </span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Broken Rice */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/586615/pexels-photo-586615.jpeg')`,
                }}
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  Broken Rice
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Cost-effective broken rice pieces perfect for making
                  traditional dishes, animal feed, and various culinary
                  preparations.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-semibold">
                    Economic Option
                  </span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Current Weather at Our Mill
            </h2>
            <p className="text-gray-600">
              Real-time weather conditions affect our rice processing quality
            </p>
          </div>

          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
            {weather ? (
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  {getWeatherIcon(weather.weather[0].main)}
                  <Thermometer className="w-6 h-6 text-red-500 ml-2" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">
                  {weather.name}
                </h3>
                <p className="text-4xl font-bold text-green-600 mb-2">
                  {Math.round(weather.main.temp)}°C
                </p>
                <p className="text-gray-600 capitalize mb-4">
                  {weather.weather[0].description}
                </p>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    Humidity: {weather.main.humidity}%
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <Cloud className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Loading weather data...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-rice-50 rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-green-800 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-green-800 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-green-800 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg text-lg font-medium transition-colors shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-green-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">
                      info@harekrishnaricemill.com
                    </span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <span className="text-gray-700">
                      123 Rice Mill Road,
                      <br />
                      Grain Market District,
                      <br />
                      Kolkata, West Bengal 700001
                    </span>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.59730109075!2d88.04952462949842!3d22.672670170318263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Harekrishna Ricemill Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Harekrishna Ricemill</h3>
              <p className="text-green-100 leading-relaxed">
                Premium quality rice processing with traditional values and
                modern technology. Your trusted partner for the finest rice
                products.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-green-100">
                <li>
                  <a
                    href="#home"
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-white transition-colors"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-green-100">
                <p>+91 98765 43210</p>
                <p>info@harekrishnaricemill.com</p>
                <p>123 Rice Mill Road, Kolkata</p>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-100">
            <p>&copy; 2024 Harekrishna Ricemill. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
