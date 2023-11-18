const user = {
  username: "alejandro",
  password: "123",
};

export const performLogIn = (data) =>
  data.username === user.username && data.password === user.password;

export const faqs = [
  {
    question: "How to Convert from X to Y Currency?",
    answer:
      "You need to put the amount of money you want to convert into the amount box, select the currencies you need (origin and objective) and press convert",
  },
  {
    question: "The inquiry form is not working",
    answer:
      "It is so straight forward that if you manage to fk this up we will send our technical support team to your house, with a shotgun",
  },
  {
    question: "I am bad at Video Games",
    answer: "Git gud",
  },
  {
    question: "Cannot Log into the page",
    answer: "How are you seeing the FAQ page in the first place?",
  },
  {
    question: "I lost all my money invested in crypto",
    answer: "Thats karma for buying those lolis in that nft game",
  },
  {
    question: "Page Usage Tutorial",
    answer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];
