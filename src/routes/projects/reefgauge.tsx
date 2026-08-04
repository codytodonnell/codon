import { createFileRoute } from '@tanstack/react-router';
import { ProjectPage } from '../../components/ProjectPage';
import { getProjectById } from '../../data/projectRoutes';
import markdownContent from '../../markdown/reefgauge.md?raw';

const project = getProjectById('reefgauge');

export const Route = createFileRoute('/projects/reefgauge')({
  component: ReefgaugeProjectRoute,
});

function ReefgaugeProjectRoute() {
  return <ProjectPage project={project} markdownContent={markdownContent} />;
}
