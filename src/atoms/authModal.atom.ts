import {atom} from "recoil"

export interface AuthModalStateInterface {
    open: boolean;
    view: "login" | "signup" | "resetPassword";
}

const defaultState: AuthModalStateInterface = {
    open: false,
    view:'login'
}

export const authModalState = atom<AuthModalStateInterface>({
    key:"AuthModalState",
    default: defaultState
})