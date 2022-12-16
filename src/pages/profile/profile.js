import React from 'react'

const profile = () => {
    return (
        <div>
            <div class="container mx-auto max-w-3xl mt-32">

                <h1 class="text-2xl font-bold text-red-500 px-6 md:px-0">Account Settings</h1>
                <ul class="flex border-b border-red-300 text-sm font-medium text-red-600 mt-3 px-6 md:px-0">
                    <li onClick class="mr-8 text-red-800 border-b-4 border-red-800"><a href="#_" class="py-4 inline-block">Profile Info</a></li>
                    <li class="mr-8 hover:text-red-800"><a href="#_" class="py-4 inline-block">Security</a></li>
                </ul>
                <form action="{{ route('profile.save') }}" method="POST" enctype="multipart/form-data">
                    <div class="w-full bg-white rounded-lg mx-auto mt-8 flex overflow-hidden rounded-b-none">
                        <div class="w-1/3 bg-red-100 p-8 hidden md:inline-block">
                            <h2 class="font-medium text-md text-red-700 mb-4 tracking-wide">Profile Info</h2>
                            <p class="text-xs text-red-500">Update your basic profile information such as Email Address, Name, and Image.</p>
                        </div>
                        <div class="md:w-2/3 w-full">
                            <div class="py-8 px-16">
                                <label for="name" class="text-sm text-red-600">Username</label>
                                <input class="mt-2 border-2 border-red-200 px-3 py-2 block w-full rounded-lg text-base text-red-900 focus:outline-none focus:border-indigo-500" type="text" value="" name="name"/>
                            </div>
                            <hr class="border-red-200"/>
                                <div class="py-8 px-16">
                                    <label for="email" class="text-sm text-red-600">Email Address</label>
                                    <input class="mt-2 border-2 border-red-200 px-3 py-2 block w-full rounded-lg text-base text-red-900 focus:outline-none focus:border-indigo-500" type="email" name="email" value=""/>
                                </div>
                                {/* <hr class="border-red-200"/>
                                    <div class="py-8 px-16 clearfix">
                                        <label for="photo" class="text-sm text-red-600 w-full block">Photo</label>
                                        <img class="rounded-full w-16 h-16 border-4 mt-2 border-red-200 float-left" id="photo" src="https://pbs.twimg.com/profile_images/1163965029063913472/ItoFLWys_400x400.jpg" alt="photo"/>
                                            <div class="bg-red-200 text-red-500 text-xs mt-5 ml-3 font-bold px-4 py-2 rounded-lg float-left hover:bg-red-300 hover:text-red-600 relative overflow-hidden cursor-pointer">
                                                <input type="file" name="photo" onchange="loadFile(event)" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"/> Change Photo
                                            </div>
                                    </div> */}

                                </div>

                        </div>
                        <div class="p-10 bg-red-300 clearfix rounded-b-lg border-t border-red-200">
                            <p class="float-left text-xs text-red-500 tracking-tight mt-2">Click on Save to update your Profile Info</p>
                            <input type="submit" class="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-6 py-2 rounded float-right uppercase cursor-pointer" value="Save"/>
                        </div>
                </form>
            </div>
        </div>

  )
}

export default profile