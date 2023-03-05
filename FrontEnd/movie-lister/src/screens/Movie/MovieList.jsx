import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function MovieList() {
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState([])
  const [rating, setRating] = useState('')
  const [year, setYear] = useState('')
  const [orderBy, setOrderBy] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('')
  const [movieList, setMovieList] = useState('')
  const [selectedMovieid, setSelectedMovieid] = useState('')

  let navigate = useNavigate(); 

  const onSearchClick = async () => {
    console.log('onsearch click', search)
    const response = await fetch(`/movie-list/movies/searchMovies?query=${search}`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6InRoaXMgYXBpIGNhbGxlZHMifQ.uqz671Y8cTqF1ivIpGVfN5p83HmRMaspBNdffOw-ZXI`,
        "Content-Type": "application/json;charset=utf-8",
      }
    })
    const json = await response.json()
    console.log('JSON', json.data)

    if (response.ok) {
      setMovieList(json.data.results)
    }
  };


  const fetchGenres = async () => {
    const response = await fetch('/movie-list/movies/get_genres', {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6InRoaXMgYXBpIGNhbGxlZHMifQ.uqz671Y8cTqF1ivIpGVfN5p83HmRMaspBNdffOw-ZXI`,
        "Content-Type": "application/json;charset=utf-8",
      }
    })
    const json = await response.json()

    if (response.ok) {
      setGenre(json.data.genres)
    }
  }


  const fetchMovies = async () => {
    const response = await fetch(`/movie-list/movies`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6InRoaXMgYXBpIGNhbGxlZHMifQ.uqz671Y8cTqF1ivIpGVfN5p83HmRMaspBNdffOw-ZXI`,
        "Content-Type": "application/json;charset=utf-8",
      }
    })
    const json = await response.json()
    console.log('JSON', json.data)

    if (response.ok) {
      setMovieList(json.data.results)
      console.log('movieList', movieList)
    }
  }
  const onMovieClick = async (id) => {
    setSelectedMovieid(id)
    navigate(`/movie_detail/${id}`)
  }

  useEffect(() => {
    fetchGenres()
    if(!search){
      fetchMovies()
    }
    
  }, [])

  return (
    <div className="relative flex flex-col justify-center">
      <div className="w-full p-6 m-auto">
        <div className='flex flex-col justify-between'>
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
              placeholder="Search Movies..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button
              onClick={() => {
                onSearchClick();
              }}
              class="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Search
            </button>
          </div>
        </div>
        <div>

        </div>

        <div className='flex flex-row justify-between mb-2 space-x-4'>
          <div className='mb-2'>
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genre:</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500">
              <option selected>Choose a genre</option>
              {genre && genre.map(g => (
                <option value={g.name} >{g.name}</option>
              ))}
            </select>
          </div>
          <div className='mb-2'>
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating:</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500">
              <option selected>Choose a Rating</option>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className='mb-2'>
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year:</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500">
              <option selected>Choose a year</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div className='mb-2'>
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Order By:</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500">
              <option selected>Choose a roder</option>
              <option value="Asc">Asc</option>
              <option value="Dsc">Dsc</option>
            </select>
          </div>
        </div>


      </div>
      <table class="shadow-lg bg-white border-collapse">
        <tr>
          <th class="bg-gray-100 border text-left px-8 py-4">Image</th>
          <th class="bg-gray-100 border text-left px-8 py-4">Title</th>
          <th class="bg-gray-100 border text-left px-8 py-4">Genre</th>
          <th class="bg-gray-100 border text-left px-8 py-4">Rating</th>
          <th class="bg-gray-100 border text-left px-8 py-4">Release date</th>
        </tr>
        {movieList && movieList.map(movie => (
          // <option value={g.name} >{g.name}</option>
          <tr onClick={()=>onMovieClick(movie.id)}>
            <td class="border px-8 py-4" >{movie.id}</td>
            <td class="border px-8 py-4">{movie.original_title}</td>
            <td class="border px-8 py-4">{movie.genre_ids}</td>
            <td class="border px-8 py-4">{movie.vote_average}</td>
            <td class="border px-8 py-4">{movie.release_date}</td>
          </tr>
        ))}

      </table>
    </div>
  );
}