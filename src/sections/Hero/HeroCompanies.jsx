import { Image } from "minista"

const HeroCompanies = (props) => {
  const { companiesItems } = props

  return (
    <div className="hero__companies">
      <div className="hero__companies-inner container">
        <ul className="hero__companies-list">
          {companiesItems.map(({ href, title, image, id }) => {
            return (
              <li className={"hero__companies-item"} key={id}>
                <a
                  className={"hero__companies-link"}
                  href={href}
                  aria-label={title}
                  title={title}
                >
                  <Image src={`/src/assets/images/hero/${image}`} />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default HeroCompanies
