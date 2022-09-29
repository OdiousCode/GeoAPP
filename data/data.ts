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
      },
      {
        id: 2,
        title: 'Drottningen',
        question: 'Vem var Drottningen i djungelboken',
        latitude: 24,
        longitude: 21,
        answers: ['abc', 'bca', 'cba'],
        correctAnswer: 2,
      },
    ],
  },
];

export function getData(number: number) {
  return mockQuizWalks[number];
}
