import WeatherByDate from "./component/WeatherByDate";
import WeatherByMonth from "./component/WeatherByMonth";
import YearlyStats from "./component/YearlyStats";
import "./App.css";

function App(){
return(
<div className="container">

<h1> Weather Dashboard</h1>

<WeatherByDate/>
<WeatherByMonth/>
<YearlyStats/>

</div>
);
}

export default App;