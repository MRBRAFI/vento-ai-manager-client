import React, { use, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import Loader from "../Home-page/Loading";
const AddModelPage = () => {
  const navigate = useNavigate();
  const { user, setLoading } = use(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    framework: "",
    useCase: "",
    dataset: "",
    description: "",
    image: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setIsSubmitting(true);

    const modelData = {
      name: e.target.name.value,
      frameworl: e.target.framework.value,
      useCase: e.target.useCase.value,
      dataset: e.target.dataset.value,
      description: e.target.description.value,
      image: e.target.image.value,
      createdAt: new Date(),
      createdBy: user.email,
      purchased: 0,
    };

    fetch("https://vento-ai-management-server.vercel.app/models", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modelData),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        toast.success("Your data has been stored successfully");
        navigate("/all_models");
        setLoading(false);
        setIsSubmitting(false);
      })
      .catch((iss) => {
        setLoading(false);
        setIsSubmitting(false);
      });
  };

  if (isSubmitting) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen my-15 mx-5 flex items-center justify-center px-4">
      <div className="bg-base-300 dark:bg-base-200 p-8 rounded-xl shadow-lg max-w-2xl w-full">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 not-dark:text-primary dark:text-secondary text-center">
          Add New AI Model
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-text" htmlFor="name">
              Model Name
            </label>
            <input
              name="name"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
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
              type="text"
              value={formData.framework}
              onChange={handleChange}
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
              type="text"
              value={formData.useCase}
              onChange={handleChange}
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
              type="text"
              value={formData.dataset}
              onChange={handleChange}
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
              value={formData.description}
              onChange={handleChange}
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
              type="url"
              value={formData.image}
              onChange={handleChange}
              placeholder="Paste ImgBB link here"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <button
            type="submit"
            className="btn dark:bg-secondary not-dark:bg-primary not-dark:text-base-200 dark:text-primary w-full py-2 mt-4 font-semibold"
          >
            Add Model
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddModelPage;
