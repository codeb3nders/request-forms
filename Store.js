const LOADING = "LOADING";
const SET_STORE = "SET_STORE";
const SET_USER = "SET_USER";
const SET_VARIABLES = "SET_VARIABLES";
const SET_RFT_TYPE = "SET_RFT_TYPE";
const SET_VENDORS_MASTER = "SET_VENDORS_MASTER";
const SET_DISBURSEMENT_ACCOUNTS = "SET_DISBURSEMENT_ACCOUNTS";

const useStore = () => {
  const initialState = SampleState;
  function reducer(state, action) {
    switch (action.type) {
      case LOADING:
        return { ...state, isLoading: !state.isLoading };
      case SET_STORE:
        return { ...state, request: action.payload };
      case SET_USER:
        return { ...state, user: action.payload };
      case SET_VARIABLES:
        return { ...state, variables: action.payload };
      case SET_RFT_TYPE:
        return { ...state, RFTType: action.payload };
      case SET_VENDORS_MASTER:
        return { ...state, vendorsMaster: action.payload };
      case SET_DISBURSEMENT_ACCOUNTS:
        return { ...state, disbursementAccounts: action.payload };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
};
