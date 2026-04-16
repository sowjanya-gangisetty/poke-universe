import Image from "next/image";
import styles from "./page.module.css";
import ArticleContainer from "@/components/ArticleContainer";


export default function Home() {
  return (
    <div className={styles.page}>
      <ArticleContainer />
    </div>
  );
}
