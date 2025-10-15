import  { useState, useEffect } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2, Sun, Moon } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'

const Navbar = () => {
  const { user } = useSelector(store => store.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true })
      if (res.data.success) {
        dispatch(setUser(null))
        navigate('/')
        toast.success(res.data.message)
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong')
    }
  }

  return (
    <nav style={{ backgroundColor: 'hsl(var(--background))' }} className="fixed top-0 w-full shadow-md z-50 transition-colors">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold flex items-center gap-1">
            Apply<span style={{ color: 'hsl(var(--secondary))' }}>Ease</span>
          </h1>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 font-medium">
            {user && user.role === 'recruiter' ? (
              <>
                <li><Link className="hover:text-[hsl(var(--primary))] transition-colors" to="/admin/companies">Companies</Link></li>
                <li><Link className="hover:text-[hsl(var(--primary))] transition-colors" to="/admin/jobs">Jobs</Link></li>
              </>
            ) : (
              <>
                <li><Link className="hover:text-[hsl(var(--primary))] transition-colors" to="/">Home</Link></li>
                <li><Link className="hover:text-[hsl(var(--primary))] transition-colors" to="/jobs">Jobs</Link></li>
                <li><Link className="hover:text-[hsl(var(--primary))] transition-colors" to="/browse">Browse</Link></li>
              </>
            )}
          </ul>

          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{ backgroundColor: 'hsl(var(--muted))', color: 'hsl(var(--foreground))' }}
            className="p-2 rounded-full hover:bg-[hsl(var(--secondary))] transition-colors flex items-center justify-center"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Auth / Profile */}
          {!user ? (
            <div className="flex items-center gap-3">
              <Link to="/login"><Button variant="outline">Login</Button></Link>
              <Link to="/signup">
                <Button style={{ backgroundColor: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}>Signup</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer ring-2" style={{ ringColor: 'hsl(var(--border))' }}>
                  <AvatarImage src={user?.profile?.profilePhoto} alt="@user" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent style={{ backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--card-foreground))' }} className="w-80 shadow-lg rounded-lg">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Avatar><AvatarImage src={user?.profile?.profilePhoto} alt="@user" /></Avatar>
                    <div>
                      <h4 className="font-medium">{user?.fullname}</h4>
                      <p style={{ color: 'hsl(var(--muted-foreground))' }} className="text-sm">{user?.profile?.bio}</p>
                    </div>
                  </div>
                  {user.role === 'student' && (
                    <Link to="/profile" style={{ color: 'hsl(var(--primary))' }} className="flex items-center gap-2 hover:underline">
                      <User2 /> View Profile
                    </Link>
                  )}
                  <button onClick={logoutHandler} style={{ color: 'hsl(var(--destructive))' }} className="flex items-center gap-2 hover:underline">
                    <LogOut /> Logout
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
