import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MovieDetails, MovieList, PageNotFound, Search } from '../pages';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="movie/:id" element={<MovieDetails />} />
      <Route path="movie/popular" element={<MovieList />} />
      <Route path="movie/top" element={<MovieList />} />
      <Route path="movie/upcoming" element={<MovieList />} />
      <Route path="search" element={<Search />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AllRoutes;
