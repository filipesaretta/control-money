import { loadingStore } from "../../stores/loadingStore";
import "./loading.css";

export default function Loading() {
  const loading = loadingStore((state) => state);

  return loading.isVisible ? (
    <div
      className="fixed-top vh-100 d-flex align-items-center text-white fs-2"
      id="loading"
    >
      <div className="mx-auto">Loading...</div>
    </div>
  ) : null;
}
