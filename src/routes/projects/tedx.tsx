import { createFileRoute } from '@tanstack/react-router';
import { ProjectPage } from '../../components/ProjectPage';
import { getProjectById } from '../../data/projectRoutes';
import markdownContent from '../../markdown/tedx.md?raw';

const project = getProjectById('tedx');

export const Route = createFileRoute('/projects/tedx')({
  component: TedxProjectRoute,
});

function TedxProjectRoute() {
  return <ProjectPage project={project} markdownContent={markdownContent} />;
}
