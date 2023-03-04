import './App.css';
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'
import Login from './screens/Login/Login';
import Register from './screens/Login/Register';
import MovieDetail from './screens/Movie/MovieDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
      <Route index element={<Login />} />
      <Route path="signup" element={<Register />} /> 
      <Route path="movie_detail/:id" element={<MovieDetail />} /> 
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
