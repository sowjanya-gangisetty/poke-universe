import Link from 'next/link';
import styles from './navigation.module.css';
const Navigation = () => {
    const navItems = [
        { name: 'Home', link: '/' },
        { name: 'Species', link: '/species' },
        { name: 'Types', link: '/types' },
        { name: 'Games', link: '/games' },
        
    ];

    return (
        <nav className={styles.nav}>
            {navItems.map((item, index) => (
                <Link key={index} href={item.link} className={styles.navItem}>
                    {item.name}
                </Link>
            ))}
        </nav>
        
    );
};

export default Navigation;