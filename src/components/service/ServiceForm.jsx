
import { useState } from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

function ServiceForm({ handleSubmit, btnText, projectData }) {
  const [service, setService] = useState({});
  const [errors, setErrors] = useState({});

  function submit(e) {
    e.preventDefault();
    
    // Validação básica
    const newErrors = {};
    if (!service.name) newErrors.name = 'Nome é obrigatório';
    if (!service.cost) newErrors.cost = 'Custo é obrigatório';
    if (service.cost && parseFloat(service.cost) <= 0) newErrors.cost = 'Custo deve ser maior que zero';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    projectData.services.push(service);
    handleSubmit(projectData);
    setService({});
    setErrors({});
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value });
    // Limpa erro quando o usuário começa a digitar
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <Input 
          type="text"
          text="Nome do serviço"
          name="name"
          placeholder="Insira o nome do serviço"
          handleOnChange={handleChange}
          value={service.name || ''}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>
      
      <div>
        <Input 
          type="number"
          text="Custo do serviço"
          name="cost"
          placeholder="Insira o valor total"
          handleOnChange={handleChange}
          value={service.cost || ''}
        />
        {errors.cost && <p className="text-red-500 text-sm mt-1">{errors.cost}</p>}
      </div>
      
      <div>
        <Input 
          type="text"
          text="Descrição do serviço"
          name="description"
          placeholder="Insira a descrição (opcional)"
          handleOnChange={handleChange}
          value={service.description || ''}
        />
      </div>
      
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ServiceForm;
