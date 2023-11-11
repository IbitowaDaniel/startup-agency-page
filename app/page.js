import { Hero, ProductFunction, Services, Features, NumberedFunction, Pricing, Team, Testimonial, Blog, Subscribe, Community, } from "./sections"

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductFunction />
      <Services />
      <Features />
      <NumberedFunction />
      <Pricing />
      <Team />
      <Testimonial />
      <Blog />
      <Subscribe />
      <Community />
    </main>
  )
}
