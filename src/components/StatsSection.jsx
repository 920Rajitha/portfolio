import React from 'react';
import CountUp from 'react-countup';

const stats = [
  { label: 'Projects', value: 35 },
  { label: 'Clients', value: 12 },
  { label: 'Years of Experience', value: 2 },
];

const StatsSection = () => {
  return (
    <section className="bg-[#111827] text-white py-16 px-6 mt-10">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
        {stats.map((item, index) => (
          <div key={index}>
            <h3 className="text-4xl font-bold text-yellow-400">
              <CountUp end={item.value} duration={2} />+
            </h3>
            <p className="text-gray-400 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
