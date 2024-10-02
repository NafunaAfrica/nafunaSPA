import { error } from '@sveltejs/kit';

export async function load({ locals, params }) {
  try {
    const page = await locals.adminPb.collection('pages').getOne(params.id);
    return {
      page: {
        id: page.id,
        title: page.title,
        description: page.description,
        coverImg: page.coverimg,
        sectionImg: page.section_img,
        content: page.content,
        contentAlt: page.content_alt,
        title2: page.title2,
        description2: page.description2,
        keywords: page.keywords,
        route: page.route,
        pageFiles: page.pagefiles
      }
    };
  } catch (err) {
    console.error('Error fetching page:', err);
    throw error(500, 'Failed to fetch page');
  }
}
