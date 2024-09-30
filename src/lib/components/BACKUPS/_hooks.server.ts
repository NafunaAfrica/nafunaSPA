// src/hooks.server.ts
import { redirect } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
import { POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PASSWORD } from '$env/static/private';

// Define a list of protected routes that require authentication
const protectedRoutes = ['/campus/courses'];

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const { locals, request, url } = event;

    // Create instances for admin and regular user operations
    locals.pb = new PocketBase('https://api.nafuna.tv');
    locals.adminPb = new PocketBase('https://api.nafuna.tv');

    // Authenticate the adminPb instance with environment variables
    await locals.adminPb.admins.authWithPassword(POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PASSWORD);
console.log('Admin authenticated:', locals.adminPb.authStore.isValid);
    // Load the store data from the request cookie string
    locals.pb.authStore.loadFromCookie(request.headers.get('cookie') || '');

    try {
        // Get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
        if (locals.pb.authStore.isValid) {
            await locals.pb.collection('users').authRefresh();
        }
        locals.user = locals.pb.authStore.model;
        locals.pb.authStore.save();

        console.log('Authentication status:', locals.user ? 'Authenticated' : 'Not authenticated');
    } catch (err) {
        // Clear the auth store on failed refresh
        locals.pb.authStore.clear();
        locals.user = undefined;
        console.log('Authentication failed:', err);
    }

    // Check if the current URL path is a protected route and the user is not authenticated
    // if (protectedRoutes.some(route => url.pathname.startsWith(route)) && !locals.user) {
    //     return redirect(303, '/login');
    // }

    const response = await resolve(event);

    // Send back the default 'pb_auth' cookie to the client with the latest store state
    response.headers.append('set-cookie', locals.pb.authStore.exportToCookie());

    return response;
}