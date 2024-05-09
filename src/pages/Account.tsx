import { useState } from "react";


const Account = ({ session }: any) => {

    // const user = session;
    // console.log(user.user.email);


    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                User Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Edit
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {
                                    session !== null ? session.user.id : "#1"
                                }


                            </th>
                            <td className="px-6 py-4">
                                {
                                    session !== null ? session.user.user_metadata.full_name : "Brad K"
                                }
                            </td>
                            <td className="px-6 py-4">
                                {
                                    session !== null ? session.user.email : "bradley.krahe@gmail.com"
                                }
                            </td>

                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>

                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div >
        </>

    )
}

export default Account