import { useEffect, useRef, useState } from 'react';
import ImageSlider from "../common/ImageSlider";

const ThumbnailComponent = ({ URL, poster, thumbnailType }) => {
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

    if (thumbnailType === "VIDEO") {
        return (
            <div>
                <video
                    ref={videoRef}
                    src={isVisible ? URL : undefined} // Load video only if visible
                    poster={poster}
                    controls
                    muted
                    style={{ height: '100%',  width: '100%', }}
                    autoPlay
                    loop
                />
            </div>
        );
    }

    return (
        <div>
            <ImageSlider URL = {URL}/>
        </div>
    )
};

export default ThumbnailComponent;