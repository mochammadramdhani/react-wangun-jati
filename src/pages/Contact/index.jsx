import "aos/dist/aos.css";
import ContactUs from "../../components/ContactUs";
import ContactForm from "../../components/ContactForm";

const Contact = () => {
  return (
    <>
      <div className="mt-6 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl mx-auto">Kontak Kami</h2>
      </div>
      <ContactUs />
      <ContactForm />
    </>
  );
};

export default Contact;
