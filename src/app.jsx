import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Home from './components/home/home';

function App({ FileInput, authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path={['/login', '/']} exact>
            <Login authService={authService} />
          </Route>
          <Route path="/home">
            <Home FileInput={FileInput} authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
