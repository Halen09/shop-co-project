
import {Image} from "minista";
import "./logo.scss"

export default (props) => {
  const { className} = props

  return (
    <a
      className={`${className} logo`}
      title={"Home"}
      aria-label={"Home"}
      href="/"
    >
      <Image src={"/src/assets/images/logo.png"}/>
    </a>
  )
}
