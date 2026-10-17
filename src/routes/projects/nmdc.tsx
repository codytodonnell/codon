import { createFileRoute } from '@tanstack/react-router';
import { ProjectPage } from '../../components/ProjectPage';
import { getProjectById } from '../../data/projects';
import markdownContent from '../../markdown/nmdc.md?raw';

const project = getProjectById('nmdc');

export const Route = createFileRoute('/projects/nmdc')({
  component: NmdcProjectRoute,
});

function NmdcProjectRoute() {
  return <ProjectPage project={project} markdownContent={markdownContent} />;
}
