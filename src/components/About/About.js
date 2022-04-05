import React from 'react';
import aboutWatch from "../../Assets/img/about.png";

const About = () => {
    return (
        <section className='py-12'>
            <div className='mx-auto w-5/6'>
            <h2 className="text-4xl text-center mb-8">About</h2>
                <div className='grid md:grid-cols-2'>
                    <div className='w-5/6 mx-auto' data-aos="fade-up" data-aos-duration="1500">
                        <img className='w-full' src={aboutWatch} alt="" />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500">

                        <p>
                            Smartwatches typically integrate with a user's smartphone. Many of the same features and applications available on the phone are available on the watch and can synchronize with it. Apple Watch requires that users also have an Apple iPhone.
                            <br/>
                            Some smartwatches have features for special uses. For example, police officers and firefighters might use a smartwatch application to receive alerts from dispatch. Pilots in the U.S. Air Force have smartwatches with special satellite navigation features.
                            <br/>
                            <br/>
                            Smartwatches can be traced back to the early 1970s. Hamilton Pulsar was one of the first digital watches, released in 1972. This marks the point in history when computers became small enough to fit in a wristwatch. Another early digital watch was the Calcron calculator watch, which featured a nine-digit display.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;