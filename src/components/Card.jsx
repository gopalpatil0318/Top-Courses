import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = ({ course, setLikeCourses, likeCourses }) => {

  function clickHandler() {
    if (likeCourses.includes(course.id)) {
      setLikeCourses((prev) => prev.filter((cid) => (cid !== course.id)));
      toast.warning("Like Removed");
    }
    else {
      if (likeCourses.length === 0) {
        setLikeCourses([course.id]);
      }
      else {
        setLikeCourses((prev) => [...prev, course.id]);
      }
      toast.success("Like Successfully");
    }
  }

  return (
    <div className='w-[300px] bg-slate-900 bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} alt={course.image.alt} />
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-11px]
        grid place-items-center'>
          <button onClick={clickHandler}>
            {likeCourses.includes(course.id) ? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />)}
          </button>
        </div>
      </div>
      <div className='p-4'>
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className='mt-2 text-white '>
          {
          course.description.length > 100 ? 
          (course.description.substr(0, 100) + "...") : 
          (course.description)
          }
          </p>
      </div>
    </div>
  )
}

export default Card