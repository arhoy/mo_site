import {
  GET_REVIEWS,
  REVIEW_ERROR,
  ADD_REVIEW,
  EDIT_REVIEW,
  DELETE_REVIEW,
  UPDATE_LIKES,
} from '../actions/types';

const initialState = {
  reviews: [],
  review: null,
  loading: true,
  error: null,
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_REVIEW:
      return {
        ...state,
        reviews: [payload.data, ...state.reviews],
        loading: false,
        error: null,
      };

    case EDIT_REVIEW:
      return {
        ...state,
        reviews: state.reviews.map(review =>
          review._id === payload.data._id
            ? {
                ...review,
                title: payload.data.title,
                description: payload.data.description,
                rating: payload.data.rating,
              }
            : review,
        ),
        loading: false,
        error: null,
      };
    case GET_REVIEWS:
      return {
        ...state,
        reviews: payload.data,
        loading: false,
      };
    case DELETE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.filter(review => review._id !== payload),
        loading: false,
      };
    case REVIEW_ERROR:
      return {
        ...state,
        error: payload.msg,
        loading: false,
      };
    case UPDATE_LIKES:
      return {
        ...state,
        reviews: state.reviews.map(review =>
          review._id === payload.reviewId
            ? { ...review, likes: payload.likes.data }
            : review,
        ),
        loading: false,
      };
    default:
      return state;
  }
}
