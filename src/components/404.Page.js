import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  const { status, statusText } = error || {};
  return (
    <div>
      {status && (
        <p>
          Error: {status} {statusText}
        </p>
      )}
    </div>
  );
}

export default ErrorPage;
