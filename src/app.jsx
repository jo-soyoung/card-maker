import styles from './app.module.css';
import Header from './components/header/header';
import Login from './components/login/login';
import Footer from './components/footer/footer';

function App({ authService }) {
  return (
    <div className={styles.container}>
      <section className={styles.modal}>
        <Header />
        <Login authService={authService} />
        <Footer />
      </section>
    </div>
  );
}

export default App;
