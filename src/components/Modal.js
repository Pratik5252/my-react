import React from "react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-transparent opacity-50"></div>
      <div className="modal-container bg-transparent w-full max-w-md p-6 rounded-lg shadow-lg z-10">
        <button
          className="absolute top-2 right-2 text-blue-700 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-label="Close"
          >
            <path
              fillRule="evenodd"
              d="M13.414 6.586a2 2 0 00-2.828 0L10 8.172 8.414 6.586a2 2 0 00-2.828 2.828L7.172 10l-1.586 1.586a2 2 0 102.828 2.828L10 12.828l1.586 1.586a2 2 0 002.828-2.828L12.828 10l1.586-1.586a2 2 0 000-2.828z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
