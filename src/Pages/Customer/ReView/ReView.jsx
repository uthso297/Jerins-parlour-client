import { useState } from "react";

const ReView = () => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        description: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <div className="mt-10">
            <h1 className="p-4 text-xl font-bold">Review</h1>
            <div className="bg-[#f4f7fc] min-h-screen lg:pt-6 pl-4 lg:pl-0">
                <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="company"
                        placeholder="Company's name, Designation"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-2 border rounded h-24"
                    />
                    <button
                        type="submit"
                        className="bg-[#F63E7B] text-white px-4 py-2 rounded"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ReView;
