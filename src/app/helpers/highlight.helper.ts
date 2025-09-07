import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import json from 'highlight.js/lib/languages/json';
import yaml from 'highlight.js/lib/languages/yaml';
import xml from 'highlight.js/lib/languages/xml';
import bash from 'highlight.js/lib/languages/bash';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('bash', bash);

export abstract class HighlightHelper {
  static highlightElement(element: string, lang: string): string {
    if (lang === 'ts') lang = 'typescript';
    if (lang == 'html') lang = 'xml';
    if (!lang) return element;
    return hljs.highlight(element, { language: lang }).value;
  }
}
