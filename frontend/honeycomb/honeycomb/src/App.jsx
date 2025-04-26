import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import FilterOptions from './components/FilterOptions'
import PropertyDetails from './components/PropertyDetails'
import PropertyListing from './components/PropertyListing'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<PropertyListing />} />
        <Route path="/filter" element={<FilterOptions />} />
        <Route path="/property-details" element={<PropertyDetails />} />
      </Routes>
    </Provider>
  )
}

export default App
