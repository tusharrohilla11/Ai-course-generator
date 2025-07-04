import Image from "next/image";
import React, { useState, useEffect } from "react";
import { HiMiniEllipsisVertical, HiOutlineBookOpen } from "react-icons/hi2";
import DropdownOption from "./DropdownOption";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/Schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { HiOutlineShare } from "react-icons/hi";
import { getCourseImage, validateImageUrl } from "@/lib/imageService";

const CourseCard = ({ course, refreshData, displayUser = false }) => {
  const [imageError, setImageError] = useState(false);
  const [finalImageUrl, setFinalImageUrl] = useState('');

  useEffect(() => {
    const loadImage = async () => {
      let imageUrl = getCourseImage(course, {
        preferYoutube: true,
        usePexels: false, // Set to true if you want to use Pexels API
        fallbackToCategory: true
      });

      // If it's a YouTube thumbnail, validate it exists
      if (imageUrl.includes('youtube.com') || imageUrl.includes('ytimg.com')) {
        const isValid = await validateImageUrl(imageUrl);
        if (!isValid) {
          // If YouTube thumbnail fails, fall back to category image
          imageUrl = getCourseImage(course, {
            preferYoutube: false,
            fallbackToCategory: true
          });
        }
      }

      setFinalImageUrl(imageUrl);
    };

    if (course) {
      loadImage();
    }
  }, [course, imageError]);

  const handleImageError = () => {
    setImageError(true);
    // Get fallback image without YouTube
    const fallbackImage = getCourseImage(course, {
      preferYoutube: false,
      fallbackToCategory: true
    });
    setFinalImageUrl(fallbackImage);
  };

  const handleOnDelete = async () => {
    const resp = await db
      .delete(CourseList)
      .where(eq(CourseList.id, course?.id))
      .returning({ id: CourseList?.id });

    if (resp) {
      refreshData();
    }
  };
  return (
    <div className="shadow-sm rounded-md border  cursor-pointer hover:border-primary">
      <Link href={"/course/" + course?.courseId}>
        <Image
          src={finalImageUrl || '/course-cover.svg'}
          width={300}
          height={200}
          className="w-full h-[200px] rounded-md object-cover"
          alt={course?.courseOutput?.course?.name || 'Course thumbnail'}
          onError={handleImageError}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </Link>
      <div className="p-2">
        <h2 className="font-medium text-lg flex items-center justify-between">
          {course?.courseOutput?.course?.name}{" "}
          {!displayUser && (
            <DropdownOption handleOnDelete={() => handleOnDelete()}>
              <HiMiniEllipsisVertical />
            </DropdownOption>
          )}
          {/* Share URL Icon */}
          {navigator.share && (
            <HiOutlineShare
              onClick={() => {
                navigator
                  .share({
                    title: "Check out this course!",
                    url:
                      process.env.NEXT_PUBLIC_HOST_NAME +
                      "/course/" +
                      course?.courseId,
                  })
                  .then(() => console.log("Successfully shared"))
                  .catch((error) => console.log("Error sharing", error));
              }}
              className="text-2xl cursor-pointer text-primary"
              title="Share URL"
            />
          )}
        </h2>

        <p className="text-sm text-gray-400 my-1">{course?.category}</p>
        <div className="flex items-center justify-between">
          <h2 className="flex gap-2 items-center p-1 bg-purple-50 text-primary text-sm rounded-sm">
            <HiOutlineBookOpen /> {course?.courseOutput?.course?.noOfChapters}
            -Chapters
          </h2>
          <h2 className="text-sm bg-purple-50 text-primary p-1 rounded-sm ">
            {course?.level}
          </h2>
        </div>
        {displayUser && (
          <div className="flex items-center gap-2 mt-2">
            <Image
              src={course?.userProfileImage}
              width={30}
              height={30}
              className="rounded-full"
            />
            <h2>{course?.userName}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
