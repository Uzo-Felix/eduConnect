const contributions = [
    { 
        id: 1, 
        title: 'Contribute to Open Source', 
        description: 'Learn how to contribute to open-source projects', 
        author: 'John Doe', 
        url: 'https://example.com/contribute-open-source' },
    { 
        id: 2, 
        title: 'Building Scalable Systems', 
        description: 'Strategies for building scalable and maintainable systems', 
        author: 'Jane Smith', 
        url: 'https://example.com/scalable-systems' },
    {
        id: 1,
        title: 'Contribution to React Docs',
        description: 'Added examples to the React documentation',
        author: 'doc_contributor',
        url: 'https://github.com/react/docs/pull/123',
      },
      {
        id: 2,
        title: 'Bug Fix in Node.js Core',
        description: 'Fixed a critical bug in the Node.js core',
        author: 'node_fixer',
        url: 'https://github.com/nodejs/node/pull/456',
      },
  ];
  
  export const getAllContributions = async () => {
    // Simulating an API call to retrieve all contributions
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(contributions);
      }, 500);
    });
  };
  
  export const createContribution = async (newContribution) => {
    // Simulating an API call to create new contribution
    return new Promise((resolve) => {
      setTimeout(() => {
        const createdContribution = { id: contributions.length + 1, ...newContribution };
        contributions.push(createdContribution);
        resolve(createdContribution);
      }, 500);
    });
  };
  