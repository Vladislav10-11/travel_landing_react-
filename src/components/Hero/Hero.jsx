import styles from './Hero.module.scss';
import searchIcon from './../../assets/SearchIcon.svg';

function Hero() {
  return (
    <>
      <div className={styles.heroWrapper}>
        <div className={styles.heroText}>
          <h1>Discover the Best Lovely Places</h1>
          <p>
            Plan and book your perfect trip with expert advice, travel tips, destination information
            and inspiration from us.
          </p>
          <div className={styles.searchWrapper}>
            <input
              className={styles.searchInputPlace}
              type='text'
              placeholder='Center Point, Lo...'
            />
            <input type='text' className={styles.searchInputDate} placeholder='09th March,2021' />
            <div className={styles.searchIcon}>
              <img src={searchIcon} alt='Search icon' />
            </div>
          </div>
        </div>
        <div className={styles.img}></div>
      </div>
    </>
  );
}

export default Hero;
