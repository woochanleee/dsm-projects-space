import { AddProject } from '../components/AddProject';
import { Header } from '../components/Header';
import { ProjectItem } from '../components/ProjectItem';

import * as Model from '../model/Project';

import { projects } from '../projects';

type Project = Model.Project & { stars: number };

export async function getStaticProps() {
  const projectsIncludedStars = await Promise.all(
    projects.map(async (project) => {
      const stars = await fetch(`https://api.github.com/repos/${project.user}/${project.repo}/stargazers?per_page=100`, {
        headers: {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
      })
        .then((res) => {
          console.log(res);
          return res.status === 200 ? res.json() : [];
        })
        .then((res) => res.length);

      return {
        ...project,
        stars,
      };
    })
  );

  return {
    props: {
      projects: projectsIncludedStars,
    },
  };
}

export default function IndexPage({ projects }: { projects: Project[] }) {
  return (
    <>
      <Header />
      <div
        style={{
          display: 'grid',
          gap: '16px',
          gridTemplateColumns: 'repeat(auto-fill, 300px)',
          padding: '20px',
          justifyContent: 'center',
        }}>
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
      <AddProject />
    </>
  );
}
