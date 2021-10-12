import { ReactComponent as Check } from '../images/icon-check.svg';

export default function PledgeCompletedModal(props) {
  console.log(props);

  if (props.pledgeCompletedModalOpen === true) {
    return (
      <div className='fixed inset-0 bg-black bg-opacity-50'>
        <div className='grid max-h-screen mt-20 grid-rows-modal'>
          <div className='row-start-2 mx-5 overflow-y-auto bg-white border-2 rounded-md '>
            <div className='flex flex-col'>
              <Check className='self-center my-6' />
              <h1 className='mb-6 text-xl font-bold text-center'>
                Thanks for your support!
              </h1>
              <p className='mx-6 mb-8 text-sm text-center text-neutral-dark-gray'>
                Your pledge brings us one step closer to sharing Mastercraft
                Bamboo Monitor Riser worldwide. You will get an email once our
                campaign is completed.
              </p>
              <button
                className='self-center w-32 mb-10'
                onClick={props.pledgeCompletedModalOpenHandler}
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
}
