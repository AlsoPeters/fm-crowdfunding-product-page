import { ReactComponent as ModalClose } from '../images/icon-close-modal.svg';

export default function BackProjectModal(props) {
  if (props.backProjectModalOpen === true)
    return (
      <div className='fixed inset-0 bg-black bg-opacity-50'>
        <div className='grid max-h-screen grid-rows-modal'>
          <div className='row-start-2 mx-5 overflow-y-auto bg-white rounded-md '>
            <div className='grid h-auto grid-flow-col grid-col-2'>
              <h2 className='mx-4 my-6 text-xl font-bold'>Back this project</h2>
              <ModalClose
                className='mx-4 mt-8 justify-self-end'
                onClick={props.backProjectModalOpenHandler}
              />
            </div>
            <div className='mx-4 text-base'>
              <p className='mb-6 text-neutral-dark-gray'>
                Want to support us in bringing Mastercraft Bamboo Monitor Riser
                out in the world?
              </p>
              <div className='px-4 mb-6 border-2 rounded-md'>
                <div className='flex flex-row items-center my-6'>
                  <input type='radio' className='mr-2 border-4 '></input>
                  <p className='font-bold '>Pledge with no reward</p>
                </div>
                <p className='mb-6 text-neutral-dark-gray'>
                  Choose to support us without a reward if you simply believe in
                  our project. As a backer, you will be signed up to receive
                  product updates via email.
                </p>
              </div>
              <div className='px-4 mb-6 border-2 rounded-md'>
                <div className='flex flex-row items-center my-6'>
                  <input type='radio' className='mr-2 border-4 '></input>
                  <p className='font-bold '>Pledge with no reward</p>
                </div>
                <p className='mb-6 text-neutral-dark-gray'>
                  Choose to support us without a reward if you simply believe in
                  our project. As a backer, you will be signed up to receive
                  product updates via email.
                </p>
              </div>
              <div className='px-4 mb-6 border-2 rounded-md'>
                <div className='flex flex-row items-center my-6'>
                  <input type='radio' className='mr-2 border-4 '></input>
                  <p className='font-bold '>Pledge with no reward</p>
                </div>
                <p className='mb-6 text-neutral-dark-gray'>
                  Choose to support us without a reward if you simply believe in
                  our project. As a backer, you will be signed up to receive
                  product updates via email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  return <div></div>;
}
