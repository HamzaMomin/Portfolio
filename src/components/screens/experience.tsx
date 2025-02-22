import React from 'react';

export default function Experience() {
  return (
    <div className='flex justify-center flex-col md:flex-row items-center mt-28 sm-max:mt-44 md-range:mt-44 gap-4 xl-min:mt-40 2xl:mt-40'>
      {/* Card 1 */}
      <div className='bg-blue-700 text-white p-6 rounded-lg shadow-lg '>
        <h2 className='text-xl font-bold'>MindStorm Studios</h2>
        <p className='mt-2 text-lg'>Game Developer Intern</p>
      
      </div>

      {/* Card 2 */}
      <div className='bg-black text-white p-6 rounded-lg shadow-lg '>
      <h2 className='text-xl font-bold'>Xgrid.co</h2>
      <p className='mt-2 text-lg'>WordPress Intern</p>
       
      </div>

      {/* Card 3 */}
      <div className='bg-gray-800 text-white p-6 rounded-lg shadow-lg w-80'>
      <h2 className='text-xl font-bold'>Xgrid.co</h2>
      <p className='mt-2 text-lg'>WordPress Developer</p>
       
      </div>
    </div>
  );
}
