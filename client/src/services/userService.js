const users = [
    { id: 1, username: 'john_doe', email: 'john@example.com' },
    { id: 2, username: 'jane_smith', email: 'jane@example.com' },
    // Add more simulated users as needed
  ];
  
  export const getAllUsers = async () => {
    // Simulate fetching users from an API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(users);
      }, 500);
    });
  };
  
  export const createUser = async (newUser) => {
    // Simulate creating a new user and returning the updated list
    return new Promise((resolve) => {
      setTimeout(() => {
        const createdUser = { id: users.length + 1, ...newUser };
        resolve(createdUser);
      }, 500);
    });
  };
  