import styles from './SectionHeading.module.css'

interface SectionHeadingProps {
  tag: string
  title: string
  desc?: string
}

export default function SectionHeading({
  tag,
  title,
  desc,
}: SectionHeadingProps) {
  return (
    <div className={styles.sectionHeading}>
      <span className={styles.tag}>{tag}</span>

      <h2 className={styles.title}>{title}</h2>

      <span className={styles.divider} aria-hidden="true" />

      {desc && <p className={styles.description}>{desc}</p>}
    </div>
  )
}
