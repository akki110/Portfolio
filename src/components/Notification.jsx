"use client";
import { CheckCheck, CircleX } from "lucide-react";

const Notification = ({ title, message, type, show }) => {
  return (
    <div
      className={`fixed top-5 right-5 z-50 max-w-sm w-full
      rounded-lg p-4 shadow-lg flex items-start gap-3
      transform transition-all duration-500 ease-in-out
      ${show ? "translate-x-0 opacity-100" : "translate-x-[120%] opacity-0"}
      ${
        type === "success"
          ? "bg-purple text-white shadow-2xl"
          : "bg-red-100 text-red-800"
      }`}
    >
      {type === "success" ? (
        <CheckCheck className="w-5 h-5 mt-1 text-white" />
      ) : (
        <CircleX className="w-5 h-5 mt-1 text-red-800" />
      )}

      <div className="flex flex-col">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default Notification;
