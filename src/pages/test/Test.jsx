import HeadingText from '../../_components/typography/HeadingText'

const Test = () => {
    const categories = [
        {
            _id: 1,
            categoryName: 'test 01'
        },
        {
            _id: 2,
            categoryName: 'test 02'
        },
    ]
    return (
        <div className='flex flex-col justify-center items-center'>
            <HeadingText>Blog Input form</HeadingText>
            <div className="card bg-base-100 w-2/3 shadow-xl">
                <div className="card-body">
                    <form >
                        <label className="form-control w-full textarea-info">
                            <div className="label">
                                <span className="label-text">Blog Title</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Enter blog title..."
                                className="input input-bordered w-full textarea-info"
                                name='title'
                                required
                            />

                        </label>

                        <label className="form-control w-full textarea-info">
                            <div className="label">
                                <span className="label-text">Blog Content</span>
                            </div>
                            <textarea
                                name='content'
                                required
                                className="textarea textarea-info"
                                placeholder="Write Blog Content"></textarea>

                        </label>

                        <label className="form-control w-full textarea-info">
                            <div className="label">
                                <span className="label-text">Blog Tags</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Enter blog tags..."
                                className="input input-bordered w-full textarea-info"
                                name='tags'
                                required
                            />
                            <div className="label">
                                <span className="label-text-alt"></span>
                                <span className="label-text-alt text-error">Enter Tags as comma separated value.</span>
                            </div>
                        </label>

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Choose Category</span>
                            </div>
                            <select
                                className="select select-info w-full"
                                name='categoryId'
                                required
                            >
                                <option defaultValue disabled selected>--Select Category--</option>
                                {
                                    categories?.map(cat => <option key={cat?._id} value={cat?._id.toString()} >{cat?.categoryName}</option>)
                                }
                            </select>
                            {/* <input
                                type="text"
                                placeholder="Enter Category name..."
                                className="input input-bordered w-full textarea-info"

                            /> */}
                        </label>

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Image</span>
                            </div>
                            <input
                                type="file"
                                name='img'
                                className="file-input file-input-bordered file-input-info w-full"
                                multiple
                                required
                            />
                        </label>
                        <div className='flex justify-center'>
                            <button className='btn btn-primary mt-5 '>Add Menu Item</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <HeadingText>Create Category</HeadingText>
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                    <form >
                        <label className="form-control w-full textarea-info">
                            <div className="label">
                                <span className="label-text text-3xl my-1">Category Name</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Enter Category Name..."
                                className="input input-bordered w-full textarea-info input-lg"
                                name='categoryName'
                                required
                            />

                        </label>
                        <div className='flex justify-center'>
                            <button className='btn btn-primary mt-5 '>Add Menu Item</button>
                        </div>
                    </form>
                </div>
            </div> */}
        </div>
    )
}

export default Test