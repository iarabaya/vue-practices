const persona = {
	nombre: 'Tony',
	apellido: 'Stark',
	edad: 45,
	direccion: {
		ciudad: 'New York',
		zip: 552637,
		lat: 12.331,
		lng: 32.112
	}
}

const persona2 = {...persona};

// persona2.nombre = 'Peter'

console.log(persona);