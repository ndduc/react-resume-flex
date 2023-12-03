import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import HomePage from './views/home-page';
import SkillPage from './views/skill-page';
import ProjectPage from './views/project-page';
import "bootstrap/dist/css/bootstrap.css"; 
import TopNavigationBar from './components/top-nav/top-nav';

function App() {
  return (
    <Router>
      <RoutesWithNavigation />
    </Router>
  );
}


const RoutesWithNavigation = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <TopNavigationBar/>}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/skill" element={<SkillPage/>}></Route>
        <Route path="/project" element={<ProjectPage/>}></Route>
      </Routes>
    </>
  );

}

export default App;
