import { fail, error } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { feedback } from '$lib/components/schema';

export const load = async ({ locals }) => {
    try {
        const adminPb = locals.adminPb;
        console.log('AdminPb auth status:', adminPb.authStore.isValid);

        const form = await superValidate(zod(feedback));
        console.log('Form initialized in load function:', JSON.stringify(form, null, 2));

        return {
            form,
            user: locals.user
        };
    } catch (err) {
        console.error('Error in load function:', err);
        throw error(500, 'Failed to fetch data');
    }
};

export const actions = {
    feedback: async (event) => {
        const form = await superValidate(event, zod(feedback));

        if (!form.valid) {
            console.log('Form validation failed:', form.errors);
            return fail(400, { form });
        }

        try {
            console.log('Form data before submission:', form.data);

            const result = await event.locals.adminPb.collection('ContactUs').create(form.data);
            console.log('Record created successfully:', result);

            return { form, success: true };
        } catch (error) {
            console.error('Error submitting to Pocketbase:', error);
            return fail(500, { form, message: 'Failed to submit form' });
        }
    },
};