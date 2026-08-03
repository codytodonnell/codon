import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <section>
      <h2>Projects</h2>
      <p>Browse current and past Codonn work here.</p>
    </section>
  );
}
