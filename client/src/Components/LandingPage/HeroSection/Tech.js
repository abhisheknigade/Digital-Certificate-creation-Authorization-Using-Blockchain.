import React from 'react'

const Tech = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400 animate-bounce">
            <a href="/" className="flex justify-center items-center">
               <p className='hover:text-gray-900 dark:hover:text-white text-3xl font-medium'>Blockchain</p>                        
            </a>
            <a href="/" className="flex justify-center items-center">
               <p className='hover:text-gray-900 dark:hover:text-white text-3xl font-medium'>IPFS</p>                        
            </a>
            <a href="/" className="flex justify-center items-center">
               <p className='hover:text-gray-900 dark:hover:text-white text-3xl font-medium'>Hardhat</p>                        
            </a>
            <a href="/" className="flex justify-center items-center">
               <p className='hover:text-gray-900 dark:hover:text-white text-3xl font-medium'>React</p>                        
            </a>
            <a href="/" className="flex justify-center items-center">
               <p className='hover:text-gray-900 dark:hover:text-white text-3xl font-medium'>Solidity</p>                        
            </a>
            <a href="/" className="flex justify-center items-center">
               <p className='hover:text-gray-900 dark:hover:text-white text-3xl font-medium'>Tailwind</p>                        
            </a>
        </div>
    </div>
</section>
  )
}

export default Tech