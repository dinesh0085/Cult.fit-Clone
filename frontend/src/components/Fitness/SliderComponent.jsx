import { Box, Image } from "@chakra-ui/react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
    {url: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive//image/vm/5ff5b229-b562-428f-94a9-98da451ed367.png"},
    {url: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive//image/vm/8009b1d0-4f5e-49e1-bc94-c41da6a5bcc1.png"},
    {url: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive//image/vm/7bf136db-7217-4733-af9f-1bb8a4155a83.png"},
    {url: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive//image/vm/7edc94fb-e895-4065-8e56-dabffdd4e4b0.png"},
    {url: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive//image/vm/09e63111-d407-4d09-89e5-96d978edf2b1.png"},
];

export const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide:0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return (
        <Box w="80%">
            <Slider {...settings}>
                {
                    images.map((item, i) => (
                    <Box p="10px"
                    transition= "padding 0.5s"
                     _hover={{
                        p:"0"
                    }}>
                        <Image w="100%" src={item.url} />
                    </Box>
                ))
                }
            </Slider>
        </Box>
    )
}