// src/routes/projects/[projectId]/+page.server.ts
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
  try {
    const blog = await locals.adminPb.collection('articles').getOne(params.blogId);
    return {
      blog: {
        id: blog.id,
        title: blog.title,
        description: blog.description,
        coverImg: blog.coverimg,
        headerImg: blog.headerimg,
        Content: blog.content,
        keywords: blog.keywords,
        // Add any additional project details you want to include
      }
    };
  } catch (err) {
    console.error('Error fetching project:', err);
    throw error(500, 'Failed to fetch project');
  }
}
