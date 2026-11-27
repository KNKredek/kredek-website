import './button.scss';
import CrayaonHead from "../../assets/crayon_head.svg?react";
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: "crayon" | "init";
    children: ReactNode;
    link?: string;
}

export default function Button({className, children, variant, link, onClick, ...rest}: ButtonProps){
    
    const hasCrayonHead = () => variant == "crayon" ? <CrayaonHead/> : null; 

    if(link){
        return (
            <a className={`button ${className} variant-${variant}`} href={link}>
                <div className="buttonText">
                    {children}
                </div>
                {hasCrayonHead()}
            </a>
        )
    }

    return(
        <button className={`button ${className} variant-${variant}`} onClick={onClick} {...rest}>
            <div className="buttonText">
                {children}
            </div>
            {hasCrayonHead()}
        </button>
    )
}