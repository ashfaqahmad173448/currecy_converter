export const loginWithUsername = ({username, password}) =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve({id: 1, name: username});
    }, 5000),
  );
