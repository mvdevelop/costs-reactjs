
import React from 'react';
import { Link } from 'react-router-dom';

function LinkButton({ to, text, className = '' }) {
  return (
    <Link 
      to={to} 
      className={`inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all ${className}`}
    >
      {text}
    </Link>
  );
}

export default LinkButton;
