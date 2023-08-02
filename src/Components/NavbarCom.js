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
            <Navbar.Brand className='company' onClick={() => handleNavLinkClick('#home')}>Ora Tech Systems</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => document.activeElement.blur()}/>
            <Navbar.Collapse id="basic-navbar-nav" className="navbar-com">
              <Nav className='mx-auto'>
                <Nav.Link onClick={() => handleNavLinkClick('#insight')} active={activeLink === '#insight'}>Company Insights</Nav.Link>
                <Nav.Link onClick={() => handleNavLinkClick('#services')} active={activeLink === '#services'}>Services</Nav.Link>
                <Nav.Link onClick={() => handleNavLinkClick('#journey')} active={activeLink === '#journey'}>Our Journey</Nav.Link>
                <Nav.Link onClick={() => handleNavLinkClick('#clientele')} active={activeLink === '#clientele'}>Clientele</Nav.Link>
                <Nav.Link onClick={() => handleNavLinkClick('#career')} active={activeLink === '#career'}>Career</Nav.Link>
                <Nav.Link onClick={() => handleNavLinkClick('#contact')} active={activeLink === '#contact'}>Contact Us</Nav.Link>
                <Nav.Link onClick={() => handleNavLinkClick('#profile')} active={activeLink === '#profile'}>Company Profile</Nav.Link>
                <Nav.Link onClick={() => handleNavLinkClick('#policy')} active={activeLink === '#policy'}>Company Policy</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default NavbarCom;