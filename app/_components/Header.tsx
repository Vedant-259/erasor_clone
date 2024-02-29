
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header className="bg-black">
  <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <Image src='/logo.svg' alt='logo'
    width={100}
    height={100}
    />

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <div
            className="block rounded-md  px-5 py-2.5 text-sm font-medium 
            text-white transition "
           
          >
            <LoginLink postLoginRedirectURL="/dashboard"> Login</LoginLink>
          </div>

          <div
            className="hidden rounded-md bg-gray-100 
            px-5 py-2.5 text-sm font-medium
             text-black transition
              hover:text-slate-800 sm:block"
           
          >
          <RegisterLink>Register</RegisterLink>  
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header