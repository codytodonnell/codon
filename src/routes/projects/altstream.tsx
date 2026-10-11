import { createFileRoute } from '@tanstack/react-router';
import { ProjectPage } from '../../components/ProjectPage';
import { getProjectById } from '../../data/projects';
import markdownContent from '../../markdown/altstream.md?raw';

const project = getProjectById('altstream');

export const Route = createFileRoute('/projects/altstream')({
  component: AltstreamProjectRoute,
});

function AltstreamProjectRoute() {
  console.log(markdownContent);
  return <ProjectPage project={project} markdownContent={markdownContent} />;
}
