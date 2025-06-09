'use client';

const SpotifyPlayer = () => {
    // You can replace this with any Spotify URL:
    // - Playlist: /playlist/PLAYLIST_ID
    // - Album: /album/ALBUM_ID
    // - Track: /track/TRACK_ID
    // - Artist: /artist/ARTIST_ID
    // Get the ID from the Spotify share link, it's the part after the last '/'
    const spotifyEmbedUrl = "https://open.spotify.com/embed/track/4Q0qVhFQa7j6jRKzo3HDmP";

    return (
        <div className="fixed bottom-6 left-6 z-40">
            <iframe
                src={`${spotifyEmbedUrl}?utm_source=generator&theme=0&hideHeader=1&hideCover=1&showPlayButton=1`}
                width="300"
                height="80"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg bg-black/10 backdrop-blur-sm border border-white/5 
                         hover:border-white/10 transition-all duration-300
                         [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            ></iframe>
        </div>
    );
};

export default SpotifyPlayer; 