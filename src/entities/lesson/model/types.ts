export type LessonNumber = string;

export type Lesson = {
  number: LessonNumber;
  title: string;
  content: LessonContent;
};

export type LessonContent = LessonParagraph | LessonNote;

export type LessonParagraph = string;

export type LessonNote = {
  id: string;
  title: string;
  text: string;
};

export type LessonLanguageText = {
  id: string;
  title: string;
  translation: string;
  text: string;
  vocabulary: Word[];
};

export type Word = {
  word: string;
  translation: string;
};
