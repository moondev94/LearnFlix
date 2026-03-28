import { createSlice } from "@reduxjs/toolkit";

const generateLessons = (total, completed) => {
  const lessons = [];

  for (let i = 1; i <= total; i++) {
    lessons.push({
      id: i,
      title: `Aula ${i}`,
      completed: i <= completed,
      bookmarked: false,
    });
  }

  return lessons;
};

const initialState = {
  courses: [
    {
      id: 1,
      name: "Matemática",
      lessons: generateLessons(20, 8),
    },
    {
      id: 2,
      name: "Português",
      lessons: generateLessons(15, 10),
    },
    {
      id: 3,
      name: "Literatura",
      lessons: generateLessons(12, 12),
    },
    {
      id: 4,
      name: "Física",
      lessons: generateLessons(12, 4),
    },
    {
      id: 5,
      name: "Química",
      lessons: generateLessons(12, 6),
    },
    {
      id: 6,
      name: "Biologia",
      lessons: generateLessons(12, 8),
    },
    {
      id: 7,
      name: "Geografia",
      lessons: generateLessons(12, 11),
    },
    {
      id: 8,
      name: "Inglês",
      lessons: generateLessons(12, 12),
    },
  ],
};

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    completeLesson: (state, action) => {
      const course = state.courses.find(
        (course) => course.id === action.payload
      );

      if (course && course.completedLessons < course.totalLessons) {
        course.completedLessons += 1;
      }
    },
  },
});

export const { completeLesson } = progressSlice.actions;
export default progressSlice.reducer;