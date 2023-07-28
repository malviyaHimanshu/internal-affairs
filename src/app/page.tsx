import Image from 'next/image'
import Navigation from './theme/navigation'

export default function Home() {
  return (
    <main>
      <div className='flex gap-4 items-center justify-center h-40'>
        <div className='h-12 w-12 rounded-lg bg-primary-light hover:scale-110 transition-all ease-in-out duration-100'></div>
        <div className='h-12 w-12 rounded-lg bg-error hover:scale-110 transition-all ease-in-out duration-100'></div>
        <div className='h-12 w-12 rounded-lg bg-success hover:scale-110 transition-all ease-in-out duration-100'></div>
        <div className='h-12 w-12 rounded-lg bg-accent hover:scale-110 transition-all ease-in-out duration-100'></div>
      </div>

      <Navigation />
    </main>
  )
}
