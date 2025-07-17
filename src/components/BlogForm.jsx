import React, { Component } from "react";

class BlogForm extends Component {
  render() {
    return (
      <div className="grid gap-10 px-6 py-12 bg-[#f9fafb] rounded-lg">
        {/* Gambar 1 */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-sm p-6">
          <img src="/images/sebelum diaspal.jpeg" alt="Kondisi jalan sebelum diaspal" className="w-full md:w-1/2 rounded-lg object-cover" />
          <div className="md:ml-6 mt-4 md:mt-0 text-gray-700">
            <h3 className="text-xl font-semibold mb-2">Kondisi Sebelum Pengaspalan</h3>
            <p className="text-[#000]">
              Sebelum dilakukan pengaspalan, kondisi jalan masih berupa jalan dengan kontur permukaan yang tidak rata, serta penurunan median tanah yang menyebabkan genangan air menyebabkan ketidaknyamanan bagi pengguna jalan, terutama saat
              musim hujan.
            </p>
          </div>
        </div>

        {/* Gambar 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center bg-white rounded-lg shadow-sm p-6">
          <img src="/images/Pengukuran jalan sebelum diaspal.jpeg" alt="Pengukuran Jalan Sebelum Diaspal" className="w-full md:w-1/2 rounded-lg object-cover" />
          <div className="md:mr-6 mt-4 md:mt-0 text-gray-700 text-left md:text-right">
            <h3 className="text-xl font-semibold mb-2">Proses Pengukuran Jalan</h3>
            <p className="text-[#000]">Pengukuran jalan dilakukan untuk menentukan dimensi yang presisi sebelum pengaspalan. Tahapan ini penting untuk memastikan efisiensi material dan kesesuaian standar teknis..</p>
          </div>
        </div>

        {/* Gambar 3 */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-sm p-6">
          <img src="/images/Proses Pengaspalan.jpeg" alt="Pengukuran jalan sebelum pengaspalan" className="w-full md:w-1/2 rounded-lg object-cover" />
          <div className="md:ml-6 mt-4 md:mt-0 text-gray-700">
            <h3 className="text-xl font-semibold mb-2">Proses Pengaspalan Jalan</h3>
            <p className="text-[#000]">Proses pengaspalan dilakukan secara bertahap menggunakan alat berat dan aspal hotmix, memastikan permukaan jalan rata, kuat, dan tahan lama terhadap beban kendaraan..</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogForm;
