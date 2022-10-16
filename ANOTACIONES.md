# ANOTACIONES

## Cargando módulos dinámicos con lazy() y Suspense

### lazy()

lazy() nos permite crear un componente que no se va a cargar en el momento de que se ejecute la app de react, este lo que hará es quedarse a la espera de ser "llamado" y solo cuando se vaya a utilizar dicho módulo, React lo carga y lo renderiza en el DOM.

En la pestaña de red en las devtools del navegador, podemos ver que cada uno de los componentes con cargados con lazy(), se muestran de la siguiente forma al momento de ser cargados

`01.chunk.js 02.chunk.js 03.chunk.js .... 30.chunk.js`

Esto no nos ayuda a debbugear o a saber a que componente pertence cada chunk. Para poder darle un nombre a cada módulo debemos hacer que insertar un comentario /\* webpackChunkName: nombreDelModulo \*/ antes de la ruta del componente.

`lazy(/* webpackChunkName: ModuloACargar */ "./ruta/del/modulo.jsx")`

Así podemos darle un nombre personalizado en la pestaña de red de devtools del navegador.

### Suspense

El componente Suspense es como una especie de "await" que nos permite crear un contexto de nuestra app en el cual si este contiene dentro algún componente que se haya cargado con la función lazy(), mostrará un fallback mientras el componente se esta cargando. Esto es muy útil para cuando queremos cargar componentes que son pesados pero que no queremos que se cargue junto al resto de la app hasta que este sea explicitamente invocado.

#### <Suspense fallback={JSX.Element | null}>

Suspense recibe una prop llamada fallback la cual permite mostrar un componente mientras el módulo que se este cargando termine de cargarse y almacenarse en memoria. Cuando el componente se carga, se almacena en memoria y ya no tiene que volver a cargarse.
