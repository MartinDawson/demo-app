import type { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import styles from './Page.module.css';

type PageProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Page: FC<PageProps> = ({ className, ...props }) => {
  return (
    <div className={`${styles.page} ${className ? className : ''}`} {...props} />
  )
}

export default Page