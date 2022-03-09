import { Outlet, Link, useLoaderData } from "remix";

import { getPosts } from "~/post";
import type { Post } from "~/post";

export const loader = async () => {
  return getPosts();
};

export default function Admin() {
  const posts = useLoaderData<Post[]>();
  return (
    <div className="flex w-screen min-h-screen bg-purple-main text-white">
      <nav className="px-8 box-border">
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
      </nav>
      <main className="grow border-l-[1px] border-solid border-gray-50">
				<Outlet />
			</main>
    </div>
  );
}
