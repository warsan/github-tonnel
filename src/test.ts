// Этот файл требуется karma.conf.js и рекурсивно загружает все файлы .spec и framework

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// К сожалению, для переменной `__karma__` нет набора текста. Просто объявите его любым.
declare const __karma__: any;
declare const require: any;

// Не допускайте преждевременного бега Кармы.
__karma__.loaded = function () {};

// Во-первых, инициализируйте среду Angular тестирования.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Затем мы находим все тесты.
const context = require.context('./', true, /\.spec\.ts$/);
// И загружаем модули.
context.keys().map(context);
// Наконец, стартуем Карму, чтобы выполнить тесты.
__karma__.start();
