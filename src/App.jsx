import React from 'react';
import Header from './component/Header';
import Content from './component/HomeContent';
import Footer from './component/Footer';
import Collection from '../page/Products';
import NoPage from '../page/NoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
    return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Content />} />
					<Route path='/page/collection' element={<Collection />} />
					<Route path='*' element={<NoPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
