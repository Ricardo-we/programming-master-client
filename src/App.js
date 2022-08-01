import { AuthProvider } from "./hooks-contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";
import BaseRouter from "./config/routers/BaseRouter";
import AuthRouter from "./config/routers/AuthRouter";
import BaseLayout from "./components/layouts";

import "./assets/css/main.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<>
			<BaseRouter />
		</>
	);
}

export default App;
