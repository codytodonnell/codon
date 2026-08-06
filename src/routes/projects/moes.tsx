import { createFileRoute } from '@tanstack/react-router';
import { ProjectPage } from '../../components/ProjectPage';
import { getProjectById } from '../../data/projects';
import markdownContent from '../../markdown/moes.md?raw';

const project = getProjectById('moes');

export const Route = createFileRoute('/projects/moes')({
  component: MoesProjectRoute,
});

function MoesProjectRoute() {
  return <ProjectPage project={project} markdownContent={markdownContent} />;
}
