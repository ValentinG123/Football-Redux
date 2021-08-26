import React from 'react'
import store from './store'
import {Provider} from 'react-redux'
import Jugadores from './components/Jugadores'
import EquipoSeleccionado from './components/EquipoSeleccionado'
import "./styles/styles.scss"
const App = () => (
  <Provider store={store}>
    <main>
      <h1>Barcelona Team</h1>
      <Jugadores/>
      <EquipoSeleccionado/>
    </main>
  </Provider>
)

export default App;
