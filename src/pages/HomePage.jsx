import Seo from '../components/ui/Seo'
import Hero from '../components/Home'
import TrustStrip from '../components/TrustStrip'
import ServicesMarquee from './ServicesMarquee'
import WhyChoose from '../components/WhyChoose'
import OurPeople from '../components/OurPeople'
import HowItWorks from '../components/HowItWorks'
import WhoWeSupport from '../components/WhoWeSupport'
import ServiceArea from '../components/ServiceArea'
import Gallery from '../components/Gallery'
import About from '../components/About'
import FinalCTA from '../components/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Seo
        title="AAYDS - Personalised NDIS Disability Support in Moreton Bay"
        description="AAYDS delivers personalised NDIS disability support across Moreton Bay - Supported Independent Living, personal care, community participation and daily living support. Call 1300 593 206."
      />
      <Hero />
      <TrustStrip />
      <main>
        <ServicesMarquee />
        <WhyChoose />
        <OurPeople />
        <HowItWorks />
        <WhoWeSupport />
        <ServiceArea />
        <Gallery />
        <About />
        <FinalCTA />
      </main>
    </>
  )
}
