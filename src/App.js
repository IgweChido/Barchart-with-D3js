import LoginComp from "./components/LoginComp";
import './App.scss'
import MainPage from "./components/mainPage";
import BarChartPage from "./components/BarChartPage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'> <MainPage/></Route>
          <Route path='/barchart'><BarChartPage/></Route>
        </Switch>  
    </div>
    </Router>
    
  );
}

export default App;
