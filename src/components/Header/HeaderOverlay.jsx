const HeaderOverlay = (props) => {
  const { navItems } = props

  return (
    <div className="header__overlay" data-js-overlay>
      <nav className="header__menu">
        <ul className="header__menu-list">
          {navItems.map(({ href, title, id, isSelect }) => {
            if (isSelect) {
              return (
                <li className={"header__menu-item"} key={id}>
                  {title}
                </li>
              )
            }

            return (
              <li className={"header__menu-item"} key={id}>
                <a className={"header__menu-link"} href={href}>
                  {title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default HeaderOverlay
