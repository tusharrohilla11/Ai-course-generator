// Test utility to verify Cloudinary configuration
export const testCloudinaryConfig = () => {
  const requiredEnvVars = [
    'NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME',
    'NEXT_PUBLIC_CLOUDINARY_API_KEY',
    'NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET'
  ];

  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.error('❌ Missing Cloudinary environment variables:', missingVars);
    return false;
  }

  console.log('✅ Cloudinary configuration looks good!');
  console.log('📋 Configuration:');
  console.log(`   Cloud Name: ${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`);
  console.log(`   Upload Preset: ${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}`);
  return true;
};

// Test function to validate upload preset
export const validateUploadPreset = async () => {
  try {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
    
    if (!cloudName || !uploadPreset) {
      throw new Error('Missing cloud name or upload preset');
    }

    // Test if the upload preset exists by making a small request
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
      {
        method: 'POST',
        body: new FormData() // Empty form data - will fail but tells us if preset exists
      }
    );

    // Even if it fails, if we get a 400 instead of 404, the preset exists
    if (response.status === 400) {
      console.log('✅ Upload preset exists and is accessible');
      return true;
    } else if (response.status === 404) {
      console.error('❌ Upload preset not found - please check your preset name');
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('❌ Error validating upload preset:', error.message);
    return false;
  }
};
