// src/routes/projects/[projectId]/+page.server.ts
// import { error } from '@sveltejs/kit';
import { fail, redirect, error } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { feedback } from '$lib/components/schema';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
  try {
    const project = await locals.adminPb.collection('projects').getOne(params.projectId);
    const form = await superValidate(zod(feedback));
    return {
      form,
      user: locals.user,
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
};


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