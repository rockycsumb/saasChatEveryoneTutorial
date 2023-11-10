"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UseAvatar from "./UserAvatar";
import { Session } from "next-auth";
import { Button } from "./button";
import { signIn, signOut } from "next-auth/react";

export default function UserButton({session}:{session: Session | null}) {
  //subscription listener
  
  if(!session) return (
    <Button variant={'outline'} onClick={() => signIn()}>
      Sign In
    </Button>
  )
    //session

  return session && (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UseAvatar name={session.user?.name} image={session.user?.image} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
   
        <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
