import { Route, Routes } from 'react-router-dom';
import { First } from './pages/first/first';
import classnames from 'classnames';
import { ArtistsPage } from './pages/artists/artists';
import { ProductsPage } from './pages/products/products';
import { ArtistCard } from './pages/artistCard/artistCard';
import { ProductCard } from './pages/productCard/productCard';
import { Suspense } from 'react';
import { ScrollToTop } from './components/global/scrollToTop/scrollToTop';

function App() {
    
    return (
        <>
            <div
                className={classnames(
                    'wrapper',
                    'clear',
                )}
            >
                <ScrollToTop/>
                <Suspense fallback={<>...</>}>
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
                        <Route
                            path="/artists/:id"
                            element={<ArtistCard/>}
                        />
                    </Routes>
                </Suspense>
                
            </div>
        </>
    );
}

export default App;
