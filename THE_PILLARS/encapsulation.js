// const user = {
//   name: "Omar",
//   password: 123456,
//   email: "omarvega@hotmail.com",
// };

function safeInfo() {
  const person = (userObject) => {
    if (name === userObject.name) return `${name}`;
  };
  const password = (userObject) => {
    if (password === 123456) {
      return console.log(`Access granted ${userObject.name}`);
    } else {
      return console.log("incorrect Password");
    }
  };

  const email = (userObject) => {
    if (email === userObject.email) {
      return `Email is ${userObject.email}`;
    }
  };

  return {
    person: person,
    password: password,
    email: email,
  };
}

const secureUser = safeInfo();
secureUser.email(user.email);
secureUser.password(user.password);
// secureUser.name(user.name);
