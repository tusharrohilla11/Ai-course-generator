# AI Course Generator - Setup Instructions

This project has been configured to use **Cloudinary** instead of Firebase for file storage. Follow these steps to get your project running.

## Prerequisites

1. **Node.js** (v16 or higher)
2. **PostgreSQL Database** (Neon DB recommended)
3. **Cloudinary Account** (free tier available)
4. **Clerk Account** (for authentication)
5. **Google AI Studio** (for Gemini API)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Copy the `.env.local` file and configure the following variables:

#### Clerk Authentication
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key
- `CLERK_SECRET_KEY`: Your Clerk secret key

#### Database (Neon DB)
- `NEXT_PUBLIC_DB_CONNECTION_STRING`: Your PostgreSQL connection string

#### Cloudinary (File Storage)
1. Sign up at [Cloudinary](https://cloudinary.com/)
2. Go to your Dashboard
3. Copy the following values:
   - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`: Your cloud name
   - `NEXT_PUBLIC_CLOUDINARY_API_KEY`: Your API key
   - `CLOUDINARY_API_SECRET`: Your API secret
4. Create an upload preset:
   - Go to Settings → Upload
   - Create a new upload preset
   - Set it to "Unsigned" 
   - Copy the preset name to `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`

#### AI Integration
- `NEXT_PUBLIC_GEMINI_API_KEY`: Your Google Gemini API key

### 3. Database Setup

Push the database schema:

```bash
npm run db:push
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Cloudinary Setup Guide

1. **Create Account**: Visit [Cloudinary](https://cloudinary.com/) and sign up
2. **Get Credentials**: 
   - Cloud Name: Found on your dashboard
   - API Key: Found on your dashboard  
   - API Secret: Found on your dashboard (keep this secret!)
3. **Create Upload Preset**:
   - Go to Settings → Upload
   - Click "Add upload preset"
   - Name: `ai-course-uploads` (or any name you prefer)
   - Signing Mode: "Unsigned"
   - Save the preset
4. **Update Environment Variables**: Add all the Cloudinary credentials to your `.env.local`

## Features

- ✅ **Authentication**: Clerk integration for user management
- ✅ **File Storage**: Cloudinary for image uploads (replaces Firebase)
- ✅ **Database**: PostgreSQL with Drizzle ORM
- ✅ **AI Integration**: Google Gemini for course content generation
- ✅ **Responsive Design**: Modern UI with Tailwind CSS

## Migration from Firebase

This project has been migrated from Firebase to Cloudinary:
- **Storage**: Firebase Storage → Cloudinary
- **Database**: Still using PostgreSQL (no change needed)
- **Authentication**: Still using Clerk (no change needed)

## Troubleshooting

1. **Database Connection Issues**: Ensure your Neon DB connection string is correct
2. **Cloudinary Upload Fails**: Check that your upload preset is set to "Unsigned"
3. **Authentication Issues**: Verify your Clerk keys are correctly set
4. **AI Generation Fails**: Ensure your Gemini API key is valid and has quota

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run db:push`: Push database schema
- `npm run db:studio`: Open Drizzle Studio

## Support

If you encounter any issues, please check:
1. All environment variables are properly set
2. Database connection is working
3. Cloudinary credentials are correct
4. All dependencies are installed

Happy coding! 🚀
