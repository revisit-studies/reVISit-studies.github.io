import styles from './styles.module.css'
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Admonition from '@theme/Admonition';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import BrowserOnly from '@docusaurus/BrowserOnly';
interface ReferenceLink {
    name: string,
    url: string
}

interface CodeLink {
    name: string,
    url: string
}

interface DemoLink {
    name:string,
    url: string
}

interface StructuredLinkProps {
    demoLinks?: DemoLink[];
    codeLinks?: CodeLink[];
    referenceLinks?: ReferenceLink[];
}

function StructuredLinkInner({ demoLinks, codeLinks, referenceLinks }: StructuredLinkProps) {
    const [container, setContainer] = useState<HTMLElement | null>(null);
    // Use placeholder to find element for correct placement
    const [placeholder] = useState(() => document.createElement("div"));

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

    if (!demoLinks && !codeLinks && !referenceLinks) {
        return null;
    }

    return container
        ? ReactDOM.createPortal(
            <div className={styles.container}>
                <Admonition type='note' title='Relevant Links'>
                    <div className={styles.linkContainer}>
                        {demoLinks && demoLinks.length > 0 ? 
                            <div className={styles.demosContainer}>
                                <div className={styles.iconContainer}>
                                    <FontAwesomeIcon icon={faLink} />
                                    <div className = {styles.demosTitle}>Live Demo</div>
                                </div>
                                <div style={{ marginLeft: '23px' }}>
                                    {demoLinks.map(entry =>
                                        <a target="_blank" href={entry.url}>{entry.name}</a>
                                    )
                                    }
                                </div>
                            </div>
                            : null}
                        {codeLinks ?
                            <div className={styles.codesContainer}>
                                <div className={styles.iconContainer}>
                                    <FontAwesomeIcon icon={faGithub} />
                                    <div className = {styles.codesTitle}>Demo Code</div>
                                </div>
                                <div style={{ marginLeft: '23px' }}>
                                    {codeLinks.map(entry =>
                                        <a target="_blank" href={entry.url}>{entry.name}</a>
                                    )
                                    }
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
                                    {referenceLinks.map(entry =>
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
}

// BrowserOnly wrapper for use in docusaurus. Without this, docusaurus will fail to build.
function StructuredLink({ demoLinks, codeLinks, referenceLinks }: StructuredLinkProps) {
    return (
        <BrowserOnly>
            {() => <StructuredLinkInner demoLinks={demoLinks} codeLinks={codeLinks} referenceLinks={referenceLinks} />}
        </BrowserOnly>
    )
}

export default StructuredLink;
