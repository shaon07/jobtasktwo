import React from "react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/Hero.css";



const Herosec = () => {
  return (
    <>
      <Swiper className="container-fluid mainHero">
        <div className="row py-5">
          <SwiperSlide className="d-flex pt-4">
            <div className=" col-12 col-md-6 hero-left text-center my-3">
              <div className="hero-img">
                <img
                  src="http://www.sharenews24.com/images_laibrary/001Mujib-Borsho.jpg"
                  alt="mujib"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-12 col-md-6 hero-right my-3">
              <h2>শুরু হলো মুজিব বর্ষ</h2>
              <h5>
                বঙ্গবন্ধুর জন্মদিন ১৭ই মার্চ শুরু হবে মুজিব বর্ষের আনুষ্ঠানিক
                উদ্বোধন। চলবে ২৬ মার্চ পর্যন্ত। তারপর বছরব্যাপী রয়েছে নানা
                আয়োজন
              </h5>
            </div>
          </SwiperSlide>
          <SwiperSlide className="d-flex pt-4">
            <div className=" col-12 col-md-6 hero-left text-center my-3">
              <div className="hero-img ">
                <img
                  src="http://www.sharenews24.com/images_laibrary/001Mujib-Borsho.jpg"
                  alt="mujib"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-12 col-md-6 hero-right my-3">
              <h2>মুজিব বর্ষ স্মারক ঋণ একটি ভালো উদ্যোগ </h2>
              <h5>
              জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমানের জন্ম শত বার্ষিকী নানা আয়োজনে উদ্যাপনের উদ্যোগ গ্রহণ করা হয়েছে। বিভিন্ন প্রতিষ্ঠান মুজিব বর্ষকে স্মরণীয় করে রাখার জন্য বিভিন্ন কার্যক্রম হাতে নিয়েছে
              </h5>
            </div>
          </SwiperSlide>
          <SwiperSlide className="d-flex pt-4">
            <div className=" col-12 col-md-6 hero-left text-center my-3">
              <div className="hero-img">
                <img
                  src="https://cdn.banglatribune.net/contents/cache/images/640x0x1/uploads/media/2019/09/02/36073d9e6ff9d321614edd8759be3b8c-5d6c1ea33805f.jpg"
                  alt="mujib"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-12 col-md-6 hero-right my-3">
              <h2>মুজিব বর্ষে ‘বঙ্গবন্ধু ছবিমেলা’র আয়োজন</h2>
              <h5>
              মুজিব বর্ষে চিত্রশিল্পীদের নিয়ে ‘বঙ্গবন্ধু ছবিমেলা’র আয়োজন করতে যাচ্ছে হাসুমণির পাঠশালা৷ ২০২০ সালের জানুয়ারি থেকে মার্চের মধ্যে কোনও এক সময়ে ঢাকায় এই প্রদর্শনী অনুষ্ঠিত হবে৷
              </h5>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};

export default Herosec;
