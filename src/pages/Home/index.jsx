import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../../components/Banner";

import Slideshow from "../../components/Slideshow";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      {/* Collage */}
      <div data-aos="fade-up" data-aos-duration="1500">
        {/* <Collage /> */}
        <Slideshow />
      </div>
      {/* vision */}
      <div data-aos="fade-up" data-aos-duration="1500" data-aos-offset="150">
        <Banner
          title={"Selamat Datang"}
          visibility={""}
          image="/images/pengaspalan-jalan.jpg"
          body={
            <>
              <strong>Kami memberikan solusi berkualitas dalam bidang konstruksi jalan untuk meningkatkan aksesibilitas, kenyamanan, dan pembangunan berkelanjutan bagi masyarakat.</strong>
            </>
          }
        />
      </div>
    </div>
  );
};
export default Home;
