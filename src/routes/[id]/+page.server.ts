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
        Content: page.content,
        keywords: page.keywords,
        section_img: page.section_img
        // Add any additional page details you want to include
      }
    };
  } catch (err) {
    console.error('Error fetching page:', err);
    throw error(500, 'Failed to fetch page');
  }
}