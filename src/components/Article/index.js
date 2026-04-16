import styles from './article.module.css';
import Image from 'next/image';


const Article =  async({title, image}) => {
    return(
        <div className={styles.article}>
            <div className={styles.title}>
                <h2 >{title}</h2>
            </div>
            <Image src={image} alt={title} className={styles.image} width={1000} height={1000}  />
        </div>
    )
}
export default Article;