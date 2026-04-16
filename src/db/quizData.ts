import type { QuizList } from "#/types/QuizTypes"

export const quizData: QuizList = [
  {
    id: 'q1',
    question:
      'Which hook is used to handle side effects in a React functional component?',
    options: [
      { optionText: 'useState', optionId: 'a' },
      { optionText: 'useEffect', optionId: 'b' },
      { optionText: 'useContext', optionId: 'c' },
      { optionText: 'useReducer', optionId: 'd' },
    ],
    correctAnswer: 'b',
    explanation:
      'useEffect is specifically designed to handle side effects like API calls, subscriptions, or manual DOM updates.',
  },
  {
    id: 'q2',
    question:
      'What is the correct way to check the type of a variable in JavaScript?',
    options: [
      { optionText: 'typeof variable', optionId: 'a' },
      { optionText: 'variable.type()', optionId: 'b' },
      { optionText: 'getType(variable)', optionId: 'c' },
      { optionText: 'instanceof String', optionId: 'd' },
    ],
    correctAnswer: 'a',
    explanation:
      "The 'typeof' operator returns a string indicating the type of the unevaluated operand.",
  },
  {
    id: 'q3',
    question: 'Which of the following is NOT a falsy value in JavaScript?',
    options: [
      { optionText: '0', optionId: 'a' },
      { optionText: "'' (empty string)", optionId: 'b' },
      { optionText: '[] (empty array)', optionId: 'c' },
      { optionText: 'undefined', optionId: 'd' },
    ],
    correctAnswer: 'c',
    explanation:
      "An empty array is truthy in JavaScript; only values like 0, '', null, undefined, NaN, and false are falsy.",
  },
  {
    id: 'q4',
    question:
      "What does the 'SSG' acronym stand for in modern web development?",
    options: [
      { optionText: 'Server-Side Graphics', optionId: 'a' },
      { optionText: 'Static Site Generation', optionId: 'b' },
      { optionText: 'Secure Script Gateway', optionId: 'c' },
      { optionText: 'System Style Guide', optionId: 'd' },
    ],
    correctAnswer: 'b',
    explanation:
      'Static Site Generation (SSG) is the process of pre-rendering a website at build time.',
  },
  {
    id: 'q5',
    question:
      "In CSS, which property is used to create space inside an element's border?",
    options: [
      { optionText: 'margin', optionId: 'a' },
      { optionText: 'spacing', optionId: 'b' },
      { optionText: 'padding', optionId: 'c' },
      { optionText: 'gap', optionId: 'd' },
    ],
    correctAnswer: 'c',
    explanation:
      'Padding is the space between the content and the border, while margin is the space outside the border.',
  },
  {
    id: 'q6',
    question: "Which HTTP status code represents 'Internal Server Error'?",
    options: [
      { optionText: '404', optionId: 'a' },
      { optionText: '500', optionId: 'b' },
      { optionText: '403', optionId: 'c' },
      { optionText: '200', optionId: 'd' },
    ],
    correctAnswer: 'b',
    explanation:
      'The 500 Internal Server Error is a generic error message given when an unexpected condition was encountered.',
  },
  {
    id: 'q7',
    question:
      'Which array method creates a new array by performing a function on each array element?',
    options: [
      { optionText: 'filter()', optionId: 'a' },
      { optionText: 'forEach()', optionId: 'b' },
      { optionText: 'map()', optionId: 'c' },
      { optionText: 'reduce()', optionId: 'd' },
    ],
    correctAnswer: 'c',
    explanation:
      'The map() method creates a new array with the results of calling a function for every array element.',
  },
  {
    id: 'q8',
    question: "What is the purpose of the 'alt' attribute on an <img> tag?",
    options: [
      { optionText: 'To provide a caption', optionId: 'a' },
      { optionText: 'To specify the image source', optionId: 'b' },
      {
        optionText: 'To provide alternative text for screen readers',
        optionId: 'c',
      },
      { optionText: 'To set the image alignment', optionId: 'd' },
    ],
    correctAnswer: 'c',
    explanation:
      'The alt attribute provides alternative information for an image if a user for some reason cannot view it.',
  },
  {
    id: 'q9',
    question:
      'What keyword is used to declare a block-scoped variable that can be reassigned?',
    options: [
      { optionText: 'var', optionId: 'a' },
      { optionText: 'let', optionId: 'b' },
      { optionText: 'const', optionId: 'c' },
      { optionText: 'set', optionId: 'd' },
    ],
    correctAnswer: 'b',
    explanation:
      'let allows you to declare variables that are limited to the scope of a block, statement, or expression.',
  },
  {
    id: 'q10',
    question:
      'In Git, which command is used to combine changes from one branch into another?',
    options: [
      { optionText: 'git push', optionId: 'a' },
      { optionText: 'git checkout', optionId: 'b' },
      { optionText: 'git merge', optionId: 'c' },
      { optionText: 'git add', optionId: 'd' },
    ],
    correctAnswer: 'c',
    explanation:
      'git merge is used to integrate changes from another branch into the current working branch.',
  },
]