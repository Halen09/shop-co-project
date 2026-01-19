import HeaderPromo from "@/components/Header/HeaderPromo"
import HeaderBody from "@/components/Header/HeaderBody"

export default () => {
  const navItems = [
    { href: "/", title: "SELECT", id: "item-1", isSelect: true },
    { href: "/", title: "On Sale", id: "item-2", isSelect: false },
    { href: "/", title: "New Arrivals", id: "item-3", isSelect: false },
    { href: "/", title: "Brands", id: "item-4", isSelect: false },
  ]

  const actionItems = [
    { href: "/", title: "search", id: "action-1", isDesktopHidden: true },
    { href: "/", title: "cart", id: "action-2", isDesktopHidden: false },
    { href: "/", title: "account", id: "action-3", isDesktopHidden: false },
  ]

  return (
    <header className="header">
      <HeaderPromo />
      <HeaderBody navItems={navItems} actionItems={actionItems} />
    </header>
  )
}
