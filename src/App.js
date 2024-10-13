import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Store from './Pages/Store';
import Community from './Pages/Community';
import ModShopComponent from './Pages/ModShop';
import Account from './Pages/Account';
import ProductPage from './Pages/Product'; // Import the Product Page component
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Set initial page to Home
  const [selectedGame, setSelectedGame] = useState(null); // For storing the selected game

  const handleGameClick = (game) => {
    setSelectedGame(game); // Store the clicked game
    setCurrentPage('product'); // Change the page to 'product'
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'store':
        return <Store onGameClick={handleGameClick} />; // Pass the handleGameClick function to the Store
      case 'community':
        return <Community />;
      case 'modshop':
        return <ModShopComponent />;
      case 'account':
        return <Account />;
      case 'product':
        return <ProductPage game={selectedGame} onBack={() => setCurrentPage('store')} />; // Product page shows selected game
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Header setCurrentPage={setCurrentPage} /> {/* Pass setCurrentPage to Navbar */}
      {renderPage()} {/* Render the current page based on state */}
      <Footer />
    </div>
  );
}

export default App;
