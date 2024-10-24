import { useState } from "react";
import Button from "../components/Button";
import MainLayout from "../layouts/MainLayout";

function Developer() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Handle form submission (e.g., send the form data to an email service)
    setIsPopupOpen(false); // Close popup after submission
  };

  return (
    <MainLayout>
      <div className="flex justify-center items-center flex-col gap-4 h-full relative min-h-[calc(100svh-5rem)]">
        <div className="mx-4 lg:w-96 shadow-lg border text-slate-100 bg-slate-800 p-8 text-xl">
          This little software was developed by Igwe Francis, a full stack web
          and app developer hailing from Nigeria.{" "}
          <span className="font-bold">
            Contact me if you need any help or just wanna say hi.
          </span>
        </div>

        {/* Random Greeting Tags */}
        <span className="absolute top-8 right-96 bg-slate-900 text-slate-200 px-4 py-1 border -rotate-6 hidden lg:block hover:scale-150 transition-all z-20">
          Hola!
        </span>
        <span className="absolute top-32 left-96 bg-slate-900 text-slate-200 px-4 py-1 border rotate-12 hidden lg:block hover:scale-150 transition-all z-20">
          Hello!
        </span>
        <span className="absolute top-48 right-48 bg-slate-900 text-slate-200 px-4 py-1 border rotate-6 hidden lg:block hover:scale-150 transition-all z-20">
          Kedu!
        </span>
        <span className="absolute top-56 left-60 bg-slate-900 text-slate-200 px-4 py-1 border -rotate-6 hidden lg:block hover:scale-150 transition-all z-20">
          Salut!
        </span>
        <span className="absolute top-80 left-96 bg-slate-900 text-slate-200 px-4 py-1 border -rotate-12 hidden lg:block hover:scale-150 transition-all z-20">
          Namaste!
        </span>
        <span className="absolute top-72 right-72 bg-slate-900 text-slate-200 px-4 py-1 border rotate-12 hidden lg:block hover:scale-150 transition-all z-20">
          Hoi!
        </span>

        <Button label="Contact Developer" onClick={handlePopupToggle} />

        {/* Popup Modal with Contact Form */}
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">Contact Developer</h2>
              <p className="mb-4">
                You can reach me via email at{" "}
                <a
                  href="mailto:igwefran6@gmail.com"
                  className="text-blue-500 underline"
                >
                  igwefran6@gmail.com
                </a>{" "}
                or fill out the form below.
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="Your Email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    rows={4}
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-slate-900 text-white font-bold py-2 px-8 transition-all text-nowrap border border-transparent hover:border-slate-200 active:bg-slate-950 active:scale-95"
                  >
                    Send Message
                  </button>
                </div>
              </form>

              <button
                className="absolute top-8 right-8 text-gray-500 hover:text-gray-700"
                onClick={handlePopupToggle}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default Developer;
