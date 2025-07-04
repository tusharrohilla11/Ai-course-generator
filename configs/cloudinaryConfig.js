// Client-side Cloudinary configuration for image uploads
// This config works in the browser without requiring Node.js modules

// Helper function to upload image to Cloudinary using unsigned upload
export const uploadImageToCloudinary = async (file) => {
  try {
    if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) {
      throw new Error('Cloudinary cloud name is not configured');
    }
    
    if (!process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET) {
      throw new Error('Cloudinary upload preset is not configured');
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
    formData.append('folder', 'ai-course-generator'); // Optional: organize uploads in a folder
    
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Upload failed: ${errorData.error?.message || 'Unknown error'}`);
    }
    
    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
};

// Helper function to generate Cloudinary transformation URLs
export const getCloudinaryUrl = (publicId, transformations = {}) => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) return null;
  
  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
  
  // Build transformation string
  const transformArray = [];
  if (transformations.width) transformArray.push(`w_${transformations.width}`);
  if (transformations.height) transformArray.push(`h_${transformations.height}`);
  if (transformations.crop) transformArray.push(`c_${transformations.crop}`);
  if (transformations.quality) transformArray.push(`q_${transformations.quality}`);
  
  const transformString = transformArray.length > 0 ? `/${transformArray.join(',')}` : '';
  
  return `${baseUrl}${transformString}/${publicId}`;
};
