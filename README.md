# DTO

Vamos a aplicar esta metedologia para hacer las validaciones logicas de los
datos de entrada, antes de paraslor a los routings, basicamente solo tenemos 
getter y setter

-- 

## CARACTERISTICAS

-> Solo se maneja encapsulamiento para nuestros casos

--

## REQUISITOS MINIMOS

-> Conocimientos en typeScript
-> Autocompilador
-> TypeCript.json

--

## PASO A PASO

# inicializamos node

```
npm init -y
```
# Configuracion del tsconfig.js

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

# Configuracion del archivo package.json

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

# Instalamos las dependencias

```
npm i -E -D calss-transformer
```

```
npm i -E -D reflect-metadata
```

```
npm i -E -D typescript
```

# Damos inicio a los observadores

```
npm run tsc
```

```
npm run dev
```