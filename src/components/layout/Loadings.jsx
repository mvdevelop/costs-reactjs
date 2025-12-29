
function Loadings() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="h-8 w-8 rounded-full bg-primary-100"></div>
        </div>
      </div>
      <p className="mt-4 text-gray-600 animate-pulse">Carregando...</p>
    </div>
  );
}

export default Loadings;
