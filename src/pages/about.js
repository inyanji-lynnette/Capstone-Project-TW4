import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About" description="About the creator of QueuEase">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1>About Me</h1>
            <p>
              Write your bio here — who you are, your background, and
              why you built QueuEase for this project.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}