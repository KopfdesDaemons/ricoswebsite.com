import { marked } from 'marked';
import { parse } from 'yaml';

export abstract class MarkdownHelper {
  static extractYamlHeader(markdown: string): object {
    const yamlRegex = /^---([\s\S]*?)---/;
    const matches = yamlRegex.exec(markdown);

    if (matches && matches.length > 1) {
      try {
        return parse(matches[1]) as object;
      } catch (error) {
        console.error('Fehler beim Parsen des YAML-Headers:', error);
      }
    }

    return {};
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
        // Internal anchor links should not open in a new tab
        if (href.startsWith('#')) {
          return `<a href="${href}" title="${title || ''}">${text}</a>`;
        }

        // Check if the link is external (starts with http:// or https://)
        const isExternal = href.startsWith('http://') || href.startsWith('https://');

        if (isExternal) {
          return `<a href="${href}" title="${title || ''}" target="_blank" rel="noopener noreferrer">${text}</a>`;
        } else {
          // Internal links should not open in a new tab
          return `<a href="${href}" title="${title || ''}">${text}</a>`;
        }
      }
    }
    const md = marked.setOptions({ renderer: new CustomRenderer() });
    return await md.parse(markdown);
  }
}
