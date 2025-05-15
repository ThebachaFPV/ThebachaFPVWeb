// filepath: /Users/franconogarin/localcode/ThebachaFPV/src/declarations.d.ts
import { YouTubePlayer } from 'youtube-player/dist/types';

declare module 'react-youtube' {
  export interface YouTubeEvent {
    target: YT.Player;
    data: number;
  }
  
  export interface YouTubeProps {
    videoId?: string;
    id?: string;
    className?: string;
    containerClassName?: string;
    opts?: {
      height?: string | number;
      width?: string | number;
      playerVars?: {
        autoplay?: 0 | 1;
        cc_lang_pref?: string;
        cc_load_policy?: 1;
        color?: 'red' | 'white';
        controls?: 0 | 1 | 2;
        disablekb?: 0 | 1;
        enablejsapi?: 0 | 1;
        end?: number;
        fs?: 0 | 1;
        hl?: string;
        iv_load_policy?: 1 | 3;
        list?: string;
        listType?: 'playlist' | 'search' | 'user_uploads';
        loop?: 0 | 1;
        modestbranding?: 1;
        origin?: string;
        playlist?: string;
        playsinline?: 0 | 1;
        rel?: 0 | 1;
        showinfo?: 0 | 1;
        start?: number;
        mute?: 0 | 1;
      };
    };
    onReady?: (event: YouTubeEvent) => void;
    onPlay?: (event: YouTubeEvent) => void;
    onPause?: (event: YouTubeEvent) => void;
    onEnd?: (event: YouTubeEvent) => void;
    onError?: (event: YouTubeEvent) => void;
    onStateChange?: (event: YouTubeEvent) => void;
    onPlaybackRateChange?: (event: YouTubeEvent) => void;
    onPlaybackQualityChange?: (event: YouTubeEvent) => void;
  }
}

declare module 'youtube-player/dist/types' {
  interface YouTubePlayer {
    getVideoData(): { title: string };
    getPlaylist(): string[];
    getPlaylistIndex(): number;
    getPlayerState(): number;
    nextVideo(): void;
    previousVideo(): void;
    playVideo(): void;
    pauseVideo(): void;
  }
}

declare global {
  namespace YT {
    interface Player {
      getPlaylist(): string[];
      getPlaylistIndex(): number;
      getVideoData(): { title: string };
      getPlayerState(): number;
      nextVideo(): void;
      previousVideo(): void;
      playVideo(): void;
      pauseVideo(): void;
    }

    enum PlayerState {
      UNSTARTED = -1,
      ENDED = 0,
      PLAYING = 1,
      PAUSED = 2,
      BUFFERING = 3,
      CUED = 5,
    }
  }
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.tsx' {
  const content: any;
  export default content;
}
