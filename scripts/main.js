const sociosBtn = document.querySelector('#socios-btn');
const causasBtn = document.querySelector('#causas-btn');
const donacionesBtn = document.querySelector('#donaciones-btn');
const voluntariadoBtn = document.querySelector('#voluntariado-btn');
const patrociniosBtn = document.querySelector('#patrocinios-btn');
const referidosBtn = document.querySelector('#referidos-btn');
const divColaboraciones = document.querySelector('#div-colaboraciones');



function mostrarSocios() {
    divColaboraciones.innerHTML = `
    <div class="colaboraciones__tarjeta">
    <div class="tarjeta__contenido">
    <div class="tarjeta__header">
      <svg class="icono" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake-icon lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
      <div>
        <h3 class="tarjeta__titulo">Socios estratégicos</h3>
        <p class="tarjeta__subtitulo">Colaboración por intercambio</p>
      </div>
    </div>
    <p class="tarjeta__descripcion">
      Emprender no es fácil, muchas veces el presupuesto no alcanza y tener una página web parece un lujo fuera de alcance. Pero no todo se trata de dinero, sino de apoyo mutuo.
    </br>Creemos en el intercambio justo y en tender la mano cuando más se necesita. Si tienes algo que aportar, nosotros también lo tenemos.
    </p>
    <div class="tarjeta__ideal">
      <strong>Ideal para:</strong> Emprendedores sin capital pero con productos o servicios que puedan ser de interés para nuestros desarrolladores
    </div>
  </div>
  <div class="tarjeta__visual">
    <div class="tarjeta__imagen-fondo" style="background-image: url('/assets/colabs/intercambio-colab.webp');">
      <!-- Aquí tú defines la imagen con CSS -->
    </div>
    <button class="tarjeta__btn">Soy emprendedor</button>
  </div>
  </div>
    `;
}//mostrarSocios
sociosBtn.addEventListener("click", mostrarSocios);


function mostrarCausas() {
    divColaboraciones.innerHTML = `
    <div class="colaboraciones__tarjeta">
  <div class="tarjeta__contenido">
    <div class="tarjeta__header">
      <!---Aquí va el ícono con clase icono -->
      <svg class="icono" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-heart-icon lucide-hand-heart"><path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 15 6 6"/><path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"/></svg>
      <div>
        <h3 class="tarjeta__titulo">Causas benéficas</h3>
        <p class="tarjeta__subtitulo">Nuestro granito de arena</p>
      </div>
    </div>
    <p class="tarjeta__descripcion">
      Tienes una causa que mejora el mundo, nosotros las herramientas para amplificarla.
Tal vez no podamos adoptar a un peludo o donar dinero, pero sí poner nuestro trabajo al servicio de lo que importa.
Hagamos equipo y dejemos huella juntos.
    </p>
    <div class="tarjeta__ideal">
      <strong>Ideal para:</strong> Organizaciones sin fines de lucro, refugios, colectivos sociales o proyectos comunitarios que buscan apoyo digital para fortalecer su impacto
    </div>
  </div>
  <div class="tarjeta__visual">
    <div class="tarjeta__imagen-fondo" style="background-image: url('/assets/colabs/perrito-colab.webp');">
      <!-- En el div de aquí arriba va la imagen de fondo -->
    </div>
    <button class="tarjeta__btn">Ayudemos</button>
  </div>
</div>
`;
}// mostrarCausas
causasBtn.addEventListener("click", mostrarCausas);

function mostrarDonaciones (){
    divColaboraciones.innerHTML = `
    <div class="colaboraciones__tarjeta">
  <div class="tarjeta__contenido">
    <div class="tarjeta__header">
      <!---Aquí va el ícono con clase icono -->
      <svg class="icono" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dollar-sign-icon lucide-circle-dollar-sign"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
      <div>
        <h3 class="tarjeta__titulo">Donaciones</h3>
        <p class="tarjeta__subtitulo">Gracias por hacerlo posible</p>
      </div>
    </div>
    <p class="tarjeta__descripcion">No todos tienen tiempo para involucrarse, pero muchos quieren ayudar.
      <br>Tus donaciones hacen posible que sigamos apoyando causas que importan, y que quienes colaboran detrás de ellas puedan seguir entregando su talento.
      Tu ayuda no se va, se transforma.
    </p>
    <div class="tarjeta__ideal">
      <strong>Ideal para:</strong> Personas solidarias que quieren apoyar a través de aportaciones económicas, ayudando a sostener el trabajo de quienes están al frente de estas causas
    </div>
  </div>
  <div class="tarjeta__visual">
    <div class="tarjeta__imagen-fondo" style="background-image: url('/assets/colabs/donaciones-colab.webp');">
      <!-- En el div de aquí arriba va la imagen de fondo -->
    </div>
    <button class="tarjeta__btn">Invítame un café</button>
  </div>
</div>
    
    `;
}// mostrarDonaciones
donacionesBtn.addEventListener("click", mostrarDonaciones);

function mostrarVoluntariado(){
    divColaboraciones.innerHTML = `
    <div class="colaboraciones__tarjeta">
  <div class="tarjeta__contenido">
    <div class="tarjeta__header">
      <!---Aquí va el ícono con clase icono -->
      <svg class="icono" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-computer-icon lucide-computer"><rect width="14" height="8" x="5" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 18h2"/><path d="M12 18h6"/></svg>
      <div>
        <h3 class="tarjeta__titulo">Voluntariado digital</h3>
        <p class="tarjeta__subtitulo">Refuerza con nosotros</p>
      </div>
    </div>
    <p class="tarjeta__descripcion">Creemos en el poder del talento colectivo.
      <br>Buscamos profesionales con compromiso que quieran aportar sus habilidades en desarrollo o tecnología para proyectos con causa.
      
    </p>
    <div class="tarjeta__ideal">
      <strong>Ideal para:</strong> Personas en busca de experiencia profesional dispuestas a colaborar en proyectos sociales, aportando tiempo, talento y responsabilidad
    </div>
  </div>
  <div class="tarjeta__visual">
    <div class="tarjeta__imagen-fondo" style="background-image: url('/assets/colabs/voluntariado-colab.webp');">
      <!-- En el div de aquí arriba va la imagen de fondo -->
    </div>
    <button class="tarjeta__btn">Quiero experiencia</button>
  </div>
</div>

    `;
}// mostrarVoluntariado
voluntariadoBtn.addEventListener("click", mostrarVoluntariado);

function mostrarPatrocinios(){
    divColaboraciones.innerHTML = `
    <div class="colaboraciones__tarjeta">
  <div class="tarjeta__contenido">
    <div class="tarjeta__header">
      <!---Aquí va el ícono con clase icono -->
      <svg class="icono" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-store-icon lucide-store"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"/></svg>
      <div>
        <h3 class="tarjeta__titulo">Patrocinios</h3>
        <p class="tarjeta__subtitulo">Obtener visibilidad</p>
      </div>
    </div>
    <p class="tarjeta__descripcion">
      Creemos que las mejores marcas no solo venden, también inspiran.
      <br>Si compartimos valores, misión y visión, entonces compartamos camino.
      Patrocinar uno de nuestros proyectos es invertir en innovación social, en talento independiente y en ideas que pueden transformar realidades.
    </p>
    <div class="tarjeta__ideal">
      <strong>Ideal para:</strong> Empresas o marcas que deseen impulsar proyectos con propósito, generando valor social mientras fortalecen su identidad y compromiso
    </div>
  </div>
  <div class="tarjeta__visual">
    <div class="tarjeta__imagen-fondo" style="background-image: url('/assets/colabs/patrocinadores-colab.webp');">
      <!-- En el div de aquí arriba va la imagen de fondo -->
    </div>
    <button class="tarjeta__btn">Anúnciate</button>
  </div>
</div>
    `;
}//mostrarPatrocinios
patrociniosBtn.addEventListener("click", mostrarPatrocinios);

function mostrarReferidos(){
    divColaboraciones.innerHTML = `
    <div class="colaboraciones__tarjeta">
  <div class="tarjeta__contenido">
    <div class="tarjeta__header">
      <!---Aquí va el ícono con clase icono -->
      <svg class="icono" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
      <div>
        <h3 class="tarjeta__titulo">Programa de referidos</h3>
        <p class="tarjeta__subtitulo">Valoramos la recomendación</p>
      </div>
    </div>
    <p class="tarjeta__descripcion">
      Las mejores alianzas nacen de una buena recomendación.
      <br>Si alguien te habló de nosotros, tendrás un descuento especial.
      Y si tú fuiste quien nos recomendó: gracias por confiar y compartir. Tu gesto impulsa nuevos proyectos, y eso lo valoramos profundamente.
    </p>
    <div class="tarjeta__ideal">
      <strong>Ideal para:</strong> Clientes que han vivido la experiencia de cerca y desean apoyar a otros emprendedores, compartiendo nuestro trabajo
    </div>
  </div>
  <div class="tarjeta__visual">
    <div class="tarjeta__imagen-fondo" style="background-image: url('/assets/colabs/referidos-colab.webp');">
      <!-- En el div de aquí arriba va la imagen de fondo -->
    </div>
    <button class="tarjeta__btn">Soy referido</button>
  </div>
</div>
    `;
}//mostrarReferidos
referidosBtn.addEventListener("click", mostrarReferidos);

const botonesColaboracion = document.querySelectorAll('.colab-btn');

botonesColaboracion.forEach((boton) => {
  boton.addEventListener('click', () => {
    // Quitar clase 'activo' de todos los botones
    botonesColaboracion.forEach(b => b.classList.remove('activo'));

    // Agregar clase 'activo' al botón clicado
    boton.classList.add('activo');
  });
});
