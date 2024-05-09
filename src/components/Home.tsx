import '../index.css'

const Home = ({ logOut, session }: any) => {
    console.log(session);

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Brad K</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-indigo-500">Welcome to User Management Platform</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Welcome to our User Management App,where people login,signup & Update their account Information</p>
                </div>
                {
                    session ? (
                        <button onClick={logOut} className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">SignOut</button>
                    ) : (

                        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">SignIn</button>
                    )
                }
            </div>
        </section>
    )
}

export default Home