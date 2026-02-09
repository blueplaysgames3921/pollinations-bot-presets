# Pollinations Bot Presets

A curated collection of prompt engineering templates specifically designed to work with the Pollinations.ai API. This library helps Discord bot developers transform simple user inputs into high-quality AI masterpieces.

## Features
- Curated Styles: Hand-picked modifiers for consistent results.
- Easy Integration: Designed to plug directly into your existing API calls.
- Performance: Zero-dependency, lightweight JavaScript.

## Available Styles
- Cinematic: Professional photography and lighting.
- Anime: High-quality hand-drawn animation look.
- Cyberpunk: Neon-drenched futuristic aesthetics.
- Fantasy: Epic, magical digital painting style.

## How to Use

1. Import the library:
const { enhancePrompt } = require('./presets');

2. Generate your prompt:
const userQuery = "A majestic wolf";
const styledPrompt = enhancePrompt(userQuery, "fantasy");

3. Send to Pollinations:
const apiUrl = `https://pollinations.ai/p/${encodeURIComponent(styledPrompt)}?width=1024&height=1024&model=flux`;
