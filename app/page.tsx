'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Leaf } from 'lucide-react'
import Header from '../components/Header'
import HeroSlider from '../components/HeroSlider'
import VisitEnquire from '../components/VisitEnquire'
import Gallery from '../components/Gallery'
import SectionHeading from '../components/SectionHeading'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import FeatureStrip from '@/components/FeatureStrip'

const I = '/images/'
const dishes = [
  ['Vegetarian Thali', 'A complete meal', 'menu_rest_1_1.png', 'Meals'],
  ['Channa Bhatura', 'A Punjabi favourite', 'menu_rest_1_2.png', 'Meals'],
  ['Samosa', 'Golden, crisp and delicious', 'menu_rest_1_3.png', 'Snacks'],
  ['Fresh Salad', 'Bright and refreshing', 'menu_rest_1_4.png', 'Snacks'],
  ['Channa Masala', 'Rich Indian flavours', 'menu_rest_1_5.png', 'Curries'],
  ['Garlic Naan', 'Fresh from the tandoor', 'menu_rest_1_6.png', 'Breads'],
  [
    'Paneer Curry',
    'A creamy vegetarian classic',
    'menu_rest_1_7.png',
    'Curries',
  ],
  ['Gulab Jamun', 'Sweet celebrations', 'menu_rest_1_8.png', 'Sweets'],
  ['Chaat', 'Street-food favourite', 'menu_rest_1_9.png', 'Snacks'],
  [
    'Indian Bread & Curry',
    'Comforting and wholesome',
    'menu_rest_1_10.png',
    'Meals',
  ],
]
const appear = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}
export default function Home() {
  const [filter, setFilter] = useState('All')
  return (
    <main>
      <Header />
      <HeroSlider />
      <FeatureStrip />
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          {...appear}
          className="grid md:grid-cols-2 gap-14 items-center"
        >
          <div className="relative">
            <img
              src={I + 'about_2_2.png'}
              alt="A1 Sweets vegetarian food selection"
              className="w-full rounded-xl"
            />
            <img
              src={I + 'red_chili.png'}
              alt=""
              className="absolute w-24 -bottom-7 -left-5 hidden md:block"
            />
          </div>
          <div>
            <p className="eyebrow text-red mb-4">Our Story</p>
            <h2 className="display text-5xl md:text-6xl text-navy leading-tight">
              Welcome to <span className="text-red">A1 Sweets</span>
            </h2>
            <div className="w-20 h-1 bg-yellow my-7" />
            <p className="leading-8 text-gray-700 mb-5">
              Experience the delicious flavours of Indian vegetarian cuisine,
              from satisfying meals to irresistible sweets.
            </p>
            <p className="leading-8 text-gray-700 mb-8">
              We bring together traditional recipes and fresh ingredients for
              everyday meals, special occasions and celebrations.
            </p>
            <a
              href="#contact"
              className="inline-block bg-navy text-white px-8 py-4 uppercase tracking-wider text-xs font-bold"
            >
              Discover More →
            </a>
          </div>
        </motion.div>
      </section>
      <section id="specials" className="bg-[#fff6d6] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tag="Special Packages"
            title="Our Signature Favourites"
            desc="A taste of A1 Sweets — made for every appetite."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {dishes.slice(0, 3).map(([n, d, img]) => (
              <motion.article
                {...appear}
                key={n}
                className="bg-white shadow-lg group overflow-hidden"
              >
                <div className="h-64 flex justify-center items-center image-hover bg-[#fff9e9]">
                  <img
                    src={I + img}
                    alt={n}
                    className="w-56 h-56 object-contain"
                  />
                </div>
                <div className="p-7 text-center">
                  <h3 className="display text-3xl text-navy">{n}</h3>
                  <p className="text-gray-500 mt-3">{d}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <section id="menu" className="py-24 px-6 max-w-7xl mx-auto">
        <SectionHeading
          tag="Today's Menu"
          title="Explore Our Menu"
          desc="A variety of pure vegetarian Indian favourites and sweets."
        />
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['All', 'Meals', 'Snacks', 'Curries', 'Breads', 'Sweets'].map(
            (c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={
                  'px-5 py-2 text-xs uppercase tracking-wider font-bold border transition ' +
                  (filter === c
                    ? 'bg-red text-white border-red'
                    : 'border-gray-200 text-navy hover:border-red')
                }
              >
                {c}
              </button>
            ),
          )}
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {dishes
            .filter((d) => filter === 'All' || d[3] === filter)
            .map(([n, d, img]) => (
              <motion.article
                {...appear}
                key={n}
                className="flex gap-5 border-b border-gray-200 pb-5 items-center"
              >
                <div className="shrink-0 w-28 h-28 bg-[#fff6d6] rounded-full flex items-center justify-center">
                  <img
                    src={I + img}
                    alt={n}
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <div>
                  <h3 className="display text-2xl text-navy">{n}</h3>
                  <p className="text-gray-500 text-sm mt-2">{d}</p>
                  <span className="text-red eyebrow mt-2 block">
                    Pure vegetarian
                  </span>
                </div>
              </motion.article>
            ))}
        </div>
      </section>
      <section id="catering" className="bg-navy text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow text-yellow mb-5">Outdoor Catering Events</p>
            <h2 className="display text-5xl md:text-6xl leading-tight">
              Your occasion.
              <br />
              <span className="text-yellow italic">Our flavours.</span>
            </h2>
            <p className="mt-7 text-white/80 leading-8">
              From family gatherings to celebrations, A1 Sweets brings delicious
              vegetarian cuisine to your event.
            </p>
            <a
              href="#contact"
              className="inline-block bg-red px-8 py-4 uppercase tracking-widest font-bold text-xs mt-9"
            >
              Plan Your Event →
            </a>
          </div>
          <img
            src={I + 'value.jpg'}
            alt="A1 Sweets catering spread"
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>
      </section>
      <Gallery />
      <Testimonials />
      <VisitEnquire />
      <Footer />
    </main>
  )
}
