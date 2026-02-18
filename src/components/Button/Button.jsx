import "./button.scss"

const Button = (props) => {
  const { className, title, href } = props

  return (
    <a
      className={`${className} button`}
      href={href}
      aria-label={title}
      title={title}
    >
      {title}
    </a>
  )
}

export default Button
