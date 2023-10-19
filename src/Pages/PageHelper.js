const user = {
  username: 'alejandro',
  password: '123',
};

export const performLogIn = (data) => data.username === user.username && data.password === user.password;
