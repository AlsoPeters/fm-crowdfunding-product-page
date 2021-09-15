import { ReactComponent as Hamburger } from './images/icon-hamburger.svg';
import { ReactComponent as Logo } from './images/logo-mastercraft.svg';
import { ReactComponent as Bookmark } from './images/icon-bookmark.svg';
import ProgressBar from './components/ProgressBar';
import PledgeCard from './components/PledgeCard';
import MobileMenu from './components/MobileMenu';
import BackProjectModal from './components/BackProjectModal';
import { useState } from 'react';

function App() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [backProjectModalOpen, setBackProjectModalOpen] = useState(false);

  const handleHamburgerOpen = () => {
    setMenuOpened(!menuOpened);
  };

  const backProjectModalOpenHandler = () => {
    setBackProjectModalOpen(!backProjectModalOpen);
  };
  console.log(backProjectModalOpen);
  return (
    <div className='font-sans bg-gray-100 bg-no-repeat bg-contain App bg-mobile-hero'>
      <MobileMenu opened={menuOpened} closeMenu={handleHamburgerOpen} />
      <BackProjectModal
        backProjectModalOpenHandler={backProjectModalOpenHandler}
        backProjectModalOpen={backProjectModalOpen}
      />

      <header className='grid grid-cols-2 mb-48 '>
        <h2 className='mt-4 ml-6 text-2xl font-bold text-white '>crowdfund</h2>
        <Hamburger
          onClick={handleHamburgerOpen}
          className='col-end-4 mt-6 mr-6'
        />
      </header>

      <div className='px-6 '>
        <div className='flex flex-col mb-8 text-center bg-white border-2 border-white card place-content-center'>
          <Logo className='self-center mb-8 -m-6' />
          <h2 className='mb-4 text-2xl font-bold'>
            Mastercraft Bamboo Monitor Riser
          </h2>
          <p className='px-6 mb-6 text-sm text-neutral-dark-gray '>
            A beautifully handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className='flex px-6 mb-8 place-content-between'>
            <button onClick={backProjectModalOpenHandler} className='w-52'>
              Back this project
            </button>
            <Bookmark />
          </div>
        </div>

        <div className='flex flex-col mb-8 text-center bg-white border-2 border-white card place-content-center'>
          <div>
            <h2 className='mt-6 mb-2 text-3xl font-bold'>$$$</h2>
            <p className='mb-4 text-neutral-dark-gray'>of $1000,000 backed</p>
          </div>

          <div className='self-center w-20 h-px bg-gray-300 rounded-full'></div>

          <div>
            <h2 className='mt-6 text-3xl font-bold'>123</h2>
            <p className='mb-4 text-neutral-dark-gray'>total backers</p>
          </div>

          <div className='self-center w-20 h-px bg-gray-300 rounded-full'></div>

          <div>
            <h2 className='mt-6 text-3xl font-bold'>123</h2>
            <p className='mb-8 text-neutral-dark-gray'>days left</p>
          </div>
          <div className='px-6 mb-8'>
            <ProgressBar />
          </div>
        </div>
        <div className='flex flex-col px-6 bg-white border-2 border-white card '>
          <h1 className='mt-8 text-xl font-bold'>About this project</h1>
          <p className='mt-6 text-neutral-dark-gray'>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className='mt-6 mb-6 text-neutral-dark-gray'>
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>

          <PledgeCard />
          <PledgeCard />
          <PledgeCard />
        </div>
      </div>
    </div>
  );
}

export default App;
