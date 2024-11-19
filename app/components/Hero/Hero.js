import Image from 'next/image';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        {/* Left Side Content */}
        <div className={styles.text}>
          <div className={styles.badge}>#1 Platform in Health and Wellness</div>
          <h1>
            A Platform <span>Powering Health</span> and Wellness
          </h1>
          <p>
            Transform your health and wellness journey with top-notch resources and guidance
            tailored to your needs.
          </p>
          <div className={styles.buttons}>
            <button className={styles.startButton}>Get Started</button>
            <button className={styles.learnButton}>Learn More</button>
          </div>
        </div>

        {/* Right Side Image/Card */}
        <div className={styles.imageContainer}>
          <Image
            src="/images/Hero/image 28.png"
            alt="Hero section illustration"
            width={500} // Replace with actual width
            height={400} // Replace with actual height
            className={styles.heroImage}
          />
          <div className={styles.card}>
            <h3>12,000+</h3>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
