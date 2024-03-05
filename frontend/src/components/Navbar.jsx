import reactLogo from '../assets/Logo.svg'

function Nav() {
    return (
      <>
      <div className='w-screen flex justify-between'>
        <div className='w-5/12'>
            <img className='ml-20' src={reactLogo} alt="" />
        </div>
        <div className='w-6/12 flex justify-around items-center font-medium'>
            <h1>Crypto taxes</h1>
            <h1>Free Tools</h1>
            <h1>Resource Center</h1>
            <button type="button" className=" h-3/6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg px-5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Started</button>
        </div>
        
      </div> 
      </>
    )
  }
  
  export default Nav