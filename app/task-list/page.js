"use client";

import useTaskStore from "../data-store/cart-store";
import { useRouter } from "next/navigation";
export default function TaskListPage() {
  const { tasks, toggleTask, deleteTask } = useTaskStore();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <h2 className="text-3xl font-bold mb-6">Task List</h2>

      {tasks.length === 0 ? (
        <p className="text-lg text-gray-600">No tasks yet.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white w-96 shadow-md rounded-xl p-5 mb-5 border border-gray-200"
          >
            <p className="text-xl font-semibold">{task.title}</p>

            {task.details && (
              <p className="text-gray-600 mt-1">{task.details}</p>
            )}

            <p className="font-medium mt-2">
              Status:{" "}
              <span
                className={
                  task.completed ? "text-green-600" : "text-yellow-600"
                }
              >
                {task.completed ? "Completed" : "Pending"}
              </span>
            </p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => toggleTask(task.id)}
                className={`px-4 py-2 rounded-md text-white ${
                  task.completed
                    ? "bg-gray-600 hover:bg-gray-700"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {task.completed ? "Mark Pending" : "Mark Completed"}
              </button>

              <button
                onClick={() => deleteTask(task.id)}
                className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
   <button
        onClick={() => router.push("/filterlist")}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go to Summary List
      </button>

      <button
        onClick={() => router.push("/")}
        className="mb-6 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Back
      </button>

    </div>
  );
}
