import clsx from 'clsx';
import React from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
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
            alt="ReVISit logo"
            className={clsx(styles.largeItem, styles.homepageLogo)}
          />
          <ImageSwitcher
            lightImageSrc="img/logos/revisitLogoLong.svg"
            darkImageSrc="img/logos/revisitLogoLong-dark.svg"
            alt="ReVISit logo"
            className={clsx(styles.smallItem, styles.homepageLogo)}
          />
          <Heading as="h1" className={clsx('hero__title', styles.description)}>
            A study creation platform allowing you to quickly <em>create, publish, and disseminate</em> your customized visualization study.
          </Heading>
        </div>
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

const organization = {
  '@type': 'Organization',
  '@id': 'https://revisit.dev/#organization',
  name: 'ReVISit',
  url: 'https://revisit.dev/',
  logo: 'https://revisit.dev/img/logos/revisitLogoThumbnail.png',
  email: 'contact@revisit.dev',
  sameAs: ['https://github.com/revisit-studies'],
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    organization,
    {
      '@type': 'WebSite',
      '@id': 'https://revisit.dev/#website',
      name: 'ReVISit',
      url: 'https://revisit.dev/',
      publisher: { '@id': organization['@id'] },
    },
    {
      // SoftwareSourceCode supplies codeRepository for the open-source app.
      '@type': ['SoftwareApplication', 'SoftwareSourceCode'],
      name: 'ReVISit',
      url: 'https://revisit.dev/',
      description: 'A study creation platform allowing you to quickly create, publish, and disseminate your customized visualization study.',
      applicationCategory: 'ResearchApplication',
      operatingSystem: 'Web browser',
      isAccessibleForFree: true,
      codeRepository: 'https://github.com/revisit-studies/study',
      license: 'https://github.com/revisit-studies/study/blob/main/LICENSE',
      publisher: { '@id': organization['@id'] },
      citation: {
        '@type': 'ScholarlyArticle',
        name: 'ReVISit 2: A Full Experiment Life Cycle User Study Framework',
        author: [
          'Zach Cutler', 'Jack Wilburn', 'Hilson Shrestha', 'Yiren Ding', 'Brian Bollen',
          'Khandaker Abrar Nadib', 'Tingying He', 'Andrew McNutt', 'Lane Harrison', 'Alexander Lex',
        ].map((name) => ({ '@type': 'Person', name })),
        isPartOf: { '@type': 'Periodical', name: 'IEEE Transactions on Visualization and Computer Graphics' },
        datePublished: '2026',
        sameAs: 'https://doi.org/10.1109/TVCG.2025.3633896',
        url: 'https://www.visdesignlab.net/publications/2025_vis_revisit/',
      },
    },
  ],
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Reproducible Visualization User Studies" description={`${siteConfig.tagline}`}>
      <Head>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
