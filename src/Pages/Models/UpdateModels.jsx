import React from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateModels = () => {
  const data = useLoaderData();
  const location = useLocation();
  const navigate = useNavigate();
  const details = data.result;
  console.log(details);

  const handleSubmit = (e) => {
    e.preventDefault();

    const modelData = {
      name: e.target.name.value,
      frameworl: e.target.framework.value,
      useCase: e.target.useCase.value,
      dataset: e.target.dataset.value,
      description: e.target.description.value,
      image: e.target.image.value,
    };

    fetch(`http://localhost:3000/models/${details._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modelData),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log("data after adding", data);
        toast.success("Your data has been stored successfully");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((iss) => {
        console.log(iss);
      });
  };

  return (
    <div className="min-h-screen my-15 mx-5 flex items-center justify-center px-4">
      <div className="bg-base-300 dark:bg-base-200 p-8 rounded-xl shadow-lg max-w-2xl w-full">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 not-dark:text-primary dark:text-secondary text-center">
          Update Your AI Model
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-text" htmlFor="name">
              Model Name
            </label>
            <input
              name="name"
              id="name"
              defaultValue={details.name}
              type="text"
              placeholder="e.g. BERT, ResNet-50"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-text" htmlFor="framework">
              Framework
            </label>
            <input
              name="framework"
              id="framework"
              defaultValue={details.frameworl}
              type="text"
              placeholder="TensorFlow, PyTorch…"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-text" htmlFor="useCase">
              Use Case
            </label>
            <input
              name="useCase"
              id="useCase"
              defaultValue={details.useCase}
              type="text"
              placeholder="NLP, Computer Vision…"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-text" htmlFor="dataset">
              Dataset Used
            </label>
            <input
              name="dataset"
              id="dataset"
              defaultValue={details.dataset}
              type="text"
              placeholder="ImageNet, COCO, Wikipedia…"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-text" htmlFor="description">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              defaultValue={details.description}
              placeholder="Briefly describe the model…"
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 text-text" htmlFor="image">
              Model Image (URL)
            </label>
            <input
              name="image"
              id="image"
              defaultValue={details.image}
              type="url"
              placeholder="Paste ImgBB link here"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <button
            type="submit"
            className="btn dark:bg-secondary text-primary w-full py-2 mt-4 font-semibold"
          >
            Update Model
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateModels;
