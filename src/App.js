import './App.css';
import Cards from './components/Card';
import Header from './components/Header';
import data from './data';


function App() {
	const cards = data.map(item => {
		return <Cards key={item.id} item={item} />;
	});
	return (
		<div className='App'>
			<Header />
			{cards}
		</div>
	);
}

export default App;
