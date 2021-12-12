import react from "react";

import './Riego.css'


const Riego = (props) => {
    return (
        <div className="riego-contenedor">
            <h1> Agua & Riego</h1>
            <br></br>
            <p>
                El agua es indispensable para la plantas tanto como para nosotros mismos.
                <br></br>
                Es uno de los 4 elementos fundamentales que utiliza la planta para su desarrollo junto con el aire, la luz y los nutrientes.
                <br></br>
                El agua distribuye los nutrientes que la planta toma de su sistema de raíces.
                <br></br>
                La cantidad de agua que cada una de ellas necesita va a depender de diversos factores.
                <br></br>
                Las plantas mas grandes necesitan tomar mas agua que las pequeñas. Otros factores como la maceta o contenedor, el tipo de ventilación que tenga, la humedad y porosidad de la tierra etc, regulan la cantidad de agua que nuestra amiga va a necesitar.
            </p>
            <ul>
                <li>Cuanto mas ventilado esté el ambiente donde se encuentra, mayor va a ser la cantidad de agua que necesita.</li>
                <li>Las macetas grandes tienen la capacidad de retener mayor cantidad de agua que las chicas y no necesitan ser regados constantemente como un pequeño vaso por ejemplo.</li>
                <li>El agua de lluvia es mejor que cualquier agua de canilla, contiene nitrógeno vital para el desarrollo vegetativo de la planta y se acerca mucho a un PH neutral.</li>
                <li>NO UTILIZAR AGUA DE LOS APARATITOS PURIFICADORES, estos quitan nutrientes al agua necesarios para la planta.</li>
                <li>El agua de la canilla suele traer consigo pequeñas cantidades de cloro. Para eliminarlo, podemos dejar reposar el agua en un balde durante 24 horas. Se van a observar unas pequeñas burbujas en las paredes del mismo que con solo sacudir el balde se desprenderán y evaporarán.</li>
                <li>Trate de usar regadera y no echar toda el agua de golpe.</li>
                <li>Trate de regar a primera hora del día, si riega de noche la evaporación del agua es mas lenta y promueve la acumulación de hongos.</li>
            </ul>
            <h4>¿COMO REGAR?</h4>
            <p>
            Debemos esperar que los primeros centímetros de la superficie de la maceta o contenedor estén secos.
            <br></br>
             Los vasitos o contenedores pequeños suelen regarse una o dos veces diarias debido a su poca capacidad de retener el agua, en cambio macetas mas grandes el riego se realiza cada dos días.
            </p>
            <br></br>
           <p>
           No existe un parámetro determinado para saber cuanta agua necesita cada planta, las necesidades de cada una de ellas va a variar como ya mencionamos mas arriba.
          </p>
          <br></br>
          <p>
          NO RIEGUE EXCESIVAMENTE, si la tierra de la superficie todavía se encuentra húmeda, aguarde a que se encuentre seca. El exceso de riego no solo lava la tierra haciendo drenar los nutrientes por la base de la maceta, sino que con el tiempo la tierra se vuelve barrosa y se termina compactando, logrando que las raíces detengan su desarrollo y en consecuencia el de la planta.
          </p>
          <br></br>
          <p>
          Para saber si es suficiente la cantidad de agua que regamos, hay que observar la base de la maceta y fijarse que el agua gotee por los orificios de drenaje, esto es signo de que la misma se encuentra llena y no necesita mas riego. Trate de que el drenaje no sea excesivo debido a que se pierden nutrientes en esta agua que cae.
          </p>


        </div>


    )
}

export default Riego;