import Cookies from "js-cookie";

const doctorId = Cookies.get("id");

const initialState = {
  clinic: [],
  education: [],
  experience: [],
  doctor: {
    id: doctorId,
    address1: "",
    address2: "",
    state: "",
    city: "",
    image:"",
    country: "",
    bio: "",
    postal: "",
    email: "",
    gender: "",
    dob: "",
  },
  pricing: [],
  services: [],
  specialization: [],
  specialities: [],
  delete: {
    clinic: [],
    services: [],
    pricing: [],
    specialization: [],
    education: [],
    experience: [],
  },
};

const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL":
      return { ...state, ...action.payload };
    case "SET_CLINIC":
      if (!isObjectEmpty(action.payload)) {
        return { ...state, clinic: action.payload };
      }
      return state;
      
    case "RESET_CLINIC":
      return { ...state, clinic: initialState.clinic };

    case "SET_EDUCATION":
      return { ...state, education: action.payload };

    case "SET_EXPERIENCE":
      return { ...state, experience: action.payload };

    case "SET_ACCOUNT":
      return { ...state, doctor: action.payload };

    case "SET_PRICING":
      return { ...state, pricing: action.payload };

    case "SET_DELETE":
      return { ...state, delete: action.payload };

    case "SET_SERVICES":
      return { ...state, services: action.payload };

    case "REMOVE_SERVICE":
      return {
        ...state,
        services: state.services.filter((s) => s !== action.payload),
      };

    case "SET_SPECIALIZATION":
      return { ...state, specialization: action.payload };

    case "REMOVE_SPECIALIZATION":
      return {
        ...state,
        specialization: state.specialization.filter(
          (s) => s !== action.payload
        ),
      };
    case "RESET_ALL":
      return initialState;
    default:
      throw new Error("Unknown action type");
  }
};

export { reducer, initialState };
