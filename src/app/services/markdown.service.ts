import { Injectable } from '@angular/core';
import { marked } from 'marked';
import { parse } from 'yaml'

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  extractYamlHeader(markdown: string): any {
    const yamlRegex = /^---([\s\S]*?)---/gm;
    const matches = yamlRegex.exec(markdown);
    if (matches && matches.length > 1) {
      const yamlString = matches[1];
      return parse(yamlString);
    } else {
      return null;
    }
  }

  extractBody(markdown: string): string {
    const yamlRegex = /^---([\s\S]*?)---/gm;
    const matches = yamlRegex.exec(markdown);
    if (matches && matches.length > 1) {
      return markdown.substring(matches[0].length).trim();
    } else {
      return markdown.trim();
    }
  }

  async parseMarkdown(markdown: string): Promise<string> {
    // Alle Links werden so verändert, dass sie im neuen Tab geöffnet werden
    class CustomRenderer extends marked.Renderer {
      override link(href: string, title: string | null | undefined, text: string) {
        return `<a href="${href}" title="${title || ''}" target="_blank">${text}</a>`;
      }
    }
    const md = marked.setOptions({ renderer: new CustomRenderer() });
    return await md.parse(markdown);
  }
}
