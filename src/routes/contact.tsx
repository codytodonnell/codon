import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/contact')({
  component: ContactPage,
});

function ContactPage() {
  return (
    <section>
      <h2>Contact</h2>
      <p>Get in touch at hello@codonn.dev.</p>
    </section>
  );
}
