import { registerSchema } from "$lib/components/schema";
import { fail, redirect } from "@sveltejs/kit";
import type { ClientResponseError } from "pocketbase";
import { message, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";

export const load = async () => {
    return {
        form: await superValidate(zod(registerSchema))
    };
};

export const actions = {
    default: async (event) => {
        const { locals: {pb}} = event
        const form = await superValidate(event, zod(registerSchema))
        if(!form.valid){
            return fail(400, {
                form
            })
        }
        try {
            await pb.collection('users').create(form.data)
        } catch (e) {
            const {status} = e as ClientResponseError
            return message (form, { status, message: 'an error occurred'});
        }
        redirect(303, '/login')
    }
};