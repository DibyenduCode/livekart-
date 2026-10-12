import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, AlertCircle, RefreshCw, Radio } from 'lucide-react';
import { soundFx } from '../../utils/soundEffects';

interface YouTubeLivePlayerProps {
  videoId: string;
  sellerName: string;
  title: string;
  isMuted: boolean;
  onToggleMute: () => void;
  streamError: boolean;
  onStreamErrorChange: (err: boolean) => void;
}

export function YouTubeLivePlayer({
  videoId,
  sellerName,
  title,
  isMuted,
  onToggleMute,
  streamError,
  onStreamErrorChange
}: YouTubeLivePlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [useSimulationFallback, setUseSimulationFallback] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Send postMessage unMute/mute commands directly to the YouTube player
  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      try {
        const command = isMuted ? 'mute' : 'unMute';
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: command, args: '' }),
          '*'
        );
        if (!isMuted) {
          iframeRef.current.contentWindow.postMessage(
            JSON.stringify({ event: 'command', func: 'setVolume', args: [100] }),
            '*'
          );
          iframeRef.current.contentWindow.postMessage(
            JSON.stringify({ event: 'command', func: 'playVideo', args: '' }),
            '*'
          );
        }
      } catch (e) {
        console.warn('Could not postMessage to iframe', e);
      }
    }
  }, [isMuted]);

  useEffect(() => {
    setIsLoading(true);
    setUseSimulationFallback(false);
    onStreamErrorChange(false);

    const timer = setTimeout(() => {
      setIsLoading(false);
      // Attempt to ensure volume is unmuted if isMuted is false
      if (!isMuted && iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'unMute', args: '' }),
          '*'
        );
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'setVolume', args: [100] }),
          '*'
        );
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, [videoId, isMuted, onStreamErrorChange]);

  // Handle unmute click with sound effect
  const handleSoundToggleClick = () => {
    soundFx.playSoundToggle(isMuted);
    onToggleMute();
  };

  // Construct YouTube embed URL
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=${
    isMuted ? 1 : 0
  }&loop=1&playlist=${videoId}&controls=0&playsinline=1&rel=0&modestbranding=1&enablejsapi=1&origin=${
    typeof window !== 'undefined' ? window.location.origin : ''
  }`;

  return (
    <div className="relative w-full h-full bg-black overflow-hidden select-none">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-radial from-red-950/20 via-transparent to-black pointer-events-none z-0" />

      {/* Main Video Stream */}
      {!useSimulationFallback && !streamError ? (
        <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
          <iframe
            ref={iframeRef}
            key={`${videoId}-${isMuted}`}
            src={embedUrl}
            title={`${sellerName} Live Stream`}
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 h-full w-[340%] max-w-none pointer-events-none transition-opacity duration-700"
            style={{ opacity: isLoading ? 0.3 : 1 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            onError={() => onStreamErrorChange(true)}
          />
        </div>
      ) : (
        /* Resilient Fallback Live Simulation Stream */
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-center p-6 z-10">
          <div className="relative mb-4">
            <div className="w-20 h-20 rounded-full bg-red-600/20 flex items-center justify-center border border-red-500/40 animate-pulse">
              <Radio className="w-10 h-10 text-red-500" />
            </div>
            <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 animate-ping" />
          </div>

          <h3 className="text-lg font-semibold text-white mb-1">
            Simulated Live Stream Broadcast
          </h3>
          <p className="text-xs text-neutral-400 max-w-xs mb-4">
            Demo broadcast for <span className="text-white font-medium">{sellerName}</span> is running in resilient preview mode.
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => {
                setUseSimulationFallback(false);
                onStreamErrorChange(false);
                setIsLoading(true);
              }}
              className="px-4 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-xs font-medium text-white flex items-center gap-1.5 transition-colors border border-neutral-700"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Retry YouTube Stream
            </button>
          </div>
        </div>
      )}

      {/* Video Loading Skeleton */}
      {isLoading && !useSimulationFallback && (
        <div className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center gap-3 z-10">
          <div className="w-12 h-12 rounded-full border-2 border-red-600 border-t-transparent animate-spin" />
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span className="text-xs font-semibold tracking-wider text-neutral-300 uppercase">
              Connecting to Live Stream...
            </span>
          </div>
          <span className="text-[11px] text-neutral-500">{title.slice(0, 45)}...</span>
        </div>
      )}

      {/* Gradient Overlays for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60 pointer-events-none z-1" />

      {/* Prominent Sound Toggle Bar Overlay */}
      <div className="absolute top-14 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
        {isMuted ? (
          <button
            onClick={handleSoundToggleClick}
            id="sound-unmute-banner"
            aria-label="Tap to unmute stream audio"
            className="flex items-center gap-2 bg-red-600/90 hover:bg-red-500 text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-2xl border border-red-400/80 active:scale-95 transition-all animate-bounce"
          >
            <VolumeX className="w-4 h-4 text-white shrink-0" />
            <span>Tap to Unmute Audio 🔊</span>
          </button>
        ) : (
          <button
            onClick={handleSoundToggleClick}
            id="sound-mute-banner"
            aria-label="Mute stream audio"
            className="flex items-center gap-2 bg-black/75 hover:bg-black/90 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-emerald-500/40 backdrop-blur-md active:scale-95 transition-all"
          >
            <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse shrink-0" />
            <span>Sound On</span>
            <span className="flex items-end gap-0.5 h-2.5 ml-0.5">
              <span className="w-0.5 h-1.5 bg-emerald-400 animate-pulse" />
              <span className="w-0.5 h-2.5 bg-emerald-400 animate-pulse" style={{ animationDelay: '0.15s' }} />
              <span className="w-0.5 h-1 bg-emerald-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
            </span>
          </button>
        )}
      </div>

      {/* Floating Sound Button at Top Right (Under Cart) */}
      <div className="absolute top-20 right-4 z-20 pointer-events-auto">
        <button
          onClick={handleSoundToggleClick}
          id="sound-toggle-button"
          aria-label={isMuted ? 'Unmute stream audio' : 'Mute stream audio'}
          className={`w-9 h-9 rounded-full backdrop-blur-md border flex items-center justify-center transition-all active:scale-95 shadow-lg ${
            isMuted
              ? 'bg-black/60 border-white/20 text-neutral-300 hover:text-white hover:bg-black/80'
              : 'bg-emerald-950/80 border-emerald-500/60 text-emerald-400'
          }`}
          title={isMuted ? 'Click to Unmute' : 'Click to Mute'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Subtle Stream Switcher Fallback Trigger on top if needed */}
      {streamError && !useSimulationFallback && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20 bg-amber-500/90 text-black text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Stream playback issue</span>
          <button
            onClick={() => setUseSimulationFallback(true)}
            className="underline ml-1 font-bold"
          >
            Switch to Demo Mode
          </button>
        </div>
      )}
    </div>
  );
}
