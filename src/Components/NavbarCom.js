import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarCom({ handleNavLinkClick })
{
    const [activeLink, setActiveLink] = useState('#home');

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 1.85;
      const sections = ['#home', '#insight', '#services', '#journey', '#clientele', '#career', '#contact', '#profile', '#policy'];
      const activeSection = sections.find((section) => {
        const element = document.querySelector(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          return scrollPos >= offsetTop && scrollPos < offsetBottom;
        }
        return false;
      });
      setActiveLink(activeSection || '#home');
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);    

    return(
        <Navbar expand="lg" className="bg-black" data-bs-theme="dark" fixed='top'>
          <Container>
            <Navbar.Brand className='company' href="#home" onClick={handleNavLinkClick}>Ora Tech Systems</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => document.activeElement.blur()}/>
            <Navbar.Collapse id="basic-navbar-nav" className="navbar-com">
              <Nav className='mx-auto'>
                <Nav.Link href="#insight" onClick={handleNavLinkClick} active={activeLink === '#insight'}>Company Insights</Nav.Link>
                <Nav.Link href="#services" onClick={handleNavLinkClick} active={activeLink === '#services'}>Services</Nav.Link>
                <Nav.Link href="#journey" onClick={handleNavLinkClick} active={activeLink === '#journey'}>Our Journey</Nav.Link>
                <Nav.Link href="#clientele" onClick={handleNavLinkClick} active={activeLink === '#clientele'}>Clientele</Nav.Link>
                <Nav.Link href="#career" onClick={handleNavLinkClick} active={activeLink === '#career'}>Career</Nav.Link>
                <Nav.Link href="#contact" onClick={handleNavLinkClick} active={activeLink === '#contact'}>Contact Us</Nav.Link>
                <Nav.Link href="#profile" onClick={handleNavLinkClick} active={activeLink === '#profile'}>Company Profile</Nav.Link>
                <Nav.Link href="#policy" onClick={handleNavLinkClick} active={activeLink === '#policy'}>Company Policy</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default NavbarCom;