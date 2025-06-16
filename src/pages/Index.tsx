import { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Star,
  Shield,
  Award,
  Users,
} from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Carousel state for About section
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

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

  // Auto-advance carousel with pause on hover
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % storyImages.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [storyImages.length]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
    // Add form validation animation
    const form = e.target as HTMLFormElement;
    form.classList.add("animate-pulse");

    // Prepare email data
    const emailData = {
      to: "shettyshashank089@gmail.com",
      subject: `New Contact Form Message from ${formData.name}`,
      body: `
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}

Sent from Harekrishna Ricemill website contact form.
      `,
    };

    // Create mailto link
    const mailtoLink = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;

    setTimeout(() => {
      form.classList.remove("animate-pulse");
      window.location.href = mailtoLink;
      alert(
        "Thank you for your message! Your email client will open to send the message.",
      );
      setFormData({ name: "", email: "", message: "" });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-rice-50 scroll-smooth">
      {/* Add custom CSS for enhanced animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-scale {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .glass-effect {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .gradient-text {
          background: linear-gradient(135deg, #22c55e, #16a34a, #15803d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .parallax {
          transform: translateZ(0);
          will-change: transform;
        }
      `}</style>

      {/* Enhanced Navigation */}
      <nav className="glass-effect bg-white/90 shadow-lg border-b border-green-100 fixed w-full top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <h1 className="text-xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                Harekrishna Ricemill
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  { name: "Home", id: "home" },
                  { name: "About", id: "about" },
                  { name: "Products", id: "products" },
                  { name: "Contact", id: "contact" },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="relative text-green-700 hover:text-green-800 px-4 py-2 text-sm font-medium transition-all duration-300 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-700 group-hover:w-full transition-all duration-300"></span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Parallax Background */}
        <div
          className="absolute inset-0 parallax transition-transform duration-700"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('https://images.pexels.com/photos/32572865/pexels-photo-32572865.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-green-800/30"></div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full floating"></div>
        <div
          className="absolute bottom-32 right-16 w-16 h-16 bg-yellow-400/20 rounded-full floating"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-12 h-12 bg-green-300/30 rounded-full floating"
          style={{ animationDelay: "4s" }}
        ></div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-in">
            <span className="inline-block animate-scale">Harekrishna</span>
            <br />
            <span
              className="inline-block animate-scale"
              style={{ animationDelay: "0.2s" }}
            >
              Ricemill
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 text-rice-100 font-light leading-relaxed max-w-3xl mx-auto animate-in"
            style={{ animationDelay: "0.4s" }}
          >
            ಸಾಂಪ್ರದಾಯಿಕ ಮೌಲ್ಯಗಳು ಮತ್ತು ಆಧುನಿಕ ತಂತ್ರಜ್ಞಾನದೊಂದಿಗೆ ಪ್ರೀಮಿಯಂ
            ಗುಣಮಟ್ಟದ ಅಕ್ಕಿ ಸಂಸ್ಕರಣೆ. ಮೂರು ದಶಕಗಳಿಗೂ ಹೆಚ್ಚು ಕಾಲ ಅತ್ಯುತ್ತಮ ಅಕ್ಕಿ
            ಉತ್ಪಾದನೆಗಳೊಂದಿಗೆ ಸಮುದಾಯಗಳಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದೆ.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-in"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              onClick={() => scrollToSection("products")}
              className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="flex items-center justify-center">
                Our Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                Our Story & Mission
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p className="transform hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-green-50">
                  ಉಡುಪಿ ಜಿಲ್ಲೆಯ ಕೊರ್ಗಿ ಅರ್ಕೋಲಿಯಲ್ಲಿ ���ಿಜಯ್ ಶೆಟ್ಟಿ ಸ್ಥಾಪಿಸಿದ
                  ಹರೇಕೃಷ್ಣ ಅಕ್ಕಿ ಗಿರಣಿಯು ಹಲವಾರು ವರ್ಷಗಳಿಂದ ಸ್ಥಳೀಯ ಸಮುದಾಯಕ್ಕೆ
                  ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಬೇಯಿಸಿದ ಅಕ್ಕಿಯೊಂದಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದೆ.
                </p>
                <p className="transform hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-green-50">
                  ಸಮಂಜಸವಾದ ಬೆಲೆಯಲ್ಲಿ ಅಕ್ಕಿಯನ್ನು ನೀಡುವುದಕ್ಕೆ ಹೆಸರುವಾಸಿಯಾಗಿರುವ
                  ನಾವು, ವಿಶ್ವಾಸಾರ್ಹತೆ ಮತ್ತು ಶ್ರೇಷ್ಠತೆಗಾಗಿ ಕುಂದಾಪುರದಾದ್ಯಂತ ಬಲವಾದ
                  ಖ್ಯಾತಿಯನ್ನು ಗಳಿಸಿದ್ದೇವೆ.
                </p>
                <p className="transform hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-green-50">
                  ಗುಣಮಟ್ಟಕ್ಕೆ ನಮ್ಮ ಬದ್ಧತೆಯು ನಾವು ಒದಗಿಸುವ ಪ್ರತಿಯೊಂದು ಅಕ್ಕಿ
                  ಧಾನ್ಯವು ಅತ್ಯುನ್ನತ ಮಾನದಂಡಗಳನ್ನು ಪೂರೈಸುತ್ತದೆ ಎಂದು
                  ಖಚಿತಪಡಿಸುತ್ತದೆ. ಕುಟುಂಬ ಸ್ವಾಮ್ಯದ ವ್ಯವಹಾರವಾಗಿ, ನಮ್ಮ ಗ್ರಾಹಕರಿಗೆ
                  ಸಮರ್ಪಣೆ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಮೌಲ್ಯಗಳು ಮತ್ತು ಆಧುನಿಕ ಅಗತ್ಯಗಳ ಮೇಲೆ
                  ಕೇಂದ್ರೀಕರಿಸುವ ಮೂಲಕ ಸೇವೆ ಸಲ್ಲಿಸುವಲ್ಲಿ ನಾವು ಹೆಮ್ಮೆಪಡುತ್ತೇವೆ.
                </p>
              </div>

              {/* Key stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { icon: Award, label: "Years Experience", value: "30+" },
                  { icon: Users, label: "Happy Customers", value: "5000+" },
                  { icon: Shield, label: "Quality Guarantee", value: "100%" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center group hover:scale-110 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:rotate-12 transition-transform duration-300">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-green-800">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Carousel */}
            <div className="relative rounded-2xl shadow-2xl overflow-hidden h-96 lg:h-full min-h-[500px] bg-gray-100 group animate-on-scroll">
              {/* Main carousel image */}
              <div
                className="w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out transform group-hover:scale-105"
                style={{
                  backgroundImage: `url('${storyImages[currentSlide].url}')`,
                }}
              />

              {/* Enhanced navigation arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Enhanced caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm md:text-base font-medium">
                  {storyImages[currentSlide].caption}
                </p>
              </div>

              {/* Enhanced dot indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {storyImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                      index === currentSlide
                        ? "bg-white scale-125 shadow-lg"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Progress bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-black/20">
                <div
                  className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300"
                  style={{
                    width: `${((currentSlide + 1) / storyImages.length) * 100}%`,
                  }}
                ></div>
              </div>

              {/* Slide counter with enhanced styling */}
              <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                {currentSlide + 1} / {storyImages.length}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Products Section */}
      <section
        id="products"
        className="py-20 bg-gradient-to-br from-rice-50 to-green-50 relative"
      >
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Our Premium Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Carefully processed and quality-tested rice varieties to meet all
              your culinary needs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://cdn.builder.io/api/v1/assets/56f6efa9d1064da8b2a3be334b211383/rice-790b4a?format=webp&width=800",
                title: "BVK Kaje Rice (ಕುಚಲಕ್ಕಿ)",
                description:
                  "Traditional BVK Kaje Rice, also known as Kuchalakki in Kannada. Premium quality local variety with authentic taste and excellent nutritional value.",
                badge: "Local Specialty",
                color: "from-purple-500 to-purple-600",
              },
              {
                image:
                  "https://cdn.builder.io/api/v1/assets/56f6efa9d1064da8b2a3be334b211383/rice2-37a8a2?format=webp&width=800",
                title: "BVK Kaje Rice Premium (ಕುಚಲಕ್ಕಿ)",
                description:
                  "Hand-selected BVK Kaje Rice grains, known as Kuchalakki in Kannada. Perfect for traditional South Indian dishes with superior texture and flavor.",
                badge: "Hand Selected",
                color: "from-indigo-500 to-indigo-600",
              },
              {
                image:
                  "https://cdn.builder.io/api/v1/assets/56f6efa9d1064da8b2a3be334b211383/rice3-e13bb5?format=webp&width=800",
                title: "BVK Kaje Rice Special (ಕುಚಲಕ್ಕಿ)",
                description:
                  "Our finest BVK Kaje Rice collection, Kuchalakki in Kannada. Specially processed to maintain traditional taste while ensuring modern quality standards.",
                badge: "Chef's Choice",
                color: "from-pink-500 to-pink-600",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Product image with overlay */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Badge */}
                  <div
                    className={`absolute top-4 left-4 bg-gradient-to-r ${product.color} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}
                  >
                    {product.badge}
                  </div>

                  {/* Star rating */}
                  <div className="absolute top-4 right-4 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-4 group-hover:text-green-700 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <span
                      className={`bg-gradient-to-r ${product.color} bg-clip-text text-transparent font-semibold text-lg`}
                    >
                      {product.badge}
                    </span>
                    <button className="group/btn bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                      <span className="flex items-center">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-300 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23059669' points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Form */}
            <div className="glass-effect bg-gradient-to-br from-rice-50 to-green-50 rounded-2xl p-8 shadow-xl animate-on-scroll">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-green-800 mb-2 group-focus-within:text-green-600 transition-colors duration-300"
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
                    className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300 hover:border-green-300 bg-white/80 backdrop-blur-sm"
                    required
                  />
                </div>
                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-green-800 mb-2 group-focus-within:text-green-600 transition-colors duration-300"
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
                    className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300 hover:border-green-300 bg-white/80 backdrop-blur-sm"
                    required
                  />
                </div>
                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-green-800 mb-2 group-focus-within:text-green-600 transition-colors duration-300"
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
                    className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300 resize-none hover:border-green-300 bg-white/80 backdrop-blur-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center">
                    Send Message
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </span>
                </button>
              </form>
            </div>

            {/* Enhanced Contact Information */}
            <div className="space-y-8 animate-on-scroll">
              <div className="glass-effect bg-gradient-to-br from-green-50 to-rice-50 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold gradient-text mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-gray-700">
                      <p className="font-semibold">📞 8971148263</p>
                      <p className="font-semibold">📞 8105991344</p>
                    </div>
                  </div>
                  <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-700 font-semibold">
                      harekrishnaricemill12@gmail.com
                    </span>
                  </div>
                  <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:rotate-12 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-700 font-semibold leading-relaxed">
                      Korgi Arkoli,
                      <br />
                      Kundapura Taluk,
                      <br />
                      Udupi District, Karnataka
                    </span>
                  </div>
                </div>
              </div>

              {/* Enhanced Google Map */}
              <div className="glass-effect bg-gray-100 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.8281733319204!2d74.77621847455579!3d13.567069101544794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc91ea18e9f76d%3A0x5ed657ad49c4fe99!2sHare%20krishna%20rice%20mill%20arkoli!5e1!3m2!1sen!2sin!4v1745856841770!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hare Krishna Rice Mill Arkoli - Exact Location"
                  className="hover:scale-105 transition-transform duration-700"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Compact Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Company Brand Section */}
            <div>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold">H</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Harekrishna Ricemill</h3>
                  <p className="text-green-200 text-xs">
                    Est. 1990 • Premium Rice Processing
                  </p>
                </div>
              </div>

              <p className="text-green-100 text-sm leading-relaxed mb-3">
                Premium quality rice processing with traditional values and
                modern technology.
              </p>

              {/* Simple badges */}
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-green-700 px-2 py-1 rounded text-green-100">
                  ✓ Quality Certified
                </span>
                <span className="bg-green-700 px-2 py-1 rounded text-green-100">
                  ✓ Family Owned
                </span>
                <span className="bg-green-700 px-2 py-1 rounded text-green-100">
                  ✓ 30+ Years
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3 text-green-200">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { name: "Home", id: "home" },
                  { name: "About", id: "about" },
                  { name: "Products", id: "products" },
                  { name: "Contact", id: "contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-green-100 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-3 text-green-200">
                Contact Info
              </h4>
              <div className="space-y-2 text-sm text-green-100">
                <p>📞 8971148263, 8105991344</p>
                <p>✉️ harekrishnaricemill12@gmail.com</p>
                <p>📍 Korgi Arkoli, Kundapura Taluk, Udupi District</p>
              </div>
            </div>
          </div>

          {/* Simple bottom section */}
          <div className="border-t border-green-700 mt-6 pt-4 text-center">
            <p className="text-green-100 text-sm">
              🌾 © 2024 Harekrishna Ricemill. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <button
        onClick={() => scrollToSection("home")}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 opacity-80 hover:opacity-100"
        aria-label="Back to top"
      >
        <ChevronRight className="w-6 h-6 transform -rotate-90" />
      </button>

      {/* Add blob animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Index;
