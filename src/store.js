import { createStore } from 'redux'

const initialStore = {
    jugadores: [
        {
            id: 1,
            nombre: 'Lionel Messi',
            foto: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg'
        },
        {
            id: 2,
            nombre: 'Neymarjr',
            foto: 'data:image/jpeg;base64,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'
        },
        {
            id: 3,
            nombre: 'Angel Di Maria',
            foto: 'https://www.fundacionkonex.org/custom/web/data/imagenes/repositorio/2021/01/11/16370/202101110134392244d61cac6f6320156a0f9ea60fef2a.jpg'
        },
        {
            id: 4,
            nombre: 'Paula Dybala',
            foto: 'https://images.beinsports.com/wPSFhRIetrcSsgRGxhPlIJNzKl0=/full-fit-in/1000x0/paulodybala-cropped_17wk09ug6xxiy1hfvzayf9f1ew.jpg'
        },
        {
            id: 5,
            nombre: 'Carlos Tevez',
            foto: 'https://elcomercio.pe/resizer/kwjUl3fdjmmayUJBsBKNCJ34rJw=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/NSZYX5ESKRFLFK2AALUHFURHA4.jpg'
        },
        {
            id: 6,
            nombre: 'Sergio Kun Aguero ',
            foto: 'https://www.bitbol.la/files/image/15/15965/60661e24ac56b_360_480!.jpg?s=6e73b3e3d7d3fed09b1a1e9cd62e7cbb&d=1628512625'
        },
        {
            id: 7,
            nombre: 'Iker Casillas',
            foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Iker_Casillas_2.jpg/220px-Iker_Casillas_2.jpg'
        },
        {
            id: 8,
            nombre: 'Carles Puyol',
            foto: 'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2019/10/12/730593.jpg'
        },
        {
            id: 9,
            nombre: 'Kylian Mbappé',
            foto: 'https://img.a.transfermarkt.technology/portrait/big/342229-1602849394.jpg?lm=1'
        },
        {
            id: 10,
            nombre: 'Harry Kane',
            foto: 'https://media.revistagq.com/photos/5ca5e1d94409cc965790793a/master/w_1600%2Cc_limit/futbolistas_mas_caros_del_mundo_778946007.jpg'
        },
        {
            id: 11,
            nombre: 'Cristiano Ronaldo',
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHf6jTYLNarGr-RStXhcn1e1_6aFNH1pmhwg&usqp=CAU'
        },
        {
            id: 12,
            nombre: 'Mohamed Salah',
            foto: 'https://media.revistagq.com/photos/5ca5e1d9267a3293a2721563/master/w_1600%2Cc_limit/futbolistas_mas_caros_del_mundo_445759012.jpg'
        },
        {
            id: 13,
            nombre: 'Dele Alli',
            foto: 'https://media.revistagq.com/photos/5ca5e1dab66b544d9b57bf65/master/w_1600%2Cc_limit/futbolistas_mas_caros_del_mundo_672292750.jpg'
        },
        {
            id: 14,
            nombre: 'Paul Pogba',
            foto: 'https://media.revistagq.com/photos/5ca5e1da3492a9652ebede17/master/w_1600%2Cc_limit/futbolistas_mas_caros_del_mundo_313996353.jpg'
        },
        {
            id: 15,
            nombre: 'Eden Hazard',
            foto: 'https://media.revistagq.com/photos/5ca5e1dad71dd9c6d09547db/master/w_1600%2Cc_limit/futbolistas_mas_caros_del_mundo_87736752.jpg'
        },
        {
            id: 16,
            nombre: 'Joao Félix',
            foto: 'https://media.revistagq.com/photos/5da0618270f1c5000875a27c/master/w_1600%2Cc_limit/joao-felix.jpg'
        },
        {
            id: 17,
            nombre: 'Ousmane Dembelé',
            foto: 'https://media.revistagq.com/photos/5ca5e1da4409cc53b7907945/master/w_1600%2Cc_limit/futbolistas_mas_caros_del_mundo_412129292.jpg'
        }
    ],
    suplentes: [],
    titulares: []
}

const reducerEntrenador = (state = initialStore, action) => {
    
    if (action.type === "AGREGAR_TITULAR") {
        return{
             ...state,
    
          titulares: state.titulares.concat(action.jugador),
          jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        };
      }
      if (action.type === "AGREGAR_SUPLENTE") {
        return{
             ...state,
    
          suplentes: state.suplentes.concat(action.jugador),
          jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        };
      }
      if (action.type === "QUITAR_TITULAR") {
          return {
              ...state,
              titulares: state.titulares.filter(j => j.id !== action.jugador.id),
              jugadores: state.jugadores.concat(action.jugador)
            
          }
      }
      if (action.type === "QUITAR_SUPLENTE") {
          return{
              ...state,
              suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
              jugadores: state.jugadores.concat(action.jugador)
          }
      }
      return state;
    }

export default createStore(reducerEntrenador)