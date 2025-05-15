import React, { useState, useCallback, useEffect } from 'react';
import badge from '../assets/badge.png';
import EnhancedYouTubePlaylist from '../components/EnhancedYouTubePlaylist';


const Videos: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
            <img src={badge} alt="League Badge" style={{ width: '350px', borderRadius: 8, margin: '1rem 0' }} />
            <h1>Thebacha FPV Racing League</h1>
            <h2 style={{ color: '#00A9D1', marginTop: '0.5rem' }}>Flying Videos of our FPV Racing League.</h2>
            
                {/* embed youtueb video here : https://youtu.be/43LvW2bs8Eo */}

                <div style={{ margin: '2.5rem 0' }}>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/43LvW2bs8Eo"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            


            <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>

                {/* Add the YouTube Playlist component where you want it to appear */}
                <div className="youtube-section my-8">
                    <h2 className="text-xl font-bold mb-4">Our League Videos Playlist</h2>
                    <EnhancedYouTubePlaylist
                        playlistId="PL_P4Zu4rdnXVmNRM4migi5MZ4vA0o1490" // Replace with your actual playlist ID
                        height={480}
                        autoplay={false}
                        showControls={true}
                    />
                </div>
            </section>

            <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
                <h2>Learning Videos</h2>
                <ul>
                    <li>Annual membership with affordable fees and financial support for those in need</li>

                </ul>
            </section>

            <section style={{ margin: '2.5rem 0', textAlign: 'left' }}>
                <h2>Gear Videos</h2>
                <p>
                    We host a variety of events throughout the year, including:
                </p>

            </section>


        </div>
    );
};

export default Videos;