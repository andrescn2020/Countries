import { GET_ALL_COUNTRIES, GET_ALL_ACTIVITIES, FILTER_Z_TO_A, FILTER_A_TO_Z, FILTER_AFRICA, FILTER_AMERICA, FILTER_ANTARTIDA, FILTER_ASIA, FILTER_OCEANIA, FILTER_HIGH_POP, FILTER_LOW_POP } from "./actions";


const initialState = {

  countries: [],
  activities: []

};

const rootReducer = (state = initialState, { type, payload }) => {

  switch (

  type

  ) {

    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: payload,
      };

      case GET_ALL_ACTIVITIES:
        return {
          ...state,
          activities: payload,
        };
  

    case FILTER_Z_TO_A:
      return {
        ...state,
        countries: payload,
      };

    case FILTER_A_TO_Z:
      return {
        ...state,
        countries: payload,
      };

    case FILTER_AFRICA:
      return {
        ...state,
        countries: payload,
      };

    case FILTER_AMERICA:
      return {
        ...state,
        countries: payload,
      };

    case FILTER_ANTARTIDA:
      return {
        ...state,
        countries: payload,
      };

    case FILTER_ASIA:
      return {
        ...state,
        countries: payload,
      };

    case FILTER_OCEANIA:
      return {
        ...state,
        countries: payload,
      };

    case FILTER_HIGH_POP:
      return {
        ...state,
        countries: payload,
      };

    case FILTER_LOW_POP:
      return {
        ...state,
        countries: payload,
      };

    // case CREATE_ACTIVITY:
    //   return {
    //     ...state,
    //     activities: state.activities.filter((activity) => activity.id !== payload)
    //   };

    default:
      return state;

  }

};

export default rootReducer;