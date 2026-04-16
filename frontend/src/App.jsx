import { useEffect, useState } from "react";

function App() {
  const [docs, setDocs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [query, setQuery] = useState("");

  // Load documents
  const loadDocs = () => {
    fetch("http://localhost:8081/documents")
      .then(res => res.json())
      .then(data => setDocs(data));
  };

  useEffect(() => {
    loadDocs();
  }, []);

  // Upload document
  const upload = () => {
    fetch("http://localhost:8081/documents/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        content,
        companyName: "ABC",
        documentType: "report",
        uploadedBy: "user"
      })
    }).then(() => loadDocs());
  };

  // Search
  const search = () => {
    fetch(`http://localhost:8081/documents/search?query=${query}`)
      .then(res => res.json())
      .then(data => setDocs(data));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Financial Documents</h2>

      <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <input placeholder="Content" onChange={e => setContent(e.target.value)} />
      <button onClick={upload}>Upload</button>

      <br /><br />

      <input placeholder="Search..." onChange={e => setQuery(e.target.value)} />
      <button onClick={search}>Search</button>

      <ul>
        {docs.map(doc => (
          <li key={doc.id}>{doc.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;