"use client";

import { TAuthenticUser } from "@/types/auth";
import React, { createContext, useContext, useReducer } from "react";

// Define your initial state and actions here
type MyState = {
	isLoggedIn: boolean;
	authUser: TAuthenticUser | null;
};

enum MyActionType {
	login = "AUTH_LOGIN",
	logout = "AUTH_LOGOUT",
}

type MyLoginAction = {
	type: MyActionType.login;
	payload: TAuthenticUser;
};

type MyLogoutAction = {
	type: MyActionType.logout;
};

type MyAction = MyLoginAction | MyLogoutAction;

const initialState: MyState = {
	isLoggedIn: false,
	authUser: null,
};

function reducer(state: MyState, action: MyAction): MyState {
	switch (action.type) {
		case MyActionType.login:
			return {
				...state,
				isLoggedIn: true,
				authUser: action.payload,
			};

		case MyActionType.logout:
			return {
				...state,
				isLoggedIn: false,
				authUser: null,
			};

		default:
			throw new Error("Unexpected action");
	}
}

// Define your action creators here
function login(user: TAuthenticUser): MyLoginAction {
	return {
		type: MyActionType.login,
		payload: user,
	};
}

function logout(): MyLogoutAction {
	return {
		type: MyActionType.logout,
	};
}

// Create a context for your state and dispatch function
type AuthContext = MyState & {
	login: (user: TAuthenticUser) => void;
	logout: () => void;
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

// Create a provider component that wraps your app and passes the context down
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const value = {
		...state,
		login: (user: TAuthenticUser) => dispatch(login(user)),
		logout: () => dispatch(logout()),
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Create a custom hook to easily use the context in your components
function useAuthContext(): AuthContext {
	const context = useContext(AuthContext);

	if (context === undefined) {
		throw new Error("useAuthContext must be used within a AuthProvider");
	}

	return context;
}

export { AuthContext, AuthProvider, useAuthContext };
