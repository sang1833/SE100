import React, { useState, FormEvent } from "react";

const ChangePassword: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate the form inputs
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setErrorMessage("");
  };

  return (
    <div>
      <h1 className="font-bold text-2xl text-gray-900 mt-8">Change Password</h1>
      <section className="flex justify-center items-center">
        <form onSubmit={handleSubmit} className="space-y-3 mb-10">
          <div className="flex flex-col">
            <label htmlFor="currentPassword">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {errorMessage && <p>{errorMessage}</p>}
          <button
            type="submit"
            className="btn bg-tim-color text-white hover:text-black mt-4 w-full"
          >
            Change Password
          </button>
        </form>
      </section>
    </div>
  );
};

export default ChangePassword;
