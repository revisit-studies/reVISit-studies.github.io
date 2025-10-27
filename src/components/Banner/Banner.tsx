import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.bannerColumn}>
          <div className={styles.bannerTitle}>ReVISit Version 2.3. Is Out! &#127881;</div>
          <div className={styles.bannerSubtitle}>
            <Link href="/blog/2025/10/27/release-2.3/">Read the blog post.</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
