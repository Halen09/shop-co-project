export default (props) => {
  const { className } = props

  return (
    <button
      className={`${className} burger-button visible-mobile`}
      aria-label={"Open menu"}
      title={"Open menu"}
      type="button"
      data-js-burger-button
    >
      <div className="burger-button__line"></div>
      <div className="burger-button__line"></div>
      <div className="burger-button__line"></div>
    </button>
  )
}
