import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import FormPage from "./components/form";
import Header from "./components/Header";
import Main from "./components/Main";

const App: React.FC = () => {
	return (
		<Routes>
			<Route
				path='/home'
				element={
					<>
						<Header />
						<Main />
						<Footer />
					</>
				}
			/>

			<Route
				path='/form'
				element={
					<>
						<Header />
						<FormPage />
						<Footer />
					</>
				}
			/>
		</Routes>
	);
};

export default App;
