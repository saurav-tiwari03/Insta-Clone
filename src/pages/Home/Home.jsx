import { useEffect } from 'react'
import {Loader} from './../../components/Loader'
import toast, {Toaster} from 'react-hot-toast'
export const Home = () => {
  useEffect(() => {
    toast.error('Home page is Completed yet')
  },[])
  return (
    <div className="text-black">
      <Loader />
      <Toaster />
    </div>
  )
}
