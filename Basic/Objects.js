const adminUser = {};

adminUser.name = "John";
adminUser.age = 30;
// console.log(adminUser);

const regularUser = {
  email: "regularUser@gmail.com",
  id: 123,
  fullName: {
    userFullName: {
      firstName: "Jane",
      lastNameL: "Doe",
    },
  },
};

// console.log(regularUser.fullName.userFullName);

// comnine two objects using Object.assign

const obj = Object.assign([], adminUser, regularUser); //{} is the target object. all values will be copied to this object

// console.log("Combined object", adminUser);

// spread operator

const spreadObject = { ...adminUser, ...regularUser };
// console.log(spreadObject);

// object destructuring

const { email, fullName, id } = regularUser;

console.log(fullName);
