# AI Course Generator 🚀

**Created by Tushar Rohilla**

## Overview 🔍
An AI-powered platform for creating and managing personalized online courses. Built using **Next.js** and integrated with **Clerk** for authentication, **Gemini API** for AI-generated content, and **Neon Database** for data management. This platform allows users to create, share, and monetize their courses with beautiful animated backgrounds and modern UI.

## Features ✨

- **User Authentication** 🔐
    - Secure authentication managed via Clerk
    - Users can sign up, log in, and manage their profiles
    - Protected routes and user sessions

- **AI-Powered Course Creation** 📚 
    - Generate comprehensive courses using Gemini AI
    - Customizable course structure and content
    - Multiple difficulty levels and categories
    - Chapter-wise content organization

- **Beautiful UI/UX** 🎨
    - Animated backgrounds (sky.gif, snowfall.gif)
    - Responsive design with Tailwind CSS
    - Modern component library with shadcn/ui
    - Clear, accessible design with proper contrast

- **Contact System** 📧
    - Functional contact form using EmailJS
    - Direct email integration
    - Real-time form validation and feedback

- **Database Integration** 🗄️
    - Neon PostgreSQL database
    - Drizzle ORM for type-safe queries
    - Course and user data management
    - Provides dynamic and engaging learning experiences.

- **Responsive UI** :iphone: 
    - Optimized for both desktop and mobile devices.
    - Ensures a seamless user experience across different devices.
    - Adapts to various screen sizes for better accessibility.

- **Progress Tracking** :chart_with_upwards_trend: 
    - Displays user course progress.
    - Helps users keep track of their learning journey.
    - Provides insights into course completion and performance.

- **Role-based Management** :busts_in_silhouette: 
    - Different views for admin and regular users.
    - Ensures appropriate access and functionality based on user roles.
    - Enhances security and user experience by tailoring features to roles.


## Technologies Used

| Technology      | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| **Next.js 14.x**| A framework for server-side rendering and static site generation.           |
| **Clerk**       | Manages authentication and user profiles securely.                          |
| **Gemini API**  | Generates AI-powered course content.                                        |
| **Neon Database** | PostgreSQL database for storing course and user data.                     |
| **Drizzle ORM** | Type-safe database queries and schema management.                           |
| **Cloudinary**  | Image and media management for course assets.                               |
| **EmailJS**     | Email service integration for contact forms.                                |
| **Tailwind CSS**| A utility-first CSS framework for styling.                                  |
| **shadcn/ui**   | Modern component library for React applications.                            |
| **React Icons** | A library of icons for React applications.                                  |
| **Vercel**      | A platform for hosting and deploying web applications.                      |



## Installation :wrench:

- **Clone the repository**

   ```bash
    git clone https://github.com/tusharrohilla11/ai-course-generator.git
   ```
- **Navigate to the project directory**

   ```bash
    cd ai-course-generator
   ```
- **Install the dependencies**

   ```bash
    npm install
   ```
- **Create a `.env.local` file in the root directory and add the following environment variables**

   ```javascript
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
    CLERK_SECRET_KEY=<your-clerk-secret-key>
    NEXT_PUBLIC_GEMINI_API_KEY=<your-gemini-api-key>
    NEXT_PUBLIC_DB_CONNECTION_STRING=<your-neon-database-url>
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
    NEXT_PUBLIC_CLOUDINARY_API_KEY=<your-cloudinary-api-key>
    CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
    NEXT_PUBLIC_YOUTUBE_API_KEY=<your-youtube-api-key>
   ```
- **Run the development server**

   ```bash
    npm run dev
   ```

## Live Demo :globe_with_meridians:

<a href="https://ai-course-generator-tushar.vercel.app/">
    <img height="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" />
</a>

## Contribution Guidelines :raising_hand: 

We welcome contributions to improve the platform. Here are the steps to get started:

### 1. Fork the Repository

Click the "Fork" button at the top right of the repository page to create a copy of the repository in your GitHub account.

### 2. Clone Your Fork

Clone your forked repository to your local machine using the following command:

```bash
git clone https://github.com/<your-username>/ai-course-generator.git
```

### 3. Create a Branch

Create a new branch for your feature or bug fix:

```bash
git checkout -b feature-or-bugfix-name
```

### 4. Make Changes

Make your changes to the codebase. Ensure your code follows the project's coding standards and passes all tests.

### 5. Commit Your Changes

Commit your changes with a descriptive commit message:

```bash
git add .
git commit -m "Description of the feature or fix"
```

### 6. Push to Your Fork

Push your changes to your forked repository:

```bash
git push origin feature-or-bugfix-name
```

### 7. Create a Pull Request

Go to the original repository and click the "New Pull Request" button. Select your branch and submit the pull request for review.

### 8. Review Process

Your pull request will be reviewed by the maintainers. Please be responsive to any feedback or requests for changes.

### 9. Merge

Once approved, your pull request will be merged into the main branch. Congratulations on your contribution!

>[!TIP]
>**Follow [CONTRIBUTING.md](https://github.com/tusharrohilla11/ai-course-generator/blob/main/CONTRIBUTING.md) for detailed guidelines**

