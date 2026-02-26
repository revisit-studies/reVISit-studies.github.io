import clsx from 'clsx';
import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';

import styles from './index.module.css';
import ImageSwitcher from '../components/ImageSwitcher';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.titleContainer}>
          <ImageSwitcher
            lightImageSrc="img/logos/revisitLogoThumbnail-dotted-light.svg"
            darkImageSrc="img/logos/revisitLogoThumbnail-dotted-dark.svg"
            className={clsx(styles.largeItem, styles.homepageLogo)}
          />
          <ImageSwitcher
            lightImageSrc="img/logos/revisitLogoLong.svg"
            darkImageSrc="img/logos/revisitLogoLong-dark.svg"
            className={clsx(styles.smallItem, styles.homepageLogo)}
          />
          <div className={clsx('hero__title', styles.description)}>
            A study creation platform allowing you to quickly <em>create, publish, and disseminate</em> your customized visualization study.
          </div>
        </div>
        {/* <img src="img/logos/revisitLogoLong.svg" style={{width:'60%'}}/> */}
        {/* <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <div className={styles.buttons} style={{ marginTop: '50px' }}>
          <Link
            className={clsx('button button--secondary button--lg', styles.buttonWithSubtext)}
            to="/about"
          >
            About ReVISit
            <span className={styles.buttonSubtext}>Explore the reVISit Story</span>
          </Link>
          <Link
            className={clsx('button button--primary button--lg', styles.buttonWithSubtext)}
            style={{ color: 'white' }}
            to="https://revisit.dev/study"
          >
            Try The Demo
            <span className={styles.buttonSubtext}>Look at individual features in action</span>
          </Link>
          <Link
            className={clsx('button button--primary button--lg', styles.buttonWithSubtext)}
            style={{ color: 'white' }}
            to="https://revisit.dev/replication-studies/"
          >
            Explore Example Studies
            <span className={styles.buttonSubtext}>See real studies with data</span>
          </Link>
          <Link
            className={clsx('button button--info button--lg', styles.buttonWithSubtext)}
            to="/docs/introduction"
          >
            Get Started
            <span className={styles.buttonSubtext}>Set up your first experiment</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
