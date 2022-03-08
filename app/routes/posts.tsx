import { Link, useLoaderData, Outlet } from "remix";
import { getPosts } from '~/post'
import postStyles from './../styles/posts/index.css'

export type Post = {
	slug: string;
	title: string;
};

export const links = () => {
	return [{ rel: "stylesheet", href: postStyles }];
}

export const loader = async () => {
  return getPosts();
};

export default function Posts({request}) {
	console.log('requestrequest', request);
	
	const posts = useLoaderData<Post[]>();

	return (
		<main className="post-index">
			<aside className="post-aside">
			  <div className="home">
					<Link to='/'>Lexmin Blog</Link>
				</div>
				<ul className="list-box">
					{posts.map((post) => (
						<li key={post.slug} className="list-item">
							<Link to={`/posts/${post.slug}`}>{post.title}</Link>
						</li>
					))}
				</ul>
			</aside>
			<main className="posts-main">
				<Outlet />
			</main>
		</main>
	);
}
