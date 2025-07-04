/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['firebasestorage.googleapis.com','img.clerk.com', 'res.cloudinary.com']
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
