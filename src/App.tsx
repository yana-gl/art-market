import { Route, Routes } from 'react-router-dom';
import { First } from './pages/first/first';
import classnames from 'classnames';
import { ArtistsPage } from './pages/artists/artists';
import { ProductsPage } from './pages/products/products';
import { ProductCard } from './components/global/productCard/productCard';

function App() {
    return (
        <>
            <div
                className={classnames(
                    'wrapper',
                    'clear',
                )}
            >
                <Routes>
                    <Route
                        path="/"
                        element={<First/>}
                    />
                    <Route
                        path="/artists"
                        element={<ArtistsPage/>}
                    />
                    <Route
                        path="/products"
                        element={<ProductsPage/>}
                    />
                    <Route
                        path="/products/:id"
                        element={<ProductCard/>}
                    />
                </Routes>
            </div>
        </>
    );
}

export default App;
