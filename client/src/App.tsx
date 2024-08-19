import { RouterProvider } from 'react-router-dom'
import { router } from './presentation/router/router'



function App() {

  return (
    <div className='fade-in text-3xl font-bold'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
