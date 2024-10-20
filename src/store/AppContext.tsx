import {
  createContext,
  Dispatch,
  useReducer,
  ReactNode,
  useEffect,
} from "react";

interface StateType {
  achivements: {
    totalScore: number;
    highestScoreInOneGame: number;
    cardTypes: {
      canDoBetter: boolean; // user gets 20 percent or 10 percent of question correct when playing 5/5 or 10/10 respectively >= 4 words difficulty
      dumbass: boolean; // user gets 0 percent of question correct when playing 5/5 or 10/10 >= 4 words difficulty
      gotAllQuestion: boolean; // user gets 100 percent of question correct when playing 10/10 >= 4 words difficulty
      highIQ: boolean; // user gets 100 percent of question correct when playing 10/10 >= 8 words difficulty
      impossiblePlayer: boolean; // user gets 100 percent of question correct when playing 10/10 >= 12 words difficulty
      smard: boolean; // user gets 80 percent of question correct when playing 5/5 or 10/10 >= 4 words difficulty
      smartAss: boolean; // user gets 80 percent of question correct when playing 5/5 or 10/10 >= 6 words difficulty
      TopTenPercent: boolean; // user gets 80 percent of question correct when playing 5/5 or 10/10 >= 8 words difficulty
      TopOnePercent: boolean; // user gets 80 percent of question correct when playing 5/5 or 10/10 >= 10 words difficulty
    };
  };
  array: string[];
  attempts: number;
  attemptType: 5 | 10;
  credits: number;
  clickedIndices: number[];
  difficulty: number; // character count 4 to 12
  initialUserSetWord: string[];
  avoidResetUserSetWord: string[];
  sharedToday: boolean;
  userSetWord: string[];
  word: string;
}

type ActionType =
  | {
      type: "SET_ACHIEVEMENT";
      payload: Partial<StateType["achivements"]["cardTypes"]>;
    }
  | { type: "UPDATE_CREDITS"; payload: number }
  | { type: "UPDATE_ARRAY"; payload: string[] }
  | { type: "WORD"; payload: number }
  | { type: "SET_ATTEMPTS"; payload: number }
  | { type: "SET_ATTEMPT_TYPE"; payload: 5 | 10 }
  | { type: "SET_WORD"; payload: string }
  | { type: "SET_CURRENT_WORD"; payload: string }
  | { type: "SET_USER_SET_WORD"; payload: string[] }
  | { type: "SET_DIFFICULTY"; payload: number }
  | { type: "CLICKED_INDICES"; payload: number[] }
  | { type: "SET_INITIAL_USER_SET_WORD"; payload: string[] }
  | { type: "SET_AVOID_RESET_INITIAL_USER_SET_WORD"; payload: string[] }
  | { type: "SHARE_TODAY"; payload: boolean }
  | { type: "RESET_GAME" };

const initialState: StateType = {
  achivements: {
    totalScore: 0,
    highestScoreInOneGame: 0,
    cardTypes: {
      canDoBetter: false, // user gets 20 percent or 10 percent of question correct when playing 5/5 or 10/10 respectively >= 4 words difficulty
      dumbass: false, // user gets 0 percent of question correct when playing 5/5 or 10/10 >= 4 words difficulty
      gotAllQuestion: false, // user gets 100 percent of question correct when playing 10/10 >= 4 words difficulty
      highIQ: false, // user gets 100 percent of question correct when playing 10/10 >= 8 words difficulty
      impossiblePlayer: false, // user gets 100 percent of question correct when playing 10/10 >= 12 words difficulty
      smard: false, // user gets 80 percent of question correct when playing 5/5 or 10/10 >= 4 words difficulty
      smartAss: false, // user gets 80 percent of question correct when playing 5/5 or 10/10 >= 6 words difficulty
      TopTenPercent: false, // user gets 80 percent of question correct when playing 5/5 or 10/10 >= 8 words difficulty
      TopOnePercent: false, // user gets 80 percent of question correct when playing 5/5 or 10/10 >= 10 words difficulty
    },
  },
  array: [],
  attempts: 0,
  attemptType: 5,
  credits: 100,
  clickedIndices: [],
  difficulty: 4, // character count 4 to 12
  initialUserSetWord: [],
  avoidResetUserSetWord: [],
  sharedToday: false,
  userSetWord: [],
  word: "",
};

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "SET_ACHIEVEMENT":
      return {
        ...state,
        achivements: {
          ...state.achivements,
          cardTypes: {
            ...state.achivements.cardTypes,
            ...action.payload,
          },
        },
      };

    case "UPDATE_CREDITS":
      return {
        ...state,
        credits: state.credits + action.payload,
      };
    case "UPDATE_ARRAY":
      return {
        ...state,
        array: action.payload,
      };

    case "SET_ATTEMPTS":
      return {
        ...state,
        attempts: action.payload,
      };

    case "SET_ATTEMPT_TYPE":
      return {
        ...state,
        attemptType: action.payload,
      };
    case "SET_WORD":
      return {
        ...state,
        word: action.payload,
      };

    case "SET_USER_SET_WORD":
      return {
        ...state,
        userSetWord: action.payload,
      };
    case "SET_DIFFICULTY":
      return {
        ...state,
        difficulty: action.payload,
      };
    case "CLICKED_INDICES":
      return {
        ...state,
        clickedIndices: action.payload,
      };

    case "SET_INITIAL_USER_SET_WORD":
      return {
        ...state,
        initialUserSetWord: action.payload,
      };
    case "SET_AVOID_RESET_INITIAL_USER_SET_WORD":
      return {
        ...state,
        avoidResetUserSetWord: action.payload,
      };

    case "SHARE_TODAY":
      return {
        ...state,
        sharedToday: action.payload,
      };

    case "RESET_GAME":
      return initialState;

    default:
      return state;
  }
}

interface ContextType {
  state: StateType;
  dispatch: Dispatch<ActionType>;
}

const ContextProvider = createContext<ContextType | undefined>(undefined);

interface AppContextProps {
  children: ReactNode;
}

function AppContext({ children }: AppContextProps) {
  const loadInitialState = () => {
    const storedState = localStorage.getItem("appState");
    return storedState ? JSON.parse(storedState) : initialState;
  };

  const [state, dispatch] = useReducer(reducer, loadInitialState());

  // Effect to save state to local storage on every state change
  useEffect(() => {
    localStorage.setItem("appState", JSON.stringify(state));
  }, [state]);

  return (
    <ContextProvider.Provider value={{ state, dispatch }}>
      {children}
    </ContextProvider.Provider>
  );
}

export { AppContext, ContextProvider };
export type { ContextType };
