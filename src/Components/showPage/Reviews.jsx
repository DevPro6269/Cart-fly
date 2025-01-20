import React from 'react'

const Reviews = ({review}) => {
    let ratingg = review.rating;
    let star = new Array(ratingg).fill(true)
    let non_star = new Array(5-ratingg).fill(false)
    
  return (
   <>
   <section key={review.date} className='bg-gray-400 flex  flex-wrap flex-col justify-center items-center rounded-md p-2' >

    
        <h1 className='font-semibold'>{review.reviewerName.split(" ")[0]} </h1> 
 <div>
     {
        star.map((e,i)=>(
            <span key={i} className="fa fa-star text-orange-300"></span>
        ))
     }
     {
         non_star.map((e,i)=>(
            <span key={i} className="fa fa-star"></span>
        ))
     }

      </div>
    <p className='text-ellipsis overflow-hidden whitespace-nowrap'>"{review.comment}"</p>
   </section>
   </>
  )
}

export default Reviews