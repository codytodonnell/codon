import { createFileRoute } from '@tanstack/react-router';
import { ProjectPage } from '../../components/ProjectPage';
import { getProjectById } from '../../data/projects';
import markdownContent from '../../markdown/materials-project.md?raw';

const project = getProjectById('materials-project');

export const Route = createFileRoute('/projects/materials-project')({
  component: MaterialsProjectProjectRoute,
});

function MaterialsProjectProjectRoute() {
  return <ProjectPage project={project} markdownContent={markdownContent} />;
}
