import Header from './components/Header/Header';
import styles from './App.module.scss';
import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';
import Stories from './components/Stories/Stories';

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Categories />
      <Stories />
    </div>
  );
};

export default App;
