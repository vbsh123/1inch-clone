import { database } from '../../database'; 
import Card from './card';

function FarmingPage() {

    return(
      <div className="bg-gradient-to-r from-[#0A131F] to-[#06070A] w-full h-auto md:flex md:justify-center overflow-y-scroll">
        <div className='flex items-center flex-col justify-between h-auto md:grid md:gap-10 md:grid-cols-2 lg:grid-cols-3 md:w-full lg:w-10/12'>
         {database.map((element) => <div className='flex w-11/12 h-72 mb-2 mt-2'><Card {...element} ></Card></div>)}
        </div>
      </div>
    )
}

export default FarmingPage;