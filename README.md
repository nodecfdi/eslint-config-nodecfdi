# `@nodecfdi/eslint-config-nodecfdi`

[![Source Code][badge-source]][source]
[![Npm Node Version Support][badge-node-version]][node-version]
[![Discord][badge-discord]][discord]
[![Latest Version][badge-release]][release]
[![Software License][badge-license]][license]
[![Build Status][badge-build]][build]
[![Total Downloads][badge-downloads]][downloads]

> Eslint Shareconfig for projects/libs of nodecfdi

:us: The documentation of this project is in spanish as this is the natural language for intended audience.

:mexico: La documentación del proyecto está en español porque ese es el lenguaje principal de los usuarios.

## Instalación

### NPM

Asegurarse de que instale las peer dependencies.

```bash
npm install --save-dev eslint @nodecfdi/eslint-config-nodecfdi
```

### YARN

```bash
yarn add -D eslint @nodecfdi/eslint-config-nodecfdi
```

### PNPM

```bash
pnpm add -D eslint @nodecfdi/eslint-config-nodecfdi
```

## Uso

Usa el archivo `.eslintrc.*` para configurar el conjunto de reglas. Más información: [Eslint-Configuración](https://eslint.org/docs/user-guide/configuring).

Usando .eslintrc.json

```json
{
    "extends": "@nodecfdi/eslint-config-nodecfdi",
    "rules": {
        // override/add rules settings here, such as:
        // "@typescript-eslint/explicit-function-return-type": [
        //     "error",
        //     {
        //         "allowedNames": ["myFunctionName"]
        //     }
        // ]
    }
}
```

## Soporte

Puedes obtener soporte abriendo un ticket en Github.

Adicionalmente, esta librería pertenece a la comunidad [OcelotlStudio](https://ocelotlstudio.com), así que puedes usar los mismos canales de comunicación para obtener ayuda de algún miembro de la comunidad.

## Compatibilidad

Esta librería se mantendrá compatible con al menos la versión con
[soporte activo de Node](https://nodejs.org/es/about/releases/) más reciente.

También utilizamos [Versionado Semántico 2.0.0](https://semver.org/lang/es/) por lo que puedes usar esta librería sin temor a romper tu aplicación.

## Contribuciones

Las contribuciones con bienvenidas. Por favor lee [CONTRIBUTING][] para más detalles y recuerda revisar el archivo [CHANGELOG][].

## Copyright and License

The `@nodecfdi/eslint-config-nodecfdi` library is copyright © [NodeCfdi](https://github.com/nodecfdi) - [OcelotlStudio](https://ocelotlstudio.com) and licensed for use under the MIT License (MIT). Please see [LICENSE][] for more information.

[contributing]: https://github.com/nodecfdi/eslint-config-nodecfdi/blob/main/CONTRIBUTING.md
[changelog]: https://github.com/nodecfdi/eslint-config-nodecfdi/blob/main/CHANGELOG.md

[source]: https://github.com/nodecfdi/eslint-config-nodecfdi
[node-version]: https://www.npmjs.com/package/@nodecfdi/eslint-config-nodecfdi
[discord]: https://discord.gg/AsqX8fkW2k
[release]: https://www.npmjs.com/package/@nodecfdi/eslint-config-nodecfdi
[license]: https://github.com/nodecfdi/eslint-config-nodecfdi/blob/main/LICENSE
[build]: https://github.com/nodecfdi/eslint-config-nodecfdi/actions/workflows/build.yml?query=branch:main
[downloads]: https://www.npmjs.com/package/@nodecfdi/eslint-config-nodecfdi

[badge-source]: https://img.shields.io/badge/source-nodecfdi/eslint--config--nodecfdi-blue.svg?logo=github
[badge-node-version]: https://img.shields.io/node/v/@nodecfdi/eslint-config-nodecfdi.svg?logo=nodedotjs
[badge-discord]: https://img.shields.io/discord/459860554090283019?logo=discord
[badge-release]: https://img.shields.io/npm/v/@nodecfdi/eslint-config-nodecfdi.svg?logo=npm
[badge-license]: https://img.shields.io/github/license/nodecfdi/eslint-config-nodecfdi.svg?logo=open-source-initiative
[badge-build]: https://img.shields.io/github/actions/workflow/status/nodecfdi/eslint-config-nodecfdi/build.yml?branch=main&logo=github-actions
[badge-downloads]: https://img.shields.io/npm/dm/@nodecfdi/eslint-config-nodecfdi.svg?logo=npm
