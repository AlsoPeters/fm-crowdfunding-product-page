import { useState } from 'react';

export default function BackerCard(props) {
  console.log(props);

  const [value, setValue] = useState(0);

  let handleInputChange = (event) => {
    setValue(event.target.value);
  };

  console.log(props.pledgeCompletedModalOpen);

  const handleSubmit = () => {
    if (value < props.tier.dollar_amount) {
      alert('erron');
    } else {
      props.pledgeCompletedModalOpenHandler();
      props.handleUpdatePledges(props.tier.amount_left - 1, props.tier.id);
      props.setTotalBackers(props.totalBackers + 1);
      props.setAmountBacked(parseFloat(props.amountBacked) + parseFloat(value));
      props.setBackProjectModalOpenHandler();
    }
  };
  console.log(props.pledgeCompletedModalOpen);
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
          {props.tier.amount_left === 'none' ? (
            <></>
          ) : (
            <>
              <p className='mb-6 text-center text-neutral-dark-gray'>
                Enter your pledge
              </p>
              <div className='flex justify-between mb-6'>
                <input
                  type='number'
                  min={props.dollar_amount}
                  onChange={handleInputChange}
                  className='font-bold text-center text-black border-2 border-gray-300 rounded-full w-28 h-14 '
                  placeholder={props.tier.dollar_amount}
                />
                <button className='w-32 h-14 ' onClick={handleSubmit}>
                  Continue
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
