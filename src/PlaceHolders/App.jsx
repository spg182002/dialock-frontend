import React, { useState } from "react";
import "./App.css";

const leadsData = [
  { name: "John Doe", email: "johndoe@example.com", phone: "+123456789", company: "ABC Corp" },
  { name: "Jane Smith", email: "janesmith@example.com", phone: "+987654321", company: "XYZ Ltd" },
  { name: "Alice Johnson", email: "alice@example.com", phone: "+1122334455", company: "Tech Solutions" }
];

const App = () => {
  const [leads, setLeads] = useState(leadsData);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState({});

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    const newSelectedRows = {};
    if (newSelectAll) {
      leads.forEach((lead, index) => {
        newSelectedRows[index] = true;
      });
    }
    setSelectedRows(newSelectedRows);
  };

  const handleRowSelect = (index) => {
    const newSelectedRows = { ...selectedRows, [index]: !selectedRows[index] };
    setSelectedRows(newSelectedRows);
    setSelectAll(Object.keys(newSelectedRows).length === leads.length);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <a href="#">
        <img src="logo.png" alt="Logo" className="logo" />
        </a>
        <div className="user-photo"></div>
      </nav>
      <div className="container">
        <aside className="sidebar">
          <ul>
            <li>Leads Chumma</li>
            <li>Convert Leads</li>
            <li>Outreach</li>
            <li>Statistics</li>
            <li>Outreach</li>
          </ul>
        </aside>
        <main className="main-content">
          <h2>Leads Management</h2>
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company Name</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows[index] || false}
                      onChange={() => handleRowSelect(index)}
                    />
                  </td>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.phone}</td>
                  <td>{lead.company}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default App;
