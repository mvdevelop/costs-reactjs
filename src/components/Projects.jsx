
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Container from './layout/Container';
import LinkButton from './LinkButton';
import ProjectCard from './project/ProjectCard';
import Loadings from './layout/Loadings';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(data);
        setRemoveLoading(true);
      })
      .catch((e) => console.log(e));
    }, 1500);
  }, []);

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(resp => resp.json())
    .then(() => {
      setProjects(projects.filter((project) => project.id !== id));
    })
    .catch((e) => console.log(e));
  }

  return (
    <div className="py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Meus Projetos</h1>
          <p className="text-gray-600 mt-2">
            Gerencie todos os seus projetos em um só lugar
          </p>
        </div>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>

      <Container customClass="start">
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {projects.map((project) => (
              <ProjectCard
                id={project.id}
                name={project.name}
                budget={project.budget}
                category={project?.category?.name}
                key={project.id}
                handleRemove={removeProject}
              />
            ))}
          </div>
        ) : !removeLoading ? (
          <Loadings />
        ) : (
          <div className="text-center py-12 w-full">
            <div className="bg-gray-100 rounded-2xl p-8 max-w-md mx-auto">
              <p className="text-gray-600 text-lg mb-4">
                Não há projetos cadastrados ainda!
              </p>
              <p className="text-gray-500 mb-6">
                Crie seu primeiro projeto para começar a gerenciar seus orçamentos.
              </p>
              <LinkButton to="/newproject" text="Criar Primeiro Projeto" />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Projects;
