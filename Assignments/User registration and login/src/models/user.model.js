// Please don't change the pre-written code
// Import the necessary modules here

export const users = [
  { id: 1, name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" },
];

export const registerUser = (user) => {
  // Write your code here
  const newUser = { id: users.length + 1, ...user };
  users.push(newUser);
  console.log(users);
};

export const authenticateUser = (reqUser) => {
  // Write your code here
  const { email, password } = reqUser;
  const user = users.find((u) => {
    if (u.email === email && u.password === password) {
      return u;
    }
  });

  console.log(user);
  return user;
};
