const SpotifyPlayer = () => {
    const spotifyEmbedUrl = "https://open.spotify.com/embed/track/3Ueq2zboxwAbsvHrOjdEqz?si=e14196c889c34b1e";

    return (
        <div className="spotify-note">
            <span className="spotify-label">on repeat lately</span>
            <iframe
                title="Om's current Spotify pick"
                src={`${spotifyEmbedUrl}?utm_source=generator&theme=0&hideHeader=1&hideCover=1&showPlayButton=1`}
                width="100%"
                height="80"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
        </div>
    );
};

export default SpotifyPlayer;
