import './form.scss'

export default (props) => {
  const { type, label, className } = props

  if (type === "search") {
    return (
      <form action="" className={`${className} search-form hidden-mobile`}>
        <label className={"search-form__label"} htmlFor={"search"}>{label}</label>
        <input
          className="search-form__input"
          id="search"
          type="search"
          placeholder={" "}
        />
      </form>
    )
  }
}
