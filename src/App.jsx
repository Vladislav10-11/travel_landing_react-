import Header from './components/Header/Header';
import styles from './App.module.scss';
import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';
import Stories from './components/Stories/Stories';
import Popular from './components/Popular/Popular';

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Categories />
      <Stories />
      <Popular />
    </div>
  );
};

export default App;
