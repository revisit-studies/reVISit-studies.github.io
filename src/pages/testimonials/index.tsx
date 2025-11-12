import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Papa from 'papaparse';
import { Chip } from '../../components/Chip/Chip';
import styles from './testimonials.module.css';

interface Testimonial {
  title: string;
  authors: string;
  date: string;
  paperUrl: string;
  revisitStudyUrl?: string;
  subtitle: string;
  sourceCodeLink?: string;
  revisitVersion: string;
  tags: string[];
  published: boolean;
  venue: string;
}

function Testimonial({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className={styles.testimonialContainer}>
      <div className={styles.title}>
        {testimonial.title}
      </div>
      <div className={styles.authors}>
        {testimonial.authors}
      </div>
      {testimonial.tags.length !== 0}
      <div className={styles.tagsRow}>
        {testimonial.tags.map((tag: string) => (
          <Chip key={tag} type={tag} />
        ))}
      </div>
      <p>
        {testimonial.subtitle}
      </p>
      <div className={styles.date}>
        {`${testimonial.venue !== '' ? testimonial.venue : 'Preprint'}, ${testimonial.date}`}
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.primaryButtons}>
          {testimonial.revisitStudyUrl ? (
            <Link
              className={clsx('button button--primary', styles.buttonDesktop)}
              style={{ color: 'white' }}
              to={testimonial.revisitStudyUrl}
            >
              See ReVISit Study
            </Link>
          ) : null}
          {testimonial.paperUrl === '#' ? null
            : (
              <Link
                className={clsx('button button--secondary', styles.buttonDesktop)}
                to={testimonial.paperUrl}
              >
                See the paper
              </Link>
            )}
          {testimonial.revisitStudyUrl ? (
            <Link
              className={clsx('button button--primary button--sm', styles.buttonMobile)}
              style={{ color: 'white' }}
              to={testimonial.revisitStudyUrl}
            >
              See ReVISit Study
            </Link>
          ) : null}
          {testimonial.paperUrl === '#' ? null
            : (
              <Link
                className={clsx('button button--secondary button--sm', styles.buttonMobile)}
                to={testimonial.paperUrl}
              >
                See the paper
              </Link>
            )}
        </div>
        <div className={styles.secondaryButtons}>
          {testimonial.sourceCodeLink ? (
            <Link href={testimonial.sourceCodeLink}>
              <span>Source Code</span>
              <FontAwesomeIcon icon={faExternalLink} />
            </Link>
          )
            : null}
          <span>
            Uses ReVISit v
            {testimonial.revisitVersion}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/testimonials.csv');
      if (!response.ok) {
        console.error('Error fetching the CSV file:', response.statusText);
        return;
      }
      const text = await response.text();
      Papa.parse(text, {
        header: true,
        complete: (results) => {
          const parsedTestimonials = results.data.map((entry) => ({
            title: entry['Paper Title'],
            authors: entry['List of Authors'],
            date: entry['Date of Publication'],
            revisitStudyUrl: entry['Study URL'],
            paperUrl: entry['Paper URL'],
            subtitle: entry['Short Description'],
            revisitVersion: entry['ReVISit Version'],
            sourceCodeLink: entry['Source Code Link'],
            tags: entry['Study Type'].split(', '),
            published: entry['Has this paper been published?'] === 'Yes',
            venue: entry.Venue,
          }));
          // Sort based on Published then date (descending date).
          parsedTestimonials.sort((a: Testimonial, b: Testimonial) => {
            if (a.published !== b.published) {
              return a.published ? -1 : 1;
            }

            return new Date(b.date).getTime() - new Date(a.date).getTime();
          });
          setTestimonials(parsedTestimonials);
        },
      });
    };

    fetchData();
  }, []);

  return (
    <Layout description={`${siteConfig.tagline}`}>
      <main className="container container--fluid margin-vert--lg">
        <div className="row mdxPageWrapper_node_modules-@docusaurus-theme-classic-lib-theme-MDXPage-styles-module">
          <div className="col col--10">
            <Heading as="h1" className={styles.pageTitle}>Studies Using reVISit</Heading>
            <div className={styles.pageIntro}>
              Many people have already gotten started using reVISit in their data visualization research. Check out all the different ways people are using reVISit to produce novel research. If you&apos;ve used reVISit as part of your research, we strongly encourage you to fill out
              {' '}
              <Link href="https://forms.gle/CE82n3V1bcmZ4ahY9" target="_blank" rel="noreferrer">this Google form</Link>
              . Once we verify your work, your research will be added to the testimonials list below.
            </div>
            {testimonials.map((testimonial: Testimonial, index: number) => <Testimonial key={index} testimonial={testimonial} />)}
          </div>
        </div>
      </main>
    </Layout>
  );
}
