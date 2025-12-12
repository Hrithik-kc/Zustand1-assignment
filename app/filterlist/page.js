"use client";

import useTaskStore from "../data-store/cart-store";
import {  useRouter } from "next/navigation";

export default function TaskSummaryPage() {
    const router=useRouter();
  const tasks = useTaskStore((state) => state.tasks);

  const completed = tasks.filter((t) => t.completed);
  const pending = tasks.filter((t) => !t.completed);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <h2 className="text-3xl font-bold mb-6"> Task Summary</h2>

      {/* Statistics Card */}
      <div className="bg-white w-96 shadow-md rounded-xl p-6 border border-gray-200 mb-8">
        <p className="text-lg mb-2">
          <strong>Total Tasks:</strong> {tasks.length}
        </p>
        <p className="text-green-700 text-lg mb-2">
          <strong>Completed:</strong> {completed.length}
        </p>
        <p className="text-yellow-600 text-lg">
          <strong>Pending:</strong> {pending.length}
        </p>
      </div>

      {/* Completed Tasks */}
      <div className="bg-white w-96 shadow-md rounded-xl p-6 border border-gray-200 mb-6">
        <h3 className="text-xl font-semibold mb-3 text-green-700">
          Completed Tasks
        </h3>

        {completed.length === 0 ? (
          <p className="text-gray-500">No completed tasks yet.</p>
        ) : (
          <ul className="list-disc pl-5 space-y-1">
            {completed.map((t) => (
              <li key={t.id} className="text-gray-700">
                {t.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Pending Tasks */}
      <div className="bg-white w-96 shadow-md rounded-xl p-6 border border-gray-200">
        <h3 className="text-xl font-semibold mb-3 text-yellow-600">
          Pending Tasks
        </h3>

        {pending.length === 0 ? (
          <p className="text-gray-500">No pending tasks.</p>
        ) : (
          <ul className="list-disc pl-5 space-y-1">
            {pending.map((t) => (
              <li key={t.id} className="text-gray-700">
                {t.title}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        onClick={() => router.push("/task-list")}
        className="mb-6 mt-10 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Back
      </button>
      <button
        onClick={() => router.push("/")}
        className="mb-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Home Page
      </button>
    </div>
  );
}
