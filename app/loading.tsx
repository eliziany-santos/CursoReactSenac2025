/*retorna o q a pagina irá trazer enquanto nao for carregada */
// export default function Loading(){

//     return(

//         <div className="flex items-center justify-center h-screen">
//             <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>

//         </div>
//     )
// }

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen">
            <img
                src="https://tse3.mm.bing.net/th/id/OIP.Mj8ZyqRP97YuBz08SLP57gHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Carregando..."
                className="w-40 h-40 object-cover rounded-full animate-spin"
            />
        </div>
    );
}
