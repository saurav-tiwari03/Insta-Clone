import './Loader.css'
import { ImSpinner } from "react-icons/im";



export const Loader = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-[#222]'>
      <div className="spinner">
        <div></div>   
        <div></div>    
        <div></div>    
        <div></div>    
        <div></div>    
        <div></div>    
        <div></div>    
        <div></div>    
        <div></div>    
        <div></div>    
      </div>
    </div>
  )
}

export const Spinner = () => {
  return  (
    <ImSpinner className='spin'/>
  )
}