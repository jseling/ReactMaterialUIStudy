# ReactMaterialUIStudy
Estudo do uso do MaterialUI com ReactJS

Baseado em: https://www.youtube.com/watch?v=u9FnmBdBl5k

[Criar o projeto](https://www.youtube.com/watch?v=u9FnmBdBl5k&t=244s)

```
npx create-react-app react-materialui
```

Exclus�o de arquivos desnecess�rios.
S� deixar App.js, index.css e index.js na pasta src.
O App.js retorna s� uma div.

[Instala��o do MaterialUI](https://www.youtube.com/watch?v=u9FnmBdBl5k&t=324s)

https://material-ui.com/

```
npm install @material-ui/core
```

Adicionar um bot�o no App.js igual a documenta��o mostra.

//Cores e temas

O tema padr�o: https://material-ui.com/customization/default-theme/

Cores:
https://material-ui.com/customization/color/

Buttons:
https://material-ui.com/components/buttons/#button

//Css Baseline
Reseta as configura��es de CSS padr�o.
Configurado no index.js com:

```
import { CssBaseline } from '@material-ui/core';
```
e

```
<CssBaseline />
```

//Theme Provider
Customizar as cores

https://material-ui.com/customization/theming/

```
import { ThemeProvider, createTheme } from '@material-ui/core';

  const theme = createTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
    },
  });


  <ThemeProvider theme={theme}>
    <>
  </ThemeProvider>
```  