export interface BlogPost {
    slug: string;
    frontmatter: {
        title: string;
        description: string;
        pubDate: string | Date;
        tags?: string[];
    };
    Content: any;
}

const modules = import.meta.glob('./blog/*.md', { eager: true });

export const posts: BlogPost[] = Object.entries(modules).map(([file, module]) => {
    const markdown = module as { default: any; frontmatter: BlogPost['frontmatter'] };
    const filename = file.split('/').pop() ?? '';

    return {
        slug: filename.replace('.md', ''),
        frontmatter: markdown.frontmatter,
        Content: markdown.default,
    };
});