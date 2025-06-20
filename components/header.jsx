import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Button } from './ui/button'
import { LayoutDashboard } from 'lucide-react'

const Header = () => {
  return (
    <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>
      <nav className='   mx-auto h-16 flex items-center px-4 justify-between'>
        <Link href='/'> 
        <Image src="/logo.png" alt="Sensai Logo" width={200} height={60} 
        className='h-12 py-1 w-auto object-contain' />
        </Link>

        <div>
          <SignedIn>
            <Link href={'/dashboard'}>
            <Button>
              <LayoutDashboard className='h-4 w-4' />
              <span className="hidden md:block">Industry Insights</span>
            </Button>
            </Link>
          </SignedIn>
        </div>
      </nav>

      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}

export default Header
