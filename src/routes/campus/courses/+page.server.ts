import { error } from '@sveltejs/kit';
import SEO from '$lib/components/SEO.svelte';
import Genhero from '$lib/components/Genhero.svelte';
import { Card } from '$lib/components/ui/card';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
  try {
    const pageId = '_nafuna_campus_'; // Your specific page ID
    const coursesPage = await locals.adminPb.collection('pages').getOne(pageId);
    const courses = await locals.adminPb.collection('courses').getFullList({
      sort: '-created',
    });

    return {
      campusPage: {
        id: coursesPage.id,
        title: coursesPage.title,
        description: coursesPage.description,
        coverImg: coursesPage.coverimg,
        section_img: coursesPage.section_img,
        content: coursesPage.content,
        content_alt: coursesPage.content_alt,
        keywords: coursesPage.keywords,
        title2: coursesPage.title2,
        description2: coursesPage.description2,
      },
      courses: courses.map(course => ({
        id: course.id,
        title: course.title,
        description: course.description,
        coverImg: course.coverimg,
      }))
    };
  } catch (err) {
    console.error('Error fetching data for campus/courses:', err);
    throw error(500, 'Failed to fetch data for campus/courses');
  }
}

