# Deploying Harekrishna Ricemill to Netlify

## Quick Deployment Options

### Option 1: Drag & Drop (Fastest)

1. Run `npm run build` to create the production build
2. Go to [Netlify](https://netlify.com) and log in
3. Drag the `dist/` folder to the Netlify deploy area
4. Your site will be live instantly!

### Option 2: Git Integration (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [Netlify](https://netlify.com) and click "New site from Git"
3. Connect your repository
4. Netlify will automatically detect the build settings from `netlify.toml`
5. Click "Deploy site"

## Build Configuration

The `netlify.toml` file is already configured with:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **SPA redirects**: All routes redirect to `index.html` for client-side routing
- **Security headers**: Added for better security
- **Cache optimization**: Static assets cached for performance

## Environment Variables (Optional)

If you want to use a real OpenWeatherMap API key:

1. Get an API key from [OpenWeatherMap](https://openweathermap.org/api)
2. In Netlify dashboard, go to Site Settings > Environment Variables
3. Add: `VITE_WEATHER_API_KEY` = `your_api_key_here`
4. Update the weather fetch URL in the code to use the environment variable

## Custom Domain (Optional)

1. In Netlify dashboard, go to Site Settings > Domain Management
2. Add your custom domain
3. Follow the DNS configuration instructions

## Performance Notes

The build is production-ready with:

- ✅ Optimized assets (CSS: 63KB, JS: 553KB)
- ✅ Gzip compression enabled
- ✅ Security headers configured
- ✅ Cache optimization for static assets

## Site Features Deployed

Your Harekrishna Ricemill website includes:

- 📱 Fully responsive design
- 🌾 Professional rice mill branding
- 📊 Weather API integration
- 🗺️ Google Maps integration
- 📝 Contact form
- 🎨 Natural color palette with rice and green tones

The site is ready for production use!
