import { Image } from "minista"
import RatingView from "@/components/RatingView/RatingView"
import styles from "./Section.module.scss"
import Button from "@/components/Button/Button"

const Section = (props) => {
  const { title, titleId, items } = props

  return (
    <section
      className={`${styles.section} container`}
      aria-labelledby={titleId}
    >
      <h2 className={styles.title} id={titleId}>
        {title}
      </h2>
      <div className={styles.body}>
        <ul className={styles.list}>
          {items.map(
            ({
              id,
              src,
              title,
              price,
              starsNumber,
              hasAHalfOfStar,
              discount,
            }) => {
              return (
                <li className={styles.item} key={id}>
                  <div className={styles.card}>
                    <a
                      className={styles.link}
                      href="/"
                      title={"go to product"}
                      aria-label={"go to product"}
                    >
                      <Image
                        src={`/src/assets/images/${src}`}
                        className={styles.image}
                        alt={title}
                        width={295}
                        height={298}
                      />
                    </a>
                    <div className={styles.description}>
                      <h3 className={styles.cardTitle}>{title}</h3>
                      <RatingView
                        starsNumber={starsNumber}
                        hasAHalfOfStar={hasAHalfOfStar}
                      />
                      <div className={styles.priceContainer}>
                        <p
                          className={styles.price}
                        >{`$${discount ? price - price * (discount / 100) : price}`}</p>
                        {discount && (
                          <>
                            <p
                              className={styles.startingPrice}
                            >{`$${price}`}</p>
                            <div
                              className={styles.discount}
                            >{`-${discount}%`}</div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              )
            },
          )}
        </ul>
        <Button
          className={`${styles.button} button--light`}
          title={"View All"}
          href={"/"}
        />
      </div>
    </section>
  )
}

export default Section
