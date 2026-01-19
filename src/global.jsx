import { Head } from "minista"
import Header from "@/layouts/Header/Header"
import "./styles/main.scss"

export default function (props) {
  const { children, title } = props

  return (
    <>
      <Head htmlAttributes={{ lang: "en" }}>
        <title>ShopCo | {title}</title>
        <script src={"/src/modules/main.js"} defer type={"module"} />
      </Head>
      <Header />
      <main>{children}</main>
      <footer>FOOTER</footer>
    </>
  )
}
