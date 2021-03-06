import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      {isAuthenticated && <Header />}
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <Counter />}
    </Fragment>
  );
}

export default App;
