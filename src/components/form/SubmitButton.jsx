
function SubmitButton({ text, disabled = false }) {
  return (
    <div className="mt-2">
      <button
        type="submit"
        disabled={disabled}
        className={`w-full px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {text}
      </button>
    </div>
  );
}

export default SubmitButton;
