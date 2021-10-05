import { useState } from 'react';

export default function BackerCard(props) {
  console.log(props.tier);

  return (
    <div>
      <div className='px-4 mb-6 border-2 rounded-md'>
        <div className='flex flex-row items-center my-6'>
          <input type='radio' name='tier' className='mr-2 border-4 '></input>
          <p className='font-bold '>{props.tier.title}</p>
        </div>
        <h2 className='pb-6 font-medium text-primary-moderate-cyan'>
          {props.tier.amount}
        </h2>
        <p className='mb-6 text-neutral-dark-gray'>{props.tier.description}</p>
        <div className='flex pb-6'>
          <div className='text-3xl font-bold '>{props.tier.amount_left}</div>
          <div className='content-center pt-2 pl-2 text-base'> left</div>
        </div>
      </div>
    </div>
  );
}
