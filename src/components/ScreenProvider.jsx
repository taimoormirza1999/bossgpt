"use client";
import { useScreenListener } from "../../store/useScreenStore.js"

const ScreenProvider = ({ children }) => {
  useScreenListener(); 
  return children;
};

export default ScreenProvider;
