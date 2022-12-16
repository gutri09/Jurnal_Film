import React from 'react';
import gutri from '../../assets/gutri.JPG'
import { UilLinkedin, UilInstagramAlt, UilGithub } from '@iconscout/react-unicons'

const cardProfile = () => {
    return (
        <div>
            <div class="w-full max-w-4xl ml-auto mr-auto mt-8">
                <div class="flex flex-wrap -mx-6 -my-6">
                    <div class="w-full lg:w-1/3 px-6 py-6 text-center">
                        <div class="bg-transparent hover:shadow-red-800 rounded shadow-lg overflow-hidden p-8">
                            <img src={gutri} class="rounded-full h-48 w-48 flex items-center justify-center bg-grey-light mx-auto mb-8" />
                            <div class="font-bold text-xl mb-2">Gutri Rahmad Zuwa</div>
                            <p class="text-grey-darker text-base mb-4">Front End Developer</p>
                            <a href="https://www.linkedin.com/in/gutri-rahmad-zuwa-885278224/" target="_blank" class="p-2"><button class="bg-transparent hover:bg-red-800 text-blue-dark rounded-full font-semibold hover:text-white p-2 border border-white"><UilLinkedin /></button></a>
                            <a href="https://www.linkedin.com/in/gutri-rahmad-zuwa-885278224/" target="_blank" class="p-2"><button class="bg-transparent hover:bg-red-800 text-blue-dark rounded-full font-semibold hover:text-white p-2 border border-white"><UilInstagramAlt /></button></a>
                            <a href="https://www.linkedin.com/in/gutri-rahmad-zuwa-885278224/" target="_blank" class="p-2"><button class="bg-transparent hover:bg-red-800 text-blue-dark rounded-full font-semibold hover:text-white p-2 border border-white"><UilGithub /></button></a>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/3 px-6 py-6 text-center">
                        <div class="bg-transparent hover:shadow-red-800 rounded shadow-lg overflow-hidden p-8">
                            <img src={gutri} class="rounded-full h-48 w-48 flex items-center justify-center bg-grey-light mx-auto mb-8" />
                            <div class="font-bold text-xl mb-2">Gutri Rahmad Zuwa</div>
                            <p class="text-grey-darker text-base mb-4">Front End Developer</p>
                            <a href="https://www.linkedin.com/in/gutri-rahmad-zuwa-885278224/" target="_blank" class="p-2"><button class="bg-transparent hover:bg-red-800 text-blue-dark rounded-full font-semibold hover:text-white p-2 border border-white"><UilLinkedin /></button></a>
                            <a href="https://www.linkedin.com/in/gutri-rahmad-zuwa-885278224/" target="_blank" class="p-2"><button class="bg-transparent hover:bg-red-800 text-blue-dark rounded-full font-semibold hover:text-white p-2 border border-white"><UilInstagramAlt /></button></a>
                            <a href="https://www.linkedin.com/in/gutri-rahmad-zuwa-885278224/" target="_blank" class="p-2"><button class="bg-transparent hover:bg-red-800 text-blue-dark rounded-full font-semibold hover:text-white p-2 border border-white"><UilGithub /></button></a>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/3 px-6 py-6 text-center">
                        <div class="bg-transparent hover:shadow-red-800 rounded shadow-lg overflow-hidden p-8">
                            <img src={gutri} class="rounded-full h-48 w-48 flex items-center justify-center bg-grey-light mx-auto mb-8" />
                            <div class="font-bold text-xl mb-2">Gutri Rahmad Zuwa</div>
                            <p class="text-grey-darker text-base mb-4">Front End Developer</p>
                            <a href="https://www.linkedin.com/in/gutri-rahmad-zuwa-885278224/" target="_blank" class="p-2"><button class="bg-transparent hover:bg-red-800 text-blue-dark rounded-full font-semibold hover:text-white p-2 border border-white"><UilLinkedin /></button></a>
                            <a href="https://www.linkedin.com/in/gutri-rahmad-zuwa-885278224/" target="_blank" class="p-2"><button class="bg-transparent hover:bg-red-800 text-blue-dark rounded-full font-semibold hover:text-white p-2 border border-white"><UilInstagramAlt /></button></a>
                            <a href="https://www.linkedin.com/in/gutri-rahmad-zuwa-885278224/" target="_blank" class="p-2"><button class="bg-transparent hover:bg-red-800 text-blue-dark rounded-full font-semibold hover:text-white p-2 border border-white"><UilGithub /></button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cardProfile;
