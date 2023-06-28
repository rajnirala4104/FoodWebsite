import './App.css';
import {RouterProvider} from  'react-router-dom'
import {_ROUTERS} from './routes'



// https://www.themealdb.com/api/json/v1/1/categories.php
function App() {
  return (
    <div className="App">
      <RouterProvider router={_ROUTERS}/>
    </div>
  );
}

export default App;
