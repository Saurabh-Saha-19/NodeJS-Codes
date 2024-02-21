class UserModel {
  constructor(id, name, email, type, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.type = type;
    this.password = password;
  }

  static SignUp({ name, email, type, password }) {
    const newUser = new UserModel(
      users.length + 1,
      name,
      email,
      type,
      password
    );

    users.push(newUser);
  }

  static SignIn(email, password) {
    const user = users.find((u) => {
      if (u.email === email && u.password === password) return u;
    });

    return user;
  }

  static getAllUsers() {
    return users;
  }
}

let users = [
  {
    id: 1,
    name: "Admin",
    email: "example@gmail.com",
    type: "seller",
    password: "qwerty123",
  },

  {
    id: 2,
    name: "Saurabh",
    email: "customer@gmail.com",
    type: "buyer",
    password: "1234",
  },
];

export default UserModel;
