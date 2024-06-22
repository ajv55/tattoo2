
import Nav from '../components/mainPage/nav';
import Hero from '../components/mainPage/hero';
import WelcomeSection from '../components/mainPage/welcome';
import AboutSection from '../components/mainPage/about';
import ServicesSection from '../components/mainPage/service';
import Testimonials from '../components/mainPage/testimonials';
import CallToAction from '../components/mainPage/action';
import ContactSection from '../components/mainPage/contact';
import Footer from '../components/mainPage/footer';
 
export default function Page() {


  return (
    <div>
      <Nav />
      <Hero />
      <main>
        <WelcomeSection />
        <AboutSection />
        <ServicesSection />
        <Testimonials />
        <CallToAction />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}