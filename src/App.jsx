import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import Spinner from './components/Spinner'
import { filterData, apiUrl } from "./data"
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true)
  const [category,setCategory] = useState(filterData[0].title)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCourses(data.data)
        console.log(data.data);
      }
      catch (error) {
        toast.error("something went wrong");
      }
      setLoading(false)
    }
    fetchData();
  }, [])

  return (
    <>
      <div className='min-h-screen flex flex-col bg-slate-700'>
        <div>
          <Navbar />
        </div>
        <div className='bg-slate-700'>
          <div>
            <Filter filterData={filterData} 
            category = {category}
            setCategory = {setCategory}
            />
          </div>
          <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
            {
              loading ? (<Spinner />) : (<Cards courses={courses} category = {category} />)
            }
            {/* <Cards  courses={courses} /> */}
          </div>

        </div>
        <div className='flex justify-center'>
          
            <p1 className="text-white m-5 text-xl">Made by Gopal ❤️.</p1>
        </div>
            
      </div>

    </>
  )
}

export default App
