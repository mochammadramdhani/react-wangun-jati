const AboutUs = () => {
  return (
    <section>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-36 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Tentang Kami</h1>
          <p className="text-[#000]">
            CV Wangun Jati adalah sebuah perusahaan yang bergerak di bidang konstruksi di bidang pengaspalan jalan.CV Wangun Jati selalu berkomitmen untuk melayani pelanggan dengan sepenuh hati dan memberikan hasil yang memuaskan bagi
            pelanggan
          </p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex object-scale-down w-4/5 h-full ml-10">
          <img className="h-full rounded-lg" src="/images/pngtree-roller-road-construction-image_15798332.jpg" alt="Road Construct Image" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
