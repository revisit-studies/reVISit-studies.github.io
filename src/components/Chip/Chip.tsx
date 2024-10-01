import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


interface ChipInput {
    type: string
}

const possibleTypes = ['survey', 'interaction', 'visual-encoding', 'visualization-technique']

const formatType = (type: string): string => {
    const formattedType = type.toLowerCase().replace(/[\s_]/g, "-")
    return formattedType;
}

const formatTypeClass = (type: string): string => {
    let formattedType = formatType(type);
    if (!(possibleTypes.includes(formattedType))) {
        return 'other';
    }
    return formattedType;
}

const capitalizeWord = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const formatTypeDisplay = (type: string): string => {
    let formattedType = formatType(type);
    return formattedType
        .split('-')
        .map(capitalizeWord)
        .join(' ');
}


export const Chip = ({ type }: ChipInput): JSX.Element => {
    return (
        <div className={clsx(styles[`type-${formatTypeClass(type)}`], styles.chip)}>{formatTypeDisplay(type)}</div>
    )
}