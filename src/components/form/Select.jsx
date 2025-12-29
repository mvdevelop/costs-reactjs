
function Select({ text, name, options, handleOnChange, value, required = false }) {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {text} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ''}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
      >
        <option value="">Selecione uma opção</option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
