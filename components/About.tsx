'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import styles from './About.module.css'

export default function About() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="about"
      className={styles.section}
      aria-labelledby="about-heading"
    >
      <div className={styles.container}>
        <motion.div
          className={styles.grid}
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease: 'easeOut',
          }}
        >
          {/* LEFT: ANIMATED FOOD COMPOSITION */}
          <div className={styles.imageColumn}>
            {/* Decorative circular outline */}
            <motion.div
              className={styles.decorativeRing}
              aria-hidden="true"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Background orange circle */}
            <div className={styles.orangeCircle} aria-hidden="true" />

            {/* Main vegetarian food image */}
            <motion.div
              className={styles.imageWrapper}
              animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image
                src="/images/about_2_2.png"
                alt="A1 Sweets vegetarian food selection"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className={styles.mainImage}
                priority={false}
              />
            </motion.div>

            {/* Floating Gulab Jamun */}
            <motion.div
              className={styles.sweetsDecoration}
              aria-hidden="true"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -12, 0],
                      rotate: [-2, 2, -2],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image
                src="/images/7.png"
                alt=""
                width={220}
                height={216}
                className={styles.sweetsImage}
              />
            </motion.div>

            {/* Decorative red chilli */}
            <motion.div
              className={styles.chilliDecoration}
              aria-hidden="true"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -10, 0],
                      rotate: [-5, 5, -5],
                    }
              }
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image
                src="/images/red_chili.png"
                alt=""
                width={120}
                height={120}
                className={styles.chilliImage}
              />
            </motion.div>
          </div>

          {/* RIGHT: ABOUT CONTENT */}
          <div className={styles.contentColumn}>
            <span className={styles.eyebrow}>OUR STORY</span>

            <h2 id="about-heading" className={styles.title}>
              Welcome to <span className={styles.highlight}>A1 Sweets</span>
            </h2>

            <span className={styles.titleDivider} aria-hidden="true" />

            <p className={styles.description}>
              Experience the delicious flavours of Indian vegetarian cuisine,
              from satisfying meals to irresistible sweets.
            </p>

            <p className={styles.description}>
              We bring together traditional recipes and fresh ingredients for
              everyday meals, special occasions and celebrations.
            </p>

            <a href="#contact" className={styles.button}>
              DISCOVER MORE
              <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
