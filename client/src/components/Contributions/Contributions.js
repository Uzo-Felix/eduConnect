import React, { useState, useEffect } from 'react';
import { getAllContributions, createContribution } from '../../services/contributionService';

function Contributions() {
  const [contributions, setContributions] = useState([]);
  const [newContribution, setNewContribution] = useState({
    title: '',
    description: '',
    author: '',
    url: '',
  });

  useEffect(() => {
    async function fetchData() {
      const contributionsData = await getAllContributions();
      setContributions(contributionsData);
    }
    fetchData();
  }, []);

  const handleCreateContribution = async () => {
    const createdContribution = await createContribution(newContribution);
    setContributions([...contributions, createdContribution]);
  };

  return (
    <div>
      <h2>Contributions</h2>
      <ul>
        {contributions.map((item) => (
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
            setNewContribution({ ...newContribution, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) =>
            setNewContribution({
              ...newContribution,
              description: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Author"
          onChange={(e) =>
            setNewContribution({ ...newContribution, author: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="URL"
          onChange={(e) =>
            setNewContribution({ ...newContribution, url: e.target.value })
          }
        />
        <button onClick={handleCreateContribution}>Create Contribution</button>
      </div>
    </div>
  );
}

export default Contributions;
