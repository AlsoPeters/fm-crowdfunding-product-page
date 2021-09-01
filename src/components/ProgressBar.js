export default function ProgressBar() {
  return (
    <div>
      <div className='h-3 relative max-w-xl rounded-full overflow-hidden'>
        <div className='w-full h-full bg-gray-200 absolute'></div>
        <div
          className='h-full bg-green-500 absolute'
          style={{ width: '50%' }}
        ></div>
      </div>
    </div>
  );
}
