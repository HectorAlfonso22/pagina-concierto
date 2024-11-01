    // Obtén la información del artista utilizando la API de Last.fm
    fetch('https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Eladio Carrión&api_key=496b566123954f32f4d4f88305244fae&format=json')
      .then(response => response.json())
      .then(data => {
        // Actualiza el contenido de la página con los datos obtenidos
        const artistInfo = document.getElementById('artist-info');
        const bio = data.artist.bio.summary;
        artistInfo.innerHTML = `<p>${bio}</p>`;
      })
      .catch(error => {
        console.error('Error al obtener la información del artista:', error);
      });