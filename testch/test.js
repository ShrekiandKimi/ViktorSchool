const usersDatabase = {
  teacher: {
    login: "teacher",
    password: "teacher123",
    name: "Учитель",
    role: "teacher",
  },
  students: {
    nastya: {
      login: "nastya",
      password: "nastya2024",
      name: "Настя",
      role: "student",
      avatar: "../nastya-avatar.jpg",
    },
    valya: {
      login: "valya",
      password: "valya2024",
      name: "Валя",
      role: "student",
      avatar: "../valya-avatar.jpg",
    },
    artem: {
      login: "artem",
      password: "artem2024",
      name: "Артем",
      role: "student",
      avatar: "../artem-avatar.jpg",
    },
  },
};

let currentUser = null;
let selectedStudent = null;

const testsData = {
  1: [
    {
      number: 1,
      points: 1,
      image: "v1z1.png",
      options: [
        { id: "A", text: "3517" },
        { id: "B", text: "4224" },
        { id: "C", text: "1324" },
        { id: "D", text: "2117" },
      ],
      correct: "A",
    },
    {
      number: 2,
      points: 1,
      image: "v1z2.png",
      options: [
        { id: "A", text: "642" },
        { id: "B", text: "1240" },
        { id: "C", text: "500" },
        { id: "D", text: "243" },
      ],
      correct: "C",
    },
    {
      number: 3,
      points: 1,
      image: "v1z3.png",
      options: [
        { id: "A", text: "8" },
        { id: "B", text: "2" },
        { id: "C", text: "4" },
        { id: "D", text: "11" },
      ],
      correct: "C",
    },
    {
      number: 4,
      points: 1,
      image: "v1z4.png",
      options: [
        { id: "A", text: "821" },
        { id: "B", text: "1210" },
        { id: "C", text: "500" },
        { id: "D", text: "152" },
      ],
      correct: "C",
    },
    {
      number: 5,
      points: 1,
      image: "v1z5.png",
      options: [
        { id: "A", text: "821" },
        { id: "B", text: "921" },
        { id: "C", text: "129" },
        { id: "D", text: "672" },
      ],
      correct: "D",
    },
  ],
  2: [
    {
      number: 1,
      points: 1,
      image: "v2z1.png",
      options: [
        { id: "A", text: "312" },
        { id: "B", text: "123" },
        { id: "C", text: "231" },
        { id: "D", text: "321" },
      ],
      correct: "A",
    },
    {
      number: 2,
      points: 1,
      image: "v2z2.png",
      options: [
        { id: "A", text: "15,4" },
        { id: "B", text: "11,5" },
        { id: "C", text: "32,1" },
        { id: "D", text: "21,2" },
      ],
      correct: "A",
    },
    {
      number: 3,
      points: 1,
      image: "v2z3.png",
      options: [
        { id: "A", text: "11500" },
        { id: "B", text: "21211" },
        { id: "C", text: "17900" },
        { id: "D", text: "22300" },
      ],
      correct: "D",
    },
    {
      number: 4,
      points: 1,
      image: "v2z4.png",
      options: [
        { id: "A", text: "17550" },
        { id: "B", text: "12200" },
        { id: "C", text: "17900" },
        { id: "D", text: "23050" },
      ],
      correct: "A",
    },
    {
      number: 5,
      points: 1,
      image: "v2z5.png",
      options: [
        { id: "A", text: "52" },
        { id: "B", text: "48" },
        { id: "C", text: "50" },
        { id: "D", text: "45" },
      ],
      correct: "C",
    },
  ],
  3: [
    {
      number: 1,
      points: 1,
      image: "v3z1.png",
      options: [
        { id: "A", text: "1236" },
        { id: "B", text: "6321" },
        { id: "C", text: "1326" },
        { id: "D", text: "5324" },
      ],
      correct: "A",
    },
    {
      number: 2,
      points: 1,
      image: "v3z2.png",
      options: [
        { id: "A", text: "32" },
        { id: "B", text: "64" },
        { id: "C", text: "16" },
        { id: "D", text: "54" },
      ],
      correct: "D",
    },
    {
      number: 3,
      points: 1,
      image: "v3z3.png",
      options: [
        { id: "A", text: "4" },
        { id: "B", text: "6" },
        { id: "C", text: "3" },
        { id: "D", text: "8" },
      ],
      correct: "A",
    },
    {
      number: 4,
      points: 1,
      image: "v3z4.png",
      options: [
        { id: "A", text: "2" },
        { id: "B", text: "3,5" },
        { id: "C", text: "2,25" },
        { id: "D", text: "1,75" },
      ],
      correct: "D",
    },
    {
      number: 5,
      points: 1,
      image: "v3z5.png",
      options: [
        { id: "A", text: "1600" },
        { id: "B", text: "2500" },
        { id: "C", text: "2000" },
        { id: "D", text: "1700" },
      ],
      correct: "C",
    },
  ],
  4: [
    {
      number: 1,
      points: 1,
      image: "v4z1.png",
      options: [
        { id: "A", text: "3421" },
        { id: "B", text: "3241" },
        { id: "C", text: "2431" },
        { id: "D", text: "1423" },
      ],
      correct: "A",
    },
    {
      number: 2,
      points: 1,
      image: "v4z2.png",
      options: [
        { id: "A", text: "1" },
        { id: "B", text: "3" },
        { id: "C", text: "2" },
        { id: "D", text: "4" },
      ],
      correct: "C",
    },
    {
      number: 3,
      points: 1,
      image: "v4z3.png",
      options: [
        { id: "A", text: "312,5" },
        {
          id: "B",
          text: "311,85 (если что это тоже правильный ответ (но нужно найти другой)",
        },
        { id: "C", text: "282,12" },
        { id: "D", text: "311,15" },
      ],
      correct: "A",
    },
    {
      number: 4,
      points: 1,
      image: "v4z4.png",
      options: [
        { id: "A", text: "60" },
        { id: "B", text: "55" },
        { id: "C", text: "70" },
        { id: "D", text: "75" },
      ],
      correct: "C",
    },
    {
      number: 5,
      points: 1,
      image: "v4z5.png",
      options: [
        { id: "A", text: "22" },
        { id: "B", text: "38" },
        { id: "C", text: "17" },
        { id: "D", text: "21" },
      ],
      correct: "D",
    },
  ],
  5: [
    {
      number: 1,
      points: 1,
      image: "v5z1.png",
      options: [
        { id: "A", text: "2643" },
        { id: "B", text: "6243" },
        { id: "C", text: "2463" },
        { id: "D", text: "3452" },
      ],
      correct: "A",
    },
    {
      number: 2,
      points: 1,
      image: "v5z2.png",
      options: [
        { id: "A", text: "64" },
        { id: "B", text: "55" },
        { id: "C", text: "68" },
        { id: "D", text: "71" },
      ],
      correct: "A",
    },
    {
      number: 3,
      points: 1,
      image: "v5z3.png",
      options: [
        { id: "A", text: "625" },
        {
          id: "B",
          text: "611,5",
        },
        { id: "C", text: "590" },
        { id: "D", text: "725,5" },
      ],
      correct: "A",
    },
    {
      number: 4,
      points: 1,
      image: "v5z4.png",
      options: [
        { id: "A", text: "25" },
        { id: "B", text: "30" },
        { id: "C", text: "24" },
        { id: "D", text: "27" },
      ],
      correct: "D",
    },
    {
      number: 5,
      points: 1,
      image: "v5z5.png",
      options: [
        { id: "A", text: "2100" },
        { id: "B", text: "2800" },
        { id: "C", text: "2556" },
        { id: "D", text: "2452" },
      ],
      correct: "C",
    },
  ],
  6: [
    {
      number: 1,
      points: 1,
      image: "v6z1.png",
      options: [
        { id: "A", text: "324" },
        { id: "B", text: "432" },
        { id: "C", text: "423" },
        { id: "D", text: "142" },
      ],
      correct: "C",
    },
    {
      number: 2,
      points: 1,
      image: "v6z2.png",
      options: [
        { id: "A", text: "17" },
        { id: "B", text: "12" },
        { id: "C", text: "5" },
        { id: "D", text: "21" },
      ],
      correct: "A",
    },
    {
      number: 3,
      points: 1,
      image: "v6z3.png",
      options: [
        { id: "A", text: "12" },
        {
          id: "B",
          text: "15",
        },
        { id: "C", text: "11,5" },
        { id: "D", text: "13" },
      ],
      correct: "D",
    },
    {
      number: 4,
      points: 1,
      image: "v6z4.png",
      options: [
        { id: "A", text: "65" },
        { id: "B", text: "85" },
        { id: "C", text: "80" },
        { id: "D", text: "73" },
      ],
      correct: "B",
    },
    {
      number: 5,
      points: 1,
      image: "v6z5.png",
      options: [
        { id: "A", text: "1331" },
        { id: "B", text: "1321" },
        { id: "C", text: "1272" },
        { id: "D", text: "1739" },
      ],
      correct: "C",
    },
  ],
  7: [
    {
      number: 1,
      points: 1,
      image: "v7z1.png",
      options: [
        { id: "A", text: "3642" },
        { id: "B", text: "2346" },
        { id: "C", text: "2643" },
        { id: "D", text: "4632" },
      ],
      correct: "B",
    },
    {
      number: 2,
      points: 1,
      image: "v7z2.png",
      options: [
        { id: "A", text: "19" },
        { id: "B", text: "47" },
        { id: "C", text: "51" },
        { id: "D", text: "32" },
      ],
      correct: "D",
    },
    {
      number: 3,
      points: 1,
      image: "v7z3.png",
      options: [
        { id: "A", text: "3,2" },
        {
          id: "B",
          text: "4,6",
        },
        { id: "C", text: "3,25" },
        { id: "D", text: "3" },
      ],
      correct: "A",
    },
    {
      number: 4,
      points: 1,
      image: "v7z4.png",
      options: [
        { id: "A", text: "49" },
        { id: "B", text: "50" },
        { id: "C", text: "51" },
        { id: "D", text: "52 хайп" },
      ],
      correct: "B",
    },
    {
      number: 5,
      points: 1,
      image: "v7z5.png",
      options: [
        { id: "A", text: "820" },
        { id: "B", text: "760" },
        { id: "C", text: "790" },
        { id: "D", text: "910" },
      ],
      correct: "A",
    },
  ],
  8: [
    {
      number: 1,
      points: 1,
      image: "v8z1.png",
      options: [
        { id: "A", text: "2931" },
        { id: "B", text: "1221" },
        { id: "C", text: "2650" },
        { id: "D", text: "2440" },
      ],
      correct: "D",
    },
    {
      number: 2,
      points: 1,
      image: "v8z2.png",
      options: [
        { id: "A", text: "15,9" },
        { id: "B", text: "11,5" },
        { id: "C", text: "32,1" },
        { id: "D", text: "18,3" },
      ],
      correct: "D",
    },
    {
      number: 3,
      points: 1,
      image: "v8z3.png",
      options: [
        { id: "A", text: "1,6" },
        {
          id: "B",
          text: "3,2",
        },
        { id: "C", text: "1,72" },
        { id: "D", text: "2,12" },
      ],
      correct: "A",
    },
    {
      number: 4,
      points: 1,
      image: "v8z4.png",
      options: [
        { id: "A", text: "120,5" },
        { id: "B", text: "137,8" },
        { id: "C", text: "116,2" },
        { id: "D", text: "121,3" },
      ],
      correct: "B",
    },
    {
      number: 5,
      points: 1,
      image: "v8z5.png",
      options: [
        { id: "A", text: "423O" },
        { id: "B", text: "3360" },
        { id: "C", text: "7210" },
        { id: "D", text: "9100" },
      ],
      correct: "B",
    },
  ],
  9: [
    {
      number: 1,
      points: 1,
      image: "v9z1.png",
      options: [
        { id: "A", text: "265" },
        { id: "B", text: "245" },
        { id: "C", text: "275" },
        { id: "D", text: "245" },
      ],
      correct: "A",
    },
    {
      number: 2,
      points: 1,
      image: "v9z2.png",
      options: [
        { id: "A", text: "3,5" },
        { id: "B", text: "5,5" },
        { id: "C", text: "1,25" },
        { id: "D", text: "4,6" },
      ],
      correct: "A",
    },
    {
      number: 3,
      points: 1,
      image: "v9z3.png",
      options: [
        { id: "A", text: "15,8" },
        {
          id: "B",
          text: "32,1",
        },
        { id: "C", text: "15" },
        { id: "D", text: "18" },
      ],
      correct: "A",
    },
    {
      number: 4,
      points: 1,
      image: "v9z4.png",
      options: [
        { id: "A", text: "677,7" },
        { id: "B", text: "214,2" },
        { id: "C", text: "525,2" },
        { id: "D", text: "920,1" },
      ],
      correct: "A",
    },
    {
      number: 5,
      points: 1,
      image: "v9z5.png",
      options: [
        { id: "A", text: "2,75" },
        { id: "B", text: "2,7" },
        { id: "C", text: "2,4" },
        { id: "D", text: "2,45" },
      ],
      correct: "B",
    },
  ],
  10: [
    {
      number: 1,
      points: 1,
      image: "v10z1.png",
      options: [
        { id: "A", text: "13" },
        { id: "B", text: "14" },
        { id: "C", text: "15" },
        { id: "D", text: "12" },
      ],
      correct: "A",
    },
    {
      number: 2,
      points: 1,
      image: "v10z2.png",
      options: [
        { id: "A", text: "70" },
        { id: "B", text: "71" },
        { id: "C", text: "72" },
        { id: "D", text: "73" },
      ],
      correct: "B",
    },
    {
      number: 3,
      points: 1,
      image: "v10z3.png",
      options: [
        { id: "A", text: "53" },
        {
          id: "B",
          text: "57",
        },
        { id: "C", text: "61" },
        { id: "D", text: "58" },
      ],
      correct: "D",
    },
    {
      number: 4,
      points: 1,
      image: "v10z4.png",
      options: [
        { id: "A", text: "105" },
        { id: "B", text: "110" },
        { id: "C", text: "115" },
        { id: "D", text: "95" },
      ],
      correct: "A",
    },
    {
      number: 5,
      points: 1,
      image: "v10z5.png",
      options: [
        { id: "A", text: "84" },
        { id: "B", text: "85" },
        { id: "C", text: "86" },
        { id: "D", text: "87" },
      ],
      correct: "C",
    },
  ],
  11: [
    {
      number: 1,
      points: 1,
      question: "Является ли OD биссектрисой?",
      image: "v11z1.png",
      options: [
        { id: "A", text: "Да" },
        { id: "B", text: "Нет" },
      ],
      correct: "A",
    },
    {
      number: 2,
      points: 1,
      image: "v11z2.png",
      question: "Вертикальные ли углы?",
      options: [
        { id: "A", text: "Да" },
        { id: "B", text: "Нет" },
      ],
      correct: "A",
    },
    {
      number: 3,
      points: 1,
      question: "Что за вертикальные углы?",
      options: [
        { id: "A", text: "уголочки друг на против друга" },
        {
          id: "B",
          text: "Это два рядом стоящих угла , они равны",
        },
        {
          id: "C",
          text: "Это противоположно лежащие уголочки, возникшие при пересечении двух прямых",
        },
        {
          id: "D",
          text: "Это противоположно лежащие равные, уголочки, возникшие при пересечении двух прямых",
        },
      ],
      solutionImage: "v1z1.png",
      correct: "D",
    },
    {
      number: 4,
      points: 1,
      image: "v11z3.png",
      question:
        "Какие углы являются накрест лежащие? В ответ указать все цифры по возврастанию",
      inputType: true,
      correct: "3456",
    },
    {
      number: 5,
      points: 1,
      image: "v11z3.png",
      inputType: true,
      question:
        "Какие углы являются соответственными? В ответ указать все цифры по возврастанию",
      correct: "12345678",
    },
  ],
  12: [
    {
      number: 1,
      points: 1,
      image: "v12z1.png",
      question: "Если уголочек ACO равен 30 градусам, то уголочек DCO = ",
      inputType: true,
      correct: "150",
    },
    {
      number: 2,
      points: 1,
      image: "v12z2.png",
      question: "Уголочек AOB равен 52 градусам, а угол DOC = ",
      inputType: true,
      correct: "52",
    },
    {
      number: 3,
      points: 1,
      image: "v12z3.png",
      question: "С каким углом, угол 1 равен как вертикальные ?",
      inputType: true,
      correct: "3",
    },
    {
      number: 4,
      points: 1,
      image: "v12z3.png",
      question: "С каким углом, угол 1 равен как соответственные ?",
      inputType: true,
      correct: "5",
    },
    {
      number: 4,
      points: 1,
      image: "v12z3.png",
      question: "С каким углом, угол 4 равен как накрест лежащие ?",
      inputType: true,
      correct: "6",
    },
    {
      number: 5,
      points: 1,
      image: "v12z3.png",
      question:
        "Углы 3 и 6, прям как и 4 и 5 являются односторонними углами при двух параллельных прямых и секущей, ЗНАЧИТ в сумме они дают ",
      inputType: true,
      correct: "180",
    },
  ],
  13: [
    {
      number: 1,
      points: 1,
      image: "v13z1.png",
      question: "",
      inputType: true,
      correct: "72",
      solutionImage: "v13z1a.png",
    },
    {
      number: 2,
      points: 1,
      image: "v13z2.png",
      question: "",
      inputType: true,
      correct: "747",
      solutionImage: "v13z2a.png",
    },
    {
      number: 3,
      points: 1,
      image: "v13z3.png",
      question: "",
      inputType: true,
      correct: "86",
      solutionImage: "v13z3a.png",
    },
    {
      number: 4,
      points: 1,
      image: "v13z4.png",
      question: "",
      inputType: true,
      correct: "61,5",
      solutionImage: "v13z4a.png",
    },
    {
      number: 5,
      points: 1,
      image: "v13z5.png",
      question: "",
      inputType: true,
      correct: "21",
      solutionImage: "v13z5a.png",
    },
    {
      number: 6,
      points: 1,
      image: "v13z6.png",
      question: "",
      inputType: true,
      correct: "118",
      solutionImage: "v13z6a.png",
    },
    {
      number: 7,
      points: 1,
      image: "v13z7.png",
      question: "",
      inputType: true,
      correct: "32",
      solutionImage: "v13z7a.png",
    },
  ],
  14: [
    {
      number: 1,
      points: 1,
      image: "v14z1.png",
      question: "",
      inputType: true,
      correct: "12",
      solutionImage: "v14z1a.png",
    },
    {
      number: 2,
      points: 1,
      image: "v14z2.png",
      question: "",
      inputType: true,
      correct: "18",
      solutionImage: "v14z2a.png",
    },
    {
      number: 3,
      points: 1,
      image: "v14z3.png",
      question: "",
      inputType: true,
      correct: "240",
      solutionImage: "v14z3a.png",
    },
    {
      number: 4,
      points: 1,
      image: "v14z4.png",
      question: "",
      inputType: true,
      correct: "25",
      solutionImage: "v14z4a.png",
    },
    {
      number: 5,
      points: 1,
      image: "v14z5.png",
      question: "",
      inputType: true,
      correct: "8",
      solutionImage: "v14z5a.png",
    },
    {
      number: 6,
      points: 1,
      image: "v14z6.png",
      question: "",
      inputType: true,
      correct: "3",
      solutionImage: "v14z6a.png",
    },
    {
      number: 7,
      points: 1,
      image: "v14z7.png",
      question: "",
      inputType: true,
      correct: "25",
      solutionImage: "v14z7a.png",
    },
  ],
  15: [
    {
      number: 1,
      points: 1,
      image: "v15z1.png",
      question: "",
      inputType: true,
      correct: "1",
      solutionImage: "v15z1a.png",
    },
    {
      number: 2,
      points: 1,
      image: "v15z2.png",
      question: "",
      inputType: true,
      correct: "3",
      solutionImage: "v15z2a.png",
    },
    {
      number: 3,
      points: 1,
      image: "v15z3.png",
      question: "",
      inputType: true,
      correct: "35",
      solutionImage: "v15z3a.png",
    },
    {
      number: 4,
      points: 1,
      image: "v15z4.png",
      question: "",
      inputType: true,
      correct: "4",
      solutionImage: "v15z4a.png",
    },
    {
      number: 5,
      points: 1,
      image: "v15z5.png",
      question: "",
      inputType: true,
      correct: "3,5",
      solutionImage: "v15z5a.png",
    },
    {
      number: 6,
      points: 1,
      image: "v15z6.png",
      question: "",
      inputType: true,
      correct: "8",
      solutionImage: "v15z6a.png",
    },
    {
      number: 7,
      points: 1,
      image: "v15z7.png",
      question: "",
      inputType: true,
      correct: "7",
      solutionImage: "v15z7a.png",
    },
  ],
  16: [
    {
      number: 1,
      points: 1,
      image: "v16z1.png",
      question: "",
      inputType: true,
      correct: "13",
      solutionImage: "v16z1a.png",
    },
    {
      number: 2,
      points: 1,
      image: "v16z2.png",
      question: "",
      inputType: true,
      correct: "123",
      solutionImage: "v16z2a.png",
    },
    {
      number: 3,
      points: 1,
      image: "v16z3.png",
      question: "",
      inputType: true,
      correct: "1",
      solutionImage: "v16z3a.png",
    },
    {
      number: 4,
      points: 1,
      image: "v16z4.png",
      question: "",
      inputType: true,
      correct: "23",
      solutionImage: "v16z4a.png",
    },
    {
      number: 5,
      points: 1,
      image: "v16z5.png",
      question: "",
      inputType: true,
      correct: "3",
      solutionImage: "v16z5a.png",
    },
    {
      number: 6,
      points: 1,
      image: "v16z6.png",
      question: "",
      inputType: true,
      correct: "3",
      solutionImage: "v16z6a.png",
    },
    {
      number: 7,
      points: 1,
      image: "v16z7.png",
      question: "",
      inputType: true,
      correct: "23",
      solutionImage: "v16z7a.png",
    },
  ],
  18: [
    {
      number: 1,
      points: 1,
      image: "v18z1.png",
      question: "",
      inputType: true,
      correct: "1",
      solutionImage: "v18z1a.png",
    },
    {
      number: 2,
      points: 1,
      image: "v18z2.png",
      question: "",
      inputType: true,
      correct: "3",
      solutionImage: "v18z2a.png",
    },
    {
      number: 3,
      points: 1,
      image: "v18z3.png",
      question: "",
      inputType: true,
      correct: "3",
      solutionImage: "v18z3a.png",
    },
    {
      number: 4,
      points: 1,
      image: "v18z4.png",
      question: "",
      inputType: true,
      correct: "2",
      solutionImage: "v18z4a.png",
    },
    {
      number: 5,
      points: 1,
      image: "v18z5.png",
      question: "",
      inputType: true,
      correct: "3",
      solutionImage: "v18z5a.png",
    },
    {
      number: 6,
      points: 1,
      image: "v18z6.png",
      question: "",
      inputType: true,
      correct: "1",
      solutionImage: "v18z6a.png",
    },
    {
      number: 7,
      points: 1,
      image: "v18z7.png",
      question: "",
      inputType: true,
      correct: "2",
      solutionImage: "v18z7a.png",
    },
  ],
  17: [
    {
      number: 1,
      points: 1,
      image: "v17z1.png",
      question: "",
      inputType: true,
      correct: "270",
      solutionImage: "v17z1a.png",
    },
    {
      number: 2,
      points: 1,
      image: "v17z2.png",
      question: "",
      inputType: true,
      correct: "0,0000335",
      solutionImage: "v17z2a.png",
    },
    {
      number: 3,
      points: 1,
      image: "v17z3.png",
      question: "",
      inputType: true,
      correct: "-0,05",
      solutionImage: "v17z3a.png",
    },
    {
      number: 4,
      points: 1,
      image: "v17z4.png",
      question: "",
      inputType: true,
      correct: "0,95",
      solutionImage: "v17z4a.png",
    },
    {
      number: 5,
      points: 1,
      image: "v17z5.png",
      question: "",
      inputType: true,
      correct: "-0,5",
      solutionImage: "v17z5a.png",
    },
    {
      number: 6,
      points: 1,
      image: "v17z6.png",
      question: "",
      inputType: true,
      correct: "3,7",
      solutionImage: "v17z6a.png",
    },
    {
      number: 7,
      points: 1,
      image: "v17z7.png",
      question: "",
      inputType: true,
      correct: "0,8",
      solutionImage: "v17z7a.png",
    },
  ],
};

let currentTest = 0;
let currentTaskIndex = 0;
let userAnswers = {};

document.addEventListener("DOMContentLoaded", function () {
  initAuthSystem();
  document.querySelectorAll(".category-section").forEach((section) => {
    section.classList.add("collapsed");
  });
  document.getElementById("next-btn").addEventListener("click", nextTask);
});

function createTasksNavigation() {
  const tasksNav = document.getElementById("tasks-nav");
  tasksNav.innerHTML = "";

  const test = testsData[currentTest];

  for (let i = 0; i < test.length; i++) {
    const tab = document.createElement("div");
    tab.className = "task-tab";
    tab.textContent = i + 1;
    tab.dataset.index = i;

    if (i === currentTaskIndex) {
      tab.classList.add("active");
    }

    if (userAnswers[i] !== undefined) {
      tab.classList.add("answered");
    }

    tab.addEventListener("click", function () {
      goToTask(parseInt(this.dataset.index));
    });

    tasksNav.appendChild(tab);
  }
}

function goToTask(taskIndex) {
  currentTaskIndex = taskIndex;
  displayTask();
}

function displayTask() {
  const task = testsData[currentTest][currentTaskIndex];
  const taskContainer = document.getElementById("task-container");

  let answerSection = "";

  if (task.inputType) {
    answerSection = `
      <div class="input-answer">
        <label for="answer-input">Ваш ответ:</label>
        <input type="text" id="answer-input" class="answer-input" 
               value="${userAnswers[currentTaskIndex] || ""}" 
               oninput="handleInputAnswer(this.value)">
      </div>
    `;
  } else {
    answerSection = task.options
      .map(
        (opt) => `
      <div class="option" onclick="selectOption(this, '${opt.id}')">
        ${opt.id}) ${opt.text}
      </div>
    `
      )
      .join("");
  }

  taskContainer.innerHTML = `
    <div class="task">
      <div class="task-header">
        <div class="task-number">${task.number}</div>
        <div class="task-points">${task.points} балл${
    task.points > 1 ? "а" : ""
  }</div>
      </div>
      <div class="task-question">
        ${
          task.question
            ? `<div class="question-text">${task.question}</div>`
            : ""
        }
        ${
          task.image
            ? `<img src="${task.image}" alt="Задание ${task.number}" class="task-image">`
            : ""
        }
      </div>
      <div class="options">
        ${answerSection}
      </div>
    </div>
  `;
  const prevButton = document.getElementById("prev-btn");
  if (currentTaskIndex === 0) {
    prevButton.textContent = "Вернуться";
    prevButton.onclick = returnToMenu;
  } else {
    prevButton.textContent = "Назад";
    prevButton.onclick = prevTask;
  }

  const nextButton = document.getElementById("next-btn");
  if (currentTaskIndex === testsData[currentTest].length - 1) {
    nextButton.textContent = "Завершить";
  } else {
    nextButton.textContent = "Далее";
  }

  if (userAnswers[currentTaskIndex]) {
    const options = document.querySelectorAll(".option");
    options.forEach((opt) => {
      if (opt.textContent.startsWith(userAnswers[currentTaskIndex])) {
        opt.classList.add("selected");
      }
    });
  }

  createTasksNavigation();
}

function startTest(testNumber) {
  currentTest = testNumber;
  currentTaskIndex = 0;
  userAnswers = {};
  document
    .getElementById("text-tasks-container")
    .closest(".category-section").style.display = "none";
  document
    .getElementById("geometry-tasks-container")
    .closest(".category-section").style.display = "none";
  document
    .getElementById("algebra-tasks-container")
    .closest(".category-section").style.display = "none";
  document.getElementById("test-container").style.display = "block";
  document.getElementById("result-container").style.display = "none";

  displayTask();
}

function selectOption(element, optionId) {
  const options = element.parentElement.querySelectorAll(".option");
  options.forEach((opt) => opt.classList.remove("selected"));
  element.classList.add("selected");
  userAnswers[currentTaskIndex] = optionId;

  createTasksNavigation();
}

function nextTask() {
  if (currentTaskIndex === testsData[currentTest].length - 1) {
    showResults();
    return;
  }

  currentTaskIndex++;
  displayTask();
}

function prevTask() {
  if (currentTaskIndex > 0) {
    currentTaskIndex--;
    displayTask();
  }
}

function returnToMenu() {
  document.getElementById("test-container").style.display = "none";
  document.querySelectorAll(".category-section").forEach((section) => {
    section.style.display = "block"; // Показываем все категории
  });
}

function showResults() {
  const test = testsData[currentTest];
  let correctCount = 0;
  let totalPoints = 0;
  const maxPoints = test.reduce((sum, task) => sum + task.points, 0);

  for (let i = 0; i < test.length; i++) {
    if (userAnswers[i] === test[i].correct) {
      correctCount++;
      totalPoints += test[i].points;
    }
  }

  document.getElementById("correct-answers").textContent = correctCount;
  document.getElementById("total-tasks").textContent = test.length;
  document.getElementById("total-points").textContent = totalPoints;
  document.getElementById("max-points").textContent = maxPoints;
  document.getElementById("final-score").textContent = totalPoints;

  const progressPercent = (correctCount / test.length) * 100;
  document.getElementById("progress-bar").style.width = `${progressPercent}%`;

  const resultText = document.getElementById("result-text");

  showAnswersDetails(test);

  document.getElementById("test-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";
}

function showAnswersDetails(test) {
  const answersList = document.getElementById("answers-list");
  answersList.innerHTML = "";

  for (let i = 0; i < test.length; i++) {
    const task = test[i];
    let userAnswer = userAnswers[i] || "—";
    let isCorrect = false;

    if (task.inputType) {
      const normalizedUser = userAnswer.toString().trim().toLowerCase();
      const normalizedCorrect = task.correct.toString().trim().toLowerCase();
      isCorrect = normalizedUser === normalizedCorrect;
    } else {
      isCorrect = userAnswer === task.correct;
    }

    const answerElement = document.createElement("div");
    answerElement.className = `answer-detail ${
      isCorrect ? "correct" : "incorrect"
    }`;

    let imageHtml = "";
    if (task.image) {
      imageHtml = `<div class="answer-image"><img src="${task.image}" alt="Задание ${task.number}"></div>`;
    }

    // Добавляем изображение решения, если оно есть и ответ неправильный
    let solutionHtml = "";
    if (!isCorrect && task.solutionImage) {
      solutionHtml = `
        <div class="solution-section">
          <h4 class="solution-title">Решение задания:</h4>
          <div class="solution-image">
            <img src="${task.solutionImage}" alt="Решение задания ${task.number}" class="zoomable">
          </div>
        </div>
      `;
    }

    const answerComparison = task.inputType
      ? `
        <div class="answer-comparison">
          <div class="answer-user">
            <span>Ваш ответ:</span>
            <span class="user-answer">${userAnswer}</span>
          </div>
          <div class="answer-correct">
            <span>Правильный ответ:</span>
            <span class="correct-answer">${task.correct}</span>
          </div>
        </div>
      `
      : `
        <div class="answer-comparison">
          <div class="answer-user">
            <span>Ваш ответ:</span>
            <span class="user-answer">${userAnswer}</span>
          </div>
          <div class="answer-correct">
            <span>Правильный ответ:</span>
            <span class="correct-answer">${task.correct}</span>
          </div>
        </div>
      `;

    answerElement.innerHTML = `
      <div class="answer-header">
        <div class="answer-number">Задание ${task.number}</div>
        <div class="answer-status">${
          isCorrect ? "Правильно" : "Неправильно"
        }</div>
      </div>
      ${
        task.question ? `<div class="question-text">${task.question}</div>` : ""
      }
      ${imageHtml}
      ${answerComparison}
      ${solutionHtml}
    `;

    answersList.appendChild(answerElement);
  }
}

function restartTest() {
  document.getElementById("result-container").style.display = "none";
  document.querySelectorAll(".category-section").forEach((section) => {
    section.style.display = "block"; // Показываем все категории
  });
}

function reviewAnswers() {
  document.getElementById("result-container").style.display = "none";

  const reviewContainer = document.createElement("div");
  reviewContainer.className = "review-container";
  reviewContainer.id = "review-container";

  reviewContainer.innerHTML = `
    <div class="review-header">
        <h2 class="review-title">Просмотр ваших ответов</h2>
        <button class="close-review" onclick="closeReview()">Закрыть</button>
    </div>
    <div id="review-tasks-container"></div>
  `;

  document.querySelector(".section").appendChild(reviewContainer);
  document.getElementById("review-container").style.display = "block";

  showReviewTasks();
}

function showReviewTasks() {
  const container = document.getElementById("review-tasks-container");
  container.innerHTML = "";

  const test = testsData[currentTest];

  for (let i = 0; i < test.length; i++) {
    const task = test[i];
    let userAnswer = userAnswers[i] || "—";
    let isCorrect = false;

    if (task.inputType) {
      const normalizedUser = userAnswer.toString().trim().toLowerCase();
      const normalizedCorrect = task.correct.toString().trim().toLowerCase();
      isCorrect = normalizedUser === normalizedCorrect;
    } else {
      isCorrect = userAnswer === task.correct;
    }

    const taskElement = document.createElement("div");
    taskElement.className = "task review-task";

    let optionsHtml = "";
    if (task.inputType) {
      optionsHtml = `
        <div class="input-answer-review ${isCorrect ? "correct" : "incorrect"}">
          <span>Ваш ответ: ${userAnswer}</span>
        </div>
      `;
    } else {
      optionsHtml = task.options
        .map((opt) => {
          let optionClass = "option";
          if (opt.id === userAnswer) {
            optionClass += isCorrect ? " correct" : " incorrect";
          }
          return `<div class="${optionClass}">${opt.id}) ${opt.text}</div>`;
        })
        .join("");
    }

    // Добавляем изображение решения, если оно есть и ответ неправильный
    let solutionHtml = "";
    if (!isCorrect && task.solutionImage) {
      solutionHtml = `
        <div class="solution-section">
          <h4 class="solution-title">Решение задания:</h4>
          <div class="solution-image">
            <img src="${task.solutionImage}" alt="Решение задания ${task.number}" class="zoomable">
          </div>
        </div>
      `;
    }

    taskElement.innerHTML = `
      <div class="task-header">
        <div class="task-number">${task.number}</div>
        <div class="task-points">${task.points} балл${
      task.points > 1 ? "а" : ""
    }</div>
      </div>
      <div class="task-question">
        ${
          task.question
            ? `<div class="question-text">${task.question}</div>`
            : ""
        }
        ${
          task.image
            ? `<img src="${task.image}" alt="Задание ${task.number}" class="task-image">`
            : ""
        }
      </div>
      <div class="options">
        ${optionsHtml}
      </div>
      <div class="review-answer-info">
        ${
          !isCorrect
            ? `
          <div class="correct-answer-review">
            Правильный ответ: ${task.correct}
          </div>
        `
            : ""
        }
      </div>
      ${solutionHtml}
    `;

    container.appendChild(taskElement);
  }
}

function closeReview() {
  document.getElementById("review-container").remove();
  document.getElementById("result-container").style.display = "block";
}

function handleInputAnswer(value) {
  userAnswers[currentTaskIndex] = value;
  createTasksNavigation();
}

const imageModal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.querySelector(".close-modal");

document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("task-image") ||
    e.target.classList.contains("answer-image") ||
    e.target.parentElement.classList.contains("answer-image")
  ) {
    if (e.target.tagName === "IMG") {
      modalImage.src = e.target.src;
    } else if (e.target.classList.contains("answer-image")) {
      modalImage.src = e.target.querySelector("img").src;
    }

    imageModal.style.display = "block";
    document.body.style.overflow = "hidden";
  }
});

closeModal.addEventListener("click", function () {
  imageModal.style.display = "none";
  document.body.style.overflow = "auto";
});

imageModal.addEventListener("click", function (e) {
  if (e.target === imageModal) {
    imageModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && imageModal.style.display === "block") {
    imageModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

function toggleCategory(categoryId) {
  const container = document.getElementById(`${categoryId}-container`);
  const categorySection = container.closest(".category-section");
  categorySection.classList.toggle("collapsed");
}

document.addEventListener("DOMContentLoaded", function () {
  // Инициализация кнопок
  document.querySelectorAll(".collapse-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const section = this.closest(".category-section");
      section.classList.toggle("collapsed");
    });
  });

  // Остальные обработчики...
});

function initAuthSystem() {
  const authModal = document.getElementById("auth-modal");
  const authButton = document.getElementById("auth-button");
  const closeAuth = document.querySelector(".close-auth");
  const typeSelectors = document.querySelectorAll(".type-selector");

  typeSelectors.forEach((selector) => {
    selector.addEventListener("click", function () {
      typeSelectors.forEach((s) => s.classList.remove("active"));
      this.classList.add("active");

      const type = this.dataset.type;
      document.getElementById("teacher-auth").style.display =
        type === "teacher" ? "block" : "none";
      document.getElementById("student-selection").style.display =
        type === "student" ? "block" : "none";
      document.getElementById("student-auth").style.display = "none";
    });
  });

  document.querySelectorAll(".student-option").forEach((option) => {
    option.addEventListener("click", function () {
      selectedStudent = this.dataset.student;
      const student = usersDatabase.students[selectedStudent];

      document.getElementById("student-selection").style.display = "none";
      document.getElementById("student-auth").style.display = "block";
      document.getElementById("student-name").textContent = student.name;
      document.getElementById("student-avatar").src = student.avatar;
    });
  });

  document.getElementById("back-to-types").addEventListener("click", () => {
    document.getElementById("student-selection").style.display = "none";
    document.getElementById("teacher-auth").style.display = "block";
  });

  document.getElementById("back-to-students").addEventListener("click", () => {
    document.getElementById("student-auth").style.display = "none";
    document.getElementById("student-selection").style.display = "block";
  });

  document.getElementById("teacher-submit").addEventListener("click", () => {
    const login = document.getElementById("teacher-login").value;
    const password = document.getElementById("teacher-password").value;

    if (
      login === usersDatabase.teacher.login &&
      password === usersDatabase.teacher.password
    ) {
      currentUser = usersDatabase.teacher;
      completeAuth();
    } else {
      alert("Неверный логин или пароль");
    }
  });

  document.getElementById("student-submit").addEventListener("click", () => {
    const password = document.getElementById("student-password").value;
    const student = usersDatabase.students[selectedStudent];

    if (password === student.password) {
      currentUser = student;
      completeAuth();
    } else {
      document.getElementById("student-error").textContent = "Неверный пароль";
    }
  });

  authButton.addEventListener("click", () => {
    authModal.style.display = "block";
    document.body.style.overflow = "hidden";
    resetAuthForms();
  });

  closeAuth.addEventListener("click", closeAuthModal);
  window.addEventListener("click", (e) => {
    if (e.target === authModal) closeAuthModal();
  });

  checkAuthStatus();
}

function completeAuth() {
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  updateAuthUI();
  closeAuthModal();
}

function updateAuthUI() {
  const authButton = document.getElementById("auth-button");
  const userContainer = document.createElement("div");
  userContainer.className = "user-info";

  const userName = document.createElement("span");
  userName.className = "user-name";
  userName.textContent = currentUser.name;
  userContainer.appendChild(userName);

  const logoutButton = document.createElement("button");
  logoutButton.className = "logout-button";
  logoutButton.textContent = "Выйти";
  logoutButton.addEventListener("click", logoutUser);
  userContainer.appendChild(logoutButton);

  authButton.replaceWith(userContainer);
}

function logoutUser() {
  currentUser = null;
  localStorage.removeItem("currentUser");
  location.reload();
}

function checkAuthStatus() {
  const savedUser = localStorage.getItem("currentUser");
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    updateAuthUI();
  }
}

function closeAuthModal() {
  document.getElementById("auth-modal").style.display = "none";
  document.body.style.overflow = "auto";
  resetAuthForms();
}

function resetAuthForms() {
  document.getElementById("teacher-login").value = "";
  document.getElementById("teacher-password").value = "";
  document.getElementById("student-password").value = "";
  document.getElementById("student-error").textContent = "";
  document.getElementById("teacher-auth").style.display = "block";
  document.getElementById("student-selection").style.display = "none";
  document.getElementById("student-auth").style.display = "none";
  document
    .querySelector(".type-selector[data-type='teacher']")
    .classList.add("active");
  document
    .querySelector(".type-selector[data-type='student']")
    .classList.remove("active");
}

document.addEventListener("click", function (e) {
  // Обрабатываем клики по изображениям заданий и решений
  if (
    e.target.classList.contains("task-image") ||
    e.target.classList.contains("answer-image") ||
    e.target.parentElement.classList.contains("answer-image") ||
    e.target.classList.contains("zoomable") ||
    e.target.parentElement.classList.contains("solution-image")
  ) {
    if (e.target.tagName === "IMG") {
      modalImage.src = e.target.src;
    } else if (
      e.target.classList.contains("answer-image") ||
      e.target.classList.contains("solution-image")
    ) {
      modalImage.src = e.target.querySelector("img").src;
    }

    imageModal.style.display = "block";
    document.body.style.overflow = "hidden";
  }
});
