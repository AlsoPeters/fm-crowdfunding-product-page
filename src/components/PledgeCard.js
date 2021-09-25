export default function PledgeCard(props) {
  console.log(props);

  const pledgeTiers = [
    {
      id: 1,
      title: 'Bamboo Stand',
      amount: 'Pledge $25 or more',
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
      amount_left: '101',
    },
    {
      id: 2,
      title: 'Black Edition Stand',
      amount: 'Pledge $75 or more',
      description:
        "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
      amount_left: '64',
    },
  ];

  return (
    <>
      {pledgeTiers.map((tier) => (
        <div className='px-4 pt-4 pb-6 mb-6 border-2 border-gray-300 rounded-md'>
          <div key={tier.id}>
            <h1 className='pb-2 font-bold'>{tier.title}</h1>
            <h2 className='pb-6 font-medium text-primary-moderate-cyan'>
              {tier.amount}
            </h2>
            <p className='pb-6'>{tier.description}</p>
          </div>

          <div className='flex pb-6'>
            <div className='text-3xl font-bold '>101</div>
            <div className='content-center pt-2 pl-2 text-base'> left</div>
          </div>
          <button className='text-base font-normal'>Select Reward</button>
        </div>
      ))}
    </>
  );
}
