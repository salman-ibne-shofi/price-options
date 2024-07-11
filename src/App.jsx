// import DaisyNav from "./components/DaisyNav/DaisyNav";
import LineChart from "./components/LineChart/LineChart";
import NavBar from "./components/NavBar/NavBar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
	return (
		<>
			<NavBar></NavBar>
			{/* <DaisyNav></DaisyNav> */}
			<h1 className="text-7xl bg-red-600">Vite + React</h1>
            <PriceOptions></PriceOptions>
            <LineChart></LineChart>
            <Phones></Phones>
		</>
	);
}

export default App;
