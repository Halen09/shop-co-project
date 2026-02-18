import styles from "./RatingView.module.scss"

const RatingView = (props) => {
  const { starsNumber, hasAHalfOfStar = false } = props

  const label = hasAHalfOfStar
    ? `Rating ${starsNumber}.5 stars`
    : `Rating ${starsNumber} stars`

  return (
    <div className={styles.ratingView} aria-label={label} title={label}>
      <div className={styles.ratingViewStars}>
        {Array.from({ length: 5 }).map((_, index) => {
          if (index < starsNumber) {
            return <div className={styles.star}></div>
          }

          if (index === starsNumber && hasAHalfOfStar) {
            return <div className={styles.halfOfStar}></div>
          }
        })}
      </div>
      <p className={styles.rate}>
        {hasAHalfOfStar ? `${starsNumber}.5/` : `${starsNumber}/`}
        <span style={{ color: "var(--color-dark-3)" }}>5</span>
      </p>
    </div>
  )
}

export default RatingView
