import Image from 'next/image';
import styles from './header.module.css';
import pokeBall from '../../../public/images/pokeball.png';
import Logo from '../../../public/images/logo.png';
//import Pika from '.../../../public/images/pikachu.png';
import Link from 'next/link';


const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.ball}>
        <Image  src={pokeBall} alt="pokeball" sizes="(max-width: 400px) 100vw, (max-width: 768px) 50vw, (max-width: 1440px) 60vw, 20vw"/>
      </Link>
      <Image src={Logo} alt="logo" />
    </header>
  );
};

export default Header;