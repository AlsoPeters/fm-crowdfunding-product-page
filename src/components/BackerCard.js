import { useState } from 'react';

export default function BackerCard(props) {
  console.log(props.tier);

  return (
    <div>
      <div
        className={
          props.tier.amount_left <= 0
            ? 'px-4 mb-6 border-2 rounded-md opacity-50'
            : 'px-4 mb-6 border-2 rounded-md'
        }
      >
        <div className='flex flex-row items-center my-6'>
          <input type='radio' name='tier' className='mr-2 border-4 '></input>
          <p className='font-bold '>{props.tier.title}</p>
        </div>
        <h2 className='pb-6 font-medium text-primary-moderate-cyan'>
          {props.tier.amount}
        </h2>
        <p className='mb-6 text-neutral-dark-gray'>{props.tier.description}</p>
        <div className='flex pb-6'>
          {props.tier.amount_left === 'none' ? (
            <></>
          ) : (
            <>
              <div className='text-3xl font-bold '>
                {props.tier.amount_left}
              </div>
              <div className='content-center pt-2 pl-2 text-base'> left</div>
            </>
          )}
        </div>
        <div>
          <p className='text-center text-neutral-dark-gray'>
            Enter your pledge
          </p>
          <div className='flex'>
            <span className=''>
              $
              <input
                type='number'
                className='w-24 px-4 font-bold text-black border-2 rounded-full '
                placeholder={props.tier.dollar_amount}
              />
            </span>

            <button className='h-12 w-28'>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}
