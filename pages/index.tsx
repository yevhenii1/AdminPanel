import styles from '../styles/Home.module.scss'
import Header from '../app/components/Header'
import PostItem from '../app/components/PostItem'
import { NextPage } from 'next'
import { IPost } from './api/posts'

interface IHome {
	posts: IPost[]
}

const Home: NextPage<IHome> = ({ posts }) => {
	return (
		<div className={styles.container}>
			<Header />

			<h1>Posts</h1>

			{posts &&
				posts.map((post, idx) => <PostItem post={post} key={`post ${idx}`} />)}
		</div>
	)
}

export const getServerSideProps = async () => {
	const response = await fetch('http://localhost:3000/api/posts')
	const data = await response.json()

	return {
		props: {
			posts: data,
		},
	}
}

export default Home
