export class Post {
    postMeta: PostMeta;
    postContent?: string;

    constructor(metaObject: Partial<PostMeta>, fileName: string, postContent?: string) {
        this.postMeta = new PostMeta(fileName);
        this.postMeta.initFromObject(metaObject);
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
    commentsDisabled: boolean = false;
    hasCodePen: boolean = false;
    hideInFeed: boolean = false;

    constructor(fileName: string) {
        this.fileName = fileName;
    }

    initFromObject(object: Partial<PostMeta>) {
        Object.assign(this, object);
    }
}
