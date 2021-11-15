export default function MobileMenu(props) {
  if (props.opened === true)
    return (
      <div
        onClick={props.closeMenu}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 modal"
      >
        <div className="flex flex-col mt-20 mb-auto text-xl font-bold bg-white rounded-md w-80">
          <div className="py-6 pl-6">
            <h2>About</h2>
          </div>
          <div className="py-6 pl-6 border-t-2 border-b-2">
            <h2>Discover</h2>
          </div>
          <div className="py-6 pl-6">
            <h2>Get Started</h2>
          </div>
        </div>
      </div>
    );

  return <div></div>;
}
