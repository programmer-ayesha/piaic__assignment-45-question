function makeAlbum(artist: string, title: string, tracks?: number): object {
    const album = {
      artist: artist,
      title: title,
    };
  
    if (tracks !== undefined) {
      album['tracks'] = tracks;
    }
  
    return album;
  }
  

  const album1 = makeAlbum("Lata Mangeshkar  ", " Nightingale of India  ");
  const album2 = makeAlbum("Ravi Shankar  ", " Sitar Maestro ", 12); 
  const album3 = makeAlbum("A.R. Rahman", " Mozart of Madras");
  

  console.log(album1);
  console.log(album2);
  console.log(album3);