/**
 * @file presets.js
 * @description A collection of high-quality style modifiers for Pollinations.ai prompts.
 * Designed for use in Discord bots and AI image generation tools.
 */

const PRESETS = {
    "cinematic": "masterpiece, 8k, highly detailed, cinematic lighting, sharp focus, professional photography",
    "anime": "studio ghibli style, hand-drawn, vibrant colors, aesthetic, high quality anime art",
    "cyberpunk": "neon lights, futuristic city, rainy streets, synthwave, glowing accents, 8k resolution",
    "sketch": "charcoal pencil sketch, rough edges, artistic shading, hand-drawn on paper texture",
    "fantasy": "ethereal lighting, magical atmosphere, intricate details, epic scale, digital painting",
    "pixel": "16-bit pixel art, retro gaming style, vibrant colors, clean sprite work"
};

/**
 * Enhances a base prompt by appending a style preset.
 * @param {string} prompt - The core idea (e.g., "a cat").
 * @param {string} style - The key from PRESETS (e.g., "anime").
 * @returns {string} The fully engineered prompt.
 */
function enhancePrompt(prompt, style) {
    const selectedStyle = PRESETS[style.toLowerCase()];
    if (!selectedStyle) return prompt;
    return `${prompt}, ${selectedStyle}`;
}

module.exports = { PRESETS, enhancePrompt };
