
import { TrashIcon } from '@heroicons/react/24/outline';

function ServiceCard({ id, name, cost, description, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id, cost);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
        <span className="text-lg font-bold text-primary-600">
          R$ {parseFloat(cost).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </span>
      </div>
      
      {description && (
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
      )}
      
      <div className="flex justify-end">
        <button
          onClick={remove}
          className="inline-flex items-center px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium"
        >
          <TrashIcon className="h-4 w-4 mr-2" />
          Excluir
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
