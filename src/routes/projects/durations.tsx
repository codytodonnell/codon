import { createFileRoute } from '@tanstack/react-router';
import { ProjectPage } from '../../components/ProjectPage';
import { getProjectById } from '../../data/projectRoutes';
import markdownContent from '../../markdown/durations.md?raw';

const project = getProjectById('durations');

export const Route = createFileRoute('/projects/durations')({
  component: DurationsProjectRoute,
});

function DurationsProjectRoute() {
  return <ProjectPage project={project} markdownContent={markdownContent} />;
}
