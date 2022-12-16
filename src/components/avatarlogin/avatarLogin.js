import React from 'react'
import '../avatarlogin/avatarLogin.css'
import User from '../../assets/user.png'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const AvatarLogin = () => {
    const navigate = useNavigate()
    // State untuk mengecek apakah user sudah login atau belum
    const [isLogin, setIsLogin] = React.useState(false)
    const [user, setUser] = React.useState({
        id_users: 1,
        name: 'MHadi',
        email: 'm.hadi@gmail.com'
    })
    React.useEffect(() => {
        // 1. Ambil data user dari localstorage
          const user = localStorage.getItem('username');
          const id_users = localStorage.getItem('id_users');
          const email = localStorage.getItem('email');
          let token = localStorage.getItem('token');
        // 2. buat fungsi verifikasi token yang sama seperti di halaman home
        const verifikasi = async()=> {
          try {
            const response = await axios.post(`http://backend-jurnalfilm-production-9afa.up.railway.app/verify`, {token : token})
            console.log(localStorage.getItem('token'))
            if (response.status === 200){
              setIsLogin(true)
            }
            else {
              navigate('/')
            }
          } catch (error) {
            console.log(error)
          }
        }
        // panggil fungsi verifikasi token di bawah sini
        verifikasi()
        // 3. Lakukan setUser dengan data user yang did_usersapat dari localstorage
        setUser( existingValues => ({
          ...existingValues,
          id_users: localStorage.getItem('id_users'),
          name: localStorage.getItem('user'),
          email: localStorage.getItem('email')
        }));
    }, [])

    const handleLogout = async () => {
        // 1. Hapus localStorage
        localStorage.removeItem('user');
        localStorage.removeItem('id_users');
        localStorage.removeItem('email');

        // 2. Hit endpoint logout dengan body jwt yang did_usersapat dari localstorage
        //   dan setelah berhasil, beri alert sukses
        await axios.post(`http://backend-jurnalfilm-production-9afa.up.railway.app/logout`, {
            token: localStorage.getItem('token')
        })
        .then((res) => {
            alert('Logout Success');
            localStorage.removeItem('token');
        })

        // 3. Redirect ke halaman login, clue : window.location.href = "/"
        window.location.href = '/login';
    }
    return (
        <div>
            <div class="p-10">

                <div class="dropdown inline-block relative">
                    <button class="bg-red-600 hover:bg-red-700 text-gray-900 font-semibold py-2 px-4 rounded inline-flex items-center">
                        <img src={User} class="w-8" />
                        <span class="ml-4 text-white">{user.name}</span>
                    </button>
                    <ul class="dropdown-menu absolute hid_usersden text-gray-700 pt-1">
                        <li class=""><a class="rounded-t bg-red-300 hover:bg-red-500 py-2 px-4 block whitespace-no-wrap" href="/profile">Settings</a></li>
                        <li class=""><button onClick={handleLogout} class="rounded-b bg-red-300 hover:bg-red-500 py-2 px-4 block whitespace-no-wrap pr-8">Logout</button></li>

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default AvatarLogin
