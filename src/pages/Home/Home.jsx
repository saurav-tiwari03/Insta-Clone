import {Toaster} from 'react-hot-toast'
import { Navbar } from '../../components/Navbar'
import { Feedposts } from '../FeedPosts/Feedposts'
import { Account } from '../../components/Account'


export const Home = () => {
  return (
  <>
    <div className="text-black bg-[#000] h-screen flex">
      {/*Left side Div */}
      <div className='flex items-start w-[12vh] md:w-[35vh]'>
        <Navbar />
      </div>
      <div className='h-screen w-[0.07px] bg-white'></div>
      {/*Middle div */}
      <div>
        <Feedposts />
      </div>
      {/*Right Div */}
      <div className='flex items-start justify-end'>
        <Account />
      </div>
    </div>
  <Toaster />
  </>
  )
}
