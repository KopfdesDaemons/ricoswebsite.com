import { PostMeta } from './post-meta.model';

export class Post {
  postMeta: PostMeta;
  postContent?: string;

  constructor(metaObject: Partial<PostMeta>, fileName: string, lang: string, postContent?: string) {
    this.postMeta = new PostMeta(fileName);
    this.postMeta.initFromObject(metaObject, lang);
    this.postContent = postContent;
  }
}
