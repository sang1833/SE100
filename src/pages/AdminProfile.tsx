const AdminProfile = () => {
  return (
    <>
      <div className="flex">
        <main className="flex-1 p-3">
          <h1 className="text-2xl font-bold mb-3">Admin Profile</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-lg font-bold mb-3">Personal Information</p>
            <div className="avatar w-[100px] h-[100px] rounded-full border p-2">
              <img src="/src/assets/woman (1).png" alt="Admin image" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <button className="btn bg-tim-color text-white hover:text-black">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminProfile;
