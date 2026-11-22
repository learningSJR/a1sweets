"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./HeroSlider.module.css";

const I = "/images/";
const slides = [
  {
    title: 'AUTHENTIC VEGETARIAN FLAVOURS',
    accent: 'Taste Tradition',
    subtitle: 'A1 Sweets · Pure vegetarian food, made with care.',
    img: 'a1sweets-hero-1.jpg',
    cta: 'EXPLORE OUR MENU',
  },
  {
    title: 'A FEAST FOR EVERY OCCASION',
    accent: 'Get Together',
    subtitle:
      'Enjoy our delicious vegetarian favourites with family and friends.',
    img: 'a1sweets-hero-2.jpg',
    cta: 'EXPLORE OUR MENU',
  },
  {
    title: 'CELEBRATE WITH A1 SWEETS',
    accent: 'Made With Love',
    subtitle: 'Memorable celebrations deserve unforgettable flavours.',
    img: 'a1sweets-hero-3.jpg',
    cta: 'CATERING ENQUIRY',
  },
]
export default function HeroSlider() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setSlide(s => (s + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, []);
  return (
      <section
        id="home"
        aria-label="A1 Sweets featured slides"
        className={`relative h-[700px] min-h-[88svh] md:h-[850px] text-white overflow-hidden bg-navy ${styles.hero}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ opacity: 0, scale: 1.075 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.025 }}
            transition={{ duration: 1.05, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={I + slides[slide].img}
              alt={slides[slide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/55" />
          </motion.div>
        </AnimatePresence>
        <div className="relative z-10 h-full max-w-6xl mx-auto px-12 flex items-center justify-center pt-24 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={'copy-' + slide}
              initial={{ opacity: 0, y: 38 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.65 }}
              className="max-w-5xl"
            >
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="font-serif italic text-5xl sm:text-6xl md:text-[82px] leading-tight mb-3 text-white drop-shadow-lg"
              >
                {slides[slide].accent}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.36 }}
                className="text-3xl sm:text-5xl lg:text-[64px] font-extrabold tracking-tight uppercase leading-tight drop-shadow-lg"
              >
                {slides[slide].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.65 }}
                className="mt-5 text-sm md:text-lg text-white/90"
              >
                {slides[slide].subtitle}
              </motion.p>
              <motion.a
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.85 }}
                href={slide === 2 ? '#catering' : '#menu'}
                className="inline-block mt-8 border border-white/90 hover:bg-red hover:border-red px-9 py-3.5 text-xs font-bold uppercase tracking-[.26em] transition-colors"
              >
                {slides[slide].cta}
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          aria-label="Previous slide"
          onClick={() =>
            setSlide((s) => (s + slides.length - 1) % slides.length)
          }
          className="absolute z-20 left-2 md:left-8 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white hover:bg-red/80 rounded"
        >
          <ChevronLeft size={38} />
        </button>
        <button
          aria-label="Next slide"
          onClick={() => setSlide((s) => (s + 1) % slides.length)}
          className="absolute z-20 right-2 md:right-8 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white hover:bg-red/80 rounded"
        >
          <ChevronRight size={38} />
        </button>
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((item, i) => (
            <button
              key={item.title}
              aria-label={'Go to slide ' + (i + 1)}
              aria-current={slide === i ? 'true' : undefined}
              onClick={() => setSlide(i)}
              className={
                'w-3 h-3 rounded-full transition-all ' +
                (slide === i
                  ? 'bg-white scale-110'
                  : 'bg-white/50 hover:bg-white/80')
              }
            />
          ))}
        </div>
      </section>
  );
}
