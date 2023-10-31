import { Route, Routes } from 'react-router-dom';
import { First } from './pages/first/first';
import classnames from 'classnames';
import { ArtistsPage } from './pages/artists/artists';
import { ProductsPage } from './pages/products/products';

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
              </Routes>
            </div>
        </>
    );
}

export default App;
