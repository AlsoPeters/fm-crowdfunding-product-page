export default function PledgeCard() {
  return (
    <div className='border-2 px-4 pt-4 pb-6 rounded-md border-neutral-dark-gray  mb-6'>
      <h1 className='font-bold'>Bamboo Stand</h1>
      <h2 className=' text-primary-moderate-cyan font-medium pb-4 '>
        Pledge $25 or more
      </h2>
      <p className='pb-6'>
        You get an ergonomic stand made of natural bamboo. You've helped us
        launch our promotional campaign, and you’ll be added to a special Backer
        member list.
      </p>

      <div className='font-bold text-2xl pb-6'>
        101<span className='text-base font-normal'> left</span>
      </div>
      <button className='text-base font-normal'>Select Reward</button>
    </div>
  );
}
