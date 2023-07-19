import './App.css';
import CoverPage from './Components/CoverPage';
import Service from "./Components/Service/Services"
import Journey from './Components/Journey/Journey';
import ScrollRevealComponent from './Components/ScrollReveal';
import Insights from './Components/Insights/Insights';
import NavbarCom from './Components/NavbarCom';
import Clientele from './Components/Clientele/Clientel';

function App() {
    return (
      <>
        <CoverPage/>
        <ScrollRevealComponent>
          <NavbarCom/>
        </ScrollRevealComponent>
        <Insights />
        <Service />
        <Journey />
        <Clientele />
      </>
  );
}

export default App;