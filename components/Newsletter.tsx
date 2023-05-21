export default function Newsletter() {
    return(
        <div className="w-full h-full flex justify-center">
            <div className="max-w-xs px-2.5 sm:px-0 lg:px-5 xl:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-6xl w-full">
                <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-5 lg:space-y-0 lg:items-center">
                    <div className="lg:max-w-lg w-full">
                        <div>
                            <p className="text-white">Stay updated</p>
                        </div>
                        <div>
                            <h4 className="text-3xl text-white font-medium">Connect with others and never be left out</h4>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="form-control">
                            <div className="input-group">
                                <input type="text" placeholder="Your email" className="input input-bordered w-full" />
                                <button className="btn btn-square btn-success w-fit px-2.5 text-white">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}