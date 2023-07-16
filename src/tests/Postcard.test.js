import { render , screen , fireEvent , cleanup , waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import PostCard from '../components/LandingPage/common/PostCard/PostCard';
import Image_0 from "../images/LandingPage/selected_posts_image_0.png";
import { BrowserRouter } from "react-router-dom";
import SignUpPage from "./SignUpPage";
import userEvent from "@testing-library/user-event";
import user from '@testing-library/user-event'
    afterEach ( () => {
    cleanup ();
} );

// Write a test case
test ( "rendering test" , async () => {
    const items = {
        image : Image_0 ,
        raiser_full_name : "علیرضا محمدی" ,
        date : "20 تیر 1402" ,
        title : "جمع آوری کمک برای کودکان کار" ,
        snippet :
            "یقینا قلب همه ما هنگامی که فرزندان این سرزمین را در سر چهار راه ها یا معابر در حال کار می بینیم، به درد می آید، کودکانی که باید بر سر بازی و تحصیل خود باشند تا آینده سازان این مرز و بوم بوده و ارزش آفرینی کنند هدف من جمع آوری مبلغی برای کمک به این کودکان و خرید مایحتاجشان در این شرایط بد اقتصادی است ....." ,
        collected_amount : '100.000' ,
        estimated_amount : '1.000.000' ,
        percentage : 10
    }
    render (
        <BrowserRouter>
            <PostCard post={ items }/>
        </BrowserRouter>
    );
    const titleElement = screen.getByTestId ( 'title-1' )
    expect ( titleElement ).toBeInTheDocument ();
    expect ( titleElement ).toHaveTextContent ( items.title )


} );
test('functions are called',async ()=>{

    const submitHandler = jest.fn();
    render (
        <BrowserRouter>
            <SignUpPage onsubmit={submitHandler}  />
        </BrowserRouter>
    );
    const submitButton = screen.getByTestId('signup')
    userEvent.click(submitButton);
    expect(submitButton)
})
test ( 'main sign up' , async () => {
    const submitHandler = jest.fn();

    render (
        <BrowserRouter>
            <SignUpPage onSubmit={submitHandler} />
        </BrowserRouter>

    );
    const emailInput = screen.getByTestId ( 'email' );
    const passwordInput = screen.getByTestId ( 'password' );
    const passwordConfirmInput = screen.getByTestId ( 'password1' );

    userEvent.type ( emailInput , 'test643@example.com' );
    userEvent.type ( passwordInput , 'DARKside13' );
    userEvent.type ( passwordConfirmInput , 'DARKside13' );


    const email = emailInput.value;
    const password = passwordInput.value;
    const password1 = passwordConfirmInput.value;
    const body = {
        email,
        password,
        password1
    };
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
        json: async () => ({ email:'test6663@example.com'   })
    });
    userEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith('http://127.0.0.1:8000/accounts/api/v1/registration/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const response =  waitFor(() => fetch());
        expect(response);

    });







} )


// wait for response
