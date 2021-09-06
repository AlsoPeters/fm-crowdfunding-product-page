export default function ProgressBar() {
  return (
    <div>
      <div className='relative h-3 max-w-xl overflow-hidden rounded-full'>
        <div className='absolute w-full h-full bg-gray-200 '></div>
        <div
          className='absolute h-full rounded-full bg-primary-moderate-cyan '
          style={{ width: '50%' }}
        ></div>
      </div>
    </div>
  );
}
