import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Action

const FETCH_DOCTORS = 'Doctors/Fetch';
const url = 'https://doctors-appointment-3nvy.onrender.com/api/v1/doctors';

export const fetchDoctors = createAsyncThunk(FETCH_DOCTORS, async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

// Reducer
const doctorSlice = createSlice({
  name: 'doctor',
  initialState: {
    allDoctors: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDoctors.fulfilled, (state, action) => {
      const newState = {
        ...state,
        allDoctors: action.payload,
      };
      return newState;
    });
  },
});

export default doctorSlice.reducer;
