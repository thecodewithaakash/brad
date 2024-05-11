import EmailForm from "../components/EmailForm"
import NameForm from "../components/NameForm"

const Account = ({ session }: any) => {

    // console.log(session);
    // console.log(session.user.confirmed_at);

    const userName = session !== null ? session.user.user_metadata.full_name : ""
    const userEmail = session !== null ? session.user.email : ""



    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">{session !== null ? session.user.user_metadata.full_name : "Brad K"}</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-indigo-500">Welcome to Account page</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Welcome to Account page,where people See their account Information</p>
                    </div>

                    <div>
                        <NameForm userName={userName} session={session} />
                        <EmailForm userEmail={userEmail} session={session} />
                    </div>


                </div>
            </section>
        </>

    )
}

export default Account