const user = {
  username: 'alejandro',
  password: '123',
};

export const performLogIn = (data) => data.username === user.username && data.password === user.password;

export const faqs = [
  {
    question: 'FAQs 1',
    answer: 'lorem ipsum',
  },
  {
    question: 'FAQs 2',
    answer: 'lorem ipsum',
  },
  {
    question: 'FAQs 3',
    answer: 'lorem ipsum',
  },
];
