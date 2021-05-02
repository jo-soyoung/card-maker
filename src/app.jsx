import styles from './app.module.css';
import Header from './components/header/header';
import Login from './components/login/login';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <Header />
        <Login />
        <Footer />
      </div>
    </div>
  );
}

export default App;
