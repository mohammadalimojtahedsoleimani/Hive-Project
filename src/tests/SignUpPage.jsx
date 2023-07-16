import React , {  useState } from "react";


import "react-toastify/dist/ReactToastify.css";


const SignUpPage = () => {


    const [ data , setData ] = useState ( {
        email : "" ,
        password : "" ,
        password1 : "" ,
    } );

    // functions
    const submitHandler = ( event ) => {
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch('http://127.0.0.1:8000/accounts/api/v1/registration/', postData)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    };


    return (
        <div>
            <form className="flex flex-col" onSubmit={ submitHandler }>
                <input
                    type="email"
                    value={ data.email }
                    name="email"
                    id="email"
                    data-testid="email"
                />


                <input
                    type="password"
                    placeholder="رمز عبور"

                    value={ data.password }
                    name="password"

                    id="password"
                    data-testid="password"
                />


                <input
                    type="password"
                    placeholder="تکرار رمز عبور"
                    value={ data.password1 }
                    name="password1"
                    id="password1"
                    data-testid="password1"
                />



                <button data-testid='signup'
                    type="submit"
                    className="text-white bg-[#4D7AD2] rounded-lg text-[18px] xxl:text-[21px] py-[0.8rem] xxl:py-[1.2rem] my-6 xxl:my-9"
                >Submit</button>
            </form>
        </div>
    );
};

export default SignUpPage;
