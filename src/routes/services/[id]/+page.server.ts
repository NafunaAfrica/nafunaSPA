import { error } from '@sveltejs/kit';

export async function load({ locals, params }) {
  try {
    const adminPb = locals.adminPb;
    const service = await adminPb.collection('services').getOne(params.id);
    const projects = await adminPb.collection('projects').getFullList();

    return {
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
