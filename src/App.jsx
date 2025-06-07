import { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Index from "./pages/Index";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<Nav />
				<Index />
				{/* <Footer /> */}
			</div>
		</>
	);
}

export default App;
