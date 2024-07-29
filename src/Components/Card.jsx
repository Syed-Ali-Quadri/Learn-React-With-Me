import React from 'react'

function Card() {

  const data = [
      {
        name: 'Aaja Mahiya',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt iste repellendus nihil ex, accusamus commodi vitae.',
      },
      {
        name: 'Falak Tak Chal',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt iste repellendus nihil ex, accusamus commodi vitae.',
      },
      {
        name: 'Bewafa',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt iste repellendus nihil ex, accusamus commodi vitae.',
      }
    ];

    const handleClickDownload = () => {
      alert('Wait For Few Seconds, Downloading Soon...');
    }
  return (


    <div>
      <div className="px-4 w-full h-screen bg-zinc-300 flex flex-col gap-4 justify-center">
        {data.map((elem, index)=>( 
          <div key={index} className="w-96 py-3 px-4 rounded-md bg-zinc-100">
          <h1 className='font-semibold text-xl'>{elem.name}</h1>
          <p className='font-medium text-xs mt-2 '>{elem.description}</p>
          <button onClick={handleClickDownload} className='py-1 px-4 bg-blue-600 rounded mt-3 text-zinc-100 font-medium text-sm'>Download Now</button>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Card
