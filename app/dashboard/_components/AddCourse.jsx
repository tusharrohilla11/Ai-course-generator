"use client"
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs'
import Link from 'next/link';
import React, { useContext } from 'react'
import { adminConfig } from '@/configs/AdminConfig';

const Addcourse = () => {
    const {user} =  useUser();
    const{userCourseList, setUserCourseList} = useContext(UserCourseListContext)
    
    console.log(userCourseList?.length);
  
  // Check if user is admin using the admin config
  const isAdmin = adminConfig.makeEveryoneAdmin || adminConfig.emails.includes(user?.primaryEmailAddress?.emailAddress);
  
  // Increased course limit for free users
  const maxCourses = adminConfig.maxCoursesForFreeUser || 10;
  const hasCourseLimit = userCourseList?.length >= maxCourses;
  
  const destination = isAdmin || !hasCourseLimit ? '/create-course' : '/dashboard/tr_portfolio';
    
  return (
    <div  className='flex justify-between items-center'>
        <div>
            <h2 className='text-xl'>Hello, <span className='font-bold'> {user?.fullName} </span> </h2>
            <p className='text-sm text-gray-500'>Create new course with Ai, Share with friends and Earn form it.</p>
        </div>

        <Link href={destination}>
        <Button variant="startButton">+ Create AI Course</Button>
        </Link>
        
    </div>
  )
}

export default Addcourse
