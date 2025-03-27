"use client";
import { ChangeEvent, FormEvent, useState } from "react";

function UserForm() {
  const [userType, setUserType] = useState<string>("student");
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    corporateName?: string;
    corporateAddress?: string;
    contactNumber?: string;
    collegeName?: string;
    subject?: string;
    message?: string;
  }>({
    name: "",
    email: "",
    corporateName: "",
    corporateAddress: "",
    contactNumber: "",
    collegeName: "",
    subject: "",
    message: "",
  });

  const handleUserTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setUserType(event.target.value);
    setFormData({
      name: "",
      email: "",
      corporateName: "",
      corporateAddress: "",
      contactNumber: "",
      collegeName: "",
      subject: "",
      message: "",
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label  className="block text-gray-700 font-medium mb-2">
          Select User Type:
          <select value={userType} onChange={handleUserTypeChange} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="student">Student</option>
            <option value="corporate">Corporate</option>
            <option value="college">College</option>
          </select>
        </label>

        <div>
          <label  className="block text-gray-700 font-medium mb-2">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>
        </div>

        <div>
          <label  className="block text-gray-700 font-medium mb-2">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"

            />
          </label>
        </div>

        <div>
              <label  className="block text-gray-700 font-medium mb-2">
                Subject:
                <input
                  type="text"
                  name="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"

                />
              </label>
            </div>
            <div>
              <label  className="block text-gray-700 font-medium mb-2">
                Message:
                <input
                  type="text"
                  name="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"

                />
              </label>
            </div>

        {userType === "corporate" && (
          <>
            <div>
              <label  className="block text-gray-700 font-medium mb-2">
                Corporate Name:
                <input
                  type="text"
                  name="corporateName"
                  value={formData.corporateName}
                  onChange={handleInputChange}
                  required className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"

                />
              </label>
            </div>
            <div>
              <label  className="block text-gray-700 font-medium mb-2">
                Corporate Address:
                <input
                  type="text"
                  name="corporateAddress"
                  value={formData.corporateAddress}
                  onChange={handleInputChange}
                  required className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"

                />
              </label>
            </div>
            <div>
              <label  className="block text-gray-700 font-medium mb-2">
                Contact Number:
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  required className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"

                />
              </label>
            </div>
            <div>
              <label  className="block text-gray-700 font-medium mb-2">
                Subject:
                <input
                  type="text"
                  name="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"

                />
              </label>
            </div>
            <div>
              <label  className="block text-gray-700 font-medium mb-2">
                Message:
                <input
                  type="text"
                  name="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"

                />
              </label>
            </div>
          </>
        )}

        {userType === "college" && (
          <>
            <div>
              <label  className="block text-gray-700 font-medium mb-2">
                College Name:
                <input
                  type="text"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleInputChange}
                  required className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"

                />
              </label>
            </div>
            <div>
              <label  className="block text-gray-700 font-medium mb-2">
                Subject:
                <input
                  type="text"
                  name="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"

                />
              </label>
            </div>
            <div>
              <label  className="block text-gray-700 font-medium mb-2">
                Message:
                <input
                  type="text"
                  name="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"

                />
              </label>
            </div>
          </>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
