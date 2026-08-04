import { createFileRoute } from '@tanstack/react-router';
import { ProjectPage } from '../../components/ProjectPage';
import { getProjectById } from '../../data/projectRoutes';
import markdownContent from '../../markdown/reshape.md?raw';

const project = getProjectById('reshape');

export const Route = createFileRoute('/projects/reshape')({
  component: ReshapeProjectRoute,
});

function ReshapeProjectRoute() {
  return <ProjectPage project={project} markdownContent={markdownContent} />;
}
