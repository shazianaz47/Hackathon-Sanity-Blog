import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>

<header className="text-gray-700 body-font">
  <div className="container mx-auto flex flex-wrap p-6 flex-col md:flex-row items-center">
    <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg> */}
      <span className="ml-3 text-xl text-gray-500">Design-o-Pedia</span>
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