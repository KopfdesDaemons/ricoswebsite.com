export class Post {
  postMeta: PostMeta;
  postContent?: string;

  constructor(metaObject: Partial<PostMeta>, fileName: string, lang: string, postContent?: string) {
    this.postMeta = new PostMeta(fileName);
    this.postMeta.initFromObject(metaObject, lang);
    this.postContent = postContent;
  }
}

export class PostMeta {
  fileName: string;
  title?: string;
  postURL?: string;
  author?: string;
  image?: string;
  keywords?: string[];
  description?: string;
  date?: string;
  localDateString?: string;
  commentsDisabled: boolean = false;
  hasCodePen: boolean = false;
  hideInFeed: boolean = false;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  initFromObject(object: Partial<PostMeta>, lang: string) {
    Object.assign(this, object);
    if (this.date) this.localDateString = new Date(this.date).toLocaleDateString(lang);
  }
}
