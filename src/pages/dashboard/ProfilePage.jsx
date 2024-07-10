import { CloudUploadIcon, Key, KeyIcon, KeyRound } from 'lucide-react'
import HeadingText from '../../_components/typography/HeadingText'
import avatar from '../../assets/avatar.jpg'

const ProfilePage = () => {
  return (
    <div>
      <HeadingText>Profile Section : </HeadingText>
      <section>
        <div className="md:grid md:grid-cols-3 md:gap-4">
          {/* User Image & basic Info :: */}
          <div className="p-4 mb-4 bg-blue-100/30  border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 sm:p-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4 ">
              <img
                alt="muktadir rabbi"
                className="mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
                src={avatar}
              />
              <div>
                <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white capitalize">
                  muktadir rabbi
                </h3>
                <div className="mb-4 text-sm text-gray-500 dark:text-white lowercase">
                  <a href="mailto:+muktadirhossainrabbi@gmail.com">
                    muktadirhossainrabbi@gmail.com
                  </a>
                </div>
                <div className="mb-4 text-sm text-gray-500 dark:text-white">
                  <a href="tel:+01726927523">01726927523</a>
                </div>
                <div className="flex items-center space-x-4 dark:text-white">
                  <div>
                    <form >
                      <input
                        className="hidden"
                        id="avatar"
                        accept=".png, .jpg, .jpeg"
                        type="file"
                        name="avatar"
                      />
                      <label
                        className="btn btn-primary"
                        htmlFor="avatar"
                      >
                        <CloudUploadIcon className="w-4 h-4 -ml-1" />
                        <p className="flex items-center mx-1">Upload Picture </p>
                      </label>
                    </form>
                  </div>
                  <button
                    type="button"
                    className="btn btn-error"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* //!  Change Password Area:: */}
          <div
            className="md:col-span-2 p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 sm:p-6
          dark:border-gray-700 dark:bg-gray-800 bg-blue-100/30 "
          >
            <form id="change-pass-form">
              <input
                id="email"
                className="hidden"
                type="email"
                defaultValue="muktadirhossainrabbi@gmail.com"
                name="email"
              />
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="current-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Current password
                </label>
                <input
                  className="input input-bordered w-full input-info mb-2"
                  placeholder="Enter Current Password ..."
                  type="password"
                  name="currPass"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="new-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New Password
                </label>
                <input
                  className="input input-bordered w-full input-info mb-2"
                  placeholder="Enter New Password ..."
                  name="newPass"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="confirm-new-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm New Password
                </label>
                <input
                  className="input input-bordered w-full input-info mb-2"
                  placeholder="Confirm New Password ..."
                  name="confirmNewPass"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-3"
              >
                Change Password
                <span><KeyRound /></span>
              </button>
            </form>
          </div>
          {/* //! user Details Area :: */}
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
        </div>

      </section>
    </div>
  )
}

export default ProfilePage