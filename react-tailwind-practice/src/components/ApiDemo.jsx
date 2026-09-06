import { useRef, useState } from "react";
import api from "../api/axios";

function ApiDemo() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const controllerRef = useRef(null);

  const handlePost = async () => {
    setLoading(true);
    setError("");

    const controller = new AbortController();
    controllerRef.current = controller;

    try {
      const response = await api.post(
        "/posts",
        {
          title: "Focus Bear API Test",
          body: "Testing an Axios POST request.",
          userId: 1,
        },
        {
          signal: controller.signal,
        },
      );

      setResult(response.data);
    } catch (error) {
      if (error.name === "CanceledError") {
        setError("Request was cancelled.");
      } else {
        setError("Failed to make API request.");
      }
    } finally {
      setLoading(false);
      controllerRef.current = null;
    }
  };

  const handleCancel = () => {
    controllerRef.current?.abort();
  };

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <button
        onClick={handlePost}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send POST Request"}
      </button>

      {loading && (
        <button
          onClick={handleCancel}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Cancel Request
        </button>
      )}

      {error && <p className="text-red-600">{error}</p>}

      {result && (
        <div className="p-4 bg-gray-100 rounded-lg text-left">
          <p>
            <strong>ID:</strong> {result.id}
          </p>

          <p>
            <strong>Title:</strong> {result.title}
          </p>

          <p>
            <strong>Body:</strong> {result.body}
          </p>
        </div>
      )}
    </div>
  );
}

export default ApiDemo;
