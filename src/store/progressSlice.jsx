import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [
    {
      id: 1,
      name: "Matemática",
      totalLessons: 20,
      completedLessons: 8,
    },
    {
      id: 2,
      name: "Português",
      totalLessons: 15,
      completedLessons: 10,
    },
    {
      id: 3,
      name: "Literatura",
      totalLessons: 12,
      completedLessons: 12,
    },
    {
      id: 4,
      name: "Física",
      totalLessons: 12,
      completedLessons: 4,
    },
    {
      id: 5,
      name: "Química",
      totalLessons: 12,
      completedLessons: 6,
    },
    {
      id: 6,
      name: "Biologia",
      totalLessons: 12,
      completedLessons: 8,
    },
    {
      id: 7,
      name: "Geografia",
      totalLessons: 12,
      completedLessons: 11,
    },
    {
      id: 3,
      name: "Inglês",
      totalLessons: 12,
      completedLessons: 12,
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