import React from 'react'
import Logo from './Logo'
import DarkModeToggle from './ui/DarkModeToggle'
import UserButton from './ui/UserButton'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import Link from 'next/link';
import { MessageSquareIcon } from 'lucide-react';
import CreateChatButton from './ui/CreateChatButton';

async function Header() {
  const session = await getServerSession(authOptions);
  
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
        <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl
        mx-auto">
            <Logo />

            <div className="flex-1 flex items-center justify-end space-x-4">
              {/*lang selct */}

              {session ? (
                <>
                  <Link href={'/chat'} prefetch={false}>
                    <MessageSquareIcon 
                      className="text-black dark:text-white"
                    />
                  </Link>
                  <CreateChatButton />
                </>
              ) : (
                <Link href='/pricing'>Pricing</Link>
              )}

              <DarkModeToggle />
              {/* userbutton */}
              <UserButton session={session}/>
            </div>
        </nav>

        {/* upgrade */}
    </header>
  )
}

export default Header