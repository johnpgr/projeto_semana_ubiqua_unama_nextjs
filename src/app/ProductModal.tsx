import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { StarIcon } from "lucide-react"

export function ProductModal() {
  return (
    <div>
      <div className="w-full max-w-4xl">
        <div>
          <div className="text-2xl font-bold">Spicy Tofu Soup</div>
          <div>A delicious and hearty soup that's perfect for any weather.</div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              alt="Food product"
              className="aspect-video overflow-hidden rounded-lg"
              height="400"
              src="/placeholder.svg"
              width="600"
            />
          </div>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <div className="flex items-center gap-1 text-sm">
                <span className="font-semibold">$8.99</span>
                <span className="text-muted">Inclusive of all taxes</span>
              </div>
              <div className="flex items-center gap-2">
                <StarIcon className="w-4 h-4 fill-primary" />
                <StarIcon className="w-4 h-4 fill-primary" />
                <StarIcon className="w-4 h-4 fill-primary" />
                <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                <span className="text-sm shrink-0 text-muted">3.0</span>
              </div>
            </div>
            <div className="grid gap-4">
              <p>
                A delicious and hearty soup that's perfect for any weather. Made with fresh tofu, a blend of spices, and
                a rich broth, this soup is sure to warm you up and satisfy your cravings.
              </p>
              <div className="flex gap-4">
                <Button variant="outline">Add to cart</Button>
                <Button>Buy now</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t">
          <div className="grid gap-6 p-6">
            <h2 className="text-xl font-semibold">Comments</h2>
            <div className="grid gap-6">
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-xs text-muted">2 days ago</div>
                  </div>
                  <p className="text-sm leading-relaxed">
                    I tried this soup last week and it was absolutely delicious! The flavors were perfectly balanced and
                    it was so comforting on a chilly day. Highly recommend giving it a try.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Avatar className="w-10 h-10 border">
                  <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">Alex Smith</div>
                    <div className="text-xs text-muted">1 week ago</div>
                  </div>
                  <p className="text-sm leading-relaxed">
                    This soup is a game-changer! The tofu is so flavorful and the broth is simply divine. I'll
                    definitely be ordering this again the next time I'm craving a comforting meal.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="comment">
                Leave a comment
              </Label>
              <Textarea className="min-h-[100px]" id="comment" placeholder="Write your comment here..." />
              <Button className="ml-auto">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
