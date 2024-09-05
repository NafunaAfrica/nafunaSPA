import { fail, redirect, error } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { feedback } from '$lib/components/schema';

export const load = async ({ locals }) => {
    try {
        const adminPb = locals.adminPb;
        console.log('AdminPb auth status:', adminPb.authStore.isValid);

        const projects = await adminPb.collection('projects').getFullList();
        const homepages = await adminPb.collection('pages').getOne('home-page-infos', {
            expand: 'relField1,relField2.subRelField',
        });
        const aboutpages = await adminPb.collection('pages').getOne('nafuna_about_pg', {
            expand: 'relField1,relField2.subRelField',
        });

        const form = await superValidate(zod(feedback));
        console.log('Form initialized in load function:', JSON.stringify(form, null, 2));

        const result = {
            form,
            user: locals.user,
            projects: projects.map(project => ({
                id: project.id,
                title: project.title,
                description: project.description,
                coverImg: project.coverimg,
                headerImg: project.headerImg,
                Content: project.content
            })),
            homepage: homepages ? {
                title: homepages.title,
                description: homepages.description,
                coverimg: homepages.coverimg,
            } : null,
            aboutpage: aboutpages ? {
                title: aboutpages.title,
                description: aboutpages.description,
                coverimg: aboutpages.coverimg,
                content: aboutpages.content,
                content_alt: aboutpages.content_alt,
            } : null,
        };

        console.log('Full result object:', JSON.stringify(result, null, 2));
        return result;
    } catch (err) {
        console.error('Error in load function:', err);
        throw error(500, 'Failed to fetch data');
    }
};



// export const actions = {
//   feedback: async (event) => {
//     const form = await superValidate(event, feedback);

//     if (!form.valid) {
//       return fail(400, { form });
//     }

//     try {
//       const formData = form.data;
//       const result = await event.locals.adminPb.collection('ContactUs').create(formData);
//       console.log('Record created successfully:', result);

//       return {
//         status: 200,
//         body: { message: 'Form submitted successfully!' },
//       };
//     } catch (error) {
//       console.error('Error submitting to Pocketbase:', error);
//       return fail(500, { message: 'Failed to submit form' });
//     }
//   },
// };


// export const actions: Actions = {
//     feedback: async (event) => {
//       const form = await superValidate(event, feedback);
  
//       if (!form.valid) {
//         return fail(400, { form });
//       }
  
//       try {
//         const formData = form.data;
//         const result = await event.locals.adminPb.collection('ContactUs').create(formData);
//         console.log('Record created successfully:', result);
  
//         return {
//           status: 200,
//           body: {
//             message: 'Form submitted successfully!',
//             ...formData, 
//           },
//         };
//       } catch (error) {
//         console.error('Error submitting to Pocketbase:', error);
//         return fail(500, { message: 'Failed to submit form' });
//       }
//     },
//   };

  export const actions: Actions = {
    feedback: async (event) => {
      const form = await superValidate(event, zod(feedback));
  
      if (!form.valid) {
        return fail(400, { form });
      }
  
      try {
        console.log('Form data before submission:', form.data);

        const result = await event.locals.adminPb.collection('ContactUs').create(form.data);
        console.log('Record created successfully:', result);
  
        return { form };
      } catch (error) {
        console.error('Error submitting to Pocketbase:', error);
        return fail(500, { form, message: 'Failed to submit form' });
      }
    },
  };

  
  