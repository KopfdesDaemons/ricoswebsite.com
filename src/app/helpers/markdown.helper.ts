import { marked } from 'marked';
import { parse } from 'yaml';

export abstract class MarkdownHelper {
  static extractYamlHeader(markdown: string): any {
    const yamlRegex = /^---([\s\S]*?)---/gm;
    const matches = yamlRegex.exec(markdown);
    if (matches && matches.length > 1) {
      const yamlString = matches[1];
      return parse(yamlString);
    } else {
      return null;
    }
  }

  static extractBody(markdown: string): string {
    const yamlRegex = /^---([\s\S]*?)---/gm;
    const matches = yamlRegex.exec(markdown);
    if (matches && matches.length > 1) {
      return markdown.substring(matches[0].length).trim();
    } else {
      return markdown.trim();
    }
  }

  static async parseMarkdown(markdown: string): Promise<string> {
    // modify all links to open in new tab
    class CustomRenderer extends marked.Renderer {
      override link(href: string, title: string | null | undefined, text: string) {
        return `<a href="${href}" title="${title || ''}" target="_blank">${text}</a>`;
      }
    }
    const md = marked.setOptions({ renderer: new CustomRenderer() });
    return await md.parse(markdown);
  }
}
