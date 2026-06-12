/**
 * Web Audio API Synthesizer Helper
 * Generates super lightweight, beautiful, and tactile sensory sounds 
 * without requiring bulky external .mp3 assets.
 */

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Play a high-quality, beautiful botanical bell chime chime
 */
export function playChime() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // We will create two notes (a lovely major third interval chime: C5 & E5)
    const notes = [523.25, 659.25]; // C5, E5 in Hz

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      // Soft sine waves with a tiny hint of triangle for natural wood/plant acoustics
      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);

      // Smooth custom volume sweep envelope
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.12, now + 0.03 + idx * 0.05);
      // Long beautiful natural exponential release decay
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 1.2 + idx * 0.05);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now + idx * 0.05);
      osc.stop(now + 1.5 + idx * 0.05);
    });
  } catch (err) {
    console.warn('Audio feedback failed or was blocked by browser autoplay rules:', err);
  }
}

/**
 * Play a very soft wooden tactile tick sound
 */
export function playClick() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.08);

    gainNode.gain.setValueAtTime(0.1, now);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.1);
  } catch (err) {
    console.warn('Audio feedback failed or was blocked by browser autoplay rules:', err);
  }
}
