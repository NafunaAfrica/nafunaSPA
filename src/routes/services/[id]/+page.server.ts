// import { error } from '@sveltejs/kit';
import { fail, redirect, error } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { feedback } from '$lib/components/schema';

export async function load({ locals, params }) {
  try {
    const adminPb = locals.adminPb;
    const service = await adminPb.collection('services').getOne(params.id);
    const projects = await adminPb.collection('projects').getFullList();
    const form = await superValidate(zod(feedback));

    return {
      form,
      service: {
        id: service.id,
        title: service.title,
        description: service.description,
        content: service.content,
        prostitle: service.prostitle,
        pros: service.pros,
        mainimg: service.mainimg,
        servicesimgs: service.servicesimgs
      },
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
    console.error('Error in load function:', err);
    throw error(500, 'Failed to fetch data');
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