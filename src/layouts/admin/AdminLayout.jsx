import { useState } from "react";
import { Link } from "react-router-dom";

export const AdminLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      {/* Overlay for small screen */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-30 z-10 lg:hidden" onClick={closeSidebar} />}

      {/* Sidebar */}
      <aside
        className={`fixed z-20 top-0 left-0 h-screen w-64 bg-white border-r shadow-md transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"} 
    lg:translate-x-0`}
      >
        <div className="sticky top-0 p-6 border-b bg-white">
          <h1 className="text-2xl font-bold text-gray-800">CV Wangun Jati</h1>
        </div>
        <nav className="p-6 space-y-4">
          <Link to="/admin/pesan" className="block text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded px-3 py-2 transition" onClick={closeSidebar}>
            Daftar Pesan
          </Link>
          <Link to="/admin/logout" className="block text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded px-3 py-2 transition" onClick={closeSidebar}>
            Logout
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:pl-64">
        {/* Topbar for small screen */}
        <header className="lg:hidden p-4 bg-white shadow-md flex items-center justify-between sticky top-0 z-10">
          <button onClick={toggleSidebar} className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="font-semibold text-gray-700">Admin Panel</span>
        </header>

        <main className="p-6 overflow-y-auto flex-1">{children}</main>
      </div>
    </div>
  );
};
