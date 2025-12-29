
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ProjectForm from './project/ProjectForm';

function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    project.cost = 0;
    project.services = [];

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(project),
    })
    .then((resp) => resp.json())
    .then((data) => {
      toast.success('Projeto criado com sucesso!');
      navigate('/projects');
    })
    .catch((e) => {
      console.log(e);
      toast.error('Erro ao criar projeto');
    });
  }  

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Criar Projeto</h1>
        <p className="text-gray-600 mb-8">
          Crie seu projeto para depois adicionar os serviços.
        </p>
        <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
      </div>
    </div>
  );
}

export default NewProject;
