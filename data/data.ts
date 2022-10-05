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
        title: 'Invånare Borås',
        question: 'Hur många invånare har Borås kommun? (cirka)',
        latitude: 57.721111,
        longitude: 12.940278,
        answers: ['80,000', '155,000', '115,000'],
        correctAnswer: 3,
        isVisited: false,
        isAnswered: false,
      },
      {
        id: 2,
        title: 'Borås Grundare',
        question: 'Vem grundade staden Borås år 1621?',
        latitude: 57.7162,
        longitude: 12.9278,
        answers: [
          'Kung Gustav II Adolf',
          'Nils Göransson Stiernsköld',
          'Kung Gustav I Eriksson (Vasa)',
        ],
        correctAnswer: 1,
        isVisited: false,
        isAnswered: false,
      },
      {
        id: 3,
        title: 'Borås trance-band',
        question:
          'Vad hette trance-bandet ifrån Borås som blev populärt på sent 90-tal, med Bla låtarna "Essence of life", "One nation- Trance nation"',
        latitude: 57.736111,
        longitude: 12.947278,
        answers: ['Earthbound', 'Barbados', 'Antiloop'],
        correctAnswer: 1,
        isVisited: false,
        isAnswered: false,
      },
      {
        id: 4,
        title: 'Första fotbollsklubben',
        question:
          'Vi vet alla vilken fotbollsklubb som är störst i Borås, men vem var först?',
        latitude: 57.734111,
        longitude: 12.945278,
        answers: ['Elfsborg IF', 'Borås Atlet & IS', 'IK Ymer'],
        correctAnswer: 2,
        isVisited: false,
        isAnswered: false,
      },
      {
        id: 5,
        title: 'Första postorderföretaget',
        question:
          'Borås är alltid kallat en postorder-ort, men när fick vi vårt första postorder-företag?',
        latitude: 57.731111,
        longitude: 12.941278,
        answers: ['1937', '1875', '1909'],
        correctAnswer: 3,
        isVisited: false,
        isAnswered: false,
      },
      {
        id: 6,
        title: 'Stadsminister',
        question:
          'En forna svensk stadsminister kommer ursprungligen ifrån Borås, vem?',
        latitude: 57.732111,
        longitude: 12.942278,
        answers: ['Ingvar Carlsson', 'Göran Persson', 'Thorbjörn Fälldin'],
        correctAnswer: 1,
        isVisited: false,
        isAnswered: false,
      },
      {
        id: 7,
        title: 'Drutten',
        question:
          'Borås hockeyklubb hade ökänd rysk spelare som kallades "Drutten" vad var hans riktiga namn?',
        latitude: 57.737111,
        longitude: 12.947278,
        answers: [
          'Sergei Fokin',
          'Nikolaj Vladimirovitj Drozdetskij',
          'Ivan Sergei Drottodoski',
        ],
        correctAnswer: 2,
        isVisited: false,
        isAnswered: false,
      },
      {
        id: 8,
        title: 'Vad väger pinocchio',
        question:
          '"Pinocchio" eller "Walking to Borås" som den egentligen heter, är en känd skulptur i Borås, men vad väger den?',
        latitude: 57.738111,
        longitude: 12.948278,
        answers: ['Tre ton', 'Två ton', 'Ett halvt ton'],
        correctAnswer: 1,
        isVisited: false,
        isAnswered: false,
      },
      {
        id: 9,
        title: 'Borås Tidning',
        question:
          'Borås Tidning har funnits med länge, men när grundades tidningen?',
        latitude: 57.72543040275503,
        longitude: 12.936820470774293,
        answers: ['1880', '1750', '1826'],
        correctAnswer: 3,
        isVisited: false,
        isAnswered: false,
      },
    ],
  },
];

export function getData(number: number) {
  return mockQuizWalks[number];
}
