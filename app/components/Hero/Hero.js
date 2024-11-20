import Image from "next/image";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        {/* Left Side Content */}
        <div className={styles.text}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/Hero/Frame 11.png"
              alt="Top decoration"
              width={150}
              height={120}
              className={styles.topImage}
            />
          </div>
          <div className={styles.badge}>#1 Platform in Health and Wellness</div>
          <h1>
            A Platform <span>Powering Health</span> and Wellness
          </h1>
          <p>
            Transform your health and wellness journey with top-notch resources
            and guidance tailored to your needs.
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
            width={500}
            height={600}
            className={styles.heroImage}
          />
          <div className={styles.card}>
            <Image
              src="/images/Hero/Vector.png" // Replace with your image path
              alt="Lower decoration"
              width={100} // Adjust dimensions as needed
              height={50} // Adjust dimensions as needed
              className={styles.lowerImage}
            />
          </div>
          <div className={styles.card}>
            <Image
              src="/images/Hero/Group 3.png" // Replace with your image path
              alt="Lower decoration"
              width={1200} // Adjust dimensions as needed
              height={400} // Adjust dimensions as needed
              className={styles.lowerImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
