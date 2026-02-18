import { Icon } from "minista"

const HeaderActions = (props) => {
  const { actionItems } = props

  return (
    <div className="header__actions">
      <ul className="header__actions-list">
        {actionItems.map(({ href, title, id, isDesktopHidden }) => (
          <li
            className={`header__actions-item ${isDesktopHidden ? "visible-mobile" : ""}`}
            key={id}
          >
            <a
              className={"header__actions-link"}
              title={title}
              aria-label={title}
              href={href}
            >
              <Icon width={"24"} height={"24"} iconId={title} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HeaderActions
