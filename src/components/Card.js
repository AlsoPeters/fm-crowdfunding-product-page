import { useState } from 'react';

function Card(props) {
  const [amountLeft, setAmountLeft] = useState(props.tier.amount_left);

  console.log(props.tier);

  return (
    <div>
      {props.tier.amount_left !== 'none' && (
        <div
          key={props.tier.id}
          className={
            props.tier.amount_left <= 0
              ? 'px-4 pt-4 pb-6 mb-6 border-2 border-gray-300 rounded-md opacity-50'
              : 'px-4 pt-4 pb-6 mb-6 border-2 border-gray-300 rounded-md'
          }
        >
          <div>
            <h1 className='pb-2 font-bold'>{props.tier.title}</h1>
            <h2 className='pb-6 font-medium text-primary-moderate-cyan'>
              {props.tier.amount}
            </h2>
            <p className='pb-6'>{props.tier.description}</p>
          </div>
          <div>
            <div className='flex pb-6'>
              <div className='text-3xl font-bold '>
                {props.tier.amount_left}
              </div>
              <div className='content-center pt-2 pl-2 text-base'> left</div>
            </div>
            <button
              onClick={() => {
                props.handleUpdatePledges(
                  props.tier.amount_left - 1,
                  props.tier.id
                );
              }}
              className='text-base font-normal'
            >
              Select Reward
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
