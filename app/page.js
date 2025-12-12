"use client";
import { useState } from "react";
import useTaskStore from "./data-store/cart-store";
import { useRouter } from "next/navigation";

export default function AddTaskPage() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const { addTask } = useTaskStore();

  const router = useRouter();

  const handleSubmit = () => {
    if (!title.trim()) return;
    addTask({ title, details });
    setTitle("");
    setDetails("");
    alert("Task added!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-10">
      <button
        onClick={() => router.push("/task-list")}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go to Task List
      </button>
      <button
        onClick={() => router.push("/filterlist")}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go to Summary List
      </button>

      <div className="bg-white w-96 shadow-md rounded-xl p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-center"> Add Task</h2>

        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <textarea
          placeholder="Enter details (optional)"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md h-24 resize-none focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <button
          onClick={handleSubmit}
          className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}
