import type { LucideIcon } from "lucide-react";
import { Award, Shield, Users } from "lucide-react";

export type SectionId = "home" | "about" | "products" | "contact";

export type NavItem = {
  name: string;
  id: SectionId;
};

export type StoryImage = {
  url: string;
  caption: string;
};

export type Stat = {
  icon: LucideIcon;
  label: string;
  value: number;
  suffix: string;
};

export type Product = {
  image: string;
  title: string;
  description: string;
  badge: string;
  color: string;
};

export const navItems: NavItem[] = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Products", id: "products" },
  { name: "Contact", id: "contact" },
];

export const brand = {
  name: "Harekrishna Ricemill",
  logo: "https://cdn.builder.io/api/v1/assets/56f6efa9d1064da8b2a3be334b211383/logo1-901842?format=webp&width=200",
  heroImage: "https://images.pexels.com/photos/32572865/pexels-photo-32572865.jpeg",
  phonePrimary: "8971148263",
  phoneSecondary: "8105991344",
  whatsappNumber: "918971148263",
  displayEmail: "harekrishnaricemill12@gmail.com",
  formEmail: "shettyshashank089@gmail.com",
  addressLines: ["Korgi Arkoli,", "Kundapura Taluk,", "Udupi District, Karnataka"],
  mapTitle: "Hare Krishna Rice Mill Arkoli - Exact Location",
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.8281733319204!2d74.77621847455579!3d13.567069101544794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc91ea18e9f76d%3A0x5ed657ad49c4fe99!2sHare%20krishna%20rice%20mill%20arkoli!5e1!3m2!1sen!2sin!4v1745856841770!5m2!1sen!2sin",
};

export const storyImages: StoryImage[] = [
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

export const aboutParagraphs = [
  "ಉಡುಪಿ ಜಿಲ್ಲೆಯ ಕೊರ್ಗಿ ಅರ್ಕೋಲಿಯಲ್ಲಿ ವಿಜಯ್ ಶೆಟ್ಟಿ ಸ್ಥಾಪಿಸಿದ ಹರೇಕೃಷ್ಣ ಅಕ್ಕಿ ಗಿರಣಿಯು ಹಲವಾರು ವರ್ಷಗಳಿಂದ ಸ್ಥಳೀಯ ಸಮುದಾಯಕ್ಕೆ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಬೇಯಿಸಿದ ಅಕ್ಕಿಯೊಂದಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದೆ.",
  "ಸಮಂಜಸವಾದ ಬೆಲೆಯಲ್ಲಿ ಅಕ್ಕಿಯನ್ನು ನೀಡುವುದಕ್ಕೆ ಹೆಸರುವಾಸಿಯಾಗಿರುವ ನಾವು, ವಿಶ್ವಾಸಾರ್ಹತೆ ಮತ್ತು ಶ್ರೇಷ್ಠತೆಗಾಗಿ ಕುಂದಾಪುರದಾದ್ಯಂತ ಬಲವಾದ ಖ್ಯಾತಿಯನ್ನು ಗಳಿಸಿದ್ದೇವೆ.",
  "ಗುಣಮಟ್ಟಕ್ಕೆ ನಮ್ಮ ಬದ್ಧತೆಯು ನಾವು ಒದಗಿಸುವ ಪ್ರತಿಯೊಂದು ಅಕ್ಕಿ ಧಾನ್ಯವು ಅತ್ಯುನ್ನತ ಮಾನದಂಡಗಳನ್ನು ಪೂರೈಸುತ್ತದೆ ಎಂದು ಖಚಿತಪಡಿಸುತ್ತದೆ. ಕುಟುಂಬ ಸ್ವಾಮ್ಯದ ವ್ಯವಹಾರವಾಗಿ, ನಮ್ಮ ಗ್ರಾಹಕರಿಗೆ ಸಮರ್ಪಣೆ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಮೌಲ್ಯಗಳು ಮತ್ತು ಆಧುನಿಕ ಅಗತ್ಯಗಳ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸುವ ಮೂಲಕ ಸೇವೆ ಸಲ್ಲಿಸುವಲ್ಲಿ ನಾವು ಹೆಮ್ಮೆಪಡುತ್ತೇವೆ.",
];

export const stats: Stat[] = [
  { icon: Award, label: "Years Experience", value: 30, suffix: "+" },
  { icon: Users, label: "Happy Customers", value: 5000, suffix: "+" },
  { icon: Shield, label: "Quality Guarantee", value: 100, suffix: "%" },
];

export const products: Product[] = [
  {
    image:
      "https://cdn.builder.io/api/v1/assets/56f6efa9d1064da8b2a3be334b211383/rice-790b4a?format=webp&width=800",
    title: "BVK Kaje Rice (ಕುಚಲಕ್ಕಿ)",
    description:
      "Traditional BVK Kaje Rice, also known as Kuchalakki in Kannada. Premium quality local variety with authentic taste and excellent nutritional value.",
    badge: "Local Specialty",
    color: "from-emerald-600 to-green-700",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/assets/56f6efa9d1064da8b2a3be334b211383/rice2-37a8a2?format=webp&width=800",
    title: "BVK Kaje Rice Premium (ಕುಚಲಕ್ಕಿ)",
    description:
      "Hand-selected BVK Kaje Rice grains, known as Kuchalakki in Kannada. Perfect for traditional South Indian dishes with superior texture and flavor.",
    badge: "Hand Selected",
    color: "from-teal-600 to-emerald-700",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/assets/56f6efa9d1064da8b2a3be334b211383/rice3-e13bb5?format=webp&width=800",
    title: "BVK Kaje Rice Special (ಕುಚಲಕ್ಕಿ)",
    description:
      "Our finest BVK Kaje Rice collection, Kuchalakki in Kannada. Specially processed to maintain traditional taste while ensuring modern quality standards.",
    badge: "Chef's Choice",
    color: "from-lime-600 to-green-700",
  },
];
