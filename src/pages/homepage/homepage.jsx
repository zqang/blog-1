import React,{useState} from 'react';
import Slideshow from '../../components/slideshow/slideshow';
import FormInput from '../../components/formInput/formInput';
import CustomButton from '../../components/custombutton/custombutton';

import './homepage.style.scss';


const HomePage = () => {
    const [sub, setSub] = useState({firstname: '',lastname: '', email: ''});

    const handleChange = event => {
        const {name, value } = event.target;

        setSub({[name]: value});
    };

    const handleSubmit = async event => {
        event.preventDefault();

        // const {firstname, lastname, email} = sub;

        setSub({firstname: '', lastname: '', email: ''});
    };


    return (
        <div className="home-container">
            <section className="sec-home">
                <Slideshow/>
            </section>
            <section className="sec-home">
                <h3 className="sub-title">Get On The List</h3>
                <form onSubmit={() => handleSubmit}>
                    <FormInput type='text' name='firstname' value={sub.firstname} onChange={handleChange} label='First Name' required />
                    <FormInput type='text' name='lastname' value={sub.lastname} onChange={handleChange} label='Last Name' required />
                    <FormInput type='email' name='email' value={sub.email} onChange={handleChange} label='Email' required />
                    <CustomButton type="submit" name="Subscribe"/>
                </form>
            </section>
        </div>
    )
};

export default HomePage;