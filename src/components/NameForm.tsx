import { useState } from 'react';
import { createClient } from '@supabase/supabase-js'


const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
)


export async function updateName(formData: any) {


    // Get form data
    const fullName = String(formData.get('fullName')).trim();

    const { error, data } = await supabase.auth.updateUser({
        data: { full_name: fullName }
    });

    if (error) {
        return console.log(error.message);
    } else if (data.user) {
        return alert('Success!..Your name has been updated.')
    } else {
        return alert('Hmm... Something went wrong.');
    }
}



const NameForm = ({ userName, session }: any) => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    console.log(isSubmitting);


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        setIsSubmitting(true);
        // Check if the new name is the same as the old name
        if (e.currentTarget.fullName.value === userName) {
            e.preventDefault();
            setIsSubmitting(false);
            return;
        }

        updateName(formData)

        setIsSubmitting(false);
    }

    if (session) {
        return (
            <div className='w-full max-w-3xl m-auto my-8 border rounded-md border-zinc-700 flex items-center justify-center'>
                <div className="mt-4 mb-4 text-xl font-semibold px-5 py-4">
                    <h1 className="p-4 text-white">Update Your Name</h1>
                    <form id="nameForm" onSubmit={(e) => handleSubmit(e)}>
                        <input
                            type="text"
                            name="fullName"
                            className=" p-3 rounded-md "
                            defaultValue={userName}
                            placeholder="Your name"
                            maxLength={64}
                        />
                        <button className='text-white bg-indigo-500 border-0 py-2 px-8 ml-4 mt-2 focus:outline-none hover:bg-indigo-600 rounded text-lg'>Update Name</button>
                    </form>
                </div>

            </div>
        )
    } else {
        return <h1>Login Please</h1>
    }
}

export default NameForm