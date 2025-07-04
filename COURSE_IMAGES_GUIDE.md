# 🖼️ Intelligent Course Image System

This system automatically selects and displays relevant images for your AI Course Generator courses instead of generic icons.

## ✅ Features

### 🎯 **Smart Image Selection Priority**
1. **Custom Cloudinary uploads** (highest priority)
2. **YouTube video thumbnails** (from course videos)
3. **Pexels API images** (topic-based, optional)
4. **Category-specific fallback images** (Programming, Health, etc.)
5. **Default course cover** (final fallback)

### 🔧 **Automatic Integration**
- **Dashboard course cards** show relevant thumbnails
- **Course creation** automatically fetches appropriate images
- **Manual upload override** via Cloudinary
- **Error handling** with graceful fallbacks

---

## 🚀 Quick Setup

### 1. **Environment Variables**
Add to your `.env.local`:

```bash
# Optional: Get free key at https://www.pexels.com/api/
NEXT_PUBLIC_PEXELS_API_KEY=your_pexels_api_key_here
```

### 2. **Available Category Images**
Your system includes these category-specific images:
- `coding.png` → Programming, Web Dev, Data Science, AI
- `creative.png` → Design, Art, Photography, Music
- `yoga.png` → Health, Fitness, Wellness
- `business.png` → Business, Marketing, Finance
- `course-cover.svg` → Default fallback

---

## 🎨 **How It Works**

### **Course Cards (Dashboard)**
```jsx
// Automatically shows the best available image
<CourseCard course={course} />
```

### **Course Creation**
When you create a course, the system:
1. Analyzes the category (Programming, Health, etc.)
2. Optionally fetches from Pexels API based on topic
3. Stores the best image URL in `courseBanner` field
4. Falls back to category-specific images

### **Manual Override**
Users can always upload custom images via:
- Course basic info page
- Cloudinary integration
- Drag & drop upload

---

## 🔌 **API Integration Options**

### **Option 1: Pexels API (Recommended)**
```bash
# Free: 200 requests/hour
# Get key: https://www.pexels.com/api/
NEXT_PUBLIC_PEXELS_API_KEY=your_key_here
```

### **Option 2: Unsplash API**
```javascript
// To add Unsplash support, modify imageService.js
const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;
```

### **Option 3: YouTube Thumbnails**
```javascript
// Automatically extracts from video IDs
const thumbnail = getYouTubeThumbnail(videoId);
// Returns: https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg
```

---

## 📁 **File Structure**

```
lib/
├── imageService.js          # Core image logic
app/
├── dashboard/
│   └── _components/
│       └── CourseCard.jsx   # Smart image display
├── create-course/
│   ├── page.jsx            # Auto-fetch on creation
│   └── [courseId]/
│       └── _components/
│           └── CourseBasicInfo.jsx  # Manual upload
public/
├── coding.png              # Programming courses
├── creative.png            # Creative courses  
├── yoga.png               # Health/fitness courses
├── business.png           # Business courses
└── course-cover.svg       # Default fallback
```

---

## 🎛️ **Customization**

### **Add New Category Images**
1. Add image to `/public/` folder
2. Update `getCategoryImage()` in `imageService.js`:

```javascript
const categoryImages = {
  'Your Category': '/your-image.png',
  // ... existing categories
};
```

### **Change Image Priorities**
In `CourseCard.jsx`:

```javascript
const imageUrl = getCourseImage(course, {
  preferYoutube: true,      // Try YouTube thumbnails first
  usePexels: false,         // Enable/disable Pexels API
  fallbackToCategory: true  // Use category images as fallback
});
```

### **Add Custom API**
Extend `imageService.js` with your preferred image service:

```javascript
export const fetchCustomAPIImage = async (query) => {
  // Your custom API integration
};
```

---

## 🧪 **Testing**

### **Test Image Fallbacks**
1. Create course without custom image
2. Verify category-specific image appears
3. Upload custom image via CourseBasicInfo
4. Confirm override works

### **Test YouTube Integration**
1. Create course with video content
2. Verify thumbnail extraction from video ID
3. Check fallback if thumbnail unavailable

---

## 🔍 **Troubleshooting**

### **Images Not Loading**
- Check browser console for errors
- Verify image paths in `/public/` folder
- Ensure environment variables are set

### **Pexels API Issues**
- Check API key validity
- Verify 200 requests/hour limit not exceeded
- Check browser network tab for API responses

### **YouTube Thumbnails Failing**
- Verify video IDs are correctly extracted
- Check if videos are public
- Thumbnails may take time to generate for new videos

---

## 📈 **Performance Tips**

1. **Image Optimization**: All images use Next.js `<Image>` component
2. **Lazy Loading**: Images load only when visible
3. **Blur Placeholders**: Smooth loading experience
4. **Error Handling**: Graceful fallbacks prevent broken images
5. **Caching**: Browser caches category images efficiently

---

## 🎯 **Best Practices**

1. **Always provide alt text** for accessibility
2. **Use consistent aspect ratios** (300x200 for course cards)
3. **Optimize file sizes** (compress images before upload)
4. **Test on different devices** (mobile, tablet, desktop)
5. **Monitor API usage** (if using Pexels/other services)

---

## 🚀 **Future Enhancements**

### **Potential Improvements**
- [ ] AI-generated course images (DALL-E integration)
- [ ] User preference settings for image sources
- [ ] Bulk image optimization
- [ ] Advanced caching strategies
- [ ] Image analytics and performance monitoring

---

**Need help?** Check the console logs for debugging info or refer to the component source code for detailed implementation.
