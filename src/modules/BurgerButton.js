class BurgerButton {
  selectors = {
    burgerButton: "[data-js-burger-button]",
    overlay: "[data-js-overlay]",
  }

  stateClasses = {
    isActive: "is-active",
    isLock: "is-lock",
  }

  constructor() {
    this.burgerButtonElement = document.querySelector(
      this.selectors.burgerButton,
    )
    this.overlayElement = document.querySelector(this.selectors.overlay)
    this.bindEvents()
  }

  onClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
    this.overlayElement.classList.toggle(this.stateClasses.isActive)
    document.documentElement.classList.toggle(this.stateClasses.isLock)
  }

  bindEvents() {
    this.burgerButtonElement.addEventListener("click", this.onClick)
  }
}

export default BurgerButton
