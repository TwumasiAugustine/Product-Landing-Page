import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';
import Content from './component/HomeContent';
import CreateAcc from './component/createAcc';
import About from './page/About';
import Collection from './page/Collection';
import Contact from './page/Contact';
import NoPage from './page/NoPage';
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Content />} />
					<Route path='/page/collection' element={<Collection />} />
					<Route path='/page/about' element={<About />} />
					<Route path='/page/contact' element={<Contact />} />
					<Route path='/page/createAcc' element={<CreateAcc />} />
					<Route path='*' element={<NoPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
