import { ButtonHTMLAttributes } from "react";
import './styles.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>


export function Button({...props}: ButtonProps) {
    return (
        <button type="button" {...props}/>
    )
}