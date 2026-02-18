import { Image } from "minista"
import Button from "@/components/Button/Button"
import Metrics from "@/components/Metrics/Metrics"

const HeroBody = (props) => {
  const { ariaLabel, metrics } = props

  return (
    <div className="hero__body">
      <div className="hero__body-inner container">
        <div className="hero__main-container">
          <div className="hero__main">
            <h1 className="hero__title" aria-label={ariaLabel}>
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="hero__description">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Button
              className={"hero__main-link"}
              title={"Shop Now"}
              href={"/"}
            />
          </div>
          <Metrics className={"hero__metrics"} metrics={metrics} />
        </div>
        <div className="hero__image">
          <Image src={"/src/assets/images/hero/bg-3.png"} />
        </div>
      </div>
    </div>
  )
}

export default HeroBody
