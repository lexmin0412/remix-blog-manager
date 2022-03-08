import { Link, useLoaderData, Outlet } from "remix";
import { getPosts } from '~/post'
import postStyles from './../styles/posts/index.css'
import { useState } from "react";

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

export default function Posts() {
	const posts = useLoaderData<Post[]>();
	const [ collapsed, setCollapsed ] = useState(true);

	const handleCollapseToggle = () => setCollapsed(!collapsed)
	
	return (
		<main className="post-index">
			{
				collapsed ?
				<div className="hamburger-btn"
					onClick={handleCollapseToggle}
				>
					展开 》
				</div>
				:
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
						<div className="collapse-btn"
							onClick={handleCollapseToggle}
						>《 折叠</div>
					</aside>
			}
			<main className="posts-main">
				<Outlet />
			</main>
		</main>
	);
}
