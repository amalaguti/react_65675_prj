# React 65675

## Description

A simple React application to interact with Notifications items received from external systems

For styling, it uses elements from Flowbite and Tailwind CSS



## Status

- [X] Initial scaffolding
- [X] Default index HTML and normalize CSS
- [ ] Entrega 1: Crea tu landing
    -  [ ] Archivos para los componentes en carperta components:
        - [ ] NavBar
        - [ ] CartWidget
        - [ ] ItemListContainer

    - [ ] Organización correcta de los mismos:
        - [ ] `NavBar` e `ItemListContainer` serán renderizados en `App`.
        - [ ] `CartWidget` será renderizado en `NavBar`.

    - [ ] Uso de `props` para enviar un string con un mensaje hacia el componente `ItemListContainer`.


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
