import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className='flex flex-row  p-5 bg-blue-500'>
      <p className='font-bold text-white'>I am the Header</p>
      <Link
        href={"/"}
        className='ml-5 px-2 py-1 bg-white text-blue-500 rounded-lg'
      >
        Home
      </Link>
      <Link
        href={"/todos"}
        className='px-2 py-1 bg-white text-blue-500 rounded-lg ml-5'
      >
        Todos
      </Link>
      <Link
        href={"/search"}
        className='px-2 py-1 bg-white text-blue-500 rounded-lg ml-5'
      >
        Search
      </Link>
    </header>
  );
};

export default Header;
