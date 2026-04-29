import { Contact } from "../components/Contact";
import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import { Process } from "../components/Process";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { FreightCalculator } from "../components/FreightCalculator";
// import { Countries } from "../components/Countries";

export function HomePage() {
  return (
    <main>
      <Hero />
      <About compact />
      <Services />
      {/* <Countries /> */}
      <Process />
      <Features />
      <FreightCalculator />
      <Contact />
    </main>
  );
}