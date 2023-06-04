export default function Home() {

    return ( 
            <main>
                <div className="min-h-screen bg-cover bg-center" style={{"backgroundImage": "url('https://res.cloudinary.com/practicaldev/image/fetch/s--RNNNA7AE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://user-images.githubusercontent.com/69592270/101304060-72ff5b00-380d-11eb-8c58-a3172d791c9c.png')"}}>
                    <header className="relative h-16 w-full">
                        <div className="inset-0 bg-opacity-50 backdrop-filter backdrop-blur-lg flex justify-center items-center">
                            <div className="bg-black bg-opacity-50 shadow-lg p-6 mt-0 w-full">
                            <div className="text-center font-bold text-4xl bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                                Glock'O Water
                            </div>
                            </div>
                        </div>
                    </header>

                    <div>
                        <div className="container mx-auto mt-20">
                            <div>
                                Whats goingon
                            </div>
                        </div>
                    </div>
                </div>



                {/* https://cdn.shopify.com/s/files/1/0734/4691/6372/files/Schermafbeelding_2023-04-06_om_23.57.02.png?v=1680818259&width=1070 */}

                <div className="bg-gray-900 text-white py-8 px-4">
                    <h1 className="text-4xl font-bold mb-4">Title</h1>
                    <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Button</button>
                </div>

            </main>

    )

}