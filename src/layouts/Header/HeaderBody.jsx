import BurgerButton from "@/components/BurgerButton/BurgerButton"
import Logo from "@/components/Logo/Logo"
import Form from "@/components/Form/Form"
import HeaderOverlay from "@/layouts/Header/HeaderOverlay"
import HeaderActions from "@/layouts/Header/HeaderActions"

const HeaderBody = (props) => {
  const { navItems, actionItems } = props

  return (
    <div className="header__body">
      <div className="header__body-inner container">
        <BurgerButton className={"header__burger-button"} />
        <Logo className={"header__logo"} width={"160"} height={"22"} />
        <HeaderOverlay navItems={navItems} />
        <Form
          type={"search"}
          label={"Search for products..."}
          className={"header__form"}
        />
        <HeaderActions actionItems={actionItems} />
      </div>
    </div>
  )
}

export default HeaderBody
