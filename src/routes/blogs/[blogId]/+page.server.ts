// src/routes/projects/[projectId]/+page.server.ts

import { fail, redirect, error } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { feedback } from '$lib/components/schema';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
  try {
    const blog = await locals.adminPb.collection('articles').getOne(params.blogId);
    const form = await superValidate(zod(feedback));
    return {
      form,
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

export const actions = {
  feedback: async (event) => {
      const form = await superValidate(event, zod(feedback));

      if (!form.valid) {
          return fail(400, { form });
      }

      console.log('Form data before submission:', form.data);

      const result = await event.locals.adminPb.collection('ContactUs').create(form.data);
      console.log('Record created successfully:', result);

      return redirect(303, '/successform');
  },
};