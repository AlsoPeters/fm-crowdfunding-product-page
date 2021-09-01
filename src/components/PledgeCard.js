export default function PledgeCard() {
  return (
    <div className='border-2 border-blue-700 bg-blue-200'>
      <h1 className='font-bold'>Bamboo Stand</h1>
      <h2 className=' text-primary-moderate-cyan font-medium  '>
        Pledge $25 or more
      </h2>
      <p>
        You get an ergonomic stand made of natural bamboo. You've helped us
        launch our promotional campaign, and you’ll be added to a special Backer
        member list.
      </p>

      <div className='font-bold text-2xl'>
        101<span className='text-base font-normal'> left</span>
      </div>
      <button className='text-base font-normal'>Select Reward</button>
    </div>
  );
}
