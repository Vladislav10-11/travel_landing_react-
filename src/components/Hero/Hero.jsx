import styles from './Hero.module.scss';
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
        </div>
        <div className={styles.img}></div>
      </div>
      <div></div>
    </>
  );
}

export default Hero;
