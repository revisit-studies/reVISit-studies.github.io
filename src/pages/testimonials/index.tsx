import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './testimonials.module.css';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chip } from '../../components/Chip/Chip';
import Papa from 'papaparse';


interface Testimonial {
    title: string,
    authors: string,
    date: string,
    paperUrl: string,
    revisitStudyUrl?: string,
    subtitle: string,
    sourceCodeLink?: string,
    revisitVersion: string
    tags: string[];
}

const Testimonial = ({ testimonial }: { testimonial: Testimonial }): JSX.Element => {



    const revisitVersionLink = testimonial.revisitVersion === '1.0.5' ? `../docs/introduction` : `../docs/v${testimonial.revisitVersion}/introduction/`
    return (
        <div className={styles.testimonialContainer}>
            <div className={styles.title} >
                {testimonial.title}
            </div>
            <div className={styles.authors}>
                {testimonial.authors}
            </div>
            {testimonial.tags.length !== 0}
            <div className={styles.tagsRow}>
                {testimonial.tags.map((tag: string): JSX.Element => {
                    return (
                        <Chip key={tag} type={tag} />
                    )
                })}
            </div>
            <p>
                {testimonial.subtitle}
            </p>
            <div className={styles.date}>
                {testimonial.date}
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.primaryButtons}>
                    {testimonial.revisitStudyUrl ? <Link
                        className={clsx("button button--primary", styles.buttonDesktop)}
                        style={{ color: 'white' }}
                        to={testimonial.revisitStudyUrl}>
                        See ReVISit Study
                    </Link> : null}
                    {testimonial.paperUrl === '#' ? null :
                        <Link
                            className={clsx("button button--secondary", styles.buttonDesktop)}
                            to={testimonial.paperUrl}>
                            See the paper
                        </Link>
                    }
                    {testimonial.revisitStudyUrl ? <Link
                        className={clsx("button button--primary button--sm", styles.buttonMobile)}
                        style={{ color: 'white' }}
                        to={testimonial.revisitStudyUrl}>
                        See ReVISit Study
                    </Link> : null}
                    {testimonial.paperUrl === '#' ? null :
                        <Link
                            className={clsx("button button--secondary button--sm", styles.buttonMobile)}
                            to={testimonial.paperUrl}>
                            See the paper
                        </Link>
                    }
                </div>
                <div className={styles.secondaryButtons}>
                    {testimonial.sourceCodeLink ? <a href={testimonial.sourceCodeLink}>
                        <span>Source Code</span><FontAwesomeIcon icon={faExternalLink} />
                    </a>
                        : null}
                    <a href={revisitVersionLink}>
                        <span>Uses ReVISit v{testimonial.revisitVersion}</span><FontAwesomeIcon icon={faExternalLink} />
                    </a>
                </div>
            </div>
        </div>
    )
}


export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // Adjust the path based on your project structure
            const response = await fetch('/testimonials.csv'); // Adjust this path
            if (!response.ok) {
                console.error('Error fetching the CSV file:', response.statusText);
                return;
            }
            const text = await response.text();
            Papa.parse(text, {
                header: true,
                complete: (results) => {
                    const testimonials = results.data.map(entry => {
                        return {
                            "title": entry['Paper Title'],
                            "authors": entry['List of Authors'],
                            "date": entry['Date of Publication'],
                            "revisitStudyUrl": entry['Study URL'],
                            "paperUrl": entry['Paper URL'],
                            "subtitle": entry['Short Description'],
                            "revisitVersion": entry['ReVISit Version'],
                            "sourceCodeLink": entry['Source Code Link'],
                            "tags": entry['Study Type'].split(", ")
                        }
                    })
                    setTestimonials(testimonials); // Store parsed data
                },
            });
        };

        fetchData();
    }, [])


    return (
        <Layout
            description={`${siteConfig.tagline}`}>
            <main className={clsx('container', styles.container)}>
                <h1 className={styles.pageTitle}>Studies Using reVISit</h1>
                <div className={styles.pageIntro}>Many people have already gotten started using ReVISit in their data visualization research. Check out all the different ways people are using reVISit to produce novel research. If you've used reVISit as part of your research, we strongly encourage you to fill out <a href="https://forms.gle/CE82n3V1bcmZ4ahY9" target="_blank">this Google form</a>. Once we verify your work, your research will be added to the testimonials list below.</div>
                {testimonials.map((testimonial: Testimonial, index: number) => <Testimonial key={index} testimonial={testimonial} />)}
            </main>
        </Layout>
    );
}


