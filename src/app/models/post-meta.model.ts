export class PostMeta {
  fileName: string;
  title?: string;
  postURL?: string;
  author?: string;
  image?: string;
  keywords: string[] = [];
  description?: string;
  date?: Date;
  localDateString?: string;
  commentsDisabled: boolean = false;
  hasCodePen: boolean = false;
  hideInFeed: boolean = false;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  initFromObject(object: Partial<PostMeta>, lang: string) {
    Object.assign(this, object);

    if (object.date) this.date = new Date(object.date);
    if (this.date) this.localDateString = new Date(this.date).toLocaleDateString(lang);
  }
}
