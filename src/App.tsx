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
                {/* <Header/> */}
                <Route
                      path="/"
                      element={<First/>}
                />
                  {/* <Route path="/fav">
                      <Favorites />
                  </Route>
                  <Route path="/profile">
                      <Profile />
                  </Route> */}
              </Routes>
            </div>
        </>
    );
}

export default App;
