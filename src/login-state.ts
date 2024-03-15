import {create} from "zustand";

interface LoginState {
    loginState: boolean
    setLoginState: (state: boolean) => void
}

export const useBearStore = create<LoginState>((set) => ({
    loginState: false,
    setLoginState: (state: boolean) => set(() => ({loginState: state})),
}))