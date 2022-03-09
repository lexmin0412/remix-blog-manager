import { marked } from 'marked'

export const transformMarkdown = (markdown: string) => {
  const renderer = {
    heading(text: string, level: number) {
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

      const levelFontSizeMap = {
        1: 'text-2xl',
        2: 'text-xl',
        3: 'text-lg',
        4: 'text-md',
      }

      return `
            <a name="${escapedText}" class="anchor" href="#${escapedText}">
              <h${level} class="${levelFontSizeMap[level]} font-bold h-12 leading-12">
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
    },
    // table(header: string, body) {
    //   return `<table class="table-auto w-full">${header}${body}</table>`;
    // }
  };
  marked.use({renderer});
  const html = marked(markdown);
  return html
}