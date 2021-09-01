import { ReactComponent as Hamburger } from './images/icon-hamburger.svg';
import { ReactComponent as Logo } from './images/logo-mastercraft.svg';
import { ReactComponent as Bookmark } from './images/icon-bookmark.svg';
import ProgressBar from './components/ProgressBar';
import PledgeCard from './components/PledgeCard';

function App() {
  return (
    <div className='App font-sans bg-mobile-hero bg-no-repeat bg-contain'>
      <header className='grid grid-cols-2 border-2 mb-44 border-blue-300 '>
        <h2 className='text-2xl font-bold text-white ml-6 mt-6 '>crowdfund</h2>
        <Hamburger className='mt-6 col-end-4 mr-6' />
      </header>

      <div className='flex flex-col text-center place-content-center border-2 border-red-700 '>
        <Logo className='self-center justify-self-start' />
        <h2 className='font-bold '>Mastercraft Bamboo Monitor Riser</h2>
        <p>
          A beautifully handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className='flex'>
          <button className=''>Back this project</button>
          <Bookmark />
        </div>
      </div>

      <div className='flex flex-col text-center place-content-center border-2 border-green-700 '>
        <div>
          <h2 className='font-bold'>$$$</h2>
          <p>of $1000,000 backed</p>
        </div>

        <div className='h-px  w-20 rounded-full self-center'></div>

        <div>
          <h2 className='font-bold'>NUMBER</h2>
          <p>total backers</p>
        </div>

        <div className='h-px  w-20 rounded-full self-center'></div>

        <div>
          <h2 className='font-bold'>NUMBER</h2>
          <p>days left</p>
        </div>
        <ProgressBar />
      </div>
      <div className='flex flex-col border-2 border-blue-700 '>
        <h1 className='font-bold'>About this project</h1>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>

        <PledgeCard />
        <PledgeCard />
        <PledgeCard />
      </div>
    </div>
  );
}

export default App;
