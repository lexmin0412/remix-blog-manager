import { useLoaderData, Link, Form, useActionData, useTransition, redirect } from "remix";
import type { LoaderFunction, ActionFunction } from "remix";
import invariant from "tiny-invariant";

import { getPost, deletePost } from "~/post";

export const loader: LoaderFunction = async ({
	params,
}) => {
	invariant(params.slug, "expected params.slug");
	return getPost(params.slug);
};

type PostError = {
	title?: boolean;
	slug?: boolean;
	markdown?: boolean;
};

export const action: ActionFunction = async ({request, context, params}) => {

	const {method} = request

	console.log('method in action', method);
	console.log('params in action', params);

	// const url = new URL(request.url)
	// await new Promise((res) => setTimeout(res, 1000));
	// const formData = await request.formData();

	// const title = formData.get("title");
	// const slug = formData.get("slug");
	// const markdown = formData.get("markdown");

	// const errors: PostError = {};
	// if (!title) errors.title = true;
	// if (!slug) errors.slug = true;
	// if (!markdown) errors.markdown = true;

	// if (Object.keys(errors).length) {
	// 	return errors;
	// }

	invariant(typeof params.slug === "string");
	// invariant(typeof slug === "string");
	// invariant(typeof markdown === "string");

	console.log('method', method);

	try {
		await deletePost(params.slug)
	} catch (error) {
		console.log('error', error);
	}

	return redirect("/posts");
};

export default function PostSlug() {
	const post = useLoaderData();
	const errors = useActionData();
	const transition = useTransition();
	return (
		<div className="pt-4">
			<div className="flex">
				<Link to={`/posts/new`}
					className="bg-pink-500 px-3 py-3 rounded-md mr-4"
				>新建</Link>
				<Link to={`/posts/edit/${post.slug}`}
					className="bg-pink-500 px-3 py-3 rounded-md mr-4"
				>编辑</Link>
				<Form
					method='post'
				>
					<button type="submit"
						className=" bg-pink-500 px-3 py-3 rounded-md"
					>
						{transition.submission
							? "正在删除..."
							: "删除"}
					</button>
				</Form>
			</div>
			<main className="py-4" dangerouslySetInnerHTML={{__html: post.html}}>
			</main>
		</div>
	);
}
