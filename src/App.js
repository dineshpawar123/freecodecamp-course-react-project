import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import ReactjsLibraryProjects from './home';
import Clock from './pages/clock';
import DrumMachine from './pages/drumMachine';
import Calculator from './pages/calculator';
import QuoteMachine from './pages/quoteMachine';
import MarkDownPreview from './pages/markDownPreview';
import UserCrude from './pages/userCrude';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ReactjsLibraryProjects />} />
          <Route path="/quote" element={<QuoteMachine />} />
          <Route path="/drum" element={<DrumMachine />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/previewer" element={<MarkDownPreview />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/crude" element={<UserCrude />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
