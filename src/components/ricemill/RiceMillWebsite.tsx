import {
  ArrowRight,
  ArrowUp,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  Star,
  Sun,
  X,
} from "lucide-react";
import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { FormEvent, ReactNode } from "react";
import { toast } from "sonner";
import {
  aboutParagraphs,
  brand,
  navItems,
  products,
  stats,
  storyImages,
  type NavItem,
  type Product,
  type SectionId,
  type Stat,
  type StoryImage,
} from "@/data/riceMillContent";
import {
  useAnimatedNumber,
  useActiveSection,
  useScrollProgress,
  useScrollReveal,
} from "@/hooks/useRiceMillScroll";
import { cn } from "@/lib/utils";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

const sectionIds = navItems.map((item) => item.id);

function scrollToSection(sectionId: SectionId) {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function RiceMillWebsite() {
  const activeSection = useActiveSection(sectionIds);
  const { progress, hasScrolled } = useScrollProgress();
  const { theme, toggleTheme } = useThemeMode();

  useScrollReveal();

  return (
    <main className="min-h-screen overflow-x-hidden bg-rice-50 text-green-950 selection:bg-green-700 selection:text-white transition-colors duration-500 dark:bg-slate-950 dark:text-green-50">
      <ScrollProgress progress={progress} />
      <Navigation
        activeSection={activeSection}
        hasScrolled={hasScrolled}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
      <FloatingActions showBackToTop={hasScrolled} />
    </main>
  );
}

function useThemeMode() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";

    const savedTheme = window.localStorage.getItem("rice-mill-theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("rice-mill-theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
}

function ScrollProgress({ progress }: { progress: number }) {
  return (
    <div className="fixed left-0 top-0 z-[70] h-1 w-full bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-lime-400 via-green-500 to-emerald-700 shadow-[0_0_18px_rgba(34,197,94,0.45)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function Navigation({
  activeSection,
  hasScrolled,
  theme,
  onToggleTheme,
}: {
  activeSection: SectionId;
  hasScrolled: boolean;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = useCallback((id: SectionId) => {
    scrollToSection(id);
    setIsOpen(false);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        hasScrolled
          ? "border-green-900/10 bg-white/90 shadow-lg shadow-green-950/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/88 dark:shadow-black/30"
          : "border-white/10 bg-white/75 backdrop-blur-md dark:bg-slate-950/65",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8 motion-safe:animate-nav-drop">
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="group flex min-w-0 items-center gap-3 rounded-full pr-3 text-left outline-none transition focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
          aria-label="Go to home section"
        >
          <img
            src={brand.logo}
            alt="Harekrishna Ricemill Logo"
            className="h-11 w-11 shrink-0 rounded-full border border-green-900/10 bg-white object-contain p-1 shadow-sm transition duration-300 group-hover:scale-105 dark:border-white/20"
            loading="eager"
          />
          <span className="truncate text-base font-extrabold text-green-900 sm:text-lg dark:text-green-50">
            {brand.name}
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              isActive={activeSection === item.id}
              onClick={handleNavClick}
            />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-green-900/10 bg-white/85 text-green-900 shadow-sm transition hover:bg-green-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "grid overflow-hidden border-t border-green-900/10 bg-white/95 backdrop-blur-xl transition-[grid-template-rows] duration-300 dark:border-white/10 dark:bg-slate-950/95 md:hidden",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <nav className="min-h-0 px-4" aria-label="Mobile navigation">
          <div className="flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "rounded-xl px-4 py-3 text-left text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700",
                  activeSection === item.id
                    ? "bg-green-700 text-white shadow-md shadow-green-900/15"
                    : "text-green-900 hover:bg-green-50 dark:text-green-50 dark:hover:bg-white/10",
                )}
              >
                {item.name}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: "light" | "dark";
  onToggle: () => void;
}) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="group relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-green-900/10 bg-white/85 text-green-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-green-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 dark:border-white/15 dark:bg-white/10 dark:text-amber-100 dark:hover:bg-white/15"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <Sun
        className={cn(
          "absolute h-5 w-5 transition duration-500",
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
        )}
      />
      <Moon
        className={cn(
          "absolute h-5 w-5 transition duration-500",
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
        )}
      />
    </button>
  );
}

function NavButton({
  item,
  isActive,
  onClick,
}: {
  item: NavItem;
  isActive: boolean;
  onClick: (id: SectionId) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onClick(item.id)}
      className={cn(
        "relative rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2",
        isActive ? "bg-green-800 text-white shadow-md shadow-green-900/15" : "text-green-800 hover:bg-green-50 dark:text-green-50 dark:hover:bg-white/10",
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {item.name}
    </button>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92svh] items-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center motion-safe:animate-slow-zoom"
        style={{
          backgroundImage: `linear-gradient(110deg, rgba(8, 47, 28, 0.82), rgba(12, 70, 35, 0.56) 46%, rgba(0, 0, 0, 0.26)), url('${brand.heroImage}')`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(187,247,208,0.18),transparent_28%),linear-gradient(to_bottom,transparent,rgba(6,30,18,0.45))]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="max-w-3xl text-white" data-reveal="slide-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-semibold text-green-50 backdrop-blur-md">
            <CheckCircle2 className="h-4 w-4 text-lime-200" />
            Premium Rice Processing Since 1990
          </div>
          <h1 className="text-5xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">
            Harekrishna
            <span className="block text-lime-100">Ricemill</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50 sm:text-xl">
            ಸಾಂಪ್ರದಾಯಿಕ ಮೌಲ್ಯಗಳು ಮತ್ತು ಆಧುನಿಕ ತಂತ್ರಜ್ಞಾನದೊಂದಿಗೆ ಪ್ರೀಮಿಯಂ
            ಗುಣಮಟ್ಟದ ಅಕ್ಕಿ ಸಂಸ್ಕರಣೆ. ಮೂರು ದಶಕಗಳಿಗೂ ಹೆಚ್ಚು ಕಾಲ ಅತ್ಯುತ್ತಮ ಅಕ್ಕಿ
            ಉತ್ಪಾದನೆಗಳೊಂದಿಗೆ ಸಮುದಾಯಗಳಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದೆ.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollToSection("products")}
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-bold text-green-900 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-lime-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-900"
            >
              Our Products
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/55 bg-white/10 px-6 py-3 text-base font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-900"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="hidden items-end justify-end lg:flex" data-reveal="scale">
          <div className="w-full max-w-sm rounded-[2rem] border border-white/20 bg-white/14 p-5 text-white shadow-2xl shadow-black/25 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase text-lime-100">Trusted locally</p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/14 p-4 text-center">
                  <p className="text-2xl font-black">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="mt-1 text-xs leading-4 text-green-50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToSection("about")}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 rounded-full border border-white/30 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:inline-flex"
        aria-label="Scroll to about section"
      >
        <ChevronRight className="h-5 w-5 rotate-90" />
      </button>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-shell bg-white transition-colors duration-500 dark:bg-slate-950">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 dark:opacity-100">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl motion-safe:animate-soft-float" />
      </div>
      <div className="section-container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div data-reveal="slide-up">
          <SectionEyebrow>Our Story & Mission</SectionEyebrow>
          <h2 className="section-title">
            Traditional values, modern processing, dependable quality.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-green-950/75 sm:text-lg dark:text-green-50/75">
            {aboutParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="rounded-2xl border border-green-900/5 bg-rice-50/70 p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-green-700/15 hover:bg-green-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <AnimatedStatCard key={stat.label} stat={stat} delay={index * 90} />
            ))}
          </div>
        </div>

        <div data-reveal="slide-left">
          <StoryCarousel images={storyImages} />
        </div>
      </div>
    </section>
  );
}

function AnimatedStatCard({ stat, delay }: { stat: Stat; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const value = useAnimatedNumber(stat.value, isVisible);
  const Icon = stat.icon;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-green-900/10 bg-white p-5 text-center shadow-lg shadow-green-950/5 transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-emerald-700 text-white shadow-lg shadow-green-900/20">
        <Icon className="h-6 w-6" />
      </div>
      <p className="mt-4 text-3xl font-black text-green-900 dark:text-green-50">
        {value}
        {stat.suffix}
      </p>
      <p className="mt-1 text-sm font-semibold text-green-950/60 dark:text-green-50/60">{stat.label}</p>
    </div>
  );
}

function StoryCarousel({ images }: { images: StoryImage[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pointerStart = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((previous) => (previous + 1) % images.length);
  }, [images.length]);

  const previousSlide = useCallback(() => {
    setCurrentSlide((previous) => (previous - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    images.forEach((image) => {
      const preload = new Image();
      preload.src = image.url;
    });
  }, [images]);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(nextSlide, 5000);
    return () => window.clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handlePointerUp = (clientX: number) => {
    if (pointerStart.current === null) return;

    const distance = clientX - pointerStart.current;
    pointerStart.current = null;

    if (Math.abs(distance) < 45) return;
    if (distance < 0) nextSlide();
    else previousSlide();
  };

  return (
    <div
      className="group relative overflow-hidden rounded-[2rem] border border-green-900/10 bg-green-950 shadow-2xl shadow-green-950/15 dark:border-white/10 dark:shadow-black/40"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onPointerDown={(event) => {
        pointerStart.current = event.clientX;
      }}
      onPointerUp={(event) => handlePointerUp(event.clientX)}
      onPointerCancel={() => {
        pointerStart.current = null;
      }}
      aria-roledescription="carousel"
      aria-label="Rice mill story images"
    >
      <div className="relative aspect-[4/5] min-h-[420px] sm:aspect-[5/4] lg:aspect-[4/5]">
        {images.map((image, index) => (
          <img
            key={image.url}
            src={image.url}
            alt={image.caption}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition duration-700 ease-out",
              index === currentSlide
                ? "scale-100 opacity-100"
                : "scale-105 opacity-0",
            )}
            loading={index < 2 ? "eager" : "lazy"}
            draggable={false}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/88 via-green-950/12 to-transparent" />
        <div
          className="absolute left-0 top-0 h-1 bg-gradient-to-r from-lime-300 to-green-400 transition-[width] duration-300"
          style={{ width: `${((currentSlide + 1) / images.length) * 100}%` }}
          aria-hidden="true"
        />

        <button
          type="button"
          onClick={previousSlide}
          className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-green-900 opacity-100 shadow-lg transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:opacity-0 sm:group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-green-900 opacity-100 shadow-lg transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:opacity-0 sm:group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
          <div className="mb-4 flex items-center justify-between gap-4 text-white">
            <p className="text-sm font-semibold sm:text-base">
              {images[currentSlide].caption}
            </p>
            <span className="shrink-0 rounded-full bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur-md">
              {currentSlide + 1} / {images.length}
            </span>
          </div>
          <div className="flex gap-2" role="tablist" aria-label="Choose carousel image">
            {images.map((image, index) => (
              <button
                key={image.url}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                  index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/45 hover:bg-white/70",
                )}
                aria-label={`Go to slide ${index + 1}`}
                aria-selected={index === currentSlide}
                role="tab"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="section-shell bg-gradient-to-b from-rice-50 via-green-50 to-white transition-colors duration-500 dark:from-slate-950 dark:via-green-950/35 dark:to-slate-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(90deg,transparent,rgba(34,197,94,0.12),transparent)] motion-safe:animate-light-sweep" />
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center" data-reveal="slide-up">
          <SectionEyebrow>Our Premium Products</SectionEyebrow>
          <h2 className="section-title">
            Carefully processed rice varieties for everyday kitchens and traditional meals.
          </h2>
          <p className="mt-5 text-lg leading-8 text-green-950/65 dark:text-green-50/70">
            Carefully processed and quality-tested rice varieties to meet all
            your culinary needs
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProductCard = memo(function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  return (
    <article
      className="group relative overflow-hidden rounded-[1.75rem] border border-green-900/10 bg-white shadow-xl shadow-green-950/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-950/10 dark:border-white/10 dark:bg-white/5 dark:shadow-black/25"
      data-reveal="slide-up"
      style={{ transitionDelay: `${index * 110}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-green-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-y-0 -left-1/2 w-1/3 rotate-12 bg-white/25 opacity-0 blur-sm transition duration-700 group-hover:left-[115%] group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-green-950/55 to-transparent opacity-70" />
        <span
          className={cn(
            "absolute left-4 top-4 rounded-full bg-gradient-to-r px-3 py-1 text-xs font-bold text-white shadow-lg",
            product.color,
          )}
        >
          {product.badge}
        </span>
        <div className="absolute right-4 top-4 flex gap-1 rounded-full bg-white/90 px-2 py-1 text-yellow-500 shadow-sm backdrop-blur">
          {[...Array(5)].map((_, starIndex) => (
            <Star key={starIndex} className="h-3.5 w-3.5 fill-current" />
          ))}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-black leading-7 text-green-900 dark:text-green-50">
          {product.title}
        </h3>
        <p className="mt-4 min-h-[96px] text-sm leading-7 text-green-950/65 dark:text-green-50/70">
          {product.description}
        </p>
        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-green-800 px-5 py-3 text-sm font-bold text-white transition duration-300 hover:bg-green-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </button>
      </div>
    </article>
  );
});

function ContactSection() {
  return (
    <section id="contact" className="section-shell bg-white transition-colors duration-500 dark:bg-slate-950">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center" data-reveal="slide-up">
          <SectionEyebrow>Get in Touch</SectionEyebrow>
          <h2 className="section-title">Visit, call, or send a message to Harekrishna Ricemill.</h2>
          <p className="mt-5 text-lg leading-8 text-green-950/65 dark:text-green-50/70">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <ContactForm />
          <ContactDetails />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validateForm = () => {
    const nextErrors: ContactFormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.name.trim().length < 2) {
      nextErrors.name = "Please enter your full name.";
    }

    if (!emailPattern.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (formData.message.trim().length < 10) {
      nextErrors.message = "Please enter a message with at least 10 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      toast.error("Please check the highlighted fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const subject = `New Contact Form Message from ${formData.name.trim()}`;
      const body = `
Name: ${formData.name.trim()}
Email: ${formData.email.trim()}
Message: ${formData.message.trim()}

Sent from Harekrishna Ricemill website contact form.
      `;
      const mailtoLink = `mailto:${brand.formEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;
      toast.success("Your email client is opening with the message ready.");
      setFormData(initialFormData);
    } catch {
      toast.error("We could not open your email client. Please call or email us directly.");
    } finally {
      window.setTimeout(() => setIsSubmitting(false), 500);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-green-900/10 bg-gradient-to-br from-rice-50 to-green-50 p-5 shadow-xl shadow-green-950/5 transition-colors duration-500 dark:border-white/10 dark:from-white/10 dark:to-green-950/35 dark:shadow-black/25 sm:p-8"
      data-reveal="slide-up"
      noValidate
    >
      <div className="grid gap-5">
        <TextField
          id="name"
          label="Full Name"
          value={formData.name}
          error={errors.name}
          autoComplete="name"
          onChange={(value) => updateField("name", value)}
        />
        <TextField
          id="email"
          label="Email Address"
          type="email"
          value={formData.email}
          error={errors.email}
          autoComplete="email"
          onChange={(value) => updateField("email", value)}
        />
        <div>
          <label htmlFor="message" className="text-sm font-bold text-green-900 dark:text-green-50">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={(event) => updateField("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="mt-2 w-full resize-none rounded-2xl border border-green-900/15 bg-white px-4 py-3 text-green-950 shadow-sm outline-none transition placeholder:text-green-950/35 focus:border-green-700 focus:ring-4 focus:ring-green-700/10 dark:border-white/10 dark:bg-slate-950/70 dark:text-green-50 dark:placeholder:text-green-50/35"
            required
          />
          {errors.message ? (
            <p id="message-error" className="mt-2 text-sm font-semibold text-red-700">
              {errors.message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-green-800 px-6 py-3 text-base font-bold text-white shadow-lg shadow-green-950/10 transition duration-300 hover:-translate-y-0.5 hover:bg-green-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Preparing Message..." : "Send Message"}
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}

function TextField({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  id: keyof ContactFormData;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="text-sm font-bold text-green-900 dark:text-green-50">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="mt-2 h-12 w-full rounded-2xl border border-green-900/15 bg-white px-4 text-green-950 shadow-sm outline-none transition placeholder:text-green-950/35 focus:border-green-700 focus:ring-4 focus:ring-green-700/10 dark:border-white/10 dark:bg-slate-950/70 dark:text-green-50 dark:placeholder:text-green-50/35"
        required
      />
      {error ? (
        <p id={errorId} className="mt-2 text-sm font-semibold text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function ContactDetails() {
  return (
    <div className="grid gap-6" data-reveal="slide-left">
      <div className="rounded-[1.75rem] border border-green-900/10 bg-white p-6 shadow-xl shadow-green-950/5 transition-colors duration-500 dark:border-white/10 dark:bg-white/5 dark:shadow-black/25 sm:p-8">
        <h3 className="text-2xl font-black text-green-900 dark:text-green-50">Contact Information</h3>
        <div className="mt-6 grid gap-5">
          <ContactRow icon={Phone}>
            <p className="font-bold">📞 {brand.phonePrimary}</p>
            <p className="font-bold">📞 {brand.phoneSecondary}</p>
          </ContactRow>
          <ContactRow icon={Mail}>
            <p className="break-all font-bold">{brand.displayEmail}</p>
          </ContactRow>
          <ContactRow icon={MapPin} alignStart>
            <address className="not-italic font-bold leading-7">
              {brand.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </ContactRow>
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.75rem] border border-green-900/10 bg-green-50 shadow-xl shadow-green-950/5 transition-colors duration-500 dark:border-white/10 dark:bg-white/5 dark:shadow-black/25">
        <iframe
          src={brand.mapSrc}
          width="100%"
          height="340"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={brand.mapTitle}
          className="block"
        />
      </div>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  children,
  alignStart = false,
}: {
  icon: typeof Phone;
  children: ReactNode;
  alignStart?: boolean;
}) {
  return (
    <div className={cn("flex gap-4", alignStart ? "items-start" : "items-center")}>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-800 text-white shadow-lg shadow-green-900/15">
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-green-950/75 dark:text-green-50/75">{children}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={brand.logo}
              alt="Harekrishna Ricemill Logo"
              className="h-12 w-12 rounded-xl bg-white object-contain p-1"
              loading="lazy"
            />
            <div>
              <h3 className="text-lg font-black">{brand.name}</h3>
              <p className="text-xs font-semibold text-blue-100">
                Est. 1990 • Premium Rice Processing
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-blue-100">
            Premium quality rice processing with traditional values and modern technology.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-blue-50">
            <span className="rounded-full bg-white/10 px-3 py-1">✓ Quality Certified</span>
            <span className="rounded-full bg-white/10 px-3 py-1">✓ Family Owned</span>
            <span className="rounded-full bg-white/10 px-3 py-1">✓ 30+ Years</span>
          </div>
        </div>

        <div>
          <h4 className="font-black text-blue-100">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className="rounded text-blue-100 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-black text-blue-100">Contact Info</h4>
          <div className="mt-4 space-y-2 text-sm text-blue-100">
            <p>📞 {brand.phonePrimary}, {brand.phoneSecondary}</p>
            <p>✉️ {brand.displayEmail}</p>
            <p>📍 Korgi Arkoli, Kundapura Taluk, Udupi District</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 px-4 pt-5 text-center text-sm text-blue-100 sm:px-6 lg:px-8">
        🌾 © 2026 Harekrishna Ricemill. All rights reserved.
      </div>
    </footer>
  );
}

function FloatingActions({ showBackToTop }: { showBackToTop: boolean }) {
  const whatsappUrl = useMemo(
    () =>
      `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent("Hello Harekrishna Ricemill, I would like to know more about your rice products.")}`,
    [],
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-14 min-h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-950/20 transition duration-300 hover:-translate-y-1 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 motion-safe:animate-gentle-pulse dark:shadow-black/35"
        aria-label="Contact Harekrishna Ricemill on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <button
        type="button"
        onClick={() => scrollToSection("home")}
        className={cn(
          "inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-900 text-white shadow-xl shadow-green-950/20 transition duration-300 hover:-translate-y-1 hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2",
          showBackToTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
        )}
        aria-label="Back to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-sm font-black uppercase text-green-700">
      {children}
    </p>
  );
}

export default RiceMillWebsite;
