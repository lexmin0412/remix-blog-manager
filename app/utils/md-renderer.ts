import { marked } from 'marked'

export const transformMarkdown = (markdown: string) => {
  const renderer = {
    heading(text: string, level: number) {
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

      return `
            <a name="${escapedText}" class="anchor" href="#${escapedText}">
              <h${level} class="text-xl font-bold h-12 leading-12">
                ${text}
              </h${level}>
            <a></a>
            `;
    },
    code(code: string, infostring: string, escaped: boolean) {
      console.log('code', code);
      console.log('infostring', infostring);
      console.log('escaped', escaped);
      
      return `<pre class="bg-[#1f134e] my-4 px-4 py-4 rounded-xl"><code class="language-${infostring}">${code}</code></pre>`;
    }
  };
  marked.use({renderer});
  const html = marked(markdown);
  return html
}