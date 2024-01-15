import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/common/Footer';
import NavSite from './components/common/NavSite';
import HomePage from './components/home/HomePage';
import Proyectos from './components/proyectos/Proyectos';

function App() {
	return (
		<div>
			<NavSite />
			<Routes>
				<Route path="*" element={<HomePage />} />
				<Route path="/" exact={true} element={<HomePage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
        <Route path='/proyectos' element={<Proyectos/>}/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
