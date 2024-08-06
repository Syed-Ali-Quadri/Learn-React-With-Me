import React from 'react'

function NavBar({data}) {
    const dataCount = data.filter((elem) => elem.addedData).length;

  return (
    <div className='w-full px-20 py-5 flex items-center justify-between'>
        <h3 className='text-lg font-semibold text-orange-600 cursor-pointer'>Orange</h3>
        <div className="flex px-5 py-3 bg-orange-600 text-white rounded-full gap-3 text-sm cursor-pointer">
            <h3>Favourites</h3>
            <h4 className='font-semibold'>{dataCount}</h4>
        </div>
    </div>
  )
}

export default NavBar
