import { Outlet, Link, useLoaderData, useLocation } from "remix";

import { getPosts } from "~/post";
import type { Post } from "~/post";
import { useState } from "react";

export const loader = async () => {
  return getPosts();
};

export default function Admin() {
  const posts = useLoaderData<Post[]>();
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapseToggle = () => setCollapsed(!collapsed)
  const location = useLocation();
  const currentPost = decodeURIComponent(location.pathname.slice(location.pathname.lastIndexOf('/') + 1));
  return (
    <div className="flex text-white">
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
                <li key={post.slug} className={`w-full h-9 overflow-auto leading-9 truncate hover:bg-gray-700 px-3 rounded-md${currentPost === post.slug ? ' bg-pink-500' : ''}`}>
                  <Link className="text-white text-sm" to={`/admin/edit/${post.slug}`}>{post.title}</Link>
                </li>
              ))}
            </ul>
            <div className="h-10 leading-10 text-center cursor-pointer"
              onClick={handleCollapseToggle}
            >《 折叠</div>
          </aside>
      }
      {/* <nav className="px-8 box-border">
				<Link to="/">
					<h1 className="pl-5">首页</h1>
				</Link>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link className="text-white" to={`/admin/edit?slug=${post.slug}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav> */}
      <main className="grow h-screen bg-purple-main px-6 overflow-auto">
				<Outlet />
			</main>
    </div>
  );
}
