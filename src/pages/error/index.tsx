import { useRouteError } from "react-router-dom";

interface CustomError {
    status: number;
    statusText: string;
    internal: boolean;
    data: string;
    error: Error;
  }

export default function ErrorPage() {
   const error = useRouteError() as CustomError;


//   if (!error) {
//     return null; // No hay error, no renderizar nada
//   }

  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.data}</i>
      </p>
    </div>
  );
}