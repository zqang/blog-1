import React from 'react';


import './welcomepage.style.scss';

const WelcomePage = () => {
    return (
        <div>
            <main>
                <section className="homepage-sec">
                    <img src="" alt="profile"/>
                </section>
               <section className="homepage-sec">
                   <article className="article-homepage">
                       <h2>"I write entirely to find out what I'm thinking, what I'm looking at, what I see and what it means." -Joan Didion</h2>
                       <p>Welcome.</p>
                       <p>How does a deeply private woman stumble into a career as a professional blogger? How does a HGTV.com star walk away from a life of fame and fortune in sunny Los Angeles? How does a wife to a man with a brain tumor waste time whittling away sentences on a keyboard?</p>
                       <p>And how does a mother who believes in sacred space, in honoring childhood, in keeping your phone on silent(and tucked far, far away)manage to document family moments in the heart of the Midwest?</p>
                       <p>I suppose you'll find out.(Or, you could take the shortcut.) </p>
                       <p>Welcome to Design for Student, the journal I've been keeping for over a decade. I've grown up here, made mistakes here, and learned a plenty here. It's my home online, where the dustbunnies are infinitely easier to sweep from under the sofa, where the coffee grinds don't spill onto cracks in the countertop tile.</p>
                       <p>If you're new, feel free to get to know me - both the everyday me and the fancy me - and please read this before following along.</p>
                       <p> You'll find me here weekly - writing about the good and the hard. </p>
                   </article>
               </section>
            </main>
        </div>
    )
};

export default WelcomePage;
