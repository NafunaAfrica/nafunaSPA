import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
  try {
    const page = await locals.adminPb.collection('pages').getOne(params.id);
    return {
      page: {
        id: page.id,
        title: page.title,
        description: page.description,
        coverImg: page.coverimg,
        headerImg: page.headerimg,
        Content: page.content
        // Add any additional page details you want to include
      }
    };
  } catch (err) {
    console.error('Error fetching page:', err);
    throw error(500, 'Failed to fetch page');
  }
}