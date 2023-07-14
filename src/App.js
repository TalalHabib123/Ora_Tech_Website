import './App.css';
import NavbarCom from './Components/NavbarCom';
import Insights from './Components/Insights';
import CoverPage from './Components/CoverPage';

function App() {
    return (
      <>
        <CoverPage/>
        <NavbarCom className="Navigation" />
        <Insights />
      </>
  );
}

export default App;
