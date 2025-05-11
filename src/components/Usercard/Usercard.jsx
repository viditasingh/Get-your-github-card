import React from 'react'
import { useLoaderData, useParams } from 'react-router'

function Usercard() {
    
    const {username} = useParams();
    const data = useLoaderData();
  return (
    <>
        <div className="bg-gray-600 text-white text-3xl p-4 text-center">Username: {username}</div>
        <div className="m-4 bg-gray-600 text-white p-4 columns-2 w-2xl m-auto mt-6 mb-6">
            <div className=''><img src={data.avatar_url} alt="profile picture" width={300} /></div>
            <div className=''>
                <div className="text-2xl">
                    Name: {data.name}
                </div>
                <div className=" text-xl">
                    Followers: {data.followers}
                </div>
                <div className="text-xl">
                    Following: {data.following}
                </div>
                <div className="text-xl">
                    Public repositories: {data.public_repos}
                </div>
            </div>
        </div>
    </>
  )
}

export const githubInfo = async ({params}) =>{
    const {username} = params;
    const response = await fetch(`https://api.github.com/users/${username}`)
    return await response.json();
}

export default Usercard
