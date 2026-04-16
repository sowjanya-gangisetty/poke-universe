import styles from './articleContainer.module.css'
import {Articles} from '@/Data/data'
import Article from '@/components/Article';

const ArticleContainer = () => {
  return (
    <div className={styles.container}>
        {Articles && Articles.map((article, index) => (
                <Article key={index} {...article} />)
            )}
    </div>
  );
};

export default ArticleContainer;