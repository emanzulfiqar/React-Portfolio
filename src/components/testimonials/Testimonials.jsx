import React from 'react';
import './testimonials.scss';
import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import avatar3 from '../../assets/avatar3.jpg';
import avatar4 from '../../assets/avatar4.jpg';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
    {
    avatar:avatar1,
    name:'Tina Snow',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorum reprehenderit id autem harum possimus a ut in optio. Illo officiis debitis esse. Illum suscipit deleniti facilis eius obcaecati consequatur neque.'
    
    },
    {
    avatar:avatar2,
    name:'Shatte Wale',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorum reprehenderit id autem harum possimus a ut in optio. Illo officiis debitis esse. Illum suscipit deleniti facilis eius obcaecati consequatur neque.'
    
    },
    {
    avatar:avatar3,
    name:'Kwame Despite',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorum reprehenderit id autem harum possimus a ut in optio. Illo officiis debitis esse. Illum suscipit deleniti facilis eius obcaecati consequatur neque.'
    
    },
    {
    avatar:avatar4,
    name:'Nana Ama McBrown',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorum reprehenderit id autem harum possimus a ut in optio. Illo officiis debitis esse. Illum suscipit deleniti facilis eius obcaecati consequatur neque.'
    
    },
    ]
    

function Testimonials() {
    return (
        <section id="testimonials">
            <h5>Reviews From Clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials-container"
            modules={[ Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            
            >
               {
                data.map(({avatar,name,review,index})=>{
                    return (

                        <SwiperSlide key={index} className="testimonial">
                        <div className="client-avatar">
                            <img src={avatar} alt="avatar-1" />
                        </div>
                        <h5>{name}</h5>
                        <small className='client-review'>{review}</small>
    
                    </SwiperSlide>
                    )
                })
               }
                

            </Swiper>
        </section>
    )
}

export default Testimonials;