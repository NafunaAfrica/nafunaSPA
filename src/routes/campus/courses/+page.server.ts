import { error, fail } from '@sveltejs/kit';
import SEO from '$lib/components/SEO.svelte';
import Genhero from '$lib/components/Genhero.svelte';
import { Card } from '$lib/components/ui/card';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
  try {
    const userEnrollments = locals.user ? await locals.pb.collection('enrollments').getList(1, 50, {
      filter: `user = "${locals.user.id}"`
    }) : null;
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
        enrolled: userEnrollments ? userEnrollments.items.some(e => e.course === course.id) : false
      })),
      userEnrollments: userEnrollments ? userEnrollments.items : []
    };
  } catch (err) {
    console.error('Error fetching data for campus/courses:', err);
    throw error(500, 'Failed to fetch data for campus/courses');
  }
}

export const actions = {
  enroll: async ({ request, locals }) => {
    const data = await request.formData();
    const courseId = data.get('courseId');

  //   if (!locals.user) {
  //     return fail(401, { message: 'You must be logged in to enroll' });
  //   }


  //   if (enrollment) {
  //     const updatedCourse = await locals.pb.collection('courses').getOne(courseId);
  //     return { success: true, course: updatedCourse };
  //   }
  // },

 
//     //   return fail(401, { message: 'You must be logged in to enroll' });
//     // }

//     try {
//       const enrollment = await locals.pb.collection('enrollments').create({
//         user: locals.user.id,
//         course: courseId,
//         enrollmentDate: new Date().toISOString()
//       });
//       return { success: true, enrollment };
//     } catch (err) {
//       console.error('Enrollment failed:', err);
//       return fail(500, { message: 'Failed to enroll in the course' });
//     }
  }
};