import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <section className="mx-auto max-w-4xl bg-white rounded-xl shadow-md p-6 md:p-10">
        <div className="flex flex-col items-center justify-center gap-10">
          {/* Kontak Info */}
          <div className="grid gap-8 md:grid-cols-3 text-center text-gray-700">
            {/* Telepon */}
            <div>
              <div className="mb-2 text-blue-600">
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold mb-1">Hubungi</h4>
              <p>085867565682</p>
            </div>

            {/* Email */}
            <div>
              <div className="mb-2 text-blue-600">
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 0a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-1">Email</h4>
              <p>wangunjatikonstruksi1@gmail.com</p>
            </div>

            {/* Alamat */}
            <div>
              <div className="mb-2 text-blue-600">
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 10c4.418 0 8-4.03 8-9a8 8 0 10-16 0c0 4.97 3.582 9 8 9z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-1">Alamat</h4>
              <p>Jl. Kesesi Kaliwadas No.10, RT 04 RW 03, Kesesi, Pekalongan</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
