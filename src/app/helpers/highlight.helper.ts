import { createHighlighter, Highlighter } from 'shiki';

export class HighlightHelper {
  private static highlighter: Highlighter | null = null;

  static async init() {
    if (!this.highlighter) {
      this.highlighter = await createHighlighter({
        themes: ['github-dark'],
        langs: ['yaml', 'typescript', 'json', 'scss', 'html', 'bash'],
      });
    }
  }

  static async highlight(code: string, lang: string = 'typescript'): Promise<string> {
    try {
      if (!this.highlighter) {
        await this.init();
      }
      return this.highlighter!.codeToHtml(code, {
        lang: lang,
        theme: 'github-dark',
      });
    } catch (error) {
      console.error('Fehler beim Highlighten mit Shiki:', error);
      return `<pre><code>${code}</code></pre>`;
    }
  }

  static async highlightCodeBlocksInPostHtml(postHtml: string): Promise<string> {
    const codeBlockRegex = /<pre><code class="language-(\w+)">(.*?)<\/code><\/pre>/gs;

    const matches = [...postHtml.matchAll(codeBlockRegex)];
    for (const match of matches) {
      const language = match[1];
      const code = match[2].replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
      const codeWithoutHtmlEntities = this.decodeHtmlEntities(code);

      try {
        const highlightedCode = await this.highlight(codeWithoutHtmlEntities, language);
        const formattedCode = `<code class="language-${language}">${highlightedCode}</code>`;
        postHtml = postHtml.replace(match[0], formattedCode);
      } catch (error) {
        console.error('Error highlighting code:', error);
      }
    }

    return postHtml;
  }

  static decodeHtmlEntities(text: string): string {
    return text
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'")
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&');
  }
}
