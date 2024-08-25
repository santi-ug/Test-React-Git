import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import FormPage from "./components/form";
import Main from "./components/Main";
import "./App.css";

const App: React.FC = () => { 
	return (
		<Routes>
			<Route path="/home" element={
				<>
					<Header />
					<Main />
					<Footer />
				</>
			} />

			<Route path="/form" element={
				<>
					<Header />
					<FormPage />
					<Footer />
				</>
			} />
		</Routes>
	);
}

export default App;
