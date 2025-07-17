import "aos/dist/aos.css";
import ProjectForm from "../../components/ProjectForm";

const Projects = () => {
  return (
    <div className="flex flex-col">
      {/* <Title title={""} /> */}
      <div className="flex flex-col py-14 px-8 gap-10">
        <ProjectForm
          title="Proyek Pengaspalan Jalan"
          desc="Proyek pengaspalan jalan ini bertujuan untuk meningkatkan
            aksesibilitas dan kenyamanan masyarakat. Kami menggunakan material
            berkualitas tinggi dan proses pengerjaan yang efisien untuk hasil
            maksimal."
          imgSrc="/images/pengaspalan jalan.png"
          imgAlt="Proyek Pengaspalan Jalan"
        />

        <ProjectForm
          title="Penggunaan Jenis Aspal"
          desc="Pengaspalan jalan dilakukan guna memperbaiki kualitas infrastruktur dan memperlancar mobilitas warga. Material unggulan serta metode kerja efektif diterapkan demi hasil yang optimal dan tahan lama."
          imgSrc="/images/aspal.jpg"
          imgAlt="Pengaspalan Jalan"
        />
      </div>
    </div>
  );
};

export default Projects;
