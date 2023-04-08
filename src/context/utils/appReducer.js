import { appState } from "./appState";

export const appReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "HIDE_BANNER":
      return { ...state, isBannerVisible: false };
    default:
      return { ...appState, ...state };
  }
};
