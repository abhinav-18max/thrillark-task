import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
    const images =[
        {src: '/list/dubai.webp',alt: 'dubai',name:'Dubai'},
        {src:'/list/abudubai.webp',alt: 'abudubai', name:'Abu Dhabi'},
        {src: '/list/muscat.webp',alt: 'muscat', name:'Muscat'},
        {src: '/list/riyadh.webp',alt: 'riyadh', name:'Riyadh'},
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="w-3/4 m-auto text-black">
            <Slider {...settings}>
                  {
                      images.map((image, index)=>{
                          return (
                              <div key={index} className="w-fit lg:ml-12">
                                  <img src={image.src} alt={image.alt} className="rounded-xl"/>
                                  <p className="mt-5">{image.name}</p>
                              </div>
                          )
                      })
                  }

            </Slider>
        </div>

    );
};
const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: 'block', left: '10px', zIndex: 10, color: 'black' }} onClick={onClick}>
            &lt;
        </div>
    );
};

// Custom Next Arrow Component
const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: 'block', right: '10px', zIndex: 10, color: 'black' }} onClick={onClick}>
            &gt;
        </div>
    );
};
export default Carousel;
