import { useTransition, useLoaderData, useActionData, Form, redirect, useSubmit, Outlet } from 'remix'
import type { LoaderFunction, ActionFunction } from "remix";
import invariant from "tiny-invariant";
import { deletePost, getPost, updatePost } from '~/post';

export const loader: LoaderFunction = async ({request, params}) => {
	const url = new URL(request.url)
	console.log('request', request);
	
	// invariant(url.searchParams.get('slug'), "expected params.slug");
	// return getPost(url.searchParams.get('slug'))
	return getPost(params.slug)
}

type PostError = {
	title?: boolean;
	slug?: boolean;
	markdown?: boolean;
};

export const action: ActionFunction = async ({request, context}) => {

	const { method, params } = request

	console.log('method in action', method);
	
	const url = new URL(request.url)
	await new Promise((res) => setTimeout(res, 1000));
	const formData = await request.formData();
	
	const title = formData.get("title");
	const slug = formData.get("slug");
	const markdown = formData.get("markdown");

	const errors: PostError = {};
	if (!title) errors.title = true;
	if (!slug) errors.slug = true;
	if (!markdown) errors.markdown = true;

	if (Object.keys(errors).length) {
		return errors;
	}

	// invariant(typeof title === "string");
	// invariant(typeof slug === "string");
	// invariant(typeof markdown === "string");

	console.log('method', method);
	

	if (method === 'DELETE') {
		try {
			await deletePost(slug)
		} catch (error) {
			console.log('delete post error', error);
		}
	} else {
		try {
			await updatePost({title, slug, markdown, originalSlug: url.searchParams.get('slug') as string});
		} catch (error) {
			console.log('updatePost post error', error);
		}
	}

	console.log('action end');
	
	
	return redirect("/");
};

export default function EditPost() {
	const post = useLoaderData();
	const errors = useActionData();
	const transition = useTransition();
	console.log('post in render', post.markdown);

	const submit = useSubmit();

	return (
		<div>
			<Outlet />
		</div>
	)
}
