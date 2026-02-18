import Hero from "@/sections/Hero/Hero"
import Section from "@/components/Section/Section"

export const metadata = {
  title: "Home",
}

const arrivalsItems = [
  {
    id: "arrival-1",
    src: "arrivals/1.jpg",
    title: "T-shirt with tape details",
    price: 120,
    starsNumber: 4,
    hasAHalfOfStar: true,
  },
  {
    id: "arrival-2",
    src: "arrivals/2.jpg",
    title: "Skinny Fit Jeans",
    price: 260,
    starsNumber: 3,
    hasAHalfOfStar: true,
    discount: 20,
  },
  {
    id: "arrival-3",
    src: "arrivals/3.jpg",
    title: "Checkered Shirt",
    price: 180,
    starsNumber: 4,
    hasAHalfOfStar: true,
  },
  {
    id: "arrival-4",
    src: "arrivals/4.jpg",
    title: "Sleeve Stripped T-shirt",
    price: 160,
    starsNumber: 4,
    hasAHalfOfStar: true,
    discount: 30,
  },
]

const topSellingItems = [
  {
    id: "top-selling-1",
    src: "top-selling/1.jpg",
    title: "Vertical Stripped Shirt",
    price: 232,
    starsNumber: 5,
    discount: 20,
  },
  {
    id: "top-selling-2",
    src: "top-selling/2.jpg",
    title: "Courage Graphic T-shirt",
    price: 145,
    starsNumber: 4,
  },
  {
    id: "top-selling-3",
    src: "top-selling/3.jpg",
    title: "Loose Fit Bermuda Shorts",
    price: 80,
    starsNumber: 3,
  },
  {
    id: "top-selling-4",
    src: "top-selling/4.jpg",
    title: "Faded Skinny Jeans",
    price: 210,
    starsNumber: 4,
    hasAHalfOfStar: true,
  },
]

export default function () {
  return (
    <>
      <Hero />
      <Section
        title={"NEW ARRIVALS"}
        titleId={"new-arrivals-title"}
        items={arrivalsItems}
      />
      <Section
        title={"TOP SELLING"}
        titleId={"top-selling-title"}
        items={topSellingItems}
      />
    </>
  )
}
