import './App.css';
import NavbarCom from './Components/NavbarCom';
import Insights from './Components/Insights/Insights';
import CoverPage from './Components/CoverPage';
import Service from './Components/Service/Services';
import Journey from './Components/Journey/Journey';

function App() {
    return (
      <>
        <CoverPage/>
        <NavbarCom className="Navigation" />
        <Insights />
        <Service />
        <Journey />
      </>
  );
}

export default App;
