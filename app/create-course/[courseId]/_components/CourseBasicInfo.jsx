import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import EditCourseBasicInfo from "./EditCourseBasicInfo";
import { Corben } from "next/font/google";
import { uploadImageToCloudinary } from "@/configs/cloudinaryConfig";
import { date } from "drizzle-orm/mysql-core";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/Schema";
import { eq } from "drizzle-orm";
import {toast} from 'react-hot-toast';
import Link from "next/link";
import { getCourseImage } from "@/lib/imageService";

const CourseBasicInfo = ({ course, refreshData,edit=true }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [imageError, setImageError] = useState(false);
  
  useEffect(()=>{
       if(course){
        setSelectedFile(course?.courseBanner)
        setImageError(false) // Reset error state when course changes
       }
  },[course])
  
  const getDefaultImage = () => {
    if (imageError) {
      return '/course-cover.svg';
    }
    
    // Use the intelligent image service
    return getCourseImage(course, {
      preferYoutube: true,
      fallbackToCategory: true
    });
  };
  
  const handleImageError = () => {
    setImageError(true);
    // Force re-render by clearing selectedFile if it was the default
    if (!course?.courseBanner) {
      setSelectedFile(null);
    }
  };
  const onFileSelected = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    
    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      toast.error('Please upload an image file (jpg, jpeg, png, webp).');
      return;
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size too large. Maximum size is 5MB.');
      return;
    }
    
    // Show preview immediately
    setSelectedFile(URL.createObjectURL(file));
    
    try {
      // Show loading toast
      const loadingToast = toast.loading('Uploading image...');
      
      // Upload directly to Cloudinary (client-side)
      const uploadedImageUrl = await uploadImageToCloudinary(file);
      
      // Update database with the new image URL
      await db.update(CourseList).set({
        courseBanner: uploadedImageUrl
      }).where(eq(CourseList.id, course.id));
      
      // Dismiss loading toast and show success
      toast.dismiss(loadingToast);
      toast.success('Course banner updated successfully!');
      
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error(`Failed to upload image: ${error.message}`);
      
      // Reset to original image on error
      setSelectedFile(course?.courseBanner || getDefaultImage());
    }
  };

  return (
    <div className="p-10 border rounded-xl shadow-sm mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        <div>
          <h2 className="font-bold text-3xl">
            {course?.courseOutput?.course?.name}{" "}
            <span>
              {" "}
          {edit &&<EditCourseBasicInfo
                course={course}
                refreshData={() => refreshData(true)}
              />}
            </span>{" "}
          </h2>
          <p className="text-sm text-gray-400 mt-3">
            {course?.courseOutput?.course?.description}
          </p>
          <h2 className="font-medium mt-2 flex gap-2 items-center text-primary">
            {" "}
            <HiOutlinePuzzlePiece /> {course?.category}
          </h2>
         {!edit &&<Link href={'/course/'+course?.courseId+'/start'}>
          <Button className="w-full mt-5 cursor-pointer">Start</Button>
          </Link>}
        </div>
        <div>
          <label htmlFor="upload-image">
            {/* Using regular img tag to bypass Next.js optimization issues */}
            <img
              key={selectedFile || getDefaultImage()} // Force re-render on image change
              src={selectedFile || getDefaultImage()}
              alt="Course banner"
              width={600}
              height={300}
              className="w-full rounded-xl h-[250px] object-cover cursor-pointer border"
              onError={handleImageError}
            />
         </label>
         {edit &&
          <input
            hidden
            type="file"
            id="upload-image"
            className="opacity-0"
            onChange={onFileSelected}
          />
          }
        </div>
      </div>
    </div>
  );
};

export default CourseBasicInfo;
