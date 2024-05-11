import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';




const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
)


function isValidEmail(email: string) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

export async function updateEmail(formData: FormData) {
    // Get form data
    const newEmail = String(formData.get('newEmail')).trim();

    // Check that the email is valid
    if (!isValidEmail(newEmail)) {
        return (
            alert('Your email could not be updated.Invalid email address')
        )
    }



    const { error } = await supabase.auth.updateUser(
        { email: newEmail },

    );

    if (error) {
        return (
            // alert('Your email could not be updated.'),
            console.log(error.message)
        )

    } else {
        return (
            setTimeout(() => {
                alert('Confirmation emails sent.You will need to confirm the update by clicking the links sent to both the old and new email addresses')
            }, 1000)
        )
    }
}


const EmailForm = ({ userEmail, session }: any) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    console.log(isSubmitting);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        setIsSubmitting(true);
        // Check if the new email is the same as the old email
        if (e.currentTarget.newEmail.value === userEmail) {
            e.preventDefault();
            setIsSubmitting(false);
            return;
        }
        updateEmail(formData)
        setIsSubmitting(false);
    };

    if (session) {
        return (
            <div className=' w-full max-w-3xl m-auto my-8 border rounded-md  border-zinc-700 flex items-center justify-center '>
                <div className=" mt-4 mb-4 text-xl font-semibold px-5 py-4">
                    <h1 className="p-4 text-white">Update Your Email Address</h1>

                    <form id="emailForm" onSubmit={(e) => handleSubmit(e)}>
                        <input
                            type="text"
                            name="newEmail"
                            className=" text-white  p-3 rounded-md bg-zinc-800"
                            defaultValue={userEmail ?? ''}
                            placeholder="Your email"
                            maxLength={64}
                        />
                        <button className='text-white bg-indigo-500 border-0 py-2 px-8 ml-4 mt-2 focus:outline-none hover:bg-indigo-600 rounded text-lg '>update Email</button>
                    </form>

                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Please Login</h1>
            </div>
        )
    }
}

export default EmailForm