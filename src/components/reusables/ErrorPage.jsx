/* eslint-disable react/prop-types */

function ErrorPage({ error, title }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-red-500">{error}</p>
        </div>
    );
}

export default ErrorPage;
