import { useTransition, useActionData, Form, redirect } from "remix";
import type { ActionFunction } from "remix";
import invariant from "tiny-invariant";

import { createPost } from "~/post";

type PostError = {
	title?: boolean;
	slug?: boolean;
	markdown?: boolean;
};

export const action: ActionFunction = async ({request}) => {
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
	await createPost({title, slug, markdown});

	return redirect(`/posts/${encodeURIComponent(slug)}`);
};

export default function NewPost() {

	const errors = useActionData();
	const transition = useTransition();

	return (
		<Form method="post" className="pt-4">
			<p>
				<label>
					Post Title:{" "}
					{errors?.title ? (
						<em>Title is required</em>
					) : null}
					<input type="text" name="title" className='bg-[#1f134e] px-3 ml-2 rounded-md text-sm h-7 leading-7' />
				</label>
			</p>
			<p className="my-4">
				<label>
					Post Slug:{" "}
					{errors?.slug ? <em>Slug is required</em> : null}
					<input className='bg-[#1f134e] px-3 ml-2 rounded-md text-sm h-7 leading-7' type="text" name="slug" />
				</label>
			</p>
			<p>
				<label htmlFor="markdown">Markdown:</label>{" "}
				{errors?.markdown ? (
					<em>Markdown is required</em>
				) : null}
				<br />
				<textarea id="markdown" rows={20} name="markdown" 
					className="bg-[#1f134e] my-4 rounded-md px-4 py-4 w-full h-96  box-border"
				/>
			</p>
			<p>
				<button className=' bg-pink-500 px-3 py-3 rounded-md' type="submit">
					{transition.submission
						? "Creating..."
						: "Create Post"}
				</button>
			</p>
		</Form>
	);
}
