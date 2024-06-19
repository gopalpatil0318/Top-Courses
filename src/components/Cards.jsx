import React, { useState } from 'react'
import Card from "./Card"

const Cards = ({ courses, category }) => {
  let allCourses = [];

  const [likeCourses,setLikeCourses] = useState([]);

  const getCourses = () => {
    if(category === "All"){
      Object.values(courses).forEach((coursesCategory) => {
        coursesCategory.forEach((course) => {
          allCourses.push(course);
  
        })
      })
      return allCourses;
    }
    else{
      return courses[category];
    }
    
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourses().map((course) => {
          return (
            <Card key = {course.id} course={course} 
            likeCourses = {likeCourses} 
            setLikeCourses = {setLikeCourses}/>
          )
        })}
    </div>
  )
}

export default Cards