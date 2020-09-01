# redux-fake

## Caracteristicas principales en Redux

     1. Toda la data de la aplicacion, se encuentra en una estructura
        previamente definida.
        
     2. Toda la informacion se encontrara almacenada en un lugar llamado
        STORE.
        
     3. El store jamas se modifica de forma directa.
     
     4. Cualquier interaccion del usuario / codigo dispara acciones que
	    describen que sucedio.
    
     5. El valor actual de la informacion de la aplicacion se llama 
	    estado - STATE.

     6. Un nuevo estado es creado, en base a la combinacion de un viejo
        estado y una accion, esto se hace a traves de una funcion llamada
        REDUCER.
<br><br>

| `GLOSARIO` |  `DESCRIPCION` |
|--|--|
| `STATE`| `Es la unica fuente de informacion que se envia por interacciones de un usuario o un programa.` |
| `STORE`| `Donde se encuentra almacena la aplicacion.` |
| `ACTION` | `Algo que se va hacer` |
| `REDUCER`| `Simple funcion, que recibe la accion y viejo state` |
| `VIEJO STATE`| `Estado actual, que se envia al state, y el state cambia de estado.` |

<br><br>

    Caracteristicas
	
	ACTION: Tiene dos propiedades, el type, payload.
		    Type: La accion que se va a realizar.
		    Payload: Argumento de informacion. aunque es opcional.
		   
		   
	REDUCER: Simple funcion que recibe dos argumentos y siempre 
			 debe de retornar algo. 
			 oldstate: Simplemente es el estado actual de la aplicacion.
			 action: objeto plano que hay que hacer.
	
	STATE: El state es de solo lectura. Es como se encuentra 
		   la aplicacion actualmente.
		    
		   - Nunca se debe mutar/cambiar
		     de forma directa.
		   - Tiene funciones prohibidad de javascript.
		   - Se prohibe la manipulacion directa del objeto oldstate.
	
	STORE: Contiene el estado de la aplicacion. es un objeto que tiene
		   las siguientes responsabilidades.
		   
		   - getState() -->> Permite la lectura del estado.
		   
		   - dispatch(action) -->> Permite la creacion de un nuevo state.
		   
		   - subcribe() -->> Permite notificar cambios a 
		                     traves de observables
		
		
