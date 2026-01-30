// src/components/ServiceCard.js
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, to }) => {
  return (
    <div className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="text-4xl mb-4 text-blue-600 group-hover:text-blue-700 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={to} 
        className="text-blue-600 font-medium inline-flex items-center group-hover:text-blue-700 transition-colors"
      >
        En savoir plus
        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;