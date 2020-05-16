import React from 'react';

import './footer.style.scss';


const Footer = () => {
    return(
        <footer>
            <div id="footer-1">
                <section className="sec-footer">
                    <h4>As Seen In</h4>
                    <p></p>
                </section>
                <section className="sec-footer">
                    <h4>About</h4>
                    <p>Student of University of Malaya and an ordinary programmer, Alvin ang has been blogging and speaking for more than a decade, wish to strengthen his writing and programming skills in the same time get a job for himself.  </p>
                </section>
                <section className="sec-footer last-sec">
                    <h4>Get On The List</h4>
                </section>
            </div>
            <div id="footer-2">
                <h4>Copyright 2020 Design For Student | Site by Alvin Ang | Legal . Sponsor . Contact</h4>
            </div>
        </footer>
    )
};

export default Footer;