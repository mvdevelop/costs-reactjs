
import { Link } from 'react-router-dom';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

function ProjectCard({ id, name, budget, category, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'infra': 'bg-blue-100 text-blue-800',
      'desenvolvimento': 'bg-green-100 text-green-800',
      'suporte': 'bg-yellow-100 text-yellow-800',
      'administração': 'bg-purple-100 text-purple-800',
    };
    return colors[category?.toLowerCase()] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-xl font-bold text-gray-900 truncate pr-2">{name}</h4>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
              {category || 'Sem categoria'}
            </span>
          </div>
          
          <div className="space-y-3 mb-6">
            <p className="text-gray-700">
              <span className="font-semibold">Orçamento:</span> R$ {parseFloat(budget).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </p>
          </div>
          
          <div className="flex space-x-3">
            <Link 
              to={`/project/${id}`} 
              className="inline-flex items-center justify-center flex-1 px-4 py-2 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors"
            >
              <PencilIcon className="h-4 w-4 mr-2" />
              Ver/Editar
            </Link>
            
            <button 
              onClick={remove}
              className="inline-flex items-center justify-center flex-1 px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors"
            >
              <TrashIcon className="h-4 w-4 mr-2" />
              Remover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
