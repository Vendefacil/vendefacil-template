import React from 'react'
import { useCustomInput } from 'vendefacil-template'

const App = () => {
  const i = useCustomInput();
  return (
    <>
      <h1>VendeFacil Template</h1>
      {i('store.name')}

    </>
  )
}

export default App
