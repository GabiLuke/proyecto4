 MovieApp - Mi Proyecto de Películas
Este es mi proyecto final para el curso de React. Es una aplicación simple para buscar películas, ver detalles y guardar tus favoritas usando la API de TMDB.
 
Funcionalidades
 Ver Populares: Muestra una lista de las películas más populares al inicio.
 Buscador: Puedes buscar cualquier película por su título.
 Favoritos: Guarda y gestiona tu lista de películas favoritas (¡usa el localStorage!).
 Detalle de Película: Haz clic en cualquier póster para ver la sinopsis, rating y otros datos.
 Diseño Responsive: Se ve decente en el móvil (¡gracias a los media queries en el CSS!).🚀 
 
Tecnologías Usadas
 React              La base de todo.
 Vite               Para que cargue rápido el desarrollo.
 React Router DOM   Para la navegación entre páginas (Inicio, Buscar, Favoritos, Detalle).
 useContext         Lo usé para el estado de Favoritos. ¡Me costó un poco, pero funcionó!
 Custom Hooks       Usé uno (usePeliculas) para no repetir la lógica de cargar datos.
 CSS Puro           Solo CSS para darle el estilo tipo "Netflix/Prime Video".
 
Instalación y Uso
Si quieres probarlo en tu máquina:

Clona el repositorio: git clone https://github.com/GabiLuke/proyecto4.git
cd proyecto4
Instala las dependencias:npm install
Configura la API Key: Necesitas una clave de la API de TMDB. 
Crea un archivo .env en la raíz del proyecto y pon tu clave:
VITE_TMDB_API_KEY=
Inicia el proyecto: npm run dev
Se abrirá en http://localhost:5173