"use client";

import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { POST_API_END_POINT } from "./util/endpoint";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const Modal = ({ isOpen, onClose, onDelete, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-60 flex items-center justify-center z-50">
      <div
        className="p-6 rounded-lg shadow-lg max-w-md w-full mx-4 relative"
      // style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }} // 50% transparent white
      >
        <IoMdClose
          size={24}
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
          aria-label="Close modal"
        />

        {children}
        <div className="mt-6 flex justify-center">
          <button type="button" className="btn btn-danger" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default function SemiTransparentModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = () => {
    setIsModalOpen(true);
    setMessage("");
  };
  const { posts } = useSelector((store) => (store.post))
  const { profile } = useSelector((store) => (store.user))

  const handleDelete = async () => {
    setIsLoading(true);
    setMessage("Deleting...");

    try {
      const res = await axios.delete(`${POST_API_END_POINT}/delete/${posts?.id}`, { id: profile?.id }, {
        withCredentials: true
      })
      if (res.data.success) {
        toast.success(res.data.message)
      }

    } catch (error) {
      console.log(error);

    }

    // Simulate an asynchronous delete action
    setTimeout(() => {
      setIsLoading(false);
      setMessage("Delete successful!");

      // Auto-hide the modal after the action is complete
      setTimeout(() => {
        setIsModalOpen(false);
      }, 500); // Wait 1.5 seconds before closing
    }, 1000); // Simulate a 2-second delete action
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <MdDeleteOutline size={24} onClick={handleButtonClick} className="cursor-pointer" />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDelete={handleDelete}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Confirm Deletion
          </h2>
          <p className="mb-4 text-gray-600">
            Are you sure you want to delete this item?
          </p>
          {message && (
            <p
              className={`mt-4 ${isLoading ? "text-blue-600" : "text-green-600"}`}
            >
              {message}
            </p>
          )}
        </div>
      </Modal>
    </div>
  );
}
