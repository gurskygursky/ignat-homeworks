import React from 'react';
import style from '../c2-SuperButton/SuperButton.module.css';

type PropsType = {
    title: string;
    onClick: () => void;
    disabled?: boolean;
};
function AlternativeSuperButton(props: PropsType) {
    const { onClick, title, disabled } = props;
    const onButtonClick = (): void => {
        onClick();
    };
    return (
        <button className={style.btn} onClick={onButtonClick} disabled={disabled} type="button">
            {title}
        </button>
    );
}

export default AlternativeSuperButton
