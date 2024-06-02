import { Navbar } from "../../components/Navbar"
export const Search = () => {
  return (
    <div className="text-black bg-[#000] h-screen flex">
      <div className='flex items-start w-[12vh] md:w-[35vh]'>
        <Navbar />
      </div>
      <div className='h-screen w-[0.07px] bg-white'></div>
    </div>
  )
}
