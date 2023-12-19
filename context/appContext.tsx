"use client";

import React, { createContext, useContext, useReducer } from "react";

// Define your initial state and actions here
type MyState = {
	headerHeight: number;
};

enum MyActionType {
	headerHeightInit = "HEADER_HEIGHT_INIT",
}

type MyHeaderHeightInitAction = {
	type: MyActionType.headerHeightInit;
	payload: number;
};

type MyAction = MyHeaderHeightInitAction;

const initialState: MyState = {
	headerHeight: 87,
};

function reducer(state: MyState, action: MyAction): MyState {
	switch (action.type) {
		case MyActionType.headerHeightInit:
			return {
				...state,
				headerHeight: action.payload,
			};

		default:
			throw new Error("Unexpected action");
	}
}

// Define your action creators here
function headerHeightInit(height: number): MyHeaderHeightInitAction {
	return {
		type: MyActionType.headerHeightInit,
		payload: height,
	};
}

// Create a context for your state and dispatch function
type AppContext = MyState & {
	headerHeightInit: (height: number) => void;
};

const AppContext = createContext<AppContext | undefined>(undefined);

// Create a provider component that wraps your app and passes the context down
const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const value = {
		...state,
		headerHeightInit: (height: number) => dispatch(headerHeightInit(height)),
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Create a custom hook to easily use the context in your components
function useAppContext(): AppContext {
	const context = useContext(AppContext);

	if (context === undefined) {
		throw new Error("useAppContext must be used within a AppProvider");
	}

	return context;
}

export { AppContext, AppProvider, useAppContext };
