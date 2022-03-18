import path from "path";
import fs from "fs";
import parseFrontMatter from "front-matter";
import invariant from "tiny-invariant";
import { marked } from "marked";
import { syncCode } from '~/utils/git'
import { transformMarkdown } from '~/utils/md-renderer'

export type Post = {
	slug: string;
	title: string;
};

export type PostMarkdownAttributes = {
	title: string;
};

const postsPath = path.join(__dirname, "..", "posts");

function isValidPostAttributes(
	attributes: any
): attributes is PostMarkdownAttributes {
	return attributes?.title;
}

export async function getPosts() {
	const dir = await fs.readdirSync(postsPath);
	return Promise.all(
		dir.map(async (filename) => {
			const file = await fs.readFileSync(
				path.join(postsPath, filename)
			);
			const {attributes} = parseFrontMatter(
				file.toString()
			);
			invariant(
				isValidPostAttributes(attributes),
				`${filename} has bad meta data!`
			);
			return {
				slug: filename.replace(/\.md$/, ""),
				title: attributes.title,
			};
		})
	);
}

export async function getPost(slug: string) {
	const filepath = path.join(postsPath, slug + ".md");
	const file = await fs.readFileSync(filepath);
	const { attributes, body } = parseFrontMatter(file.toString());
	invariant(
		isValidPostAttributes(attributes),
		`Post ${filepath} is missing attributes`
	);
	const html = transformMarkdown(body);
	return {slug, html, title: attributes.title, markdown: body};
}

type NewPost = {
	title: string;
	slug: string;
	markdown: string;
};

export async function createPost(post: NewPost) {
  const md = `---\ntitle: ${post.title}\n---\n\n${post.markdown}`;
  await fs.writeFileSync(
    path.join(postsPath, post.slug + ".md"),
    md
	);
	syncCode(`create post ${post.slug}`);
  return getPost(post.slug);
}

type UpdatePost = {
	originalSlug: string;
	title: string;
	slug: string;
	markdown: string;
};

export async function updatePost(post: UpdatePost) {
	const md = `---\ntitle: ${post.title}\n---\n\n${post.markdown}`;
	await fs.writeFileSync(
		path.join(postsPath, post.slug + ".md"),
		md
	);
	syncCode(`Update post ${post.slug}`);
	return getPost(post.slug);
}

export async function deletePost(slug: string) {
	console.log('delete post', slug);
	
	// await fs.unlink
	// await fs.unlink(path.join(postsPath, slug + ".md"));
	// syncCode(`Delete post ${slug}`);
	// return getPost(slug);
}
