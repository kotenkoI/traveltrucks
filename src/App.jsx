import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import Loader from './components/Loader/Loader.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog.jsx'));
const Campers = lazy(() => import('./pages/Campers/Campers.jsx'));
const CampDetails = lazy(() => import('./components/CamperDetails/CamperDetails.jsx'));
const Reviews = lazy(() => import('./components/Reviews/Reviews.jsx'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/:id" element={<Campers />}>
            <Route path="features" element={<CampDetails />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorMessage />} /> 
      </Routes>
    </Suspense>
  );
}

export default App;
