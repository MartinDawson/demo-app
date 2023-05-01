import type { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import styles from './Button.module.css';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button className={`${styles.button} ${className ? className : ''}`} {...props} />
  )
}

export default Button