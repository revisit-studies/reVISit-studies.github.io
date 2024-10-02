import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.bannerColumn}>
          <div className={styles.bannerTitle}>ReVISit Version 1.0.0 Is Out! &#127881;</div>
          <div className={styles.bannerSubtitle}>
            <Link target="_blank" href="https://vdl.sci.utah.edu/blog/2024/06/20/revisit/" rel="noreferrer">Read the blog post.</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
