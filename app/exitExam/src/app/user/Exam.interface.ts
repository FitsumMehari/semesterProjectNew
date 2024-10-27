export interface Exam {
  examTitle?: String,
  fieldofstudy?: String,
  questions?: [
    {
      question?: String;
      choices?: {
        a?: String;
        b?: String;
        c?: String;
        d?: String;
      };
      answer?: String;
    }
  ];
}
