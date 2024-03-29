import './App.css';
import CoverPage from './Components/CoverPage';
import Service from "./Components/Service/Services"
import Journey from './Components/Journey/Journey';
import ScrollRevealComponent from './Components/ScrollReveal';
import Insights from './Components/Insights/Insights';
import NavbarCom from './Components/NavbarCom';
import Clientele from './Components/Clientele/Clientel';
import Career from './Components/Career/Career';
import ContactUs from './Components/Contact Us/ContactUs';
import Bg_Particle from './Components/Bg_Particle';
import Profile from './Components/Profile/Profile';
import Policy from './Components/Policy/Policy';
import FooterCom from './Components/FooterCom';

function App() {
    const handleNavLinkClick = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
      <section>
          <ScrollRevealComponent>
            <NavbarCom handleNavLinkClick={handleNavLinkClick}/>
          </ScrollRevealComponent>
          <section id='home'>
              <CoverPage/>
          </section>
          <section id='insight'>
              <Insights />
          </section>
          <section id='services'>
              <Service />
          </section>
          <section id='journey'>
              <Journey />
          </section>
          <section id='clientele'>
              <Clientele />
          </section>
          <section id='career'>
              <Career />
          </section>
          <section id='contact'>
              <ContactUs />
          </section>
          <section id='profile'>
              <Profile />
          </section>
          <section id='policy'>
              <Policy />
          </section>
          <section>
            <FooterCom handleNavLinkClick={handleNavLinkClick}/>
          </section>
          <Bg_Particle />
      </section>
  );
}

export default App;
