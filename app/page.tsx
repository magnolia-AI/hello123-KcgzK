'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import Image from 'next/image'

export default function Home() {
  const { toast } = useToast()

  const showSubscribeToast = () => {
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter!",
    })
  }

  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 pb-20 md:pt-24">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
            Culinary Canvas
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-[700px] mx-auto">
            Explore the art of cooking with our delicious recipes, expert tips, and culinary inspiration.  
          </p>
          <div className="mt-12 flex gap-4 justify-center">
            <Button size="lg" className="px-8">Browse Recipes</Button>
            <Button size="lg" variant="outline" className="px-8" onClick={showSubscribeToast}>
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 pb-16">
        <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
          <Image 
            src="https://storage.googleapis.com/magnolia-storage-dev-test-123/images/wPX3yLoM8G/image.jpg" 
            alt="Various delicious dishes on a rustic wooden table" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-2">Seasonal Recipes</h2>
              <p className="text-lg max-w-[600px]">Discover our collection of seasonal recipes using the freshest ingredients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Explore Our Categories</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <Card className="overflow-hidden">
            <div className="relative h-[200px]">
              <Image 
                src="https://storage.googleapis.com/magnolia-storage-dev-test-123/images/WGkC2VIQN0/image.jpg" 
                alt="Hands kneading bread dough" 
                fill 
                className="object-cover"
              />
            </div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Artisanal Baking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Master the art of bread making with our expert techniques and foolproof recipes for perfect loaves every time.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View Recipes</Button>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="relative h-[200px]">
              <Image 
                src="https://storage.googleapis.com/magnolia-storage-dev-test-123/images/7wat0Hp0mE/image.jpg" 
                alt="Fresh produce at a farmer's market" 
                fill 
                className="object-cover"
              />
            </div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Farm to Table</h3>
              <p className="text-muted-foreground leading-relaxed">
                Celebrate seasonal ingredients with our farm-to-table recipes that showcase the best of local produce.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View Recipes</Button>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="relative h-[200px]">
              <Image 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" 
                alt="Healthy salad bowl" 
                fill 
                className="object-cover"
              />
            </div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Healthy Eating</h3>
              <p className="text-muted-foreground leading-relaxed">
                Discover nutritious and delicious recipes that don't compromise on flavor while supporting your wellness goals.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View Recipes</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Latest Recipes */}
      <section className="container mx-auto px-4 py-16 bg-muted/30 rounded-xl">
        <h2 className="text-3xl font-bold mb-10 text-center">Latest Recipes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {[
            {
              title: "Lemon Herb Roasted Chicken",
              image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
              time: "1 hour 30 minutes",
              difficulty: "Medium"
            },
            {
              title: "Creamy Mushroom Risotto",
              image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
              time: "45 minutes",
              difficulty: "Medium"
            },
            {
              title: "Berry Breakfast Smoothie Bowl",
              image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
              time: "15 minutes",
              difficulty: "Easy"
            },
          ].map((recipe, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-[200px]">
                <Image 
                  src={recipe.image} 
                  alt={recipe.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>⏱️ {recipe.time}</span>
                  <span>🔥 {recipe.difficulty}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Recipe</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Join Our Culinary Community
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Subscribe to our newsletter for weekly recipe inspiration, cooking tips, and exclusive content delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-[500px] mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button className="px-8" onClick={showSubscribeToast}>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
