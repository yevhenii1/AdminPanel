import type { NextApiRequest, NextApiResponse } from 'next'

export interface IPost {
	title: string
	body: string
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IPost[]>
) {
	const posts = [
		{
			title: 'Dolorem eum magni eos aperiam quia',
			body: 'Ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae',
		},
		{
			title: 'Magnam facilis autem',
			body: 'Dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed',
		},
		{
			title: 'Nesciunt iure omnis dolorem tempora et accusantium',
			body: 'Consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas',
		},
		{
			title: 'Optio molestias id quia eum',
			body: 'Quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error',
		},
	]

	res.status(200).json(posts)
}
