// src/routes/projects/+page.server.ts
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
  try {
    const projects = await locals.adminPb.collection('projects').getFullList();
    return {
      projects: projects.map(project => ({
        id: project.id,
        title: project.title,
        description: project.description,
        coverImg: project.coverimg,
        headerImg: project.headerImg,
        Content: project.content
      }))
    };
  } catch (err) {
    console.error('Error fetching projects:', err);
    throw error(500, 'Failed to fetch projects');
  }
}
