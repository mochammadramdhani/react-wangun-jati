import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutUs from "../../components/AboutUs";
import Values from "../../components/Values";
import GeneralBanner from "../../components/GeneralBanner";

const Aboutv2 = () => {
  //test
  //To use animations use AOS
  //https://michalsnik.github.io/aos/
  //link for featured animations
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <AboutUs />
      <div data-aos="fade-right" data-aos-duration="1500">
        <GeneralBanner
          positionOfBanner={"lg:order-first"}
          Image={"images/image a.png"}
          Title={"Visi Kami"}
          Content={"“Menjadi perusahaan konstruksi terdepan yang handal dan profesional dalam pembangunan infrastruktur berkelanjutan di wilayah Pekalongan dan sekitarnya.”"}
        />
      </div>
      <div data-aos="fade-left" data-aos-duration="1500">
        <GeneralBanner
          positionOfBanner={"lg:order-last"}
          Image={"images/image b.png"}
          Title={"Misi Kami"}
          Content={`1. Menyediakan layanan konstruksi berkualitas tinggi dengan tepat waktu dan harga yang kompetitif.
2. Meningkatkan kepuasan pelanggan melalui inovasi dan digitalisasi layanan, termasuk pengembangan website company profile sebagai media informasi dan pemesanan jasa.
3. Mengutamakan profesionalisme dan integritas dalam setiap proyek yang dikerjakan.
4. Membangun sumber daya manusia yang kompeten dan berkomitmen tinggi dalam bidang konstruksi.
5. Mendukung pembangunan infrastruktur yang ramah lingkungan dan berkelanjutan.`}
        />
      </div>
    </>
  );
};

export default Aboutv2;
