
import { parse, v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Loadings from './layout/Loadings';
import Container from './layout/Container';
import ProjectForm from './project/ProjectForm';
import ServiceForm from './service/ServiceForm';
import ServiceCard from './service/ServiceCard';

function Project() {
  const { id } = useParams(); 
  const [project, setProject] = useState(null);
  const [services, setServices] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resp => resp.json())
      .then(data => {
        setProject(data);
        setServices(data.services || []);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        toast.error('Erro ao carregar projeto');
      });
  }, [id]);

  function editPost(project) {
    // budget validation
    if (project.budget < project.cost) {
      toast.error('O orçamento não pode ser menor que o custo do projeto!');
      return false;
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project),
    })
      .then(resp => resp.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(false);
        toast.success('Projeto atualizado com sucesso!');
      })
      .catch(e => {
        console.log(e);
        toast.error('Erro ao atualizar projeto');
      });
  }

  function createService(project) {
    // last service
    const lastService = project.services[project.services.length - 1];
    lastService.id = uuidv4();

    const lastServiceCost = lastService.cost;
    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    // Maximum value validation
    if (newCost > parseFloat(project.budget)) {
      toast.error('Orçamento ultrapassado, verifique o valor do serviço!');
      project.services.pop();
      return false;
    }

    // add service cost to project total cost 
    project.cost = newCost;

    // update project
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project)
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setServices(data.services);
        setShowServiceForm(false);
        toast.success('Serviço adicionado com sucesso!');
      })
      .catch((e) => {
        console.log(e);
        toast.error('Erro ao adicionar serviço');
      });
  }

  function removeService(id, cost) {
    const servicesUpdated = project.services.filter(
      (service) => service.id !== id
    );

    const projectUpdated = { ...project };
    projectUpdated.services = servicesUpdated;
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost);

    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projectUpdated)
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(projectUpdated);
        setServices(servicesUpdated);
        toast.success('Serviço removido com sucesso!');
      })
      .catch((e) => {
        console.log(e);
        toast.error('Erro ao remover serviço');
      });
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  if (loading) {
    return <Loadings />;
  }

  if (!project) {
    return (
      <Container customClass="minHeight">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Projeto não encontrado</h2>
          <p className="text-gray-600">O projeto que você está procurando não existe ou foi removido.</p>
        </div>
      </Container>
    );
  }

  return (
    <div className="py-8">
      <Container customClass="minHeight">
        <div className="space-y-8">
          {/* Detalhes do Projeto */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Projeto: <span className="text-primary-600">{project.name}</span>
              </h1>
              <button
                onClick={toggleProjectForm}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                {!showProjectForm ? "✏️ Editar projeto" : "✕ Fechar"} 
              </button>
            </div>
            
            {!showProjectForm ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Categoria</p>
                  <p className="text-lg font-semibold text-gray-900">{project.category?.name || 'Não definida'}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Orçamento Total</p>
                  <p className="text-lg font-semibold text-gray-900">
                    R$ {parseFloat(project.budget).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Total Utilizado</p>
                  <p className="text-lg font-semibold text-gray-900">
                    R$ {parseFloat(project.cost).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
            ) : (
              <div className="mt-6">
                <ProjectForm 
                  handleSubmit={editPost} 
                  btnText="💾 Salvar alterações" 
                  projectData={project}
                />
              </div>
            )}
          </div>

          {/* Adicionar Serviço */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Adicionar Serviço</h2>
                <p className="text-gray-600">Adicione serviços ao seu projeto e controle os custos.</p>
              </div>
              <button
                onClick={toggleServiceForm}
                className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 transition-colors font-medium"
              >
                {!showServiceForm ? "➕ Adicionar serviço" : "✕ Fechar"}
              </button>
            </div>
            
            {showServiceForm && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <ServiceForm 
                  handleSubmit={createService}
                  btnText="✅ Adicionar Serviço"
                  projectData={project}
                />
              </div>
            )}
          </div>

          {/* Lista de Serviços */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Serviços ({services.length})</h2>
            
            {services.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <ServiceCard
                    id={service.id}
                    name={service.name}
                    cost={service.cost}
                    description={service.description}
                    key={service.id}
                    handleRemove={removeService}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-gray-50 rounded-lg">
                <p className="text-gray-600 mb-4">Nenhum serviço cadastrado ainda.</p>
                <button
                  onClick={() => setShowServiceForm(true)}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  ➕ Adicionar primeiro serviço
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Project;
