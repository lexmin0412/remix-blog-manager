import { useTransition, useLoaderData, useActionData, Form, redirect } from 'remix'
import type { LoaderFunction, ActionFunction } from "remix";
import invariant from "tiny-invariant";
import { getPost, updatePost } from '~/post';

export const loader: LoaderFunction = async ({request}) => {
	const url = new URL(request.url)
	invariant(url.searchParams.get('slug'), "expected params.slug");
	return getPost(url.searchParams.get('slug'))
}

type PostError = {
	title?: boolean;
	slug?: boolean;
	markdown?: boolean;
};

export const action: ActionFunction = async ({request}) => {
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

	invariant(typeof title === "string");
	invariant(typeof slug === "string");
	invariant(typeof markdown === "string");
	await updatePost({title, slug, markdown, originalSlug: url.searchParams.get('slug') as string});

	return redirect("/admin");
};

export default function EditPost() {
	const post = useLoaderData();
	const errors = useActionData();
	const transition = useTransition();
	console.log('post in render', post.markdown);

	return (
		<Form method="post">
			<p>
				<label>
					Post Title:{" "}
					{errors?.title ? (
						<em>Title is required</em>
					) : null}
					<input type="text" name="title" defaultValue={post.title} />
				</label>
			</p>
			<p>
				<label>
					Post Slug:{" "}
					{errors?.slug ? <em>Slug is required</em> : null}
					<input type="text" name="slug" defaultValue={post.slug}/>
				</label>
			</p>
			<p>
				<label>Markdown:</label>{" "}
				{errors?.markdown ? (
					<em>Markdown is required</em>
				) : null}
				<br />
				<textarea key={post.markdown} rows={40} name="markdown" defaultValue={post.markdown} 
					className="bg-transparent w-full box-border"
				/>
			</p>
			<p>
				<button type="submit">
					{transition.submission
						? "Updating..."
						: "Update Post"}
				</button>
			</p>
		</Form>
	)
}
