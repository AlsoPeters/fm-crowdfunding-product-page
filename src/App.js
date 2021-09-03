import { ReactComponent as Hamburger } from './images/icon-hamburger.svg';
import { ReactComponent as Logo } from './images/logo-mastercraft.svg';
import { ReactComponent as Bookmark } from './images/icon-bookmark.svg';
import ProgressBar from './components/ProgressBar';
import PledgeCard from './components/PledgeCard';

function App() {
  return (
    <div className='App font-sans bg-mobile-hero bg-no-repeat bg-contain'>
      <header className='grid grid-cols-2 mb-48 '>
        <h2 className='text-2xl font-bold text-white ml-6 mt-4 '>crowdfund</h2>
        <Hamburger className='mt-6 col-end-4 mr-6' />
      </header>

      <div className='px-6 '>
        <div className='card flex flex-col bg-white text-center place-content-center border-2  border-neutral-dark-gray mb-8'>
          <Logo className='self-center -m-6 mb-8' />
          <h2 className='font-bold text-2xl mb-4'>
            Mastercraft Bamboo Monitor Riser
          </h2>
          <p className='px-6 text-sm mb-6'>
            A beautifully handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className='flex place-content-between px-6 mb-8'>
            <button className='w-52'>Back this project</button>
            <Bookmark />
          </div>
        </div>

        <div className='card flex flex-col mb-8 text-center place-content-center border-2 border-green-700'>
          <div>
            <h2 className='font-bold mt-8'>$$$</h2>
            <p className='mb-6'>of $1000,000 backed</p>
          </div>

          <div className='h-px w-20 rounded-full self-center'></div>

          <div>
            <h2 className='font-bold'>NUMBER</h2>
            <p className='mb-6'>total backers</p>
          </div>

          <div className='h-px w-20 rounded-full self-center'></div>

          <div>
            <h2 className='font-bold'>NUMBER</h2>
            <p className='mb-6'>days left</p>
          </div>
          <div className='px-6 mb-8'>
            <ProgressBar />
          </div>
        </div>
        <div className='card flex flex-col px-6  border-2 border-blue-700 '>
          <h1 className='font-bold text-xl mt-8'>About this project</h1>
          <p className='mt-6'>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className='mt-6 mb-6'>
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
