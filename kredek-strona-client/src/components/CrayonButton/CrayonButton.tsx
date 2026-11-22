import './crayonButton.scss';
import CrayaonHead from "../../assets/crayon_head.svg?react";
import type { ButtonHTMLAttributes, ReactNode } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    link?: string;
}

export default function CrayonButton({className, children, link, onClick, ...rest}: ButtonProps){
    
    if(link){
        return (
            <a className={`crayonButton ${className}`} href={link}>
                <div className="crayonButtonText">
                    {children}
                </div>
                <CrayaonHead/>
            </a>
        )
    }

    return(
        <button className={`crayonButton ${className}`} onClick={onClick} {...rest}>
            <div className="crayonButtonText">
                {children}
            </div>
            <CrayaonHead/>
        </button>
    )
}