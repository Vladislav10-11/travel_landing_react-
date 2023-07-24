import Header from './components/Header/Header';
import styles from './App.module.scss';
import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Categories />
    </div>
  );
};

export default App;
