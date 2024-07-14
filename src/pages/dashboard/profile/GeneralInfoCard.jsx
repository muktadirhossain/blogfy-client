import React from 'react'

const GeneralInfoCard = () => {
    return (
        <div className="col-span-3 p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <h3 className="mb-4 text-2xl font-semibold dark:text-white text-purple-600">
                General information
            </h3>
            <form>
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label
                            htmlFor="firstName"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            First Name
                        </label>
                        <input
                            id="first-name"
                            className="input input-bordered w-full input-info"
                            type="text"
                            defaultValue="muktadir"
                            name="firstName"
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label
                            htmlFor="lastName"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Last Name
                        </label>
                        <input
                            id="last-name"
                            className="input input-bordered w-full textarea-info bg"
                            type="text"
                            defaultValue="rabbi"
                            name="lastName"
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Email
                        </label>
                        <input
                            title="You can't change your email."
                            className="input input-bordered w-full textarea-info"
                            placeholder="Your Email"
                            type="text"
                            defaultValue="muktadirhossainrabbi@gmail.com"
                            name="country"
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label
                            htmlFor="city"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Contact Number
                        </label>
                        <input
                            className="input input-bordered w-full textarea-info"
                            placeholder="Your Number"
                            type="text"
                            name="city"
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                        <label
                            htmlFor="address"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Address
                        </label>
                        <textarea
                            type="text"
                            name="address"
                            placeholder="Your Address...."
                            className="input input-bordered w-full textarea-info min-h-40 p-2.5"
                        />
                    </div>
                    <div className="col-span-6 sm:col-full">
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Save All
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default GeneralInfoCard