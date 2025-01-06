import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>

<header className="text-gray-700 body-font">
  <div className="container mx-auto flex flex-wrap p-6 flex-col md:flex-row items-center">
    <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
      <div >
      <span className="ml-3 text-xl font-bold text-blue-500 underline">Design-o-Pedia</span>
      <p className='pl-6 hover:bg-blue-100'>Design Everything</p>
      </div>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="" className="mr-5 hover:text-gray-900">SHOP ALL</Link>
      <Link href="" className="mr-5 hover:text-gray-900">EARRINGS</Link>
      <Link href="" className="mr-5 hover:text-gray-900">NECKLACE</Link>
      <Link href="" className="mr-5 hover:text-gray-900">RINGS</Link>
      <Link href="" className="mr-5 hover:text-gray-900">NEW</Link>
      <Link href="" className="mr-5 hover:text-gray-900">SALE</Link>
    </nav>
  </div>
</header>
    </div>
  )
}

export default Header