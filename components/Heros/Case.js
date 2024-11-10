import React from 'react'

const Case = () => {
    return (
        <div className="my-3 shadow-lg bg-[url('https://afriquemagazine.com/sites/default/files/2021-12/image-AM-423-424-page-72-73.jpg')] bg-cover bg-center h-full w-full">
            <div className="container py-10 px-32  mx-auto bg-black bg-opacity-50">
                <h1 className="text-4xl font-bold mb-2 text-white">Commencez maintenant</h1>
                <h1 className="text-3xl text-orange-400  font-semibold mb-8">Faites le Show dans tout Babi...</h1>
                <div className="py-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="box_main text-center shadow-md rounded-lg  bg-white flex items-center justify-center flex-col px-3 py-4">
                            <div className="icon_1 mb-4"><i className="fa-solid fa-hotel fa-2xl" style={{color: "#FFD43B"}}></i></div>
                            <h6 className="text-lg font-semibold">Trouvez un hôtel où séjourner et passer des moments inoubliables!</h6>
                        </div>
                        <div className="box_main text-center shadow-md rounded-lg  bg-white flex items-center justify-center flex-col px-3 py-4">
                            <div className="icon_1 mb-4"><i className="fa-solid fa-champagne-glasses fa-2xl" style={{color: "#74C0FC"}}></i></div>
                            <h6 className="text-lg font-semibold">Soyez à l'écoute des évènement les plus chaud de babi</h6>
                        </div>
                        <div className="box_main text-center shadow-md rounded-lg  bg-white flex items-center justify-center flex-col px-3 py-4">
                            <div className="icon_1 mb-4"><i className="fa-solid fa-store fa-2xl" style={{color: "#B197FC"}}></i></div>
                            <h6 className="text-lg font-semibold">Une boutique avec un large catalogue de vos produits préférés</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Case
