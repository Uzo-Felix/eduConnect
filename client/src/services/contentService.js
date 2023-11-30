const content = [
    {
      id: 1,
      title: 'Introduction to React',
      description: 'Learn the basics of React.js',
      author: 'react_lover',
      url: 'https://example.com/react-intro',
    },
    {
      id: 2,
      title: 'Node.js Fundamentals',
      description: 'Explore the fundamentals of Node.js',
      author: 'node_ninja',
      url: 'https://example.com/node-fundamentals',
    },
    // Add more simulated content as needed
  ];
  
  export const getAllContent = async () => {
    // Simulate fetching content from an API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(content);
      }, 500);
    });
  };
  
  export const createContent = async (newContent) => {
    // Simulate creating new content and returning the updated list
    return new Promise((resolve) => {
      setTimeout(() => {
        const createdContent = { id: content.length + 1, ...newContent };
        resolve(createdContent);
      }, 500);
    });
  };
  