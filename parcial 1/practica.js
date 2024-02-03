const axios = require('axios');
const readline = require('readline');

const url = 'https://jsonplaceholder.typicode.com/todos';

const menu = `
1. Lista de todos los pendientes (solo IDs)
2. Lista de todos los pendientes (IDs y Titles)
3. Lista de todos los Pendientes sin resolver (ID y Title)
4. Lista de todos los Pendientes resueltos (ID y Title)
5. Lista de todos los Pendientes (IDs y userID)
6. Lista de todos los pendientes Resueltos (ID y userID)
7. Lista de todos los pendientes Sin resolver (ID y userID)
8. Salir
`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log(menu);
  rl.question('Selecciona una opción: ', (opcion) => {
    switch (opcion) {
      case '1':
        obtenerListaPendientesIDs();
        break;
      case '2':
        obtenerIDsyTitles();
        break;
      case '3':
        obtenerSinResolverIDsyTitles();
        break;
      case '4':
        obtenerResueltosIDsyTitles();
        break;
      case '5':
        obtenerPendientesIDsyUserID();
        break;
      case '6':
        obtenerResueltosIDsyUserID();
        break;
      case '7':
        obtenerSinResolverIDsyUserID();
        break;
      case '8':
        rl.close();
        break;
      default:
        console.log('Opción no válida. Inténtalo de nuevo.');
        mostrarMenu();
    }
  });
}

function hacerSolicitud() {
  return axios.get(url)
    .then((respuesta) => respuesta.data)
    .catch((error) => {
      console.error('Error al realizar la solicitud:', error.message);
      return [];
    });
}

function obtenerListaPendientesIDs() {
  hacerSolicitud()
    .then((pendientes) => {
      const listaIDs = pendientes.map((pendiente) => pendiente.id);
      console.log('Lista de todos los pendientes (solo IDs):', listaIDs);
      mostrarMenu();
    });
}

function obtenerIDsyTitles() {
  hacerSolicitud()
    .then((pendientes) => {
      const idsYTitles = pendientes.map((pendiente) => ({ id: pendiente.id, title: pendiente.title }));
      console.log('IDs y Titles:', idsYTitles);
      mostrarMenu();
    });
}

function obtenerSinResolverIDsyTitles() {
  hacerSolicitud()
    .then((pendientes) => {
      const sinResolver = pendientes.filter((pendiente) => !pendiente.completed);
      const sinResolverIDsYTitles = sinResolver.map((pendiente) => ({ id: pendiente.id, title: pendiente.title }));
      console.log('Sin Resolver (ID y Title):', sinResolverIDsYTitles);
      mostrarMenu();
    });
}

function obtenerResueltosIDsyTitles() {
  hacerSolicitud()
    .then((pendientes) => {
      const resueltos = pendientes.filter((pendiente) => pendiente.completed);
      const resueltosIDsYTitles = resueltos.map((pendiente) => ({ id: pendiente.id, title: pendiente.title }));
      console.log('Resueltos (ID y Title):', resueltosIDsYTitles);
      mostrarMenu();
    });
}

function obtenerPendientesIDsyUserID() {
  hacerSolicitud()
    .then((pendientes) => {
      const pendientesIDsyUserID = pendientes.map((pendiente) => ({ id: pendiente.id, userId: pendiente.userId }));
      console.log('Pendientes (IDs y userID):', pendientesIDsyUserID);
      mostrarMenu();
    });
}

function obtenerResueltosIDsyUserID() {
  hacerSolicitud()
    .then((pendientes) => {
      const resueltos = pendientes.filter((pendiente) => pendiente.completed);
      const resueltosIDsyUserID = resueltos.map((pendiente) => ({ id: pendiente.id, userId: pendiente.userId }));
      console.log('Resueltos (ID y userID):', resueltosIDsyUserID);
      mostrarMenu();
    });
}

function obtenerSinResolverIDsyUserID() {
  hacerSolicitud()
    .then((pendientes) => {
      const sinResolver = pendientes.filter((pendiente) => !pendiente.completed);
      const sinResolverIDsyUserID = sinResolver.map((pendiente) => ({ id: pendiente.id, userId: pendiente.userId }));
      console.log('Sin Resolver (ID y userID):', sinResolverIDsyUserID);
      mostrarMenu();
    });
}


mostrarMenu();
