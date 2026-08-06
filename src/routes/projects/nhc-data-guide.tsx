import { createFileRoute } from '@tanstack/react-router';
import { ProjectPage } from '../../components/ProjectPage';
import { getProjectById } from '../../data/projects';
import markdownContent from '../../markdown/nhc-data-guide.md?raw';

const project = getProjectById('nhc-data-guide');

export const Route = createFileRoute('/projects/nhc-data-guide')({
  component: NhcDataGuideProjectRoute,
});

function NhcDataGuideProjectRoute() {
  return <ProjectPage project={project} markdownContent={markdownContent} />;
}
