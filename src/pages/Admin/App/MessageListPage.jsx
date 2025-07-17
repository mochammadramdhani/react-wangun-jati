import React, { useEffect, useState } from "react";
import { CONFIG } from "../../../config/Config";

const MessageListPage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`${CONFIG.BACKEND_URL}/pesan`);
        const result = await response.json();

        if (response.ok) {
          setMessages(result.data);
        } else {
          alert(result.message || "Gagal mengambil pesan");
        }
      } catch (error) {
        console.error("Fetch error:", error);
        alert("Terjadi kesalahan saat mengambil data pesan");
      }
    };

    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus pesan ini?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${CONFIG.BACKEND_URL}/hapus/pesan/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (response.ok) {
        setMessages((prev) => prev.filter((msg) => msg.id !== id));
      } else {
        alert(result.message || "Gagal menghapus pesan");
      }
    } catch (error) {
      console.error("Error saat menghapus pesan:", error);
      alert("Terjadi kesalahan saat menghapus pesan");
    }
  };
  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#f9fafe",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ color: "#333", marginBottom: "1.5rem" }}>Daftar Pesan</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#fff",
          boxShadow: "0 0 10px rgba(0,0,0,0.05)",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#eef2f7" }}>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Nama</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Pesan</th>
            <th style={thStyle}>Tanggal</th>
            <th style={thStyle}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg) => (
            <tr key={msg.id} style={{ borderBottom: "1px solid #eee" }}>
              <td style={tdStyle}>{msg.id}</td>
              <td style={tdStyle}>{msg.nama}</td>
              <td style={tdStyle}>{msg.email}</td>
              <td style={tdStyle}>{msg.pesan}</td>
              <td style={tdStyle}>{msg.tanggal}</td>
              <td style={tdStyle}>
                <button
                  onClick={() => handleDelete(msg.id)}
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#ff4d4f",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
          {messages.length === 0 && (
            <tr>
              <td
                colSpan="6"
                style={{ textAlign: "center", padding: "1rem", color: "#888" }}
              >
                Tidak ada pesan.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  textAlign: "left",
  padding: "12px",
  color: "#555",
  fontWeight: "bold",
  fontSize: "14px",
};

const tdStyle = {
  padding: "12px",
  fontSize: "14px",
  color: "#333",
};

export default MessageListPage;
