# Birthday Website for Ann Wanjiku

A multi-scene, automatically transitioning birthday website with elegant animations and celebratory visuals.

## Features
- **Automatic Transitions**: The website will automatically move from scene to scene with defined delays (e.g., 5-8 seconds per scene).
- **Scene-based Architecture**:
    - **Intro**: A mysterious and beautiful opening.
    - **The Reveal**: "Happy Birthday Ann Wanjiku!" with confetti and balloons.
    - **Memory Lane**: Heartfelt messages and celebration.
    - **Virtual Cake**: A scene dedicated to "blowing" candles and making a wish.
    - **The Finale**: A celebratory closing message.
- **Animations**: Framer-motion for smooth entries, exits, and continuous effects (like floating balloons).
- **Interactive elements**: Hover effects, though primary navigation is automatic.
- **Responsiveness**: Fully optimized for mobile and desktop.

## Component Structure
- `src/App.tsx`: Main scene manager with `AnimatePresence`.
- `src/components/scenes/`:
    - `IntroScene.tsx`
    - `RevealScene.tsx`
    - `MessageScene.tsx`
    - `CakeScene.tsx`
    - `FinaleScene.tsx`
- `src/components/Confetti.tsx`: Custom confetti effect for the reveal.

## Tech Stack
- React 19
- Framer Motion
- Tailwind CSS
- Lucide Icons
- Sonner (for birthday alerts)
