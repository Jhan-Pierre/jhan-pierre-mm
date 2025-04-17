# Portfolio Personal

Este es un proyecto desarrollado en **Next.js** para mostrar mi portafolio personal.

## Tecnologías necesarias
Para ejecutar este proyecto en tu entorno local, necesitarás instalar las siguientes tecnologías:

- **Node.js** (Versión recomendada: 18.x o superior)
- **Next.js** (Versión: 15.2.4)
- **React** (Versión: 19.0.0)
- **Tailwind CSS** (Para el diseño de la interfaz)

## Configuración y ejecución en local

Sigue estos pasos para levantar el proyecto en tu máquina local:

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Jhan-Pierre/portfolio-jp.git
   cd portfolio-jp
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   Copia el archivo de entorno de ejemplo y configúralo:
   ```bash
   cp .env.example .env
   ```
   Luego, edita el archivo `.env` con los valores adecuados.

4. **Levantar el servidor de desarrollo**
   ```bash
   npm run dev
   ```
   Esto iniciará el servidor en `http://localhost:3000`.

5. **Compilar la aplicación para producción** (opcional)
   ```bash
   npm run build
   npm start
   ```

## Despliegue en Vercel
Si deseas desplegar este proyecto en Vercel, sigue estos pasos:

1. Instala la CLI de Vercel si aún no la tienes:
   ```bash
   npm install -g vercel
   ```
2. Ejecuta el comando de despliegue:
   ```bash
   vercel
   ```
   Sigue las instrucciones en pantalla para configurar el proyecto en Vercel.



