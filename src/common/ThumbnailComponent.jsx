import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import ImageSlider from "../common/ImageSlider";

const ThumbnailComponent = ({ URL, thumbnailType }) => {

    // Create a reference for the video element
    const videoRef = useRef(null);

    // State to check if the video is visible
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Get the current video element from the reference
        const videoElement = videoRef.current;

        // Create an Intersection Observer to check if the video is visible in the viewport
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // If the video is in view, set it to be visible
                    setIsVisible(true);
                } else {
                    // If the video is out of view, set it to not visible
                    setIsVisible(false);
                    // Pause the video when it is not visible
                    videoElement.pause();
                }
            },
            { threshold: 0.5 }
        );

        // If the video element exists, start observing
        if (videoElement) {
            observer.observe(videoElement);
        }

        // Cleanup function to stop observing when the component unmounts
        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, []); // Empty dependency array means this will only run once when the component loads

    if (thumbnailType === "VIDEO") {
        return (
            <div>
                <video
                    ref={videoRef}
                    src={isVisible ? URL : undefined} // Give SRC to video only if visible
                    controls
                    muted
                    style={{ height: '100%', width: '100%' }}
                    autoPlay
                    loop
                />
            </div>
        );
    }

    return (
        <div>
            <ImageSlider URL={URL} />
        </div>
    );
};

// Prop validation
ThumbnailComponent.propTypes = {
    URL: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
    // URL must be a string or an array of elements and is required

    thumbnailType: PropTypes.oneOf(['VIDEO', 'IMAGE']).isRequired, // thumbnailType must be either 'VIDEO' or 'IMAGE' and is required
};

export default ThumbnailComponent;
