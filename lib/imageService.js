/**
 * Service for intelligent course image selection
 * Handles YouTube thumbnails, Pexels API, and category fallbacks
 */

// Function to extract video ID from YouTube URL or return if already an ID
export const extractVideoId = (videoUrl) => {
  if (!videoUrl) return null;
  
  // If it's already a video ID (11 characters), return it
  if (typeof videoUrl === 'string' && videoUrl.length === 11 && !videoUrl.includes('/')) {
    return videoUrl;
  }
  
  // Extract from various YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/
  ];
  
  for (const pattern of patterns) {
    const match = videoUrl.match(pattern);
    if (match) return match[1];
  }
  
  return null;
};

// Function to get YouTube thumbnail from video ID
export const getYouTubeThumbnail = (videoId, quality = 'maxresdefault') => {
  if (!videoId) return null;
  
  const cleanVideoId = extractVideoId(videoId);
  if (!cleanVideoId) return null;
  
  // Available qualities: maxresdefault, hqdefault, mqdefault, sddefault, default
  return `https://img.youtube.com/vi/${cleanVideoId}/${quality}.jpg`;
};

// Function to get category-specific fallback image
export const getCategoryImage = (category) => {
  if (!category) return '/course-cover.svg';
  
  const categoryImages = {
    'Programming': '/coding.png',
    'Web Development': '/coding.png',
    'Software Development': '/coding.png',
    'Computer Science': '/coding.png',
    'Data Science': '/coding.png',
    'Machine Learning': '/coding.png',
    'AI': '/coding.png',
    'Artificial Intelligence': '/coding.png',
    'Design': '/creative.png',
    'Creative': '/creative.png',
    'Art': '/creative.png',
    'Graphic Design': '/creative.png',
    'UI/UX': '/creative.png',
    'Business': '/business.png',
    'Marketing': '/business.png',
    'Entrepreneurship': '/business.png',
    'Management': '/business.png',
    'Finance': '/business.png',
    'Health': '/yoga.png',
    'Fitness': '/yoga.png',
    'Yoga': '/yoga.png',
    'Wellness': '/yoga.png',
    'Meditation': '/yoga.png',
    'Photography': '/creative.png',
    'Music': '/creative.png',
    'Language': '/creative.png',
    'Languages': '/creative.png',
    'Science': '/coding.png',
    'Math': '/coding.png',
    'Mathematics': '/coding.png',
    'Physics': '/coding.png',
    'Chemistry': '/coding.png'
  };
  
  // Try exact match first
  if (categoryImages[category]) {
    return categoryImages[category];
  }
  
  // Try case-insensitive match
  const categoryLower = category.toLowerCase();
  for (const [key, value] of Object.entries(categoryImages)) {
    if (key.toLowerCase() === categoryLower) {
      return value;
    }
  }
  
  // Try partial match
  for (const [key, value] of Object.entries(categoryImages)) {
    if (key.toLowerCase().includes(categoryLower) || categoryLower.includes(key.toLowerCase())) {
      return value;
    }
  }
  
  return '/course-cover.svg';
};

// Function to fetch image from Pexels API (optional)
export const fetchPexelsImage = async (query, fallbackImage = '/course-cover.svg') => {
  // You can add your Pexels API key here
  const PEXELS_API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;
  
  if (!PEXELS_API_KEY || !query) {
    return fallbackImage;
  }
  
  try {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`, {
      headers: {
        'Authorization': PEXELS_API_KEY
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      if (data.photos && data.photos.length > 0) {
        return data.photos[0].src.medium;
      }
    }
  } catch (error) {
    console.warn('Failed to fetch Pexels image:', error);
  }
  
  return fallbackImage;
};

// Main function to determine the best image for a course
export const getCourseImage = (course, options = {}) => {
  const { 
    preferYoutube = true, 
    usePexels = false, 
    fallbackToCategory = true 
  } = options;
  
  // 1. If there's a custom courseBanner that's not the default, use it
  if (course?.courseBanner && 
      course.courseBanner !== '/course-cover.svg' && 
      !course.courseBanner.includes('course-cover') &&
      course.courseBanner.startsWith('http')) {
    return course.courseBanner;
  }
  
  // 2. Try to get YouTube thumbnail from course chapters or video data
  if (preferYoutube) {
    // Check if course has chapters with video IDs
    if (course?.courseOutput?.course?.chapters) {
      for (const chapter of course.courseOutput.course.chapters) {
        if (chapter.videoId) {
          const thumbnail = getYouTubeThumbnail(chapter.videoId);
          if (thumbnail) return thumbnail;
        }
      }
    }
    
    // Check if course has a direct video ID field
    if (course?.videoId) {
      const thumbnail = getYouTubeThumbnail(course.videoId);
      if (thumbnail) return thumbnail;
    }
  }
  
  // 3. Use Pexels API if enabled (for production, you'd want to cache this)
  if (usePexels && course?.courseOutput?.course?.name) {
    // This would need to be called asynchronously
    // For now, we'll fall back to category image
  }
  
  // 4. Use category-specific image as fallback
  if (fallbackToCategory) {
    return getCategoryImage(course?.category);
  }
  
  // 5. Final fallback
  return '/course-cover.svg';
};

// Function to validate if an image URL is accessible
export const validateImageUrl = async (url) => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};
