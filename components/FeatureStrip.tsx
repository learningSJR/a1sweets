'use client'

import { Leaf, UtensilsCrossed, ShoppingBag, CalendarHeart } from 'lucide-react'

import styles from './FeatureStrip.module.css'

const features = [
  {
    title: '100% Pure Vegetarian',
    description: 'Fresh & wholesome',
    Icon: Leaf,
  },
  {
    title: 'Authentic Indian Flavours',
    description: 'Traditional Indian taste',
    Icon: UtensilsCrossed,
  },
  {
    title: 'Dine-In & Takeout',
    description: 'Enjoy it your way',
    Icon: ShoppingBag,
  },
  {
    title: 'Outdoor Catering',
    description: 'Celebrate with us',
    Icon: CalendarHeart,
  },
]

export default function FeatureStrip() {
  return (
    <section className={styles.featureStrip} aria-label="A1 Sweets highlights">
      <div className={styles.container}>
        {features.map(({ title, description, Icon }, index) => (
          <div className={styles.feature} key={title}>
            <div className={styles.iconBox}>
              <Icon size={25} strokeWidth={1.8} />
            </div>

            <div className={styles.content}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>

            {index < features.length - 1 && (
              <span className={styles.divider} aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
