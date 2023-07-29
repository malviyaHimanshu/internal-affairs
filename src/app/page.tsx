import Navigation from './theme/navigation';
import logo from './icons/logo.png';
import Header from './theme/header';
import Posts from './posts';

export default function Home() {

  return (
    <main>
      <Header />
      <div className="h-16 w-full"></div>
      
      <Posts />

      {/* <Navigation /> */}
    </main>
  )
}
