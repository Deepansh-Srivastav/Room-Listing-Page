import { useEffect, useRef, useState } from 'react';

const ThumbnailComponent = ({ URL, poster }) => {
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const videoElement = videoRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Video is in view, load it and play
                    setIsVisible(true);

                } else {
                    // Video is out of view, pause it
                    setIsVisible(false);
                    videoElement.pause();
                }
            },
            { threshold: 0.5 } // Adjust the threshold as needed
        );

        if (videoElement) {
            observer.observe(videoElement);
        }

        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, []);

    return (
        <div>
            <video
                ref={videoRef}
                src={isVisible ? URL : undefined} // Load video only if visible
                poster={poster}
                controls
                muted
                style={{ width: '100%', height: '300px' }} // Adjust styles as needed
                autoPlay
                loop
            />
        </div>
    );
};

export default ThumbnailComponent;