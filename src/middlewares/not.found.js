
export default (req, res, next) => { 
  res.status(404).json({ Error: 'Recurso no encontrado' });
};