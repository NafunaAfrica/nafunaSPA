import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
  console.log('Entering load function');
  try {
    console.log('Attempting to fetch blogs');
    // Ensure the collection name and method are correct
    const blogs = await locals.adminPb.collection('articles').getFullList();
    console.log('Blogs fetched successfully:', blogs.length);
    return {
      blogs: blogs.map(blog => ({
        id: blog.id,
        title: blog.title,
        description: blog.description,
        coverimg: blog.coverimg,
        headerImg: blog.headerImg,
        content: blog.content
      }))
    };
  } catch (err) {
    console.error('Error fetching blogs:', err);
    console.error('Error details:', {
      message: err.message,
      stack: err.stack,
      response: err.response,
    });
    console.error('locals.adminPb:', locals.adminPb);
    throw error(500, `Failed to fetch blogs: ${err.message}`);
  }
}
