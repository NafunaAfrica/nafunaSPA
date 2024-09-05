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
    locals.adminPb = new PocketBase('http://api.nafuna.work');
    locals.userPb = new PocketBase('http://api.nafuna.work');

    // Authenticate the adminPb instance with environment variables
  await locals.adminPb.admins.authWithPassword(POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PASSWORD);

    // Load the store data from the request cookie string
    locals.userPb.authStore.loadFromCookie(request.headers.get('cookie') || '');

    try {
      // Get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
      locals.userPb.authStore.isValid && await locals.userPb.collection('users').authRefresh();
      locals.user = locals.userPb.authStore.model;
      locals.userPb.authStore.save();

      console.log('Authentication status:', locals.user ? 'Authenticated' : 'Not authenticated');
    } catch (_) {
      // Clear the auth store on failed refresh
      locals.userPb.authStore.clear();
      locals.user = undefined;
      console.log('Authentication failed');
    }

    // Check if the current URL path is a protected route and the user is not authenticated
    if (protectedRoutes.some(route => url.pathname.startsWith(route)) && !locals.user) {
        redirect(303, '/login');
    }

    const response = await resolve(event);

    // Send back the default 'pb_auth' cookie to the client with the latest store state
    response.headers.append('set-cookie', locals.userPb.authStore.exportToCookie());

    return response;
}
