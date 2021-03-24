exports.mostrartrabajos = (req, res) => {

  res.render('home', {
    nombrePagina: 'Devjobs',
    tagline: 'Encuentra y Publica Trabajos Para Desarrolladores',
    barra: true,
    boton: true
  })

}