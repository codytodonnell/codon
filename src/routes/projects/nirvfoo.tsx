import { createFileRoute } from '@tanstack/react-router';
import { ProjectPage } from '../../components/ProjectPage';
import { getProjectById } from '../../data/projectRoutes';
import markdownContent from '../../markdown/nirvfoo.md?raw';

const project = getProjectById('nirvfoo');

export const Route = createFileRoute('/projects/nirvfoo')({
  component: NirvfooProjectRoute,
});

function NirvfooProjectRoute() {
  return <ProjectPage project={project} markdownContent={markdownContent} />;
}
