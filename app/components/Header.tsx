import Image from 'next/image'
import styles from '../../styles/Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<Image src='/vercel.svg' alt='' height='32' width='141' />
			<button>
				<Image src='/menu.svg' alt='' height='38' width='74' />
			</button>
		</header>
	)
}

export default Header
