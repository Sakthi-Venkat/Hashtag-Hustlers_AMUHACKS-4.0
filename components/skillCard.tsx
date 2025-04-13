import React from 'react';

interface SkillCardProps {
  name: string;
  category: string;
  description: string;
  user: string;
  onRequest?: () => void; // Optional callback
}

const SkillCard: React.FC<SkillCardProps> = ({ name, category, description, user, onRequest }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-200">
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-blue-600 mb-2">{category}</p>
      <p className="text-gray-700 text-sm mb-4">{description}</p>
      <p className="text-xs text-gray-500">Offered by: {user}</p>
      {onRequest && (
        <button
          onClick={onRequest}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded"
        >
          Request Skill
        </button>
      )}
    </div>
  );
};

export default SkillCard;
