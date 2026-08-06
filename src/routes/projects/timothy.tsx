import { createFileRoute } from '@tanstack/react-router';
import { ProjectPage } from '../../components/ProjectPage';
import { getProjectById } from '../../data/projects';
import markdownContent from '../../markdown/timothy.md?raw';

const project = getProjectById('timothy');

export const Route = createFileRoute('/projects/timothy')({
  component: TimothyProjectRoute,
});

function TimothyProjectRoute() {
  return <ProjectPage project={project} markdownContent={markdownContent} />;
}
