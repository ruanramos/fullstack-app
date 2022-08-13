import { createContext, useReducer } from 'react';
// import type { Doctor } from '../types/Doctor';


/* type ProviderType = {
    children: React.ReactNode;
} */

/* export const DoctorsProvider: React.FC<ProviderType> = ({ children }) => {

    const doctorsReducer = (state, action: { type: string, payload: Doctor[] }) => {
        switch (action.type) {
            case 'SET_DOCTORS':
                return {
                    ...state,
                    doctors: action.payload
                };
            case 'ADD_DOCTOR':
                return {
                    ...state,
                    doctors: [...state.doctors, action.payload]
                };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(doctorsReducer, {
        doctors: []
    });

    return (
        <DoctorsContext.Provider value={{ state, dispatch }}>
            {children}
        </DoctorsContext.Provider>
    );
} */

export const DoctorsContext = createContext();

export const DoctorsProvider = ({ children }) => {

    const doctorsReducer = (state, action) => {
        switch (action.type) {
            case 'SET_DOCTORS':
                return {
                    ...state,
                    doctors: action.payload
                };
            case 'ADD_DOCTOR':
                return {
                    ...state,
                    doctors: [action.payload, ...state.doctors]
                };
            case 'DELETE_DOCTOR':
                return {
                    ...state,
                    doctors: state.doctors.filter(doctor => doctor._id !== action.payload._id)
                };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(doctorsReducer, {
        doctors: []
    });

    return (
        <DoctorsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </DoctorsContext.Provider>
    );
}