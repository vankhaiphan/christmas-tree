# 🎄 Interactive Christmas Tree

A stunning 3D interactive Christmas tree experience built with React, TypeScript, and Three.js. Features beautiful emerald green and gold aesthetics, hand gesture controls, dynamic photo ornaments, and cinematic post-processing effects.

## ✨ Features

- **🎨 AAA-Quality 3D Graphics**: Powered by Three.js and React Three Fiber
- **🖐️ Hand Gesture Control**: Use your webcam to control the tree with hand gestures
  - Open palm: Unleash chaos mode (particles scatter)
  - Closed fist: Reform the tree
  - Hand movement: Control camera angle
- **📸 Personal Photo Ornaments**: Upload your photos to appear as Polaroid ornaments on the tree
- **🎵 Ambient Music**: Background Christmas music for atmosphere
- **✨ Cinematic Effects**: Bloom effects, dynamic lighting, and smooth animations
- **📱 Fully Responsive**: Works perfectly on MacBook, iPhone, iPad (Chrome & Safari)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd christmas-tree
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3010
   ```

## 🌐 Deploy to GitHub Pages

### Option 1: Automated Deployment (Recommended)

This project includes GitHub Actions workflow for automatic deployment.

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Build and deployment**, select:
     - Source: **GitHub Actions**

3. **Automatic Deployment**
   - Every push to `main` branch will automatically build and deploy
   - Check deployment status in the **Actions** tab
   - Your site will be live at: `https://<username>.github.io/<repo-name>/`

### Option 2: Manual Deployment

```bash
npm run deploy
```

This will build the project and deploy it using `gh-pages` package.

### Important: Update Base Path

If deploying to `username.github.io/repo-name`, update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/your-repo-name/',  // Change from './' to '/your-repo-name/'
  // ... rest of config
});
```

For custom domains or `username.github.io`, keep `base: './'`

## 🎮 How to Use

### Photo Upload
1. Click **"Add Photos"** button (bottom right)
2. Select up to 22 images from your device
3. Photos will appear as Polaroid ornaments on the tree
4. Position your hands in front of them to view in detail

### Gesture Controls
1. **Allow camera access** when prompted
2. **Open your hand** (spread all fingers) → Particles scatter into chaos
3. **Close your fist** → Particles reform into tree shape
4. **Move your hand** left/right/up/down → Rotate the camera view

### Mouse Controls (Fallback)
- **Click & drag** → Rotate view
- **Scroll** → Zoom in/out

## 🛠️ Tech Stack

### Core Technologies
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Three.js** - 3D graphics engine
- **React Three Fiber** - React renderer for Three.js

### 3D & Effects
- **@react-three/drei** - Useful helpers for R3F
- **@react-three/postprocessing** - Post-processing effects
- **Postprocessing** - Bloom, effects pipeline

### AI & Interaction
- **MediaPipe** - Hand gesture detection
- **Lucide React** - Beautiful icons

## 📁 Project Structure

```
christmas-tree/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── components/
│   ├── Experience.tsx          # Main 3D scene
│   ├── Foliage.tsx            # Tree foliage particles
│   ├── Ornaments.tsx          # Decorative ornaments
│   ├── Polaroids.tsx          # Photo ornaments
│   ├── TreeStar.tsx           # Star on top
│   ├── GestureController.tsx  # Hand gesture detection
│   ├── MusicPlayer.tsx        # Background music
│   └── UIOverlay.tsx          # UI controls
├── public/
│   ├── models/                # MediaPipe hand detection model
│   ├── music/                 # Background music files
│   └── photos/                # Default photo assets
├── scripts/
│   └── download-model.js      # Download MediaPipe model
├── App.tsx                    # Main app component
├── index.tsx                  # Entry point
├── types.ts                   # TypeScript types
├── vite.config.ts            # Vite configuration
└── package.json              # Dependencies & scripts
```

## 🎨 Customization

### Colors
The app uses emerald green and gold theme. To customize, search for:
- Gold: `#D4AF37`
- Emerald: `#0a2f1e`, `#001a0d`

### Camera Settings
Modify camera position in `App.tsx`:
```tsx
camera={{ position: [0, 4, 20], fov: 45 }}
```

### Particle Count
Adjust foliage density in `components/Foliage.tsx`:
```typescript
const COUNT = 15000; // Increase for denser foliage
```

### Photo Limit
Change maximum photos in `components/Polaroids.tsx`:
```typescript
const MAX_PHOTOS = 22; // Adjust as needed
```

## 🌍 Browser Support

- ✅ Chrome/Edge (Desktop & Mobile)
- ✅ Safari (macOS, iOS, iPadOS)
- ✅ Firefox (Desktop)
- ⚠️ Older browsers may not support WebGL 2.0

## 📝 Performance Tips

- Photos are stored in browser memory (session-based)
- Compress large photos before uploading for better performance
- Gesture control uses WebWorkers for smooth performance
- Post-processing is optimized for mobile devices

## 🐛 Troubleshooting

### Hand Gestures Not Working
- Ensure camera permissions are granted
- Check if camera is in use by another app
- Try refreshing the page
- Make sure there's adequate lighting

### Photos Not Appearing
- Check browser console for errors
- Verify images are valid formats (JPG, PNG, WebP)
- Try with smaller file sizes

### Slow Performance
- Reduce number of uploaded photos
- Close other tabs/applications
- Lower device screen resolution/zoom
- Check if hardware acceleration is enabled in browser

## 🎄 Credits

Built with love using modern web technologies. Perfect for sharing holiday memories with family and friends!

## 📄 License

MIT License - feel free to use this for your own projects!
