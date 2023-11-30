// Content.js

import React, { useState, useEffect } from 'react';
import { getAllContent, createContent } from '../../services/contentService';

function Content() {
  const [content, setContent] = useState([]);
  const [newContent, setNewContent] = useState({
    title: '',
    description: '',
    author: '',
    url: '',
    tags: [],
  });

  useEffect(() => {
    async function fetchData() {
      const contentData = await getAllContent();
      setContent(contentData);
    }
    fetchData();
  }, []);

  const handleCreateContent = async () => {
    const createdContent = await createContent(newContent);
    setContent([...content, createdContent]);
  };

  return (
    <div>
      <h2>Content</h2>
      <ul>
        {content.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong> - {item.description}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) =>
            setNewContent({ ...newContent, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) =>
            setNewContent({ ...newContent, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Author"
          onChange={(e) =>
            setNewContent({ ...newContent, author: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="URL"
          onChange={(e) =>
            setNewContent({ ...newContent, url: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          onChange={(e) =>
            setNewContent({
              ...newContent,
              tags: e.target.value.split(',').map((tag) => tag.trim()),
            })
          }
        />
        <button onClick={handleCreateContent}>Create Content</button>
      </div>
    </div>
  );
}

export default Content;
