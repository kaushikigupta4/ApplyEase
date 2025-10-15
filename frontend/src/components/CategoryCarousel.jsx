
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearchedQuery } from '@/redux/jobSlice'

const categories = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer"
]

const CategoryCarousel = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query))
    navigate("/browse")
  }

  return (
    <section className="py-20 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <h2 className="text-3xl font-bold text-center mb-10">Explore Popular Categories</h2>

      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent className="flex gap-4">
          {categories.map((cat, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <Button
                onClick={() => searchJobHandler(cat)}
                variant="outline"
                className="rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-shadow duration-300 text-[hsl(var(--foreground))] border-[hsl(var(--border))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))]"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-between mt-4 px-4">
          <CarouselPrevious className="bg-[hsl(var(--muted))] hover:bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] p-2 rounded-full shadow-md transition-colors" />
          <CarouselNext className="bg-[hsl(var(--muted))] hover:bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] p-2 rounded-full shadow-md transition-colors" />
        </div>
      </Carousel>
    </section>
  )
}

export default CategoryCarousel
