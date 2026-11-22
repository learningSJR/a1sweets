'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react'
import styles from './Testimonials.module.css'

const reviews = [
  {
    name: 'Aman Preet',
    quote:
      'Tried their samosas fresh, just like homemade. Loved the customer service as well.',
  },
  {
    name: 'Kajanan Sathieswaran',
    quote:
      "Their Veggie Thali is a must try, if you haven't tried it yet. Just delicious. They also have the best samosas in town.",
  },
  {
    name: 'Satish Kumar',
    quote:
      "I always had pani poori and I really love it. Will try other stuff for sure. Scarborough's best pani poori with nice staff helping you.",
  },
  {
    name: 'Ankur Mehta',
    quote:
      'Very good yummy food. Good variety of food. Authentic Punjabi food. Food is worth it.',
  },
  {
    name: 'Celly',
    quote:
      'Tried this for the first time today, I’m absolutely blown away and the portions are very generous! Delicious!',
  },
  {
    name: 'Ankit 15',
    quote:
      'I have been coming here since I was a kid; the thalis are my favourite. The portions are solid and the price is fair.',
  },
  {
    name: 'Christine McCart',
    quote:
      'Most amazing food ever, I really loved their samosas. Highly recommend! I will definitely be returning.',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const show = (next: number) =>
    setIndex((next + reviews.length) % reviews.length)

  useEffect(() => {
    if (paused) return
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % reviews.length),
      6500,
    )
    return () => window.clearInterval(timer)
  }, [paused])

  return (
    <section
      id="testimonials"
      className={styles.section}
      aria-labelledby="a1-testimonials-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false)
      }}
    >
      <div className={styles.container}>
        <header className={styles.heading}>
          <span className={styles.kicker}>TESTIMONIALS</span>
          <h2 id="a1-testimonials-heading" className={styles.title}>
            Words From Our <em>Guests</em>
          </h2>
          <span className={styles.rule} aria-hidden="true" />
          <p className={styles.intro}>
            Good food creates great memories. Here’s what our customers have to
            say.
          </p>
        </header>

        <div className={styles.grid}>
          <div
            className={styles.visual}
            aria-label="A selection of A1 Sweets vegetarian dishes"
          >
            <div className={styles.imageMain}>
              <Image
                src="/images/testimonials/thali.jpg"
                alt="Indian vegetarian thali"
                fill
                sizes="(max-width: 800px) 85vw, 440px"
                className={styles.foodImage}
              />
            </div>
            <div className={styles.imageSmall}>
              <Image
                src="/images/testimonials/samosa.jpg"
                alt="Freshly prepared samosas"
                fill
                sizes="(max-width: 800px) 40vw, 190px"
                className={styles.foodImage}
              />
            </div>
            <div className={styles.imageAccent}>
              <Image
                src="/images/testimonials/sweets.jpg"
                alt="Indian sweets"
                fill
                sizes="(max-width: 800px) 30vw, 140px"
                className={styles.foodImage}
              />
            </div>
            <div className={styles.visualCaption}>
              <span>100% Vegetarian</span>
              <strong>Made with love</strong>
            </div>
          </div>

          <div className={styles.reviewPanel}>
            <Quote
              size={43}
              strokeWidth={1.5}
              className={styles.quoteIcon}
              aria-hidden="true"
            />
            <div className={styles.stars} aria-label="Customer review">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <div
              className={styles.reviewBody}
              aria-live="polite"
              aria-atomic="true"
              key={index}
            >
              <blockquote className={styles.quote}>
                “{reviews[index].quote}”
              </blockquote>
              <div className={styles.person}>
                <span className={styles.avatar} aria-hidden="true">
                  {reviews[index].name.charAt(0)}
                </span>
                <div>
                  <strong className={styles.name}>{reviews[index].name}</strong>
                  <span className={styles.personSub}>A1 Sweets customer</span>
                </div>
              </div>
            </div>
            <div className={styles.controls}>
              <span className={styles.counter}>
                {String(index + 1).padStart(2, '0')}{' '}
                <span>/ {String(reviews.length).padStart(2, '0')}</span>
              </span>
              <div className={styles.buttons}>
                <button
                  type="button"
                  aria-label="Previous review"
                  onClick={() => show(index - 1)}
                >
                  <ArrowLeft size={20} />
                </button>
                <button
                  type="button"
                  aria-label="Next review"
                  onClick={() => show(index + 1)}
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
            <div className={styles.dots} aria-label="Choose review">
              {reviews.map((r, i) => (
                <button
                  type="button"
                  key={r.name}
                  aria-label={`Show review ${i + 1}`}
                  aria-current={i === index ? 'true' : undefined}
                  className={i === index ? styles.dotActive : styles.dot}
                  onClick={() => show(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
