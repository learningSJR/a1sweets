'use client'

import Image from 'next/image'
import {
  ArrowUpRight,
  UtensilsCrossed,
  ShoppingBag,
  CalendarDays,
} from 'lucide-react'
import styles from './VisitEnquire.module.css'

const services = [
  {
    id: 'dine-in',
    title: 'Dine-In',
    subtitle: 'A Taste of Togetherness',
    description:
      'Enjoy authentic vegetarian dishes, freshly prepared sweets and warm hospitality.',
    image: '/images/visit-enquire/dine-in.png',
    icon: UtensilsCrossed,
    button: 'Explore Dine-In',
    href: '/#contact',
  },
  {
    id: 'takeout',
    title: 'Takeout',
    subtitle: 'Your Favourites, To Go',
    description:
      'Bring home the delicious flavours of A1 Sweets, from savoury snacks to traditional sweets.',
    image: '/images/visit-enquire/takeout.png',
    icon: ShoppingBag,
    button: 'Order Takeout',
    href: 'https://www.a1sweets.com/',
  },
  {
    id: 'catering',
    title: 'Outdoor Catering',
    subtitle: 'Celebrate Every Occasion',
    description:
      'Make your special occasions memorable with our vegetarian catering selections.',
    image: '/images/visit-enquire/catering.png',
    icon: CalendarDays,
    button: 'Catering Enquiry',
    href: '/#contact',
  },
]

export default function VisitEnquire() {
  return (
    <section
      id="visit-enquire"
      className={styles.section}
      aria-labelledby="visit-enquire-heading"
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>GET IN TOUCH</span>

          <h2 id="visit-enquire-heading" className={styles.title}>
            Visit or Enquire
          </h2>

          <span className={styles.headingLine} aria-hidden="true" />

          <p className={styles.intro}>
            From a delicious meal to a memorable celebration, experience the
            authentic vegetarian flavours of A1 Sweets.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <article
                key={service.id}
                className={styles.card}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={service.image}
                    alt={`${service.title} at A1 Sweets`}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className={styles.image}
                  />

                  <div className={styles.imageOverlay} />

                  <div className={styles.cardNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.iconWrapper}>
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <span className={styles.subtitle}>{service.subtitle}</span>

                    <h3 className={styles.cardTitle}>{service.title}</h3>

                    <p className={styles.description}>{service.description}</p>

                    <a href={service.href} className={styles.cardButton}>
                      {service.button}
                      <ArrowUpRight size={17} strokeWidth={2} />
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className={styles.bottom}>
          <p>Looking for something special? We would love to hear from you.</p>

          <a
            href="https://www.a1sweets.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bottomLink}
          >
            VISIT A1 SWEETS WEBSITE
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
