class ClosePromoButton {
  selectors = {
    promo: "[data-js-promo]",
    closeButton: "[data-js-promo-close-button]",
  }

  stateClasses = {
    hidden: "hidden",
  }

  constructor() {
    this.promoElement = document.querySelector(this.selectors.promo)
    this.closeButtonElement = document.querySelector(this.selectors.closeButton)
    this.bindEvents()
  }

  onClick = () => {
    this.promoElement.classList.add(this.stateClasses.hidden)
  }

  bindEvents() {
    this.closeButtonElement.addEventListener("click", this.onClick)
  }
}

export default ClosePromoButton
