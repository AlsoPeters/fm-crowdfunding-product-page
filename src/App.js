import { ReactComponent as Hamburger } from "./images/icon-hamburger.svg";
import { ReactComponent as Logo } from "./images/logo-mastercraft.svg";
import { ReactComponent as Bookmark } from "./images/icon-bookmark.svg";
import MobileMenu from "./components/MobileMenu";
import BackProjectModal from "./components/BackProjectModal";
import { useState } from "react";
import Card from "./components/Card";
import PledgeCompletedModal from "./components/PledgeCompletedModal";

const pledgeTiers = [
  {
    id: 1,
    title: "Pledge with no reward",
    description:
      "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    amount_left: "none",
  },
  {
    id: 2,
    title: "Bamboo Stand",
    amount: "Pledge $25 or more",
    dollar_amount: 25,
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
    amount_left: 101,
  },
  {
    id: 3,
    title: "Black Edition Stand",
    amount: "Pledge $75 or more",
    dollar_amount: 75,
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    amount_left: 64,
  },
  {
    id: 4,
    title: "Mahogany Special Edition",
    amount: "Pledge $200 or more",
    dollar_amount: 200,
    description:
      "You get a two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    amount_left: 0,
  },
];

function App() {
  const [amountBacked, setAmountBacked] = useState(89914);
  const [totalBackers, setTotalBackers] = useState(5007);
  const [daysLeft, setDaysLeft] = useState(56);

  const [pledgeData, setPledgeData] = useState(pledgeTiers);

  const [menuOpened, setMenuOpened] = useState(false);
  const [backProjectModalOpen, setBackProjectModalOpen] = useState(false);
  const [pledgeCompletedModalOpen, setPledgeCompletedModalOpen] =
    useState(false);

  const amountBackedPercentage = () => {
    return (100 * amountBacked) / 100000;
  };

  const handleHamburgerOpen = () => {
    setMenuOpened(!menuOpened);
  };

  const backProjectModalOpenHandler = () => {
    setBackProjectModalOpen(!backProjectModalOpen);
  };

  const pledgeCompletedModalOpenHandler = () => {
    setPledgeCompletedModalOpen(!pledgeCompletedModalOpen);
  };

  const handleUpdatePledges = (amountLeft, id) => {
    let newArray = [...pledgeData];

    let index = newArray.findIndex((pledgeTier) => id === pledgeTier.id);

    if (index > -1) {
      newArray[index].amount_left = amountLeft;
      console.log(newArray);
      setPledgeData(newArray);
    } else {
      console.log("erron");
    }

    console.log(amountLeft, id);
  };

  return (
    <div className="font-sans bg-gray-100 bg-no-repeat bg-contain App bg-mobile-hero">
      <MobileMenu opened={menuOpened} closeMenu={handleHamburgerOpen} />
      <BackProjectModal
        backProjectModalOpenHandler={backProjectModalOpenHandler}
        backProjectModalOpen={backProjectModalOpen}
        pledgeData={pledgeData}
        handleUpdatePledges={handleUpdatePledges}
        totalBackers={totalBackers}
        setTotalBackers={setTotalBackers}
        amountBacked={amountBacked}
        setAmountBacked={setAmountBacked}
        pledgeCompletedModalOpen={pledgeCompletedModalOpen}
        setPledgeCompletedModalOpen={setPledgeCompletedModalOpen}
        pledgeCompletedModalOpenHandler={pledgeCompletedModalOpenHandler}
      />
      <PledgeCompletedModal
        pledgeCompletedModalOpen={pledgeCompletedModalOpen}
        setPledgeCompletedModalOpen={setPledgeCompletedModalOpen}
        pledgeCompletedModalOpenHandler={pledgeCompletedModalOpenHandler}
      />

      <header className="grid grid-cols-2 mb-48 ">
        <h2 className="mt-4 ml-6 text-2xl font-bold text-white">crowdfund</h2>
        <Hamburger
          onClick={handleHamburgerOpen}
          className="col-end-4 mt-6 mr-6"
        />
      </header>

      <div className="px-6 ">
        <div className="flex flex-col mb-8 text-center bg-white border-2 border-white card place-content-center">
          <Logo className="self-center mb-8 -m-6" />
          <h2 className="mb-4 text-2xl font-bold">
            Mastercraft Bamboo Monitor Riser
          </h2>
          <p className="px-6 mb-6 text-sm text-neutral-dark-gray ">
            A beautifully handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="flex px-6 mb-8 place-content-between">
            <button onClick={backProjectModalOpenHandler} className="w-52">
              Back this project
            </button>
            <Bookmark />
          </div>
        </div>

        <div className="flex flex-col mb-8 text-center bg-white border-2 border-white card place-content-center">
          <div>
            <h2 className="mt-6 mb-2 text-3xl font-bold">
              ${amountBacked.toLocaleString()}
            </h2>
            <p className="mb-4 text-neutral-dark-gray">of $100,000 backed</p>
          </div>

          <div className="self-center w-20 h-px bg-gray-300 rounded-full"></div>

          <div>
            <h2 className="mt-6 text-3xl font-bold">
              {totalBackers.toLocaleString()}
            </h2>
            <p className="mb-4 text-neutral-dark-gray">total backers</p>
          </div>

          <div className="self-center w-20 h-px bg-gray-300 rounded-full"></div>

          <div>
            <h2 className="mt-6 text-3xl font-bold">{daysLeft}</h2>
            <p className="mb-8 text-neutral-dark-gray">days left</p>
          </div>
          <div className="px-6 mb-8">
            <div>
              <div className="pt-3 ">
                <div className="flex h-3 overflow-hidden bg-gray-300 rounded-md">
                  <div
                    style={{ width: `${amountBackedPercentage()}%` }}
                    className="rounded-md bg-primary-moderate-cyan"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-6 bg-white border-2 border-white card ">
          <h1 className="mt-8 text-xl font-bold">About this project</h1>
          <p className="mt-6 text-neutral-dark-gray">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className="mt-6 mb-6 text-neutral-dark-gray">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>

          <div>
            {pledgeData.map((tier) => (
              <Card
                handleUpdatePledges={handleUpdatePledges}
                backProjectModalOpenHandler={backProjectModalOpenHandler}
                key={tier.id}
                tier={tier}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// const [bambooStandAmount, setbambooStandAmount] = useState(
//   pledgeTiers[1].amount_left
// );
// const [blackEditionStandAmount, setBlackEditionStandAmount] = useState(
//   pledgeTiers[2].amount_left
// );
// const [mahoganySpecialEditionAmount, setMahoganySpecialEditionAmount] =
//   useState(pledgeTiers[3].amount_left);

// const [menuOpened, setMenuOpened] = useState(false);
// const [backProjectModalOpen, setBackProjectModalOpen] = useState(false);
