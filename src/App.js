import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Home } from './components/portfolio/home';
import { About } from './components/portfolio/about';
import { Education } from './components/portfolio/education';
import { Skill } from './components/portfolio/Skills';
import { Certification } from './components/portfolio/certification';
import { Project } from './components/portfolio/project';
import { Hello } from './components/task1/helloworld';
import { Card } from './components/task1/card';
import { Super } from './components/task1/super';
import { Social } from './components/task1/social';
import { Notification } from './components/task1/notification';
import { Login } from './components/task1/form';
import { Tech } from './components/task1/technology';
import { Hooks } from './components/task1/hooks';
import { Fruit } from './components/task1/fruits';
import { Feedback } from './components/task1/feedback';
import { Heart } from './components/task1/herat';
import {Climate} from './components/task1/fake api/weather';

function App() {
  return (
      <>
      <BrowserRouter> 
      <Routes>
        <Route path='/' element={[<Home/>,<About/>,<Education/>,<Skill/>,<Certification/>]}/>
        <Route path="/project/hello" element={[<Project/>,<Hello/>]}/>
        <Route path="/project/Card" element={[<Project/>,<Card/>]}/>
        <Route path="/project/Super" element={[<Project/>,<Super/>]}/>
        <Route path="/project/Social" element={[<Project/>,<Social/>]}/>
        <Route path="/project/Notification" element={[<Project/>,<Notification/>]}/>
        <Route path="/project/Login" element={[<Project/>,<Login/>]}/>
        <Route path="/project/Tech" element={[<Project/>,<Tech/>]}/>
        <Route path="/project/Hooks" element={[<Project/>,<Hooks/>]}/>
        <Route path="/project/Fruit" element={[<Project/>,<Fruit/>]}/>
        <Route path="/project/Feedback" element={[<Project/>,<Feedback/>]}/>
        <Route path="/project/Climate" element={[<Project/>,<Climate/>]}/> 
        <Route path="/Heart" element={<Heart/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
