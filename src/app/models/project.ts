export class Project {
    name: string;
    description: string;
    image: string;
    features: string[];
    projectURL: string;
    githubURL: string;
    blogpostURL: string;
    technologies: string[];

    constructor(
        name: string,
        description: string,
        image: string,
        features: string[],
        projectURL: string,
        githubURL: string,
        blogpostURL: string,
        technologies: string[]
    ) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.features = features;
        this.projectURL = projectURL;
        this.githubURL = githubURL;
        this.blogpostURL = blogpostURL;
        this.technologies = technologies;
    }
}
