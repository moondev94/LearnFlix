import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// API de feriados brasileiros
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

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    holidays: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // carregando
      .addCase(fetchHolidays.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // sucesso
      .addCase(fetchHolidays.fulfilled, (state, action) => {
        state.loading = false;
        state.holidays = action.payload;
      })

      // erro
      .addCase(fetchHolidays.rejected, (state) => {
        state.loading = false;
        state.error = "Erro ao carregar feriados";
      });
  },
});


export default calendarSlice.reducer;