// Содержимое файла для текущей среды будет перезаписано во время сборки.
// Система сборки по умолчанию использует среду разработки, которая использует `environment.ts`, 
// но если вы сделаете `ng build --env=prod`, то вместо этого будет использоваться `environment.prod.ts`.
// Список того, какой env сопоставляется с каким файлом, можно найти в `angular-cli.json`.

export const environment = {
  production: false,
  api_url: 'https://conduit.productionready.io/api'
};
