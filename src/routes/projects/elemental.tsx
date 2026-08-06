import { createFileRoute } from '@tanstack/react-router';
import { ProjectPage } from '../../components/ProjectPage';
import { getProjectById } from '../../data/projects';
import markdownContent from '../../markdown/elemental.md?raw';

const project = getProjectById('elemental');

export const Route = createFileRoute('/projects/elemental')({
  component: ElementalProjectRoute,
});

function ElementalProjectRoute() {
  return <ProjectPage project={project} markdownContent={markdownContent} />;
}
