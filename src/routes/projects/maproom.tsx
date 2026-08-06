import { createFileRoute } from '@tanstack/react-router';
import { ProjectPage } from '../../components/ProjectPage';
import { getProjectById } from '../../data/projects';
import markdownContent from '../../markdown/maproom.md?raw';

const project = getProjectById('maproom');

export const Route = createFileRoute('/projects/maproom')({
  component: MaproomProjectRoute,
});

function MaproomProjectRoute() {
  return <ProjectPage project={project} markdownContent={markdownContent} />;
}
