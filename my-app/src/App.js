import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import ButtonWithError from "./ButtonWithError";


export default function App() {
  return (
    <>
      <ErrorBoundary errorHandler={(error, errorInfo) => <p>{error.message}</p>}>
        <ButtonWithError />
      </ErrorBoundary>

      <ErrorBoundary errorHandler={(error, errorInfo) => <p>{error.message}</p>}>
        <ButtonWithError />
      </ErrorBoundary>

      <ErrorBoundary errorHandler={(error, errorInfo) => <p>{error.message}</p>}>
        <ButtonWithError />
      </ErrorBoundary>
    </>
  );
}
