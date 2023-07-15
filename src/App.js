import './App.css';
import NavbarCom from './Components/NavbarCom';
import Insights from './Components/Insights';
import CoverPage from './Components/CoverPage';
import Service from './Components/Services';

function App() {
    return (
      <>
        <CoverPage/>
        <NavbarCom className="Navigation" />
        <Insights />
        <Service />
      </>
  );
}

export default App;
