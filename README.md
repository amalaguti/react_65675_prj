# React 65675

## Description

A simple React application to interact with Notifications items received from external systems

For styling, it uses elements from Flowbite and Tailwind CSS



## Status

- [X] Initial scaffolding
- [X] Default index HTML and normalize CSS
- [X] Entrega 1: Crea tu landing
    -  [X] Archivos para los componentes en carperta components:
        - [X] NavBar
        - [X] CartWidget
        - [X] ItemListContainer

    - [ ] Organización correcta de los mismos:
        - [X] `NavBar` e `ItemListContainer` serán renderizados en `App`.
        - [X] `CartWidget` será renderizado en `NavBar`.

    - [X] Uso de `props` para enviar un string con un mensaje hacia el componente `ItemListContainer`.


## DEV Notes

### Initial build notes

```
npm create vite@latest
cd react_65675_prj
npm install
npm install react-icons --save
npm install flowbite-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install gh-pages
```

#### Integrate Flowebite + tailwindcss with Vite

[Flowbite Vite integration](https://flowbite-react.com/docs/guides/vite)

[Tailwind Vite integration](https://tailwindcss.com/docs/guides/vite)

Get sample config files initilizing a new project: 
```
npm create flowbite-react@latest -- --template vite  
```


### Initial project scaffolding script

```
 ./scripts/initial_scaffolding.sh  
```

### Integration with npm + vite + gh-pages

[How To Deploy A React Vite App To Github Pages (Simple)](https://www.youtube.com/watch?v=hn1IkJk24ow)
```
npm run build
npm run deploy
```