import { HIRE_FARMER, PAY_FARMER } from "./actionTypes"

export const hireFarmer = (farmer) => {
    return {
        type: HIRE_FARMER,
        payload: farmer
    }
}

export const payFarmer = (id) => {
    return {
        type: PAY_FARMER,
        payload: id
    }
}