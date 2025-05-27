import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Members from './pages/Members';
import InnerCircle from './pages/InnerCircle';
import NeighbourhoodNews from './pages/NeighbourhoodNews';
import ExclusiveArmadale from './pages/ExclusiveArmadale';
import NotFound from './pages/NotFound';
import New1 from './pages/campaigns/New1';
import New2 from './pages/campaigns/New2';
import New3 from './pages/campaigns/New3';
import Product1 from './pages/campaigns/Product1';
import Product2 from './pages/campaigns/Product2';
import Product3 from './pages/campaigns/Product3';
import Product4 from './pages/campaigns/Product4';
import Product5 from './pages/campaigns/Product5';
import Product6 from './pages/campaigns/Product6';
import Product7 from './pages/campaigns/Product7';
import Product8 from './pages/campaigns/Product8';
import Product9 from './pages/campaigns/Product9';
import Product10 from './pages/campaigns/Product10';
import Product11 from './pages/campaigns/Product11';
import Product12 from './pages/campaigns/Product12';
import Product13 from './pages/campaigns/Product13';
import Product14 from './pages/campaigns/Product14';
import Product15 from './pages/campaigns/Product15';
import Product16 from './pages/campaigns/Product16';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaigns/new-1" element={<New1 />} />
        <Route path="/campaigns/new-2" element={<New2 />} />
        <Route path="/campaigns/new-3" element={<New3 />} />
        <Route path="/members" element={<Members />} />
        <Route path="/inner-circle" element={<InnerCircle />} />
        <Route path="/neighbourhood-news" element={<NeighbourhoodNews />} />
        <Route path="/exclusive-armadale" element={<ExclusiveArmadale />} />
        <Route path="/campaigns/victor-churchill-1" element={<Product1 />} />
        <Route path="/campaigns/scanlan-theodore-2" element={<Product2 />} />
        <Route path="/campaigns/skin-angel-3" element={<Product3 />} />
        <Route path="/campaigns/rinas-cucina-4" element={<Product4 />} />
        <Route path="/campaigns/et-al-5" element={<Product5 />} />
        <Route path="/campaigns/james-said-6" element={<Product6 />} />
        <Route path="/campaigns/riva-bridal-7" element={<Product7 />} />
        <Route path="/campaigns/bernadette-pimenta-8" element={<Product8 />} />
        <Route path="/campaigns/raffaele-ciuca-9" element={<Product9 />} />
        <Route path="/campaigns/paragon-studio-10" element={<Product10 />} />
        <Route path="/campaigns/facial-healing-co-11" element={<Product11 />} />
        <Route path="/campaigns/venroy-12" element={<Product12 />} />
        <Route path="/campaigns/amaru-13" element={<Product13 />} />
        <Route path="/campaigns/dotf-14" element={<Product14 />} />
        <Route path="/campaigns/eye-st-15" element={<Product15 />} />
        <Route path="/campaigns/window-workshop-16" element={<Product16 />} />
        <Route path="/privacy-policy" element={<NotFound />} />
        <Route path="/terms-conditions" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
