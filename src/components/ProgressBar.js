export default function ProgressBar() {
  return (
    <div>
      <div className='relative pt-3'>
        <div className='flex h-3 overflow-hidden bg-gray-300 rounded-md'>
          <div
            style={{ width: '75%' }}
            className='bg-primary-moderate-cyan'
          ></div>
        </div>
      </div>
    </div>
  );
}
