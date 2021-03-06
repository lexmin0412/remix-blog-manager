import { Link, useLoaderData, Outlet, useLocation } from "remix";
import { getPosts } from '~/post'
import { useState } from "react";

export type Post = {
	slug: string;
	title: string;
};

export const loader = async () => {
  return getPosts();
};

export default function Posts() {
	const posts = useLoaderData<Post[]>();
	const [ collapsed, setCollapsed ] = useState(false);

	const handleCollapseToggle = () => setCollapsed(!collapsed)

	const location = useLocation();
	console.log('lcatin', decodeURIComponent(location.pathname.slice(location.pathname.lastIndexOf('/') + 1)));
	const currentPost = decodeURIComponent(location.pathname.slice(location.pathname.lastIndexOf('/') + 1));
	
	
	return (
		<main className="flex text-white">
			{
				collapsed ?
				<div className="fixed cursor-pointer bottom-4 left-4"
					onClick={handleCollapseToggle}
				>
					展开 》
				</div>
				:
					<aside className="w-80 bg-purple-sidebar flex h-screen flex-col px-5 box-border">
						<div className="h-14 leading-14 text-2xl">
							<Link className="text-white" to='/'>Lexmin Blog</Link>
						</div>
						<ul className="grow">
							{posts.map((post) => (
								<li key={post.slug} className={`w-full h-9 overflow-auto leading-9 truncate hover:bg-gray-700 px-3 rounded-md${currentPost===post.slug ? ' bg-pink-500' : ''}`}>
									<Link className="text-white text-sm" to={`/posts/${post.slug}`}>{post.title}</Link>
								</li>
							))}
						</ul>
						<div className="h-10 leading-10 text-center cursor-pointer"
							onClick={handleCollapseToggle}
						>《 折叠</div>
					</aside>
			}
			<main className="grow h-screen bg-purple-main px-6 overflow-auto">
				<Outlet />
			</main>
		</main>
	);
}
