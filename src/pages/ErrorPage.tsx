import MainLayout from "../layouts/MainLayout";

function ErrorPage() {
  return (
    <>
      <MainLayout>
        <div className="flex justify-center items-center flex-1 flex-col h-full p-8 font-bold text-center">
          <h2 className="text-4xl text-gray-300 animate-pulse">ERROR 404</h2>
          <h3 className="text-2xl  text-gray-400">
            We couldn't find the page you were looking for!
          </h3>
        </div>
      </MainLayout>
    </>
  );
}

export default ErrorPage;
