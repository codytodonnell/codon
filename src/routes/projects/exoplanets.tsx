import { createFileRoute } from '@tanstack/react-router';
import { ProjectPage } from '../../components/ProjectPage';
import { getProjectById } from '../../data/projectRoutes';
import markdownContent from '../../markdown/exoplanets.md?raw';

const project = getProjectById('exoplanets');

export const Route = createFileRoute('/projects/exoplanets')({
  component: ExoplanetsProjectRoute,
});

function ExoplanetsProjectRoute() {
  return <ProjectPage project={project} markdownContent={markdownContent} />;
}
