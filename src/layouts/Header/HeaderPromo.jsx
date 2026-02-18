import { Icon } from "minista"

const HeaderPromo = () => {
  return (
    <div className="header__promo" data-js-promo>
      <div className="header__promo-container container">
        <span className="header__promo-description">
          Sign up and get 20% off to your first order.{" "}
          <a className={"header__promo-link"} href="/public">
            Sign Up Now
          </a>
        </span>
        <button
          className="header__promo-button hidden-mobile"
          type="button"
          data-js-promo-close-button
          title={"close"}
          aria-label={"close"}
        >
          <Icon width={"20"} height={"20"} iconId={"cross_header"} />
        </button>
      </div>
    </div>
  )
}

export default HeaderPromo
