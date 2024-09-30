// src/hooks.server.ts
import { redirect } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
import { POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PASSWORD } from '$env/static/private';

// Define a list of protected routes that require authentication
const protectedRoutes = ['/campus/courses'];

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const { locals, request, url } = event;

    locals.pb = new PocketBase('https://api.nafuna.tv');
    locals.adminPb = new PocketBase('https://api.nafuna.tv');

    await locals.adminPb.admins.authWithPassword(POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PASSWORD);

    // Load the auth store from the cookie
    locals.pb.authStore.loadFromCookie(request.headers.get('cookie') || '');

    try {
        if (locals.pb.authStore.isValid) {
            await locals.pb.collection('users').authRefresh();
            event.locals.user = locals.pb.authStore.model;
        }
    } catch (_) {
        locals.pb.authStore.clear();
        event.locals.user = null;
    }

    // Handle protected routes
    if (protectedRoutes.some(route => url.pathname.startsWith(route))) {
        if (!event.locals.user) {
            throw redirect(303, '/login');
        }
    }

    const response = await resolve(event);

    // Set the cookie in the response
    response.headers.set('set-cookie', locals.pb.authStore.exportToCookie({ secure: false }));

    return response;
}