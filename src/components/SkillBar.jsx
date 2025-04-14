import React from 'react';

const SkillBar = ({ skill, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm text-gray-400">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-700 rounded-full">
        <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;
