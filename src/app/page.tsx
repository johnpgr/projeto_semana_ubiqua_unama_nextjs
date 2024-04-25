import Link from "next/link"

export default function Home() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <section className="w-full pt-12 md:pt-24 lg:pt-32 border-b">
                <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
                    <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                        <div>
                            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                Delicious Food Delivered to Your Door
                            </h1>
                        </div>
                        <div className="flex flex-col items-start space-y-4">
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                Discover a wide variety of mouthwatering dishes, from classic favorites to innovative culinary
                                creations. Order now for a delightful dining experience.
                            </p>
                            <div className="space-x-4">
                                <Link
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    href="#"
                                >
                                    Order Now
                                </Link>
                                <Link
                                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                    href="#"
                                >
                                    View Menu
                                </Link>
                            </div>
                        </div>
                    </div>
                    <img
                        alt="Hero"
                        className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
                        height="300"
                        src="/placeholder.svg"
                        width="1270"
                    />
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container space-y-12 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                Featured Products
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover Our Best-Selling Dishes</h2>
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Explore our curated selection of mouthwatering meals, each crafted with the finest ingredients and made
                                to delight your taste buds.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950">
                            <img
                                alt="Food Item"
                                className="w-full h-48 object-cover"
                                height="300"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "400/300",
                                    objectFit: "cover",
                                }}
                                width="400"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Spaghetti Carbonara</h3>
                                <p className="text-gray-500 mb-4">Creamy pasta dish with bacon, eggs, and Parmesan.</p>
                                <Link
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    href="#"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950">
                            <img
                                alt="Food Item"
                                className="w-full h-48 object-cover"
                                height="300"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "400/300",
                                    objectFit: "cover",
                                }}
                                width="400"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Grilled Salmon Salad</h3>
                                <p className="text-gray-500 mb-4">Fresh greens, grilled salmon, and a tangy vinaigrette.</p>
                                <Link
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    href="#"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950">
                            <img
                                alt="Food Item"
                                className="w-full h-48 object-cover"
                                height="300"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "400/300",
                                    objectFit: "cover",
                                }}
                                width="400"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Beef Teriyaki Bowl</h3>
                                <p className="text-gray-500 mb-4">Tender beef, steamed rice, and a savory teriyaki sauce.</p>
                                <Link
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    href="#"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950">
                            <img
                                alt="Food Item"
                                className="w-full h-48 object-cover"
                                height="300"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "400/300",
                                    objectFit: "cover",
                                }}
                                width="400"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Vegetable Stir-Fry</h3>
                                <p className="text-gray-500 mb-4">Colorful mix of fresh vegetables in a savory sauce.</p>
                                <Link
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    href="#"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950">
                            <img
                                alt="Food Item"
                                className="w-full h-48 object-cover"
                                height="300"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "400/300",
                                    objectFit: "cover",
                                }}
                                width="400"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Chicken Tikka Masala</h3>
                                <p className="text-gray-500 mb-4">Tender chicken in a creamy, spiced tomato sauce.</p>
                                <Link
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    href="#"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950">
                            <img
                                alt="Food Item"
                                className="w-full h-48 object-cover"
                                height="300"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "400/300",
                                    objectFit: "cover",
                                }}
                                width="400"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Pad Thai</h3>
                                <p className="text-gray-500 mb-4">Stir-fried rice noodles with shrimp, eggs, and peanuts.</p>
                                <Link
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    href="#"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950">
                            <img
                                alt="Food Item"
                                className="w-full h-48 object-cover"
                                height="300"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "400/300",
                                    objectFit: "cover",
                                }}
                                width="400"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Margherita Pizza</h3>
                                <p className="text-gray-500 mb-4">Classic Italian pizza with tomato sauce, mozzarella, and basil.</p>
                                <Link
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    href="#"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950">
                            <img
                                alt="Food Item"
                                className="w-full h-48 object-cover"
                                height="300"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "400/300",
                                    objectFit: "cover",
                                }}
                                width="400"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Beef Burrito Bowl</h3>
                                <p className="text-gray-500 mb-4">Seasoned beef, rice, beans, and fresh toppings.</p>
                                <Link
                                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    href="#"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
