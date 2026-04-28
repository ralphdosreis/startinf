import React from "react";
import style from "./Input.module.css";

const Input = ({ label, type, name, value, onChange, ...rest }) => {
    return <>
        <div className={style.wrapper}>
            <label htmlFor={name} className={style.label}>{label}</label>
            <input id={name} name={name} className={style.input} type={type} value={value} onChange={onChange} {...rest} />
        </div>
    </>
}

export default Input;