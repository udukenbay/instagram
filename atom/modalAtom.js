import { atom } from "recoil";

export const modalState = atom({
    key: 'modalSfalsete', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});