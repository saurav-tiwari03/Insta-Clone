import { Navbar } from "../../components/Navbar"

const Notications = () => {
  return (
    <div className="text-black bg-[#000] h-screen flex">
      <div className='flex items-start w-[12vh] md:w-[35vh]'>
        <Navbar />
      </div>
      <div className='h-screen w-[0.07px] bg-white'></div>
      <div className="m-12">
        <p className="text-red-500 ">Page under development</p>
      </div>
    </div>
  )
}

export default Notications