export class Post {
    postMeta: any;
    postContent: string | undefined;

    constructor(postMeta: any, postContent?: string, postImageURL?: string) {
        this.postMeta = postMeta;
        this.postContent = postContent;
    }
}
