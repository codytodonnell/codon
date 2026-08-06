import { createFileRoute } from '@tanstack/react-router';
import { ProjectPage } from '../../components/ProjectPage';
import { getProjectById } from '../../data/projects';
import markdownContent from '../../markdown/bookr.md?raw';

const project = getProjectById('bookr');

export const Route = createFileRoute('/projects/bookr')({
  component: BookrProjectRoute,
});

function BookrProjectRoute() {
  return <ProjectPage project={project} markdownContent={markdownContent} />;
}
