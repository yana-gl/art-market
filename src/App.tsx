import { Route, Routes } from 'react-router-dom';
import { First } from './pages/first/first';
import classnames from 'classnames';

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
              </Routes>
            </div>
        </>
    );
}

export default App;
