import { createFileRoute } from '@tanstack/react-router';
import { ProjectPage } from '../../components/ProjectPage';
import { getProjectById } from '../../data/projects';
import markdownContent from '../../markdown/strudel.md?raw';

const project = getProjectById('strudel');

export const Route = createFileRoute('/projects/strudel')({
  component: StrudelProjectRoute,
});

function StrudelProjectRoute() {
  return <ProjectPage project={project} markdownContent={markdownContent} />;
}
