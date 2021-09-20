import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import HomeComponent from './home'
import CourseComponent from './course'
import StudentsComponent from './students'
import Example from './displayModal'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" render={holy=> <HomeComponent name="Megala" {...holy}  /> }  ></Route>
      <Route exact path="/course" render={(holy)=>{return <CourseComponent name="CAR" {...holy}  /> }} ></Route>
      <Route exact path="/students" render={(holy)=>{return <StudentsComponent name="STORE" {...holy}  /> }} ></Route>
      </BrowserRouter>
      <Example />
    </div>
  );
}

export default App;
