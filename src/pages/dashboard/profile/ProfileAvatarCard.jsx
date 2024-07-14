import avatar from '../../../assets/avatar.jpg'
import { CloudUploadIcon } from 'lucide-react'

const ProfileAvatarCard = ({ parsedData }) => {
    return (
        <div className="p-4 mb-4 bg-blue-100/30  border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 sm:p-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4 ">
                <img
                    alt="muktadir rabbi"
                    className="mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
                    src={avatar}
                />
                <div>
                    <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white capitalize">
                        {parsedData?.fullName}
                    </h3>
                    <div className="mb-4 text-sm text-gray-500 dark:text-white lowercase">
                        <a href={`mailto:+${parsedData?.email}`}>
                            {parsedData?.email}
                        </a>
                    </div>
                    <div className="mb-4 text-sm text-gray-500 dark:text-white">
                        <a href="tel:+01726927523">{parsedData?.bio}</a>
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
    )
}

export default ProfileAvatarCard