/**
 * Этот файл включает в себя полифиллы, необходимые Angular, и загружается перед приложением.
 * Вы можете добавить в этот файл свои собственные дополнительные полифиллы.
 *
 * Этот файл разделен на 2 раздела:
 *   1. Браузерные полифиллы. Они применяются перед загрузкой ZoneJS и сортируются по браузерам.
 *   2. Импорт приложений. Файлы, импортированные после ZoneJS, которые должны быть загружены до вашего основного файла.
 *
 * Текущая настройка предназначена для так называемых "вечнозеленых" браузеров; последние версии браузеров, которые автоматически обновляют себя. 
 * Это включает в себя Сафари >= 10, Chrome >= 55 (включая Opera),
 * Edge >= 13 на рабочем столе, iOS 10, и Chrome на мобильных устройствах.
 *
 * Узнайте больше в https://angular.io/docs/ts/latest/guide/browser-support.html
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/** IE9, IE10 и IE11 требует набор следующих полифиллов. **/
import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
import 'core-js/es6/set';

/** Для поддержки ngClass на элементах SVG IE10 и IE11 требуется следующее */
// import 'classlist.js';  // Run `npm install --save classlist.js`.

/** Для IE10 и IE11 требуется следующее для API Reflect. */
// import 'core-js/es6/reflect';

/** Вечнозеленые браузеры требуют этого. **/
// Используется для отражения метаданных в JIT. Если вы используете AOT (и только Angular декораторы), вы можете удалить это.
import 'core-js/es7/reflect';

/**
 * Требуется для поддержки веб-анимации `@angular/platform-browser/animations`.
 * Необходимо для: Всего, кроме Chrome, Firefox и Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.

/***************************************************************************************************
 * Зона JS требуется по умолчанию для самого Angular.
 */
import 'zone.js/dist/zone'; // В комплекте с Angular CLI.

/***************************************************************************************************
 * APPLICATION IMPORTS
 */
