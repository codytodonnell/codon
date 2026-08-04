import { createFileRoute } from '@tanstack/react-router';
import { ProjectPage } from '../../components/ProjectPage';
import { getProjectById } from '../../data/projectRoutes';
import markdownContent from '../../markdown/breuer.md?raw';

const project = getProjectById('breuer');

export const Route = createFileRoute('/projects/breuer')({
  component: BreuerProjectRoute,
});

function BreuerProjectRoute() {
  return <ProjectPage project={project} markdownContent={markdownContent} />;
}
