
export const getAllDirectors = () => ({
  type: 'getAll',
});

export const deleteDirector=(id)=>({
  type:'delOne',
  id,
});

export const getDirectorById=(id)=>({
  type:'getOne',
  id,
});

export const addDirector=(data)=>({
  type:'addOne',
  data,
});

export const editDirector=(id,data)=>({
  type:'editOne',
  id,
  data,
})