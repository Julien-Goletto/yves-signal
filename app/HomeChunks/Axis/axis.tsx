import React from 'react';

import { Button } from '../../components/Atomic/Inputs/Button';
import content from './axis-content.json';

export const AxisSection = () => {
  return (
    <section id='axis' className='custom-container gap-4'>
      <h2 className='w-full mb-4'>{content.title}</h2>
      <div className='w-full grid grid-cols-1 gap-2.5 xl:grid-cols-2 2xl:grid-cols-3'>
        {
          content.sections.map(
            (axis) => (
              <div key={axis.title} className='w-full flex flex-col justify-between py-4 gap-2.5'>
                <div className='flex-flex-col gap-2.5'>
                  <h3 className='mb-2.5'>{axis.title}</h3>
                  <p>{axis.description}</p>
                </div>
                <div className='flex flex-col xs:flex-row gap-2.5'>
                  {
                    axis.buttons.map((button, index) => (
                      <Button 
                        key={button.label} 
                        to={button.url} 
                        customStyle={(index % 2 === 1) ? 'secondary' : 'primary'}>{button.label}</Button>
                    ))
                  }
                </div>
              </div>
            )
          )
        }
      </div>
    </section>
  );
};
