export interface QuizWalk {
  id: number;
  title: string;
  questions: QuizWalkQuestion[];
}

export interface QuizWalkQuestion {
  id: number;
  title?: string;
  question: string;
  latitude: number;
  longitude: number;
  answers: string[];
  correctAnswer: number;
  isVisited: boolean;
  isAnswered: boolean;
}

const mockQuizWalks: QuizWalk[] = [
  {
    id: 1,
    title: 'Djurparks Gången',
    questions: [
      {
        id: 1,
        title: 'Kungen',
        question: 'Vem var kungen i djungelboken',
        latitude: 57.721111,
        longitude: 12.940278,
        answers: ['abc', 'bca', 'cba'],
        correctAnswer: 1,
        isVisited: true,
        isAnswered: true,
      },
      {
        id: 2,
        title: 'Drottningen',
        question: 'Vem var Drottningen i djungelboken',
        latitude: 57.731111,
        longitude: 12.944278,
        answers: ['abc', 'bca', 'cba'],
        correctAnswer: 2,
        isVisited: true,
        isAnswered: false,
      },
      {
        id: 3,
        title: 'Knekten',
        question: 'Vem var Knekten i djungelboken',
        latitude: 57.736111,
        longitude: 12.947278,
        answers: ['abc', 'bca', 'cba'],
        correctAnswer: 2,
        isVisited: false,
        isAnswered: false,
      },
    ],
  },
];

export function getData(number: number) {
  return mockQuizWalks[number];
}
