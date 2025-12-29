
import { useEffect, useState } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({ 
      ...project, 
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
   });
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        <span className="ml-3 text-gray-600">Carregando categorias...</span>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <Input 
        type="text" 
        text="Nome do projeto" 
        name="name" 
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name || ''}
        required
      />
      <Input 
        type="number" 
        text="Orçamento do projeto" 
        name="budget" 
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget || ''}
        required
      />
      <Select 
        name="category_id" 
        text="Selecione a categoria" 
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
        required
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
