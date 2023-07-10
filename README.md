<div style="color: blue; font-size: 38px;">
    DTO
</div>

Vamos a aplicar esta metedologia para hacer las validaciones logicas de los
datos de entrada, antes de paraslor a los routings, basicamente solo tenemos 
getter y setter

---

<div style="color: blue; font-size: 28px;">
    CARACTERISTICAS
</div>

-> Solo se maneja encapsulamiento para nuestros casos

---

<div style="color: blue; font-size: 28px;">
    REQUISITOS MINIMOS
</div>

-> Conocimientos en typeScript
-> Autocompilador
-> TypeCript.json

---

<div style="color: blue; font-size: 28px;">
    PASO A PASO
</div> 


<div style="color: blue; font-size: 18px;">
    inicializamos node
</div> 

```
npm init -y
```

<div style="color: blue; font-size: 18px;">
    Configuracion del tsconfig.js
</div>
 

```
{
    "compilerOptions":{
        "target":"es6",
        "module":"ES6",
        "moduleResolution":"node",
        "outDir":"./controller",
        "esModuleInterop":true,
        "experimentalDecorators":true,
        "emitDecoratorMetadata":true
    }
}
``` 

<div style="color: blue; font-size: 18px;">
    Configuracion del archivo package.json
</div> 

```
{
  "name": "nodedto",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "type":"module",
  "scripts": {
    "tsc": "tsc -w",
    "dev":"nodemon --quiet ./app.js"
    
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "class-transformer": "0.5.1",
    "nodemon": "3.0.1",
    "reflect-metadata": "0.1.13",
    "typescript": "5.1.6"
  }
}

```

<div style="color: blue; font-size: 18px;">
    Instalamos las dependencias
</div>
 

```
npm i -E -D class-transformer
```

```
npm i -E -D reflect-metadata
```

```
npm i -E -D typescript
```
<div style="color: blue; font-size: 18px;">
     Damos inicio a los observadoresp.
</div>


```
npm run tsc
```

```
npm run dev
```