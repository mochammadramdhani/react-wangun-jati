import React, { useState } from "react";
import { CONFIG } from "../config/Config";
import Button from "./Button/Button";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {
      nama: inputs.name.value,
      email: inputs.email.value,
      pesan: inputs.message.value,
    };

    try {
      const response = await fetch(`${CONFIG.BACKEND_URL}/kirim/pesan`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Gagal mengirim pesan");
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Submit error:", err.message);
      alert("Terjadi kesalahan saat mengirim pesan.");
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center space-y-4 mb-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 className="text-4xl font-bold">Terima Kasih!</h1>
        <p className="text-center max-w-md text-gray-700">Terima kasih atas perhatian Anda! Hubungi kami jika Anda membutuhkan layanan kami.</p>

        <a href="https://wa.me/6285867565682" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300">
          Hubungi via WhatsApp
        </a>
      </div>
    );
  }

  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">Kritik dan Saran</h2>
        <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">Bantu kami untuk terus berkembang dengan lebih baik. Sampaikan komentar Anda di bawah ini!</p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="Name" className="block mb-2 text-sm font-medium">
              Nama Anda
            </label>
            <input type="text" placeholder="Nama Anda" name="name" className="input input-bordered input-primary w-full" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email Anda
            </label>
            <input type="email" placeholder="Email" name="email" className="input input-bordered input-primary w-full" required />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Pesan Anda
            </label>
            <textarea placeholder="Pesan Anda" name="message" className="textarea textarea-primary w-full h-52" required></textarea>
          </div>
          <Button type="submit">Kirim Pesan</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
