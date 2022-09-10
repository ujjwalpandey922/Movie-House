const useGenres = (selectedGenres) => {
  if (selectedGenres.length < 1) return "";

  const genId = selectedGenres.map((e) => e.id);
  return genId.reduce((acc, current) => acc + "," + current);
};
export default useGenres;
