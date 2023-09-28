import { FC } from 'react'
import { IPost } from '../../pages/api/posts'
import styles from '../../styles/Home.module.scss'

interface IPostItem {
	post: IPost
}

const PostItem: FC<IPostItem> = ({ post }) => {
	return (
		<div className={styles['post-item']}>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
		</div>
	)
}

export default PostItem
