// src/routes/projects/[projectId]/+page.server.ts
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
  try {
    const project = await locals.adminPb.collection('projects').getOne(params.projectId);
    return {
      project: {
        id: project.id,
        title: project.title,
        description: project.description,
        coverImg: project.coverimg,
        headerImg: project.headerimg,
        Content: project.content
        // Add any additional project details you want to include
      }
    };
  } catch (err) {
    console.error('Error fetching project:', err);
    throw error(500, 'Failed to fetch project');
  }
}
