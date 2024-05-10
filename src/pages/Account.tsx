
const Account = ({ logOut, session }: any) => {

    // console.log(session);
    // console.log(session.user.confirmed_at);


    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">{session !== null ? session.user.user_metadata.full_name : "Brad K"}</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-indigo-500">Welcome to Account page</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Welcome to Account page,where people See their account Information</p>
                    </div>
                    <div className="p-2 flex items-center justify-center w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                            <h1>User UID:</h1>
                            <span className="title-font font-medium">
                                {
                                    session !== null ? session.user.id : "de63b3e7-478c-4b72-9693-4544201a"
                                }
                            </span>
                        </div>
                    </div>

                    <div className="p-2 flex items-center justify-center w--full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                            <h1>Display Name:</h1>
                            <span className="title-font font-medium"> {

                                session !== null ? session.user.user_metadata.full_name : "Brad K"

                            }
                            </span>
                        </div>
                    </div>

                    <div className="p-2 flex items-center justify-center w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                            <h1>Email:</h1>
                            <span className="title-font font-medium"> {
                                session !== null ? session.user.email : "test@gmail.com"
                            }
                            </span>
                        </div>
                    </div>

                    <div className="p-2 flex items-center justify-center w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                            <h1>Provider:</h1>
                            <span className="title-font font-medium"> {
                                session !== null ? session.user.app_metadata.provider : "not Known"
                            }
                            </span>
                        </div>
                    </div>

                    <div className="p-2 flex items-center justify-center w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                            <h1>Confirmed At:</h1>
                            <span className="title-font font-medium"> {
                                session !== null ? session.user.confirmed_at : "not Known"
                            }
                            </span>
                        </div>
                    </div>

                    <div className="p-2 flex items-center justify-center w-full">
                        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                            <h1>Last Sign In: </h1>
                            <span className="title-font font-medium"> {

                                session !== null ? session.user.last_sign_in_at : "not Known"
                            }
                            </span>
                        </div>
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
        </>

    )
}

export default Account