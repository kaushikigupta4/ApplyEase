import  { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-[#FFF8F0] to-[#F3F4F6] dark:from-gray-900 dark:to-gray-800 py-20">
            {/* Decorative floating shapes */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-[#F97316] opacity-20 rounded-full -translate-x-20 -translate-y-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#1E40AF] opacity-20 rounded-full translate-x-20 translate-y-20 animate-pulse"></div>

            <div className='relative text-center z-10 flex flex-col gap-6 items-center'>
                {/* Badge */}
                <span className='px-4 py-2 rounded-full bg-[#FFF8F0] text-[#F97316] font-medium dark:bg-gray-700 dark:text-[#FACC15]'>
                    No. 1 Job Hunt Website
                </span>

                {/* Heading */}
                <h1 className='text-5xl font-bold text-gray-900 dark:text-gray-100'>
                    Search, Apply & <br /> Get Your <span className='text-[#1E40AF] dark:text-[#3B82F6]'>Dream Jobs</span>
                </h1>

                {/* Subtext */}
                <p className='text-gray-700 dark:text-gray-300 text-lg max-w-xl'>
                    Your next opportunity is just a click away – find the job you deserve today
                </p>

                {/* Search Bar */}
                <div className='flex w-full max-w-2xl shadow-lg border border-gray-200 dark:border-gray-600 pl-3 rounded-full items-center gap-4 bg-white dark:bg-gray-800'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 px-3 py-2 rounded-l-full'
                    />
                    <Button 
                        onClick={searchJobHandler} 
                        className="rounded-r-full bg-[#1E40AF] hover:bg-[#2563EB] dark:bg-[#3B82F6] dark:hover:bg-[#2563EB]"
                    >
                        <Search className='h-5 w-5 text-white' />
                    </Button>
                </div>

                {/* CTA Buttons */}
                <div className='flex gap-4 mt-6'>
                    <Button className="bg-[#F97316] hover:bg-[#FB923C] dark:bg-[#FACC15] dark:text-gray-900 dark:hover:bg-[#FBBF24]">
                        Browse Jobs
                    </Button>
                    <Button className="bg-[#1E40AF] hover:bg-[#2563EB] dark:bg-[#3B82F6] dark:hover:bg-[#2563EB]">
                        Post Resume
                    </Button>
                </div>

                {/* Floating job tags */}
                <div className='flex flex-wrap justify-center gap-2 mt-6'>
                    {['Remote', 'Full-Time', 'Part-Time', 'Internship', 'Startup', 'Design', 'Marketing'].map((tag, idx) => (
                        <span key={idx} className='px-3 py-1 rounded-full bg-gray-200 text-gray-800 text-sm dark:bg-gray-700 dark:text-gray-200'>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeroSection
