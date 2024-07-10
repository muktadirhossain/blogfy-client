import { useForm } from "react-hook-form"
import { BASE_URL } from "../assets/API"

const BlogForm = ({ categories = [], onSubmit, initialData = {} }) => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({
        defaultValues: {
            ...initialData
        }
    })


    return (
        <form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
            <label className="form-control w-full textarea-info">
                <div className="label">
                    <span className="label-text">Blog Title</span>
                </div>
                <input
                    type="text"
                    name='title'
                    {...register('title', { required: "Must Provide title !", minLength: 6 })}
                    placeholder="Enter blog title..."
                    className="input input-bordered w-full textarea-info"

                />
            </label>
            {errors?.title?.message && <span className='text-error'>{errors?.title?.message}</span>}

            <label className="form-control w-full textarea-info">
                <div className="label">
                    <span className="label-text">Blog Content</span>
                </div>
                <textarea
                    name='content'
                    {...register('content', {
                        required: "Must Provide content !", minLength: {
                            value: 10,
                            message: "Content must be at least 10 characters long"
                        }
                    })}

                    className="textarea textarea-info"
                    placeholder="Write Blog Content"></textarea>

            </label>
            {errors?.content?.message && <span className='text-error'>{errors?.content?.message}</span>}

            <label className="form-control w-full textarea-info">
                <div className="label">
                    <span className="label-text">Blog Tags</span>
                </div>
                <input
                    type="text"
                    {...register('tags', { required: "Must Provide tags !", minLength: 2 })}
                    placeholder="Enter blog tags..."
                    className="input input-bordered w-full textarea-info"
                    name='tags'

                />
                <div className="label">
                    <span className="label-text-alt"></span>
                    <span className="label-text-alt text-error">Enter Tags as comma separated value.</span>
                </div>
            </label>
            {errors?.tags?.message && <span className='text-error'>{errors?.tags?.message}</span>}


            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">Choose Category</span>
                </div>
                <select
                    className="select select-info w-full"
                    {...register('categoryId', { required: "Choose a Category !" })}
                    name='categoryId'

                >
                    <option defaultValue disabled selected>--Select Category--</option>
                    {
                        categories?.map(cat => (
                            <option
                                key={cat?._id}
                                value={cat?._id.toString()} >
                                {cat?.categoryName}
                            </option>
                        ))
                    }
                </select>
            </label>
            {errors?.categoryId?.message && <span className='text-error'>{errors?.categoryId?.message}</span>}
            {/* SHOW Images:: */}
            {
                initialData?.images?.length > 0 && <div className="grid grid-cols-3 gap-2 m-5">
                    {
                        initialData?.images?.map((img, i) => <img className="h-20 w-20 aspect-video rounded-md" src={BASE_URL + img} alt={initialData?.title} />)
                    }
                </div>
            }
            <label className="form-control w-full ">
                <div className="label">
                    <span className="label-text">Image</span>
                </div>
                <input
                    type="file"
                    {...register('img', { required: !!initialData ? false : "Choose an Image !" })}
                    name='img'
                    className="file-input file-input-bordered file-input-info w-full"
                    multiple
                // required
                />
            </label>
            {errors?.img?.message && <span className='text-error'>{errors?.img?.message}</span>}

            <div className='flex justify-center'>
                <button
                    className='btn btn-primary mt-5'
                    type="submit"
                >Add Menu Item</button>
            </div>
        </form>
    )
}

export default BlogForm