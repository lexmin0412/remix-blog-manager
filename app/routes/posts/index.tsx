import { Link, useLoaderData, Outlet } from "remix";
import { getPosts } from '~/post'
// import postStyles from './index.css'

export type Post = {
	slug: string;
	title: string;
};

// export const links = () => {
// 	return [{ rel: "stylesheet", href: postStyles }];
// }

export const loader = async () => {
  return getPosts();
};

export default function Posts() {
	const posts = useLoaderData<Post[]>();
	console.log(posts);
	return (
		<main className="pt-4">
			点击左侧列表可以跳转到对应的文章
		</main>
	);
}
