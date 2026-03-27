import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHolidays = createAsyncThunk(
  "calendar/fetchHolidays",
  async () => {
    const response = await fetch(
      "https://brasilapi.com.br/api/feriados/v1/2026"
    );

    const data = await response.json();
    return data;
  }
);

const initialState = {
  holidays: [],
  events: [],
  loading: false,
  error: null,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },

    removeEvent: (state, action) => {
      state.events = state.events.filter(
        (event) => event.id !== action.payload
      );
    },

    updateEvent: (state, action) => {
      const index = state.events.findIndex(
        (event) => event.id === action.payload.id
      );

      if (index !== -1) {
        state.events[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHolidays.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHolidays.fulfilled, (state, action) => {
        state.loading = false;
        state.holidays = action.payload;
      })
      .addCase(fetchHolidays.rejected, (state) => {
        state.loading = false;
        state.error = "Erro ao carregar feriados";
      });
  },
});

export const { addEvent, removeEvent, updateEvent } = calendarSlice.actions;
export default calendarSlice.reducer;