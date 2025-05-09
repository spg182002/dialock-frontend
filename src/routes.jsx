// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MailSettings from './Pages/MailSettings/MailSettings';


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MailSettings />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
