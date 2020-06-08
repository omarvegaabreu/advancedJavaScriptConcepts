const user = {
  name: "Omar",
  password: 123456,
  email: "omarvega@hotmail.com",
};

function safeInfo() {
  const person = (name) => {
    if (name === user.name) {
      return console.log(`${name}`);
    }
  };
  const password = (password) => {
    if (password === user.password) {
      return console.log(`Correct password ${user.name} access granted `);
    } else {
      return console.log("incorrect Password");
    }
  };

  const email = (email) => {
    if (email === user.email) {
      return console.log(`Email is ${email}`);
    }
  };

  return {
    person: person,
    password: password,
    email: email,
  };
}

const secureUser = safeInfo();
secureUser.person(user.name);
secureUser.email(user.email);
secureUser.password(user.password);
