import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiShowAlt } from 'react-icons/bi';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import toast from 'react-hot-toast';
// import { useUser } from '../../context/UserContext.js';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState(''); // error message show korar jonne
    // const { setUser } = useUser();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);
        

        // reset error and success message
        setRegisterError('');


        // add validation 
        signInWithEmailAndPassword (auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // console.log(user);
            localStorage.setItem('user', JSON.stringify(user)); // Store user in local storage
            // setUser(user);
            toast.success('User logged in successfully!');
            
            // Navigate korbe root directory after successful registration houar por
            navigate('/');

        })  
        .catch((error) => {
            // Handle errors jodi khay 
            // console.error("Error registering the user:", error.message);
            toast.error(error.message);
            setRegisterError(error.message);
        });   
    }

  return (
    <div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleLogin}>
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="text-sm">
                    <span onClick={() => setShowPassword(!showPassword)}
                     href="#" className="text-xl text-indigo-600 hover:text-indigo-500"><BiShowAlt/></span>
                </div>
                </div>
                <div className="mt-2">
                <input 
                 id="password" 
                 name="password" 
                 type={ showPassword ? "text" : "password" }
                 autoComplete="current-password" 
                 required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-sara"></input>
                </div>
                
            </div>
            <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
            </form>

            {
                registerError && <p className="mt-4 text-center text-sm text-red-600">{registerError}</p>
              
            }

            <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Register here.</a>
            </p>
        </div>
        </div>
    </div>
  )
}

export default Login
