import styles from './styles.module.css'
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Admonition from '@theme/Admonition';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink, faFile, faFileAlt } from '@fortawesome/free-solid-svg-icons';

interface ReferenceLink {
    name: string,
    url: string
}

interface StructuredLinkProps {
    demoLink?: string;
    codeLink?: string;
    referenceLinks?: ReferenceLink[];
}

function StructuredLink({ demoLink, codeLink, referenceLinks }: StructuredLinkProps) {
    const [container, setContainer] = useState<HTMLElement | null>(null);
    // Use placeholder to find element for correct placement
    const [placeholder] = useState(() => document.createElement("div")); // Temporary div for insertion

    useEffect(() => {

        const tocContainer: HTMLElement = document.querySelector(".theme-doc-toc-desktop");
        if (tocContainer?.parentElement) {
            const parentElement = tocContainer.parentElement;
            parentElement.insertBefore(placeholder, parentElement.firstChild);
            setContainer(placeholder);
        }

        // Remove placeholder when unmounting
        return () => {
            placeholder.remove();
        };
    }, [placeholder]);

    if (!demoLink && !codeLink && !referenceLinks) {
        return null;
    }

    return container
        ? ReactDOM.createPortal(
            <div className={styles.container}>
                <Admonition type='note' title='Relevant Links'>
                    <div className={styles.linkContainer}>
                        {demoLink ?
                            <div className={styles.demoContainer}>
                                <div className={styles.iconContainer}>
                                    <FontAwesomeIcon icon={faLink} />
                                    <a href={demoLink}>Live Demo</a>
                                </div>
                            </div>
                            : null}
                        {codeLink ?
                            <div className={styles.codeContainer}>
                                <div className={styles.iconContainer}>
                                    <FontAwesomeIcon icon={faGithub} />
                                    <a href={codeLink}>Demo Code</a>
                                </div>
                            </div>
                            : null}
                        {referenceLinks && referenceLinks.length > 0 ?
                            <div className={styles.referencesContainer}>
                                <div className={styles.iconContainer}>
                                    <FontAwesomeIcon icon={faFileAlt} />
                                    <div className={styles.referencesTitle}>References</div>
                                </div>
                                <div style={{ marginLeft: '23px' }}>
                                    {referenceLinks.map((entry, idx) =>
                                        <a target="_blank" href={entry.url}>{entry.name}</a>
                                    )
                                    }
                                </div>
                            </div>
                            : null}
                    </div>
                </Admonition>
            </div>,
            container
        )
        : null;
    // return (
    //     <div className={styles.container}>HELLO</div>
    // )
}

export default StructuredLink;
