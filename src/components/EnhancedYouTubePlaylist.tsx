import React, { useState, useCallback, useEffect } from 'react';
import YouTube, { YouTubeProps, YouTubeEvent } from 'react-youtube';

interface PlaylistVideo {
  title: string;
  videoId: string;
  thumbnail: string;
}

interface EnhancedYouTubePlaylistProps {
  playlistId: string;
  width?: string | number;
  height?: string | number;
  autoplay?: boolean;
  showControls?: boolean;
}

const EnhancedYouTubePlaylist: React.FC<EnhancedYouTubePlaylistProps> = ({
  playlistId,
  width = '100%',
  height = 390,
  autoplay = false,
  showControls = true,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [player, setPlayer] = useState<YT.Player | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [totalVideos, setTotalVideos] = useState<number>(0);
  const [playlistDetails, setPlaylistDetails] = useState<PlaylistVideo[]>([]);
  const [currentVideoTitle, setCurrentVideoTitle] = useState<string>('');

  // YouTube player options
  const opts: YouTubeProps['opts'] = {
    height,
    width,
    playerVars: {
      autoplay: autoplay ? 1 : 0,
      listType: 'playlist',
      list: playlistId,
    },
  };

  // Handle when the player is ready
  const onReady = (event: YouTubeEvent): void => {
    const ytPlayer = event.target;
    setPlayer(ytPlayer);
    
    // Get playlist data if possible
    try {
      const playlistLength = ytPlayer.getPlaylist()?.length || 0;
      setTotalVideos(playlistLength);
      
      // Get current video index and title
      const index = ytPlayer.getPlaylistIndex();
      setCurrentIndex(index);
      setCurrentVideoTitle(ytPlayer.getVideoData().title);
    } catch (error) {
      console.error('Error accessing playlist data:', error);
    }
    
    setIsLoading(false);
  };

  // Handle when video state changes
  const onStateChange = (event: YouTubeEvent): void => {
    if (player && event.data === YT.PlayerState.PLAYING) {
      // Update the current index and video title when a new video plays
      const index = player.getPlaylistIndex();
      setCurrentIndex(index);
      setCurrentVideoTitle(player.getVideoData().title);
    }
  };

  // Navigation functions
  const playPrevious = useCallback((): void => {
    if (player) player.previousVideo();
  }, [player]);

  const playNext = useCallback((): void => {
    if (player) player.nextVideo();
  }, [player]);

  const playPause = useCallback((): void => {
    if (!player) return;
    
    const playerState = player.getPlayerState();
    if (playerState === YT.PlayerState.PLAYING) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  }, [player]);

  return (
    <div className="enhanced-youtube-playlist">
      <h2>YouTube Playlist Player</h2>
      {isLoading && <div>Loading playlist...</div>}
      
      <div className="video-container">
        <YouTube
          opts={opts}
          onReady={onReady}
          onStateChange={onStateChange}
        />
      </div>
      
      {!isLoading && currentVideoTitle && (
        <div className="video-info mt-2">
          <h3 className="text-lg font-medium">{currentVideoTitle}</h3>
          <p className="text-sm text-gray-600">
            Video {currentIndex + 1} of {totalVideos}
          </p>
        </div>
      )}
      
      {showControls && player && (
        <div className="player-controls mt-3 flex justify-center space-x-4">
          <button 
            onClick={playPrevious}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            Previous
          </button>
          
          <button 
            onClick={playPause}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Play/Pause
          </button>
          
          <button 
            onClick={playNext}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            disabled={currentIndex === totalVideos - 1}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default EnhancedYouTubePlaylist;
