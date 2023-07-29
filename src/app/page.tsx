import Image from 'next/image'
import Navigation from './theme/navigation';
import iconVerified from './icons/icon-verified-bold.svg';
import Header from './theme/header';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="h-16 w-full"></div>
      
      <div className='flex flex-col  items-center justify-center md:p-5'>
        <div className="border-b border-primary-light p-5 rounded-none w-full max-w-lg">
          <div className="header flex items-center justify-between mb-2">
            <div className='flex items-center gap-1'>
              <h1 className='font-semibold text-sm'>supreme_leader</h1>
              <Image src={iconVerified} alt='' height={14} />
            </div>
            <p className='text-xs text-text-secondary'>5min</p>
          </div>
          <div className="content">
            <p className='text-sm'>if you're reading this, i hope you find the strength to get through whatever it is that's causing you pain at the moment.</p>
          </div>
        </div>
        
        <div className="border-b border-primary-light p-5 rounded-none w-full max-w-lg">
          <div className="header flex items-center justify-between mb-2">
            <div className='flex items-center gap-1'>
              <h1 className='font-semibold text-sm'>supreme_leader</h1>
              <Image src={iconVerified} alt='' height={14} />
            </div>
            <p className='text-xs text-text-secondary'>18h</p>
          </div>
          <div className="content">
            <p className='text-sm'>You are welcome here.</p>
          </div>
        </div>
        
        <div className="border-b border-primary-light p-5 rounded-none w-full max-w-lg">
          <div className="header flex items-center justify-between mb-2">
            <div className='flex items-center gap-1'>
              <h1 className='font-semibold text-sm'>supreme_leader</h1>
              <Image src={iconVerified} alt='' height={14} />
            </div>
            <p className='text-xs text-text-secondary'>18h</p>
          </div>
          <div className="content">
            <p className='text-sm'>life is not fair 🦹🏻‍♂️</p>
          </div>
        </div>
      </div>

      {/* <Navigation /> */}
    </main>
  )
}
