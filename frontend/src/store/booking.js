import { csrfFetch } from "./csrf";

//! Actions

const ADD_BOOKING = "spot/ADD_BOOKING";
export const addBooking = (booking) => ({
  type: ADD_BOOKING,
  booking: booking,
});

//! Thunks

// CREATE BOOKING
export const createBooking = (spot) => async (dispatch) => {
  console.log(spot, ` <--- booking`);
  const { startDate, endDate } = booking;

  const response = await csrfFetch(`api/spots/${spot.id}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      startDate,
      endDate,
    }),
  });
  if (response.ok) {
    const booking = await response.json();
    dispatch(addBooking(booking));
    return booking;
  }
};

const initialState = {};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING: {
      const newState = {
        ...state,
        [action.booking.id]: { ...action.booking },
      };
      return newState;
    }
    default:
      return state;
  }
};

export default bookingReducer;
