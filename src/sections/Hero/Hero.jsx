import HeroBody from "@/sections/Hero/HeroBody"
import HeroCompanies from "@/sections/Hero/HeroCompanies"
import "./hero.scss"

const Hero = () => {
  const ariaLabel = "hero-title"

  const metricsItems = [
    { key: "International Brands", value: "200", id: "metrics-1" },
    { key: "High-Quality Products", value: "2,000", id: "metrics-2" },
    { key: "Happy Customers", value: "30,000", id: "metrics-3" },
  ]

  const companiesItems = [
    { href: "/", title: "versace", image: "versace.svg", id: "company-1" },
    { href: "/", title: "zara", image: "zara.svg", id: "company-2" },
    { href: "/", title: "gucci", image: "gucci.svg", id: "company-3" },
    { href: "/", title: "prada", image: "prada.svg", id: "company-4" },
    {
      href: "/",
      title: "calvin klein",
      image: "calvin-klein.svg",
      id: "company-5",
    },
  ]

  return (
    <section className="hero" aria-labelledby={ariaLabel}>
      <div className="hero__inner">
        <HeroBody ariaLabel={ariaLabel} metrics={metricsItems} />
        <HeroCompanies companiesItems={companiesItems} />
      </div>
    </section>
  )
}

export default Hero
