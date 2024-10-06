import '../styles/ImageSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function ImageSlider({ URL }) {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {URL.map(image => {
                    return (
                        <>
                            <SwiperSlide>
                                <img
                                    src={image}
                                    style={{ width: '100%', height: '300px' }}
                                    alt="Thumbnail Image"
                                    loading='lazy'
                                     />
                            </SwiperSlide>
                        </>
                    )
                })}
            </Swiper>
        </>
    );
}
