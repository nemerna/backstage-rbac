/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/backend-tasks */ \"@backstage/backend-tasks\");\n/* harmony import */ var _backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backstage_plugin_auth_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @backstage/plugin-auth-node */ \"@backstage/plugin-auth-node\");\n/* harmony import */ var _backstage_plugin_auth_node__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_auth_node__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @backstage/plugin-permission-node */ \"@backstage/plugin-permission-node\");\n/* harmony import */ var _backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express-promise-router */ \"express-promise-router?2520\");\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express_promise_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _plugins_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins/app */ \"./src/plugins/app.ts\");\n/* harmony import */ var _plugins_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins/auth */ \"./src/plugins/auth.ts\");\n/* harmony import */ var _plugins_catalog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plugins/catalog */ \"./src/plugins/catalog.ts\");\n/* harmony import */ var _plugins_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/events */ \"./src/plugins/events.ts\");\n/* harmony import */ var _plugins_permission__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plugins/permission */ \"./src/plugins/permission.ts\");\n/* harmony import */ var _plugins_proxy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./plugins/proxy */ \"./src/plugins/proxy.ts\");\n/* harmony import */ var _plugins_scaffolder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./plugins/scaffolder */ \"./src/plugins/scaffolder.ts\");\n/* harmony import */ var _plugins_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./plugins/search */ \"./src/plugins/search.ts\");\n/* harmony import */ var _metrics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./metrics */ \"./src/metrics.ts\");\n/* harmony import */ var _backstage_backend_plugin_manager__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @backstage/backend-plugin-manager */ \"@backstage/backend-plugin-manager\");\n/* harmony import */ var _backstage_backend_plugin_manager__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_plugin_manager__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _backstage_plugin_events_backend__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @backstage/plugin-events-backend */ \"@backstage/plugin-events-backend\");\n/* harmony import */ var _backstage_plugin_events_backend__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_events_backend__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _internal_plugin_scalprum_backend__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @internal/plugin-scalprum-backend */ \"../../plugins/scalprum-backend/src/index.ts\");\n/* harmony import */ var _loader_CommonJSModuleLoader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./loader/CommonJSModuleLoader */ \"./src/loader/CommonJSModuleLoader.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n/*\n * Hi!\n *\n * Note that this is an EXAMPLE Backstage backend. Please check the README.\n *\n * Happy hacking!\n */ var _module_hot;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// TODO(davidfestal): The following import is a temporary workaround for a bug\n// in the upstream @backstage/backend-plugin-manager package.\n//\n// It should be removed as soon as the upstream package is fixed and released.\n// see https://github.com/janus-idp/backstage-showcase/pull/600\n\nfunction makeCreateEnv(config, pluginProvider) {\n    const root = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.getRootLogger)();\n    const reader = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.UrlReaders.default({\n        logger: root,\n        config\n    });\n    const discovery = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.HostDiscovery.fromConfig(config);\n    const cacheManager = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.CacheManager.fromConfig(config);\n    const databaseManager = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.DatabaseManager.fromConfig(config, {\n        logger: root\n    });\n    const tokenManager = _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.ServerTokenManager.fromConfig(config, {\n        logger: root\n    });\n    const taskScheduler = _backstage_backend_tasks__WEBPACK_IMPORTED_MODULE_1__.TaskScheduler.fromConfig(config, {\n        databaseManager\n    });\n    const eventBroker = new _backstage_plugin_events_backend__WEBPACK_IMPORTED_MODULE_15__.DefaultEventBroker(root);\n    const identity = _backstage_plugin_auth_node__WEBPACK_IMPORTED_MODULE_2__.DefaultIdentityClient.create({\n        discovery\n    });\n    const permissions = _backstage_plugin_permission_node__WEBPACK_IMPORTED_MODULE_3__.ServerPermissionClient.fromConfig(config, {\n        discovery,\n        tokenManager\n    });\n    root.info(`Created UrlReader ${reader}`);\n    return (plugin)=>{\n        const logger = root.child({\n            type: 'plugin',\n            plugin\n        });\n        const database = databaseManager.forPlugin(plugin);\n        const cache = cacheManager.forPlugin(plugin);\n        const scheduler = taskScheduler.forPlugin(plugin);\n        return {\n            logger,\n            database,\n            cache,\n            config,\n            reader,\n            discovery,\n            tokenManager,\n            scheduler,\n            permissions,\n            identity,\n            eventBroker,\n            pluginProvider\n        };\n    };\n}\nconst OPTIONAL_DYNAMIC_PLUGINS = {\n    techdocs: {},\n    argocd: {},\n    sonarqube: {},\n    kubernetes: {},\n    'azure-devops': {\n        key: 'enabled.azureDevOps'\n    },\n    jenkins: {},\n    ocm: {},\n    gitlab: {}\n};\nasync function addPlugin(args) {\n    const { isOptional, plugin, apiRouter, createEnv, router, options } = args;\n    var _options_key;\n    const isPluginEnabled = !isOptional || args.config.getOptionalBoolean((_options_key = options === null || options === void 0 ? void 0 : options.key) !== null && _options_key !== void 0 ? _options_key : `enabled.${plugin}`) || false;\n    if (isPluginEnabled) {\n        const pluginEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.useHotMemoize)(module, ()=>createEnv(plugin));\n        var _options_path;\n        apiRouter.use((_options_path = options === null || options === void 0 ? void 0 : options.path) !== null && _options_path !== void 0 ? _options_path : `/${plugin}`, await router(pluginEnv));\n        console.log(`Using backend plugin ${plugin}...`);\n    } else if (isOptional) {\n        console.log(`Backend plugin ${plugin} is disabled`);\n    }\n}\nasync function addRouter(args) {\n    const { isOptional, name, service, root, router } = args;\n    const isRouterEnabled = !isOptional || args.config.getOptionalBoolean(`enabled.${name}`) || false;\n    if (isRouterEnabled) {\n        console.log(`Adding router ${name} to backend...`);\n        service.addRouter(root, router);\n    }\n}\nasync function main() {\n    const logger = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.getRootLogger)();\n    const config = await (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.loadBackendConfig)({\n        argv: process.argv,\n        logger\n    });\n    const pluginManager = await _backstage_backend_plugin_manager__WEBPACK_IMPORTED_MODULE_14__.PluginManager.fromConfig(config, logger, undefined, new _loader_CommonJSModuleLoader__WEBPACK_IMPORTED_MODULE_17__.CommonJSModuleLoader(logger));\n    const createEnv = makeCreateEnv(config, pluginManager);\n    const appEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.useHotMemoize)(module, ()=>createEnv('app'));\n    const permissionEnv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.useHotMemoize)(module, ()=>createEnv('permission'));\n    const apiRouter = express_promise_router__WEBPACK_IMPORTED_MODULE_4___default()();\n    apiRouter.use('/permission', await (0,_plugins_permission__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(permissionEnv, {\n        // return list static plugin which supports Backstage permissions.\n        getPluginIds: ()=>[\n                'permission'\n            ]\n    }));\n    // Scalprum frontend plugins provider\n    const scalprumEmv = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.useHotMemoize)(module, ()=>createEnv('scalprum'));\n    apiRouter.use('/scalprum', await (0,_internal_plugin_scalprum_backend__WEBPACK_IMPORTED_MODULE_16__.createRouter)({\n        logger: scalprumEmv.logger,\n        pluginManager,\n        discovery: scalprumEmv.discovery\n    }));\n    apiRouter.use('/permission', await (0,_plugins_permission__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(permissionEnv));\n    // Required plugins\n    await addPlugin({\n        plugin: 'proxy',\n        apiRouter,\n        createEnv,\n        router: _plugins_proxy__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n    });\n    await addPlugin({\n        plugin: 'auth',\n        apiRouter,\n        createEnv,\n        router: _plugins_auth__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    });\n    await addPlugin({\n        plugin: 'catalog',\n        apiRouter,\n        createEnv,\n        router: _plugins_catalog__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    });\n    await addPlugin({\n        plugin: 'search',\n        apiRouter,\n        createEnv,\n        router: _plugins_search__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n    });\n    await addPlugin({\n        plugin: 'scaffolder',\n        apiRouter,\n        createEnv,\n        router: _plugins_scaffolder__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n    });\n    await addPlugin({\n        plugin: 'events',\n        apiRouter,\n        createEnv,\n        router: _plugins_events__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    });\n    await addPlugin({\n        plugin: 'permission',\n        config,\n        apiRouter,\n        createEnv,\n        router: _plugins_permission__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        isOptional: true\n    });\n    for (const plugin of pluginManager.backendPlugins()){\n        if (plugin.installer.kind === 'legacy') {\n            const pluginRouter = plugin.installer.router;\n            if (pluginRouter !== undefined) {\n                let optionals = {};\n                if (pluginRouter.pluginID in OPTIONAL_DYNAMIC_PLUGINS) {\n                    optionals = {\n                        isOptional: true,\n                        config: config,\n                        options: OPTIONAL_DYNAMIC_PLUGINS[pluginRouter.pluginID]\n                    };\n                }\n                await addPlugin({\n                    plugin: pluginRouter.pluginID,\n                    apiRouter,\n                    createEnv,\n                    router: pluginRouter.createPlugin,\n                    ...optionals\n                });\n            }\n        }\n    }\n    const service = (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.createServiceBuilder)(module).loadConfig(config);\n    // Required routers\n    await addRouter({\n        name: 'api',\n        service,\n        root: '/api',\n        router: apiRouter\n    });\n    await addRouter({\n        name: 'app',\n        service,\n        root: '',\n        router: await (0,_plugins_app__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(appEnv)\n    });\n    await addRouter({\n        name: 'healthcheck',\n        service,\n        root: '',\n        router: await (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.createStatusCheckRouter)(appEnv)\n    });\n    // Optional routers\n    await addRouter({\n        name: 'metrics',\n        config,\n        service,\n        root: '',\n        router: (0,_metrics__WEBPACK_IMPORTED_MODULE_13__.metricsHandler)()\n    });\n    await service.start().catch((err)=>{\n        console.log(err);\n        process.exit(1);\n    });\n}\n(_module_hot = module.hot) === null || _module_hot === void 0 ? void 0 : _module_hot.accept();\nmain().catch((error)=>{\n    console.error('Backend failed to start up', error);\n    process.exit(1);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQU1BO0FBRUE7QUFjQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRkE7QUFJQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFtQkE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9uaW1lci9EZXNrdG9wL2phbnVzLXJiYWMvYmFja3N0YWdlLWNvbnRhaW5hcml6ZXMvYmFja3N0YWdlLXNob3djYXNlL3BhY2thZ2VzL2JhY2tlbmQvc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBIaSFcbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyBpcyBhbiBFWEFNUExFIEJhY2tzdGFnZSBiYWNrZW5kLiBQbGVhc2UgY2hlY2sgdGhlIFJFQURNRS5cbiAqXG4gKiBIYXBweSBoYWNraW5nIVxuICovXG5cbmltcG9ydCB7XG4gIENhY2hlTWFuYWdlcixcbiAgRGF0YWJhc2VNYW5hZ2VyLFxuICBIb3N0RGlzY292ZXJ5LFxuICBTZXJ2ZXJUb2tlbk1hbmFnZXIsXG4gIFVybFJlYWRlcnMsXG4gIGNyZWF0ZVNlcnZpY2VCdWlsZGVyLFxuICBnZXRSb290TG9nZ2VyLFxuICBsb2FkQmFja2VuZENvbmZpZyxcbiAgbm90Rm91bmRIYW5kbGVyLFxuICB1c2VIb3RNZW1vaXplLFxuICBjcmVhdGVTdGF0dXNDaGVja1JvdXRlcixcbiAgU2VydmljZUJ1aWxkZXIsXG59IGZyb20gJ0BiYWNrc3RhZ2UvYmFja2VuZC1jb21tb24nO1xuaW1wb3J0IHsgVGFza1NjaGVkdWxlciB9IGZyb20gJ0BiYWNrc3RhZ2UvYmFja2VuZC10YXNrcyc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAYmFja3N0YWdlL2NvbmZpZyc7XG5pbXBvcnQgeyBEZWZhdWx0SWRlbnRpdHlDbGllbnQgfSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1hdXRoLW5vZGUnO1xuaW1wb3J0IHsgU2VydmVyUGVybWlzc2lvbkNsaWVudCB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLXBlcm1pc3Npb24tbm9kZSc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ2V4cHJlc3MtcHJvbWlzZS1yb3V0ZXInO1xuaW1wb3J0IGFwcCBmcm9tICcuL3BsdWdpbnMvYXBwJztcbmltcG9ydCBhdXRoIGZyb20gJy4vcGx1Z2lucy9hdXRoJztcbmltcG9ydCBjYXRhbG9nIGZyb20gJy4vcGx1Z2lucy9jYXRhbG9nJztcbmltcG9ydCBldmVudHMgZnJvbSAnLi9wbHVnaW5zL2V2ZW50cyc7XG5pbXBvcnQgcGVybWlzc2lvbiBmcm9tICcuL3BsdWdpbnMvcGVybWlzc2lvbic7XG5pbXBvcnQgcHJveHkgZnJvbSAnLi9wbHVnaW5zL3Byb3h5JztcbmltcG9ydCBzY2FmZm9sZGVyIGZyb20gJy4vcGx1Z2lucy9zY2FmZm9sZGVyJztcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi9wbHVnaW5zL3NlYXJjaCc7XG5pbXBvcnQgeyBtZXRyaWNzSGFuZGxlciB9IGZyb20gJy4vbWV0cmljcyc7XG5pbXBvcnQgeyBSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHtcbiAgUGx1Z2luTWFuYWdlcixcbiAgQmFja2VuZFBsdWdpblByb3ZpZGVyLFxuICBMZWdhY3lQbHVnaW5FbnZpcm9ubWVudCBhcyBQbHVnaW5FbnZpcm9ubWVudCxcbn0gZnJvbSAnQGJhY2tzdGFnZS9iYWNrZW5kLXBsdWdpbi1tYW5hZ2VyJztcbmltcG9ydCB7IERlZmF1bHRFdmVudEJyb2tlciB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLWV2ZW50cy1iYWNrZW5kJztcbmltcG9ydCB7IGNyZWF0ZVJvdXRlciBhcyBzY2FscHJ1bVJvdXRlciB9IGZyb20gJ0BpbnRlcm5hbC9wbHVnaW4tc2NhbHBydW0tYmFja2VuZCc7XG5cbi8vIFRPRE8oZGF2aWRmZXN0YWwpOiBUaGUgZm9sbG93aW5nIGltcG9ydCBpcyBhIHRlbXBvcmFyeSB3b3JrYXJvdW5kIGZvciBhIGJ1Z1xuLy8gaW4gdGhlIHVwc3RyZWFtIEBiYWNrc3RhZ2UvYmFja2VuZC1wbHVnaW4tbWFuYWdlciBwYWNrYWdlLlxuLy9cbi8vIEl0IHNob3VsZCBiZSByZW1vdmVkIGFzIHNvb24gYXMgdGhlIHVwc3RyZWFtIHBhY2thZ2UgaXMgZml4ZWQgYW5kIHJlbGVhc2VkLlxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYW51cy1pZHAvYmFja3N0YWdlLXNob3djYXNlL3B1bGwvNjAwXG5pbXBvcnQgeyBDb21tb25KU01vZHVsZUxvYWRlciB9IGZyb20gJy4vbG9hZGVyL0NvbW1vbkpTTW9kdWxlTG9hZGVyJztcblxuZnVuY3Rpb24gbWFrZUNyZWF0ZUVudihjb25maWc6IENvbmZpZywgcGx1Z2luUHJvdmlkZXI6IEJhY2tlbmRQbHVnaW5Qcm92aWRlcikge1xuICBjb25zdCByb290ID0gZ2V0Um9vdExvZ2dlcigpO1xuICBjb25zdCByZWFkZXIgPSBVcmxSZWFkZXJzLmRlZmF1bHQoeyBsb2dnZXI6IHJvb3QsIGNvbmZpZyB9KTtcbiAgY29uc3QgZGlzY292ZXJ5ID0gSG9zdERpc2NvdmVyeS5mcm9tQ29uZmlnKGNvbmZpZyk7XG4gIGNvbnN0IGNhY2hlTWFuYWdlciA9IENhY2hlTWFuYWdlci5mcm9tQ29uZmlnKGNvbmZpZyk7XG4gIGNvbnN0IGRhdGFiYXNlTWFuYWdlciA9IERhdGFiYXNlTWFuYWdlci5mcm9tQ29uZmlnKGNvbmZpZywgeyBsb2dnZXI6IHJvb3QgfSk7XG4gIGNvbnN0IHRva2VuTWFuYWdlciA9IFNlcnZlclRva2VuTWFuYWdlci5mcm9tQ29uZmlnKGNvbmZpZywgeyBsb2dnZXI6IHJvb3QgfSk7XG4gIGNvbnN0IHRhc2tTY2hlZHVsZXIgPSBUYXNrU2NoZWR1bGVyLmZyb21Db25maWcoY29uZmlnLCB7IGRhdGFiYXNlTWFuYWdlciB9KTtcbiAgY29uc3QgZXZlbnRCcm9rZXIgPSBuZXcgRGVmYXVsdEV2ZW50QnJva2VyKHJvb3QpO1xuXG4gIGNvbnN0IGlkZW50aXR5ID0gRGVmYXVsdElkZW50aXR5Q2xpZW50LmNyZWF0ZSh7XG4gICAgZGlzY292ZXJ5LFxuICB9KTtcbiAgY29uc3QgcGVybWlzc2lvbnMgPSBTZXJ2ZXJQZXJtaXNzaW9uQ2xpZW50LmZyb21Db25maWcoY29uZmlnLCB7XG4gICAgZGlzY292ZXJ5LFxuICAgIHRva2VuTWFuYWdlcixcbiAgfSk7XG5cbiAgcm9vdC5pbmZvKGBDcmVhdGVkIFVybFJlYWRlciAke3JlYWRlcn1gKTtcblxuICByZXR1cm4gKHBsdWdpbjogc3RyaW5nKTogUGx1Z2luRW52aXJvbm1lbnQgPT4ge1xuICAgIGNvbnN0IGxvZ2dlciA9IHJvb3QuY2hpbGQoeyB0eXBlOiAncGx1Z2luJywgcGx1Z2luIH0pO1xuICAgIGNvbnN0IGRhdGFiYXNlID0gZGF0YWJhc2VNYW5hZ2VyLmZvclBsdWdpbihwbHVnaW4pO1xuICAgIGNvbnN0IGNhY2hlID0gY2FjaGVNYW5hZ2VyLmZvclBsdWdpbihwbHVnaW4pO1xuICAgIGNvbnN0IHNjaGVkdWxlciA9IHRhc2tTY2hlZHVsZXIuZm9yUGx1Z2luKHBsdWdpbik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvZ2dlcixcbiAgICAgIGRhdGFiYXNlLFxuICAgICAgY2FjaGUsXG4gICAgICBjb25maWcsXG4gICAgICByZWFkZXIsXG4gICAgICBkaXNjb3ZlcnksXG4gICAgICB0b2tlbk1hbmFnZXIsXG4gICAgICBzY2hlZHVsZXIsXG4gICAgICBwZXJtaXNzaW9ucyxcbiAgICAgIGlkZW50aXR5LFxuICAgICAgZXZlbnRCcm9rZXIsXG4gICAgICBwbHVnaW5Qcm92aWRlcixcbiAgICB9O1xuICB9O1xufVxuXG50eXBlIEFkZFBsdWdpbkJhc2UgPSB7XG4gIGlzT3B0aW9uYWw/OiBib29sZWFuO1xuICBwbHVnaW46IHN0cmluZztcbiAgYXBpUm91dGVyOiBSZXR1cm5UeXBlPHR5cGVvZiBSb3V0ZXI+O1xuICBjcmVhdGVFbnY6IFJldHVyblR5cGU8dHlwZW9mIG1ha2VDcmVhdGVFbnY+O1xuICByb3V0ZXI6IChlbnY6IFBsdWdpbkVudmlyb25tZW50KSA9PiBQcm9taXNlPFJldHVyblR5cGU8dHlwZW9mIFJvdXRlcj4+O1xuICBvcHRpb25zPzogeyBwYXRoPzogc3RyaW5nIH07XG59O1xuXG50eXBlIEFkZFBsdWdpbiA9IHtcbiAgaXNPcHRpb25hbD86IGZhbHNlO1xufSAmIEFkZFBsdWdpbkJhc2U7XG5cbnR5cGUgT3B0aW9uYWxQbHVnaW5PcHRpb25zID0ge1xuICBrZXk/OiBzdHJpbmc7XG4gIHBhdGg/OiBzdHJpbmc7XG59O1xuXG50eXBlIEFkZE9wdGlvbmFsUGx1Z2luID0ge1xuICBpc09wdGlvbmFsOiB0cnVlO1xuICBjb25maWc6IENvbmZpZztcbiAgb3B0aW9ucz86IE9wdGlvbmFsUGx1Z2luT3B0aW9ucztcbn0gJiBBZGRQbHVnaW5CYXNlO1xuXG5jb25zdCBPUFRJT05BTF9EWU5BTUlDX1BMVUdJTlM6IHsgW2tleTogc3RyaW5nXTogT3B0aW9uYWxQbHVnaW5PcHRpb25zIH0gPSB7XG4gIHRlY2hkb2NzOiB7fSxcbiAgYXJnb2NkOiB7fSxcbiAgc29uYXJxdWJlOiB7fSxcbiAga3ViZXJuZXRlczoge30sXG4gICdhenVyZS1kZXZvcHMnOiB7IGtleTogJ2VuYWJsZWQuYXp1cmVEZXZPcHMnIH0sXG4gIGplbmtpbnM6IHt9LFxuICBvY206IHt9LFxuICBnaXRsYWI6IHt9LFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgeyBba2V5OiBzdHJpbmddOiBPcHRpb25hbFBsdWdpbk9wdGlvbnMgfTtcblxuYXN5bmMgZnVuY3Rpb24gYWRkUGx1Z2luKGFyZ3M6IEFkZFBsdWdpbiB8IEFkZE9wdGlvbmFsUGx1Z2luKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHsgaXNPcHRpb25hbCwgcGx1Z2luLCBhcGlSb3V0ZXIsIGNyZWF0ZUVudiwgcm91dGVyLCBvcHRpb25zIH0gPSBhcmdzO1xuXG4gIGNvbnN0IGlzUGx1Z2luRW5hYmxlZCA9XG4gICAgIWlzT3B0aW9uYWwgfHxcbiAgICBhcmdzLmNvbmZpZy5nZXRPcHRpb25hbEJvb2xlYW4ob3B0aW9ucz8ua2V5ID8/IGBlbmFibGVkLiR7cGx1Z2lufWApIHx8XG4gICAgZmFsc2U7XG4gIGlmIChpc1BsdWdpbkVuYWJsZWQpIHtcbiAgICBjb25zdCBwbHVnaW5FbnY6IFBsdWdpbkVudmlyb25tZW50ID0gdXNlSG90TWVtb2l6ZShtb2R1bGUsICgpID0+XG4gICAgICBjcmVhdGVFbnYocGx1Z2luKSxcbiAgICApO1xuICAgIGFwaVJvdXRlci51c2Uob3B0aW9ucz8ucGF0aCA/PyBgLyR7cGx1Z2lufWAsIGF3YWl0IHJvdXRlcihwbHVnaW5FbnYpKTtcbiAgICBjb25zb2xlLmxvZyhgVXNpbmcgYmFja2VuZCBwbHVnaW4gJHtwbHVnaW59Li4uYCk7XG4gIH0gZWxzZSBpZiAoaXNPcHRpb25hbCkge1xuICAgIGNvbnNvbGUubG9nKGBCYWNrZW5kIHBsdWdpbiAke3BsdWdpbn0gaXMgZGlzYWJsZWRgKTtcbiAgfVxufVxuXG50eXBlIEFkZFJvdXRlckJhc2UgPSB7XG4gIGlzT3B0aW9uYWw/OiBib29sZWFuO1xuICBuYW1lOiBzdHJpbmc7XG4gIHNlcnZpY2U6IFNlcnZpY2VCdWlsZGVyO1xuICByb290OiBzdHJpbmc7XG4gIHJvdXRlcjogUmVxdWVzdEhhbmRsZXIgfCBSZXR1cm5UeXBlPHR5cGVvZiBSb3V0ZXI+O1xufTtcblxudHlwZSBBZGRSb3V0ZXJPcHRpb25hbCA9IHtcbiAgaXNPcHRpb25hbDogdHJ1ZTtcbiAgY29uZmlnOiBDb25maWc7XG59ICYgQWRkUm91dGVyQmFzZTtcblxudHlwZSBBZGRSb3V0ZXIgPSB7XG4gIGlzT3B0aW9uYWw/OiBmYWxzZTtcbn0gJiBBZGRSb3V0ZXJCYXNlO1xuXG5hc3luYyBmdW5jdGlvbiBhZGRSb3V0ZXIoYXJnczogQWRkUm91dGVyIHwgQWRkUm91dGVyT3B0aW9uYWwpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgeyBpc09wdGlvbmFsLCBuYW1lLCBzZXJ2aWNlLCByb290LCByb3V0ZXIgfSA9IGFyZ3M7XG5cbiAgY29uc3QgaXNSb3V0ZXJFbmFibGVkID1cbiAgICAhaXNPcHRpb25hbCB8fCBhcmdzLmNvbmZpZy5nZXRPcHRpb25hbEJvb2xlYW4oYGVuYWJsZWQuJHtuYW1lfWApIHx8IGZhbHNlO1xuXG4gIGlmIChpc1JvdXRlckVuYWJsZWQpIHtcbiAgICBjb25zb2xlLmxvZyhgQWRkaW5nIHJvdXRlciAke25hbWV9IHRvIGJhY2tlbmQuLi5gKTtcbiAgICBzZXJ2aWNlLmFkZFJvdXRlcihyb290LCByb3V0ZXIpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XG4gIGNvbnN0IGxvZ2dlciA9IGdldFJvb3RMb2dnZXIoKTtcbiAgY29uc3QgY29uZmlnID0gYXdhaXQgbG9hZEJhY2tlbmRDb25maWcoe1xuICAgIGFyZ3Y6IHByb2Nlc3MuYXJndixcbiAgICBsb2dnZXIsXG4gIH0pO1xuICBjb25zdCBwbHVnaW5NYW5hZ2VyID0gYXdhaXQgUGx1Z2luTWFuYWdlci5mcm9tQ29uZmlnKFxuICAgIGNvbmZpZyxcbiAgICBsb2dnZXIsXG4gICAgdW5kZWZpbmVkLFxuICAgIG5ldyBDb21tb25KU01vZHVsZUxvYWRlcihsb2dnZXIpLFxuICApO1xuICBjb25zdCBjcmVhdGVFbnYgPSBtYWtlQ3JlYXRlRW52KGNvbmZpZywgcGx1Z2luTWFuYWdlcik7XG5cbiAgY29uc3QgYXBwRW52ID0gdXNlSG90TWVtb2l6ZShtb2R1bGUsICgpID0+IGNyZWF0ZUVudignYXBwJykpO1xuXG4gIGNvbnN0IHBlcm1pc3Npb25FbnYgPSB1c2VIb3RNZW1vaXplKG1vZHVsZSwgKCkgPT4gY3JlYXRlRW52KCdwZXJtaXNzaW9uJykpO1xuICBcbiAgY29uc3QgYXBpUm91dGVyID0gUm91dGVyKCk7XG4gIGFwaVJvdXRlci51c2UoXG4gICAgJy9wZXJtaXNzaW9uJyxcbiAgICBhd2FpdCBwZXJtaXNzaW9uKHBlcm1pc3Npb25FbnYsIHtcbiAgICAgIC8vIHJldHVybiBsaXN0IHN0YXRpYyBwbHVnaW4gd2hpY2ggc3VwcG9ydHMgQmFja3N0YWdlIHBlcm1pc3Npb25zLlxuICAgICAgZ2V0UGx1Z2luSWRzOiAoKSA9PiBbICdwZXJtaXNzaW9uJ10sXG4gICAgfSksXG4gICk7XG5cbiAgLy8gU2NhbHBydW0gZnJvbnRlbmQgcGx1Z2lucyBwcm92aWRlclxuICBjb25zdCBzY2FscHJ1bUVtdiA9IHVzZUhvdE1lbW9pemUobW9kdWxlLCAoKSA9PiBjcmVhdGVFbnYoJ3NjYWxwcnVtJykpO1xuICBhcGlSb3V0ZXIudXNlKFxuICAgICcvc2NhbHBydW0nLFxuICAgIGF3YWl0IHNjYWxwcnVtUm91dGVyKHtcbiAgICAgIGxvZ2dlcjogc2NhbHBydW1FbXYubG9nZ2VyLFxuICAgICAgcGx1Z2luTWFuYWdlcixcbiAgICAgIGRpc2NvdmVyeTogc2NhbHBydW1FbXYuZGlzY292ZXJ5LFxuICAgIH0pLFxuICApO1xuICBhcGlSb3V0ZXIudXNlKCcvcGVybWlzc2lvbicsIGF3YWl0IHBlcm1pc3Npb24ocGVybWlzc2lvbkVudikpO1xuICAvLyBSZXF1aXJlZCBwbHVnaW5zXG4gIGF3YWl0IGFkZFBsdWdpbih7IHBsdWdpbjogJ3Byb3h5JywgYXBpUm91dGVyLCBjcmVhdGVFbnYsIHJvdXRlcjogcHJveHkgfSk7XG4gIGF3YWl0IGFkZFBsdWdpbih7IHBsdWdpbjogJ2F1dGgnLCBhcGlSb3V0ZXIsIGNyZWF0ZUVudiwgcm91dGVyOiBhdXRoIH0pO1xuICBhd2FpdCBhZGRQbHVnaW4oeyBwbHVnaW46ICdjYXRhbG9nJywgYXBpUm91dGVyLCBjcmVhdGVFbnYsIHJvdXRlcjogY2F0YWxvZyB9KTtcbiAgYXdhaXQgYWRkUGx1Z2luKHsgcGx1Z2luOiAnc2VhcmNoJywgYXBpUm91dGVyLCBjcmVhdGVFbnYsIHJvdXRlcjogc2VhcmNoIH0pO1xuICBhd2FpdCBhZGRQbHVnaW4oe1xuICAgIHBsdWdpbjogJ3NjYWZmb2xkZXInLFxuICAgIGFwaVJvdXRlcixcbiAgICBjcmVhdGVFbnYsXG4gICAgcm91dGVyOiBzY2FmZm9sZGVyLFxuICB9KTtcbiAgYXdhaXQgYWRkUGx1Z2luKHsgcGx1Z2luOiAnZXZlbnRzJywgYXBpUm91dGVyLCBjcmVhdGVFbnYsIHJvdXRlcjogZXZlbnRzIH0pO1xuXG4gIGF3YWl0IGFkZFBsdWdpbih7XG4gICAgcGx1Z2luOiAncGVybWlzc2lvbicsXG4gICAgY29uZmlnLFxuICAgIGFwaVJvdXRlcixcbiAgICBjcmVhdGVFbnYsXG4gICAgcm91dGVyOiBwZXJtaXNzaW9uLFxuICAgIGlzT3B0aW9uYWw6IHRydWUsXG4gIH0pO1xuXG4gIGZvciAoY29uc3QgcGx1Z2luIG9mIHBsdWdpbk1hbmFnZXIuYmFja2VuZFBsdWdpbnMoKSkge1xuICAgIGlmIChwbHVnaW4uaW5zdGFsbGVyLmtpbmQgPT09ICdsZWdhY3knKSB7XG4gICAgICBjb25zdCBwbHVnaW5Sb3V0ZXIgPSBwbHVnaW4uaW5zdGFsbGVyLnJvdXRlcjtcbiAgICAgIGlmIChwbHVnaW5Sb3V0ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsZXQgb3B0aW9uYWxzID0ge307XG4gICAgICAgIGlmIChwbHVnaW5Sb3V0ZXIucGx1Z2luSUQgaW4gT1BUSU9OQUxfRFlOQU1JQ19QTFVHSU5TKSB7XG4gICAgICAgICAgb3B0aW9uYWxzID0ge1xuICAgICAgICAgICAgaXNPcHRpb25hbDogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICAgICAgb3B0aW9uczogT1BUSU9OQUxfRFlOQU1JQ19QTFVHSU5TW3BsdWdpblJvdXRlci5wbHVnaW5JRF0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBhZGRQbHVnaW4oe1xuICAgICAgICAgIHBsdWdpbjogcGx1Z2luUm91dGVyLnBsdWdpbklELFxuICAgICAgICAgIGFwaVJvdXRlcixcbiAgICAgICAgICBjcmVhdGVFbnYsXG4gICAgICAgICAgcm91dGVyOiBwbHVnaW5Sb3V0ZXIuY3JlYXRlUGx1Z2luLFxuICAgICAgICAgIC4uLm9wdGlvbmFscyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBjb25zdCBzZXJ2aWNlID0gY3JlYXRlU2VydmljZUJ1aWxkZXIobW9kdWxlKS5sb2FkQ29uZmlnKGNvbmZpZyk7XG5cbiAgLy8gUmVxdWlyZWQgcm91dGVyc1xuICBhd2FpdCBhZGRSb3V0ZXIoe1xuICAgIG5hbWU6ICdhcGknLFxuICAgIHNlcnZpY2UsXG4gICAgcm9vdDogJy9hcGknLFxuICAgIHJvdXRlcjogYXBpUm91dGVyLFxuICB9KTtcbiAgYXdhaXQgYWRkUm91dGVyKHtcbiAgICBuYW1lOiAnYXBwJyxcbiAgICBzZXJ2aWNlLFxuICAgIHJvb3Q6ICcnLFxuICAgIHJvdXRlcjogYXdhaXQgYXBwKGFwcEVudiksXG4gIH0pO1xuICBhd2FpdCBhZGRSb3V0ZXIoe1xuICAgIG5hbWU6ICdoZWFsdGhjaGVjaycsXG4gICAgc2VydmljZSxcbiAgICByb290OiAnJyxcbiAgICByb3V0ZXI6IGF3YWl0IGNyZWF0ZVN0YXR1c0NoZWNrUm91dGVyKGFwcEVudiksXG4gIH0pO1xuXG4gIC8vIE9wdGlvbmFsIHJvdXRlcnNcbiAgYXdhaXQgYWRkUm91dGVyKHtcbiAgICBuYW1lOiAnbWV0cmljcycsXG4gICAgY29uZmlnLFxuICAgIHNlcnZpY2UsXG4gICAgcm9vdDogJycsXG4gICAgcm91dGVyOiBtZXRyaWNzSGFuZGxlcigpLFxuICB9KTtcblxuICBhd2FpdCBzZXJ2aWNlLnN0YXJ0KCkuY2F0Y2goZXJyID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5ob3Q/LmFjY2VwdCgpO1xubWFpbigpLmNhdGNoKGVycm9yID0+IHtcbiAgY29uc29sZS5lcnJvcignQmFja2VuZCBmYWlsZWQgdG8gc3RhcnQgdXAnLCBlcnJvcik7XG4gIHByb2Nlc3MuZXhpdCgxKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/loader/CommonJSModuleLoader.ts":
/*!********************************************!*\
  !*** ./src/loader/CommonJSModuleLoader.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CommonJSModuleLoader: () => (/* binding */ CommonJSModuleLoader)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * Copyright 2023 The Backstage Authors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ function _define_property(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\n\nclass CommonJSModuleLoader {\n    async bootstrap(backstageRoot, dynamicPluginsPaths) {\n        const backstageRootNodeModulesPath = `${backstageRoot}/node_modules`;\n        const dynamicNodeModulesPaths = [\n            ...dynamicPluginsPaths.map((p)=>path__WEBPACK_IMPORTED_MODULE_0___default().resolve(p, 'node_modules'))\n        ];\n        const Module = __webpack_require__(/*! module */ \"module\");\n        const oldNodeModulePaths = Module._nodeModulePaths;\n        Module._nodeModulePaths = (from)=>{\n            const result = oldNodeModulePaths(from);\n            if (!dynamicPluginsPaths.some((p)=>from.startsWith(p))) {\n                return result;\n            }\n            const filtered = result.filter((nodeModulePath)=>{\n                return nodeModulePath === backstageRootNodeModulesPath || dynamicNodeModulesPaths.some((p)=>nodeModulePath.startsWith(p));\n            });\n            this.logger.debug(`Overriding node_modules search path for dynamic plugin ${from} to: ${filtered}`);\n            return filtered;\n        };\n    }\n    async load(packagePath) {\n        return await import(/* webpackIgnore: true */ packagePath);\n    }\n    constructor(logger){\n        _define_property(this, \"logger\", void 0);\n        this.logger = logger;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9hZGVyL0NvbW1vbkpTTW9kdWxlTG9hZGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBOzs7Ozs7Ozs7Ozs7O0FBSUE7QUFHQTtBQUdBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBaENBOztBQUFBO0FBQUE7QUFpQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL25pbWVyL0Rlc2t0b3AvamFudXMtcmJhYy9iYWNrc3RhZ2UtY29udGFpbmFyaXplcy9iYWNrc3RhZ2Utc2hvd2Nhc2UvcGFja2FnZXMvYmFja2VuZC9zcmMvbG9hZGVyL0NvbW1vbkpTTW9kdWxlTG9hZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAyMyBUaGUgQmFja3N0YWdlIEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgTW9kdWxlTG9hZGVyIH0gZnJvbSAnQGJhY2tzdGFnZS9iYWNrZW5kLXBsdWdpbi1tYW5hZ2VyJztcblxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICd3aW5zdG9uJztcblxuZXhwb3J0IGNsYXNzIENvbW1vbkpTTW9kdWxlTG9hZGVyIGltcGxlbWVudHMgTW9kdWxlTG9hZGVyIHtcbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGxvZ2dlcjogTG9nZ2VyKSB7fVxuXG4gIGFzeW5jIGJvb3RzdHJhcChcbiAgICBiYWNrc3RhZ2VSb290OiBzdHJpbmcsXG4gICAgZHluYW1pY1BsdWdpbnNQYXRoczogc3RyaW5nW10sXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGJhY2tzdGFnZVJvb3ROb2RlTW9kdWxlc1BhdGggPSBgJHtiYWNrc3RhZ2VSb290fS9ub2RlX21vZHVsZXNgO1xuICAgIGNvbnN0IGR5bmFtaWNOb2RlTW9kdWxlc1BhdGhzID0gW1xuICAgICAgLi4uZHluYW1pY1BsdWdpbnNQYXRocy5tYXAocCA9PiBwYXRoLnJlc29sdmUocCwgJ25vZGVfbW9kdWxlcycpKSxcbiAgICBdO1xuICAgIGNvbnN0IE1vZHVsZSA9IHJlcXVpcmUoJ21vZHVsZScpO1xuICAgIGNvbnN0IG9sZE5vZGVNb2R1bGVQYXRocyA9IE1vZHVsZS5fbm9kZU1vZHVsZVBhdGhzO1xuICAgIE1vZHVsZS5fbm9kZU1vZHVsZVBhdGhzID0gKGZyb206IHN0cmluZyk6IHN0cmluZ1tdID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBvbGROb2RlTW9kdWxlUGF0aHMoZnJvbSk7XG4gICAgICBpZiAoIWR5bmFtaWNQbHVnaW5zUGF0aHMuc29tZShwID0+IGZyb20uc3RhcnRzV2l0aChwKSkpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZpbHRlcmVkID0gcmVzdWx0LmZpbHRlcihub2RlTW9kdWxlUGF0aCA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgbm9kZU1vZHVsZVBhdGggPT09IGJhY2tzdGFnZVJvb3ROb2RlTW9kdWxlc1BhdGggfHxcbiAgICAgICAgICBkeW5hbWljTm9kZU1vZHVsZXNQYXRocy5zb21lKHAgPT4gbm9kZU1vZHVsZVBhdGguc3RhcnRzV2l0aChwKSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoXG4gICAgICAgIGBPdmVycmlkaW5nIG5vZGVfbW9kdWxlcyBzZWFyY2ggcGF0aCBmb3IgZHluYW1pYyBwbHVnaW4gJHtmcm9tfSB0bzogJHtmaWx0ZXJlZH1gLFxuICAgICAgKTtcbiAgICAgIHJldHVybiBmaWx0ZXJlZDtcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgbG9hZChwYWNrYWdlUGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tJZ25vcmU6IHRydWUgKi8gcGFja2FnZVBhdGgpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/loader/CommonJSModuleLoader.ts\n");

/***/ }),

/***/ "./src/metrics.ts":
/*!************************!*\
  !*** ./src/metrics.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   metricsHandler: () => (/* binding */ metricsHandler),\n/* harmony export */   normalizePath: () => (/* binding */ normalizePath)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_prom_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-prom-bundle */ \"express-prom-bundle\");\n/* harmony import */ var express_prom_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_prom_bundle__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prom-client */ \"prom-client\");\n/* harmony import */ var prom_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prom_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nconst rootRegEx = new RegExp('^/([^/]*)/.*');\nconst apiRegEx = new RegExp('^/api/([^/]*)/.*');\nfunction normalizePath(req) {\n    const path = url__WEBPACK_IMPORTED_MODULE_3__.parse(req.originalUrl || req.url).pathname || '/';\n    // Capture /api/ and the plugin name\n    if (apiRegEx.test(path)) {\n        return path.replace(apiRegEx, '/api/$1');\n    }\n    // Only the first path segment at root level\n    return path.replace(rootRegEx, '/$1');\n}\n/**\n * Adds a /metrics endpoint, register default runtime metrics and instrument the router.\n */ function metricsHandler() {\n    // We can only initialize the metrics once and have to clean them up between hot reloads\n    (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.useHotCleanup)(module, ()=>prom_client__WEBPACK_IMPORTED_MODULE_2___default().register.clear());\n    return express_prom_bundle__WEBPACK_IMPORTED_MODULE_1___default()({\n        includeMethod: true,\n        includePath: true,\n        // Using includePath alone is problematic, as it will include path labels with high\n        // cardinality (e.g. path params). Instead we would have to template them. However, this\n        // is difficult, as every backend plugin might use different routes. Instead we only take\n        // the first directory of the path, to have at least an idea how each plugin performs:\n        normalizePath,\n        promClient: {\n            collectDefaultMetrics: {}\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWV0cmljcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9uaW1lci9EZXNrdG9wL2phbnVzLXJiYWMvYmFja3N0YWdlLWNvbnRhaW5hcml6ZXMvYmFja3N0YWdlLXNob3djYXNlL3BhY2thZ2VzL2JhY2tlbmQvc3JjL21ldHJpY3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlSG90Q2xlYW51cCB9IGZyb20gJ0BiYWNrc3RhZ2UvYmFja2VuZC1jb21tb24nO1xuaW1wb3J0IHsgUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBwcm9tQnVuZGxlIGZyb20gJ2V4cHJlc3MtcHJvbS1idW5kbGUnO1xuaW1wb3J0IHByb20gZnJvbSAncHJvbS1jbGllbnQnO1xuaW1wb3J0ICogYXMgdXJsIGZyb20gJ3VybCc7XG5cbmNvbnN0IHJvb3RSZWdFeCA9IG5ldyBSZWdFeHAoJ14vKFteL10qKS8uKicpO1xuY29uc3QgYXBpUmVnRXggPSBuZXcgUmVnRXhwKCdeL2FwaS8oW14vXSopLy4qJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVQYXRoKHJlcTogYW55KTogc3RyaW5nIHtcbiAgY29uc3QgcGF0aCA9IHVybC5wYXJzZShyZXEub3JpZ2luYWxVcmwgfHwgcmVxLnVybCkucGF0aG5hbWUgfHwgJy8nO1xuXG4gIC8vIENhcHR1cmUgL2FwaS8gYW5kIHRoZSBwbHVnaW4gbmFtZVxuICBpZiAoYXBpUmVnRXgudGVzdChwYXRoKSkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoYXBpUmVnRXgsICcvYXBpLyQxJyk7XG4gIH1cblxuICAvLyBPbmx5IHRoZSBmaXJzdCBwYXRoIHNlZ21lbnQgYXQgcm9vdCBsZXZlbFxuICByZXR1cm4gcGF0aC5yZXBsYWNlKHJvb3RSZWdFeCwgJy8kMScpO1xufVxuXG4vKipcbiAqIEFkZHMgYSAvbWV0cmljcyBlbmRwb2ludCwgcmVnaXN0ZXIgZGVmYXVsdCBydW50aW1lIG1ldHJpY3MgYW5kIGluc3RydW1lbnQgdGhlIHJvdXRlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ldHJpY3NIYW5kbGVyKCk6IFJlcXVlc3RIYW5kbGVyIHtcbiAgLy8gV2UgY2FuIG9ubHkgaW5pdGlhbGl6ZSB0aGUgbWV0cmljcyBvbmNlIGFuZCBoYXZlIHRvIGNsZWFuIHRoZW0gdXAgYmV0d2VlbiBob3QgcmVsb2Fkc1xuICB1c2VIb3RDbGVhbnVwKG1vZHVsZSwgKCkgPT4gcHJvbS5yZWdpc3Rlci5jbGVhcigpKTtcblxuICByZXR1cm4gcHJvbUJ1bmRsZSh7XG4gICAgaW5jbHVkZU1ldGhvZDogdHJ1ZSxcbiAgICBpbmNsdWRlUGF0aDogdHJ1ZSxcbiAgICAvLyBVc2luZyBpbmNsdWRlUGF0aCBhbG9uZSBpcyBwcm9ibGVtYXRpYywgYXMgaXQgd2lsbCBpbmNsdWRlIHBhdGggbGFiZWxzIHdpdGggaGlnaFxuICAgIC8vIGNhcmRpbmFsaXR5IChlLmcuIHBhdGggcGFyYW1zKS4gSW5zdGVhZCB3ZSB3b3VsZCBoYXZlIHRvIHRlbXBsYXRlIHRoZW0uIEhvd2V2ZXIsIHRoaXNcbiAgICAvLyBpcyBkaWZmaWN1bHQsIGFzIGV2ZXJ5IGJhY2tlbmQgcGx1Z2luIG1pZ2h0IHVzZSBkaWZmZXJlbnQgcm91dGVzLiBJbnN0ZWFkIHdlIG9ubHkgdGFrZVxuICAgIC8vIHRoZSBmaXJzdCBkaXJlY3Rvcnkgb2YgdGhlIHBhdGgsIHRvIGhhdmUgYXQgbGVhc3QgYW4gaWRlYSBob3cgZWFjaCBwbHVnaW4gcGVyZm9ybXM6XG4gICAgbm9ybWFsaXplUGF0aCxcbiAgICBwcm9tQ2xpZW50OiB7IGNvbGxlY3REZWZhdWx0TWV0cmljczoge30gfSxcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/metrics.ts\n");

/***/ }),

/***/ "./src/plugins/app.ts":
/*!****************************!*\
  !*** ./src/plugins/app.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-app-backend */ \"@backstage/plugin-app-backend\");\n/* harmony import */ var _backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function createPlugin(env) {\n    return await (0,_backstage_plugin_app_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        logger: env.logger,\n        config: env.config,\n        database: env.database,\n        appPackageName: 'app'\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9hcHAudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9uaW1lci9EZXNrdG9wL2phbnVzLXJiYWMvYmFja3N0YWdlLWNvbnRhaW5hcml6ZXMvYmFja3N0YWdlLXNob3djYXNlL3BhY2thZ2VzL2JhY2tlbmQvc3JjL3BsdWdpbnMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVJvdXRlciB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLWFwcC1iYWNrZW5kJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgUGx1Z2luRW52aXJvbm1lbnQgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBsdWdpbihcbiAgZW52OiBQbHVnaW5FbnZpcm9ubWVudCxcbik6IFByb21pc2U8Um91dGVyPiB7XG4gIHJldHVybiBhd2FpdCBjcmVhdGVSb3V0ZXIoe1xuICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICBjb25maWc6IGVudi5jb25maWcsXG4gICAgZGF0YWJhc2U6IGVudi5kYXRhYmFzZSxcbiAgICBhcHBQYWNrYWdlTmFtZTogJ2FwcCcsXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugins/app.ts\n");

/***/ }),

/***/ "./src/plugins/auth.ts":
/*!*****************************!*\
  !*** ./src/plugins/auth.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-auth-backend */ \"@backstage/plugin-auth-backend\");\n/* harmony import */ var _backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_catalog_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/catalog-model */ \"@backstage/catalog-model\");\n/* harmony import */ var _backstage_catalog_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_catalog_model__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function createPlugin(env) {\n    return await (0,_backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        logger: env.logger,\n        config: env.config,\n        database: env.database,\n        discovery: env.discovery,\n        tokenManager: env.tokenManager,\n        providerFactories: {\n            ..._backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__.defaultAuthProviderFactories,\n            // This replaces the default GitHub auth provider with a customized one.\n            // The `signIn` option enables sign-in for this provider, using the\n            // identity resolution logic that's provided in the `resolver` callback.\n            //\n            // This particular resolver makes all users share a single \"guest\" identity.\n            // It should only be used for testing and trying out Backstage.\n            //\n            // If you want to use a production ready resolver you can switch to\n            // the one that is commented out below, it looks up a user entity in the\n            // catalog using the GitHub username of the authenticated user.\n            // That resolver requires you to have user entities populated in the catalog,\n            // for example using https://backstage.io/docs/integrations/github/org\n            //\n            // There are other resolvers to choose from, and you can also create\n            // your own, see the auth documentation for more details:\n            //\n            //   https://backstage.io/docs/auth/identity-resolver\n            github: _backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__.providers.github.create({\n                signIn: {\n                    async resolver ({ result: { fullProfile } }, ctx) {\n                        const userId = fullProfile.username;\n                        if (!userId) {\n                            throw new Error(`GitHub user profile does not contain a username`);\n                        }\n                        // Creates an entity\n                        const userEntity = (0,_backstage_catalog_model__WEBPACK_IMPORTED_MODULE_1__.stringifyEntityRef)({\n                            kind: 'User',\n                            name: userId,\n                            namespace: _backstage_catalog_model__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_NAMESPACE\n                        });\n                        const { entity } = await ctx.findCatalogUser({\n                            entityRef: userEntity\n                        });\n                        const ownership = (0,_backstage_plugin_auth_backend__WEBPACK_IMPORTED_MODULE_0__.getDefaultOwnershipEntityRefs)(entity);\n                        return ctx.issueToken({\n                            claims: {\n                                sub: userEntity,\n                                ent: ownership\n                            }\n                        });\n                    }\n                }\n            })\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9hdXRoLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFRQTtBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9uaW1lci9EZXNrdG9wL2phbnVzLXJiYWMvYmFja3N0YWdlLWNvbnRhaW5hcml6ZXMvYmFja3N0YWdlLXNob3djYXNlL3BhY2thZ2VzL2JhY2tlbmQvc3JjL3BsdWdpbnMvYXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVSb3V0ZXIsXG4gIHByb3ZpZGVycyxcbiAgZGVmYXVsdEF1dGhQcm92aWRlckZhY3RvcmllcyxcbiAgZ2V0RGVmYXVsdE93bmVyc2hpcEVudGl0eVJlZnMsXG59IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLWF1dGgtYmFja2VuZCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFBsdWdpbkVudmlyb25tZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtcbiAgc3RyaW5naWZ5RW50aXR5UmVmLFxuICBERUZBVUxUX05BTUVTUEFDRSxcbn0gZnJvbSAnQGJhY2tzdGFnZS9jYXRhbG9nLW1vZGVsJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGx1Z2luKFxuICBlbnY6IFBsdWdpbkVudmlyb25tZW50LFxuKTogUHJvbWlzZTxSb3V0ZXI+IHtcbiAgcmV0dXJuIGF3YWl0IGNyZWF0ZVJvdXRlcih7XG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgIGNvbmZpZzogZW52LmNvbmZpZyxcbiAgICBkYXRhYmFzZTogZW52LmRhdGFiYXNlLFxuICAgIGRpc2NvdmVyeTogZW52LmRpc2NvdmVyeSxcbiAgICB0b2tlbk1hbmFnZXI6IGVudi50b2tlbk1hbmFnZXIsXG4gICAgcHJvdmlkZXJGYWN0b3JpZXM6IHtcbiAgICAgIC4uLmRlZmF1bHRBdXRoUHJvdmlkZXJGYWN0b3JpZXMsXG4gICAgICAvLyBUaGlzIHJlcGxhY2VzIHRoZSBkZWZhdWx0IEdpdEh1YiBhdXRoIHByb3ZpZGVyIHdpdGggYSBjdXN0b21pemVkIG9uZS5cbiAgICAgIC8vIFRoZSBgc2lnbkluYCBvcHRpb24gZW5hYmxlcyBzaWduLWluIGZvciB0aGlzIHByb3ZpZGVyLCB1c2luZyB0aGVcbiAgICAgIC8vIGlkZW50aXR5IHJlc29sdXRpb24gbG9naWMgdGhhdCdzIHByb3ZpZGVkIGluIHRoZSBgcmVzb2x2ZXJgIGNhbGxiYWNrLlxuICAgICAgLy9cbiAgICAgIC8vIFRoaXMgcGFydGljdWxhciByZXNvbHZlciBtYWtlcyBhbGwgdXNlcnMgc2hhcmUgYSBzaW5nbGUgXCJndWVzdFwiIGlkZW50aXR5LlxuICAgICAgLy8gSXQgc2hvdWxkIG9ubHkgYmUgdXNlZCBmb3IgdGVzdGluZyBhbmQgdHJ5aW5nIG91dCBCYWNrc3RhZ2UuXG4gICAgICAvL1xuICAgICAgLy8gSWYgeW91IHdhbnQgdG8gdXNlIGEgcHJvZHVjdGlvbiByZWFkeSByZXNvbHZlciB5b3UgY2FuIHN3aXRjaCB0b1xuICAgICAgLy8gdGhlIG9uZSB0aGF0IGlzIGNvbW1lbnRlZCBvdXQgYmVsb3csIGl0IGxvb2tzIHVwIGEgdXNlciBlbnRpdHkgaW4gdGhlXG4gICAgICAvLyBjYXRhbG9nIHVzaW5nIHRoZSBHaXRIdWIgdXNlcm5hbWUgb2YgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlci5cbiAgICAgIC8vIFRoYXQgcmVzb2x2ZXIgcmVxdWlyZXMgeW91IHRvIGhhdmUgdXNlciBlbnRpdGllcyBwb3B1bGF0ZWQgaW4gdGhlIGNhdGFsb2csXG4gICAgICAvLyBmb3IgZXhhbXBsZSB1c2luZyBodHRwczovL2JhY2tzdGFnZS5pby9kb2NzL2ludGVncmF0aW9ucy9naXRodWIvb3JnXG4gICAgICAvL1xuICAgICAgLy8gVGhlcmUgYXJlIG90aGVyIHJlc29sdmVycyB0byBjaG9vc2UgZnJvbSwgYW5kIHlvdSBjYW4gYWxzbyBjcmVhdGVcbiAgICAgIC8vIHlvdXIgb3duLCBzZWUgdGhlIGF1dGggZG9jdW1lbnRhdGlvbiBmb3IgbW9yZSBkZXRhaWxzOlxuICAgICAgLy9cbiAgICAgIC8vICAgaHR0cHM6Ly9iYWNrc3RhZ2UuaW8vZG9jcy9hdXRoL2lkZW50aXR5LXJlc29sdmVyXG4gICAgICBnaXRodWI6IHByb3ZpZGVycy5naXRodWIuY3JlYXRlKHtcbiAgICAgICAgc2lnbkluOiB7XG4gICAgICAgICAgYXN5bmMgcmVzb2x2ZXIoeyByZXN1bHQ6IHsgZnVsbFByb2ZpbGUgfSB9LCBjdHgpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJZCA9IGZ1bGxQcm9maWxlLnVzZXJuYW1lO1xuICAgICAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBHaXRIdWIgdXNlciBwcm9maWxlIGRvZXMgbm90IGNvbnRhaW4gYSB1c2VybmFtZWAsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZXMgYW4gZW50aXR5XG4gICAgICAgICAgICBjb25zdCB1c2VyRW50aXR5ID0gc3RyaW5naWZ5RW50aXR5UmVmKHtcbiAgICAgICAgICAgICAga2luZDogJ1VzZXInLFxuICAgICAgICAgICAgICBuYW1lOiB1c2VySWQsXG4gICAgICAgICAgICAgIG5hbWVzcGFjZTogREVGQVVMVF9OQU1FU1BBQ0UsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgeyBlbnRpdHkgfSA9IGF3YWl0IGN0eC5maW5kQ2F0YWxvZ1VzZXIoe1xuICAgICAgICAgICAgICBlbnRpdHlSZWY6IHVzZXJFbnRpdHksXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3Qgb3duZXJzaGlwID0gZ2V0RGVmYXVsdE93bmVyc2hpcEVudGl0eVJlZnMoZW50aXR5KTtcblxuICAgICAgICAgICAgcmV0dXJuIGN0eC5pc3N1ZVRva2VuKHtcbiAgICAgICAgICAgICAgY2xhaW1zOiB7XG4gICAgICAgICAgICAgICAgc3ViOiB1c2VyRW50aXR5LFxuICAgICAgICAgICAgICAgIGVudDogb3duZXJzaGlwLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIH0sXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugins/auth.ts\n");

/***/ }),

/***/ "./src/plugins/catalog.ts":
/*!********************************!*\
  !*** ./src/plugins/catalog.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-catalog-backend */ \"@backstage/plugin-catalog-backend\");\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_catalog_backend_module_openapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-catalog-backend-module-openapi */ \"@backstage/plugin-catalog-backend-module-openapi\");\n/* harmony import */ var _backstage_plugin_catalog_backend_module_openapi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_catalog_backend_module_openapi__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @backstage/plugin-scaffolder-backend */ \"@backstage/plugin-scaffolder-backend\");\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _backstage_plugin_catalog_backend_module_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @backstage/plugin-catalog-backend-module-github */ \"@backstage/plugin-catalog-backend-module-github\");\n/* harmony import */ var _backstage_plugin_catalog_backend_module_github__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_catalog_backend_module_github__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function createPlugin(env) {\n    const builder = await _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_0__.CatalogBuilder.create(env);\n    builder.setPlaceholderResolver('openapi', _backstage_plugin_catalog_backend_module_openapi__WEBPACK_IMPORTED_MODULE_1__.jsonSchemaRefPlaceholderResolver);\n    builder.setPlaceholderResolver('asyncapi', _backstage_plugin_catalog_backend_module_openapi__WEBPACK_IMPORTED_MODULE_1__.jsonSchemaRefPlaceholderResolver);\n    builder.addProcessor(new _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_2__.ScaffolderEntitiesProcessor());\n    builder.addEntityProvider(_backstage_plugin_catalog_backend_module_github__WEBPACK_IMPORTED_MODULE_3__.GithubOrgEntityProvider.fromConfig(env.config, {\n        id: 'production',\n        orgUrl: 'https://github.com/RHEcosystemAppEng',\n        logger: env.logger,\n        schedule: env.scheduler.createScheduledTaskRunner({\n            frequency: {\n                minutes: 60\n            },\n            timeout: {\n                minutes: 2\n            }\n        })\n    }));\n    env.pluginProvider.backendPlugins().map((p)=>p.installer).filter((i)=>i.kind === 'legacy').forEach((i)=>{\n        if (i.catalog) {\n            i.catalog(builder, env);\n        }\n    });\n    const { processingEngine, router } = await builder.build();\n    await processingEngine.start();\n    return router;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9jYXRhbG9nLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9uaW1lci9EZXNrdG9wL2phbnVzLXJiYWMvYmFja3N0YWdlLWNvbnRhaW5hcml6ZXMvYmFja3N0YWdlLXNob3djYXNlL3BhY2thZ2VzL2JhY2tlbmQvc3JjL3BsdWdpbnMvY2F0YWxvZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXRhbG9nQnVpbGRlciB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLWNhdGFsb2ctYmFja2VuZCc7XG5pbXBvcnQgeyBqc29uU2NoZW1hUmVmUGxhY2Vob2xkZXJSZXNvbHZlciB9IGZyb20gJ0BiYWNrc3RhZ2UvcGx1Z2luLWNhdGFsb2ctYmFja2VuZC1tb2R1bGUtb3BlbmFwaSc7XG5pbXBvcnQgeyBTY2FmZm9sZGVyRW50aXRpZXNQcm9jZXNzb3IgfSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1zY2FmZm9sZGVyLWJhY2tlbmQnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQge1xuICBMZWdhY3lCYWNrZW5kUGx1Z2luSW5zdGFsbGVyLFxuICBMZWdhY3lQbHVnaW5FbnZpcm9ubWVudCBhcyBQbHVnaW5FbnZpcm9ubWVudCxcbn0gZnJvbSAnQGJhY2tzdGFnZS9iYWNrZW5kLXBsdWdpbi1tYW5hZ2VyJztcbmltcG9ydCB7IEdpdGh1Yk9yZ0VudGl0eVByb3ZpZGVyIH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tY2F0YWxvZy1iYWNrZW5kLW1vZHVsZS1naXRodWInO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbHVnaW4oXG4gIGVudjogUGx1Z2luRW52aXJvbm1lbnQsXG4pOiBQcm9taXNlPFJvdXRlcj4ge1xuICBjb25zdCBidWlsZGVyID0gYXdhaXQgQ2F0YWxvZ0J1aWxkZXIuY3JlYXRlKGVudik7XG5cbiAgYnVpbGRlci5zZXRQbGFjZWhvbGRlclJlc29sdmVyKCdvcGVuYXBpJywganNvblNjaGVtYVJlZlBsYWNlaG9sZGVyUmVzb2x2ZXIpO1xuICBidWlsZGVyLnNldFBsYWNlaG9sZGVyUmVzb2x2ZXIoJ2FzeW5jYXBpJywganNvblNjaGVtYVJlZlBsYWNlaG9sZGVyUmVzb2x2ZXIpO1xuXG4gIGJ1aWxkZXIuYWRkUHJvY2Vzc29yKG5ldyBTY2FmZm9sZGVyRW50aXRpZXNQcm9jZXNzb3IoKSk7XG4gIGJ1aWxkZXIuYWRkRW50aXR5UHJvdmlkZXIoXG4gICAgR2l0aHViT3JnRW50aXR5UHJvdmlkZXIuZnJvbUNvbmZpZyhlbnYuY29uZmlnLCB7XG4gICAgICBpZDogJ3Byb2R1Y3Rpb24nLFxuICAgICAgb3JnVXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL1JIRWNvc3lzdGVtQXBwRW5nJyxcbiAgICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICAgIHNjaGVkdWxlOiBlbnYuc2NoZWR1bGVyLmNyZWF0ZVNjaGVkdWxlZFRhc2tSdW5uZXIoe1xuICAgICAgICBmcmVxdWVuY3k6IHsgbWludXRlczogNjAgfSxcbiAgICAgICAgdGltZW91dDogeyBtaW51dGVzOiAyIH0sXG4gICAgICB9KSxcbiAgICB9KSxcbiAgKTtcblxuICBlbnYucGx1Z2luUHJvdmlkZXJcbiAgICAuYmFja2VuZFBsdWdpbnMoKVxuICAgIC5tYXAocCA9PiBwLmluc3RhbGxlcilcbiAgICAuZmlsdGVyKChpKTogaSBpcyBMZWdhY3lCYWNrZW5kUGx1Z2luSW5zdGFsbGVyID0+IGkua2luZCA9PT0gJ2xlZ2FjeScpXG4gICAgLmZvckVhY2goaSA9PiB7XG4gICAgICBpZiAoaS5jYXRhbG9nKSB7XG4gICAgICAgIGkuY2F0YWxvZyhidWlsZGVyLCBlbnYpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIGNvbnN0IHsgcHJvY2Vzc2luZ0VuZ2luZSwgcm91dGVyIH0gPSBhd2FpdCBidWlsZGVyLmJ1aWxkKCk7XG4gIGF3YWl0IHByb2Nlc3NpbmdFbmdpbmUuc3RhcnQoKTtcblxuICByZXR1cm4gcm91dGVyO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugins/catalog.ts\n");

/***/ }),

/***/ "./src/plugins/events.ts":
/*!*******************************!*\
  !*** ./src/plugins/events.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_events_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-events-backend */ \"@backstage/plugin-events-backend\");\n/* harmony import */ var _backstage_plugin_events_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_events_backend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/*\n * Copyright 2022 The Backstage Authors\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \n\nasync function createPlugin(env) {\n    const eventsRouter = (0,express__WEBPACK_IMPORTED_MODULE_1__.Router)();\n    const eventsbackend = new _backstage_plugin_events_backend__WEBPACK_IMPORTED_MODULE_0__.EventsBackend(env.logger).setEventBroker(env.eventBroker);\n    const ingresses = env.pluginProvider.backendPlugins().map((plugin)=>plugin.installer).filter((installer)=>installer.kind === 'legacy').flatMap((installer)=>{\n        if (!installer.events) {\n            return [];\n        }\n        return installer.events(eventsbackend, env);\n    });\n    const http = _backstage_plugin_events_backend__WEBPACK_IMPORTED_MODULE_0__.HttpPostIngressEventPublisher.fromConfig({\n        config: env.config,\n        ingresses: Object.fromEntries(ingresses.map((ingress)=>[\n                ingress.topic,\n                ingress\n            ])),\n        logger: env.logger\n    });\n    http.bind(eventsRouter);\n    eventsbackend.addPublishers(http);\n    await eventsbackend.start();\n    return eventsRouter;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9ldmVudHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQVdBO0FBRUE7QUFHQTtBQUVBO0FBSUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL25pbWVyL0Rlc2t0b3AvamFudXMtcmJhYy9iYWNrc3RhZ2UtY29udGFpbmFyaXplcy9iYWNrc3RhZ2Utc2hvd2Nhc2UvcGFja2FnZXMvYmFja2VuZC9zcmMvcGx1Z2lucy9ldmVudHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDIyIFRoZSBCYWNrc3RhZ2UgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge1xuICBMZWdhY3lCYWNrZW5kUGx1Z2luSW5zdGFsbGVyLFxuICBMZWdhY3lQbHVnaW5FbnZpcm9ubWVudCxcbn0gZnJvbSAnQGJhY2tzdGFnZS9iYWNrZW5kLXBsdWdpbi1tYW5hZ2VyJztcbmltcG9ydCB7XG4gIEV2ZW50c0JhY2tlbmQsXG4gIEh0dHBQb3N0SW5ncmVzc0V2ZW50UHVibGlzaGVyLFxufSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1ldmVudHMtYmFja2VuZCc7XG5pbXBvcnQgeyBIdHRwUG9zdEluZ3Jlc3NPcHRpb25zIH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tZXZlbnRzLW5vZGUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBsdWdpbihcbiAgZW52OiBMZWdhY3lQbHVnaW5FbnZpcm9ubWVudCxcbik6IFByb21pc2U8Um91dGVyPiB7XG4gIGNvbnN0IGV2ZW50c1JvdXRlciA9IFJvdXRlcigpO1xuXG4gIGNvbnN0IGV2ZW50c2JhY2tlbmQgPSBuZXcgRXZlbnRzQmFja2VuZChlbnYubG9nZ2VyKS5zZXRFdmVudEJyb2tlcihcbiAgICBlbnYuZXZlbnRCcm9rZXIsXG4gICk7XG5cbiAgY29uc3QgaW5ncmVzc2VzID0gZW52LnBsdWdpblByb3ZpZGVyXG4gICAgLmJhY2tlbmRQbHVnaW5zKClcbiAgICAubWFwKHBsdWdpbiA9PiBwbHVnaW4uaW5zdGFsbGVyKVxuICAgIC5maWx0ZXIoXG4gICAgICAoaW5zdGFsbGVyKTogaW5zdGFsbGVyIGlzIExlZ2FjeUJhY2tlbmRQbHVnaW5JbnN0YWxsZXIgPT5cbiAgICAgICAgaW5zdGFsbGVyLmtpbmQgPT09ICdsZWdhY3knLFxuICAgIClcbiAgICAuZmxhdE1hcChpbnN0YWxsZXIgPT4ge1xuICAgICAgaWYgKCFpbnN0YWxsZXIuZXZlbnRzKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbnN0YWxsZXIuZXZlbnRzKGV2ZW50c2JhY2tlbmQsIGVudik7XG4gICAgfSk7XG5cbiAgY29uc3QgaHR0cCA9IEh0dHBQb3N0SW5ncmVzc0V2ZW50UHVibGlzaGVyLmZyb21Db25maWcoe1xuICAgIGNvbmZpZzogZW52LmNvbmZpZyxcbiAgICBpbmdyZXNzZXM6IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgIGluZ3Jlc3Nlcy5tYXAoaW5ncmVzcyA9PiBbXG4gICAgICAgIGluZ3Jlc3MudG9waWMsXG4gICAgICAgIGluZ3Jlc3MgYXMgT21pdDxIdHRwUG9zdEluZ3Jlc3NPcHRpb25zLCAndG9waWMnPixcbiAgICAgIF0pLFxuICAgICksXG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICB9KTtcbiAgaHR0cC5iaW5kKGV2ZW50c1JvdXRlcik7XG4gIGV2ZW50c2JhY2tlbmQuYWRkUHVibGlzaGVycyhodHRwKTtcblxuICBhd2FpdCBldmVudHNiYWNrZW5kLnN0YXJ0KCk7XG5cbiAgcmV0dXJuIGV2ZW50c1JvdXRlcjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/events.ts\n");

/***/ }),

/***/ "./src/plugins/permission.ts":
/*!***********************************!*\
  !*** ./src/plugins/permission.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _janus_idp_backstage_plugin_rbac_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @janus-idp/backstage-plugin-rbac-backend */ \"@janus-idp/backstage-plugin-rbac-backend\");\n/* harmony import */ var _janus_idp_backstage_plugin_rbac_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_janus_idp_backstage_plugin_rbac_backend__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function createPlugin(env) {\n    return _janus_idp_backstage_plugin_rbac_backend__WEBPACK_IMPORTED_MODULE_0__.PolicyBuilder.build({\n        config: env.config,\n        logger: env.logger,\n        discovery: env.discovery,\n        identity: env.identity,\n        permissions: env.permissions,\n        database: env.database,\n        tokenManager: env.tokenManager\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9wZXJtaXNzaW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUVBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vVXNlcnMvbmltZXIvRGVza3RvcC9qYW51cy1yYmFjL2JhY2tzdGFnZS1jb250YWluYXJpemVzL2JhY2tzdGFnZS1zaG93Y2FzZS9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL3Blcm1pc3Npb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5cbmltcG9ydCB7IFBvbGljeUJ1aWxkZXIgfSBmcm9tICdAamFudXMtaWRwL2JhY2tzdGFnZS1wbHVnaW4tcmJhYy1iYWNrZW5kJztcblxuaW1wb3J0IHsgUGx1Z2luRW52aXJvbm1lbnQgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBsdWdpbihcbiAgZW52OiBQbHVnaW5FbnZpcm9ubWVudCxcbik6IFByb21pc2U8Um91dGVyPiB7XG4gIHJldHVybiBQb2xpY3lCdWlsZGVyLmJ1aWxkKHtcbiAgICBjb25maWc6IGVudi5jb25maWcsXG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgIGRpc2NvdmVyeTogZW52LmRpc2NvdmVyeSxcbiAgICBpZGVudGl0eTogZW52LmlkZW50aXR5LFxuICAgIHBlcm1pc3Npb25zOiBlbnYucGVybWlzc2lvbnMsXG4gICAgZGF0YWJhc2U6IGVudi5kYXRhYmFzZSxcbiAgICB0b2tlbk1hbmFnZXI6IGVudi50b2tlbk1hbmFnZXIsXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugins/permission.ts\n");

/***/ }),

/***/ "./src/plugins/proxy.ts":
/*!******************************!*\
  !*** ./src/plugins/proxy.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/plugin-proxy-backend */ \"@backstage/plugin-proxy-backend\");\n/* harmony import */ var _backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function createPlugin(env) {\n    return await (0,_backstage_plugin_proxy_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n        logger: env.logger,\n        config: env.config,\n        discovery: env.discovery\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9wcm94eS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9uaW1lci9EZXNrdG9wL2phbnVzLXJiYWMvYmFja3N0YWdlLWNvbnRhaW5hcml6ZXMvYmFja3N0YWdlLXNob3djYXNlL3BhY2thZ2VzL2JhY2tlbmQvc3JjL3BsdWdpbnMvcHJveHkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUm91dGVyIH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tcHJveHktYmFja2VuZCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFBsdWdpbkVudmlyb25tZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQbHVnaW4oXG4gIGVudjogUGx1Z2luRW52aXJvbm1lbnQsXG4pOiBQcm9taXNlPFJvdXRlcj4ge1xuICByZXR1cm4gYXdhaXQgY3JlYXRlUm91dGVyKHtcbiAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gICAgY29uZmlnOiBlbnYuY29uZmlnLFxuICAgIGRpc2NvdmVyeTogZW52LmRpc2NvdmVyeSxcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/plugins/proxy.ts\n");

/***/ }),

/***/ "./src/plugins/scaffolder.ts":
/*!***********************************!*\
  !*** ./src/plugins/scaffolder.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/catalog-client */ \"@backstage/catalog-client\");\n/* harmony import */ var _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-scaffolder-backend */ \"@backstage/plugin-scaffolder-backend\");\n/* harmony import */ var _backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backstage_integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @backstage/integration */ \"@backstage/integration\");\n/* harmony import */ var _backstage_integration__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backstage_integration__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function createPlugin(env) {\n    const catalogClient = new _backstage_catalog_client__WEBPACK_IMPORTED_MODULE_0__.CatalogClient({\n        discoveryApi: env.discovery\n    });\n    const integrations = _backstage_integration__WEBPACK_IMPORTED_MODULE_2__.ScmIntegrations.fromConfig(env.config);\n    const builtInActions = (0,_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__.createBuiltinActions)({\n        integrations,\n        catalogClient,\n        config: env.config,\n        reader: env.reader\n    });\n    const actions = [\n        ...builtInActions,\n        ...env.pluginProvider.backendPlugins().map((p)=>p.installer).filter((i)=>i.kind === 'legacy').flatMap(({ scaffolder })=>{\n            if (scaffolder) {\n                return scaffolder(env);\n            }\n            return [];\n        })\n    ];\n    return await (0,_backstage_plugin_scaffolder_backend__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n        actions,\n        logger: env.logger,\n        config: env.config,\n        database: env.database,\n        reader: env.reader,\n        catalogClient,\n        identity: env.identity,\n        permissions: env.permissions\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9zY2FmZm9sZGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBS0E7QUFNQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiZmlsZTovLy8vVXNlcnMvbmltZXIvRGVza3RvcC9qYW51cy1yYmFjL2JhY2tzdGFnZS1jb250YWluYXJpemVzL2JhY2tzdGFnZS1zaG93Y2FzZS9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL3NjYWZmb2xkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2F0YWxvZ0NsaWVudCB9IGZyb20gJ0BiYWNrc3RhZ2UvY2F0YWxvZy1jbGllbnQnO1xuaW1wb3J0IHtcbiAgY3JlYXRlQnVpbHRpbkFjdGlvbnMsXG4gIGNyZWF0ZVJvdXRlcixcbn0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tc2NhZmZvbGRlci1iYWNrZW5kJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgU2NtSW50ZWdyYXRpb25zIH0gZnJvbSAnQGJhY2tzdGFnZS9pbnRlZ3JhdGlvbic7XG5pbXBvcnQge1xuICBMZWdhY3lCYWNrZW5kUGx1Z2luSW5zdGFsbGVyLFxuICBMZWdhY3lQbHVnaW5FbnZpcm9ubWVudCBhcyBQbHVnaW5FbnZpcm9ubWVudCxcbn0gZnJvbSAnQGJhY2tzdGFnZS9iYWNrZW5kLXBsdWdpbi1tYW5hZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGx1Z2luKFxuICBlbnY6IFBsdWdpbkVudmlyb25tZW50LFxuKTogUHJvbWlzZTxSb3V0ZXI+IHtcbiAgY29uc3QgY2F0YWxvZ0NsaWVudCA9IG5ldyBDYXRhbG9nQ2xpZW50KHtcbiAgICBkaXNjb3ZlcnlBcGk6IGVudi5kaXNjb3ZlcnksXG4gIH0pO1xuICBjb25zdCBpbnRlZ3JhdGlvbnMgPSBTY21JbnRlZ3JhdGlvbnMuZnJvbUNvbmZpZyhlbnYuY29uZmlnKTtcblxuICBjb25zdCBidWlsdEluQWN0aW9ucyA9IGNyZWF0ZUJ1aWx0aW5BY3Rpb25zKHtcbiAgICBpbnRlZ3JhdGlvbnMsXG4gICAgY2F0YWxvZ0NsaWVudCxcbiAgICBjb25maWc6IGVudi5jb25maWcsXG4gICAgcmVhZGVyOiBlbnYucmVhZGVyLFxuICB9KTtcblxuICBjb25zdCBhY3Rpb25zID0gW1xuICAgIC4uLmJ1aWx0SW5BY3Rpb25zLFxuICAgIC4uLmVudi5wbHVnaW5Qcm92aWRlclxuICAgICAgLmJhY2tlbmRQbHVnaW5zKClcbiAgICAgIC5tYXAocCA9PiBwLmluc3RhbGxlcilcbiAgICAgIC5maWx0ZXIoKGkpOiBpIGlzIExlZ2FjeUJhY2tlbmRQbHVnaW5JbnN0YWxsZXIgPT4gaS5raW5kID09PSAnbGVnYWN5JylcbiAgICAgIC5mbGF0TWFwKCh7IHNjYWZmb2xkZXIgfSkgPT4ge1xuICAgICAgICBpZiAoc2NhZmZvbGRlcikge1xuICAgICAgICAgIHJldHVybiBzY2FmZm9sZGVyKGVudik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfSksXG4gIF07XG5cbiAgcmV0dXJuIGF3YWl0IGNyZWF0ZVJvdXRlcih7XG4gICAgYWN0aW9ucyxcbiAgICBsb2dnZXI6IGVudi5sb2dnZXIsXG4gICAgY29uZmlnOiBlbnYuY29uZmlnLFxuICAgIGRhdGFiYXNlOiBlbnYuZGF0YWJhc2UsXG4gICAgcmVhZGVyOiBlbnYucmVhZGVyLFxuICAgIGNhdGFsb2dDbGllbnQsXG4gICAgaWRlbnRpdHk6IGVudi5pZGVudGl0eSxcbiAgICBwZXJtaXNzaW9uczogZW52LnBlcm1pc3Npb25zLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/scaffolder.ts\n");

/***/ }),

/***/ "./src/plugins/search.ts":
/*!*******************************!*\
  !*** ./src/plugins/search.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @backstage/plugin-search-backend */ \"@backstage/plugin-search-backend\");\n/* harmony import */ var _backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @backstage/plugin-search-backend-node */ \"@backstage/plugin-search-backend-node\");\n/* harmony import */ var _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @backstage/plugin-catalog-backend */ \"@backstage/plugin-catalog-backend\");\n/* harmony import */ var _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nasync function createPlugin(env) {\n    // Initialize a connection to a search engine.\n    const searchEngine = new _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__.LunrSearchEngine({\n        logger: env.logger\n    });\n    const indexBuilder = new _backstage_plugin_search_backend_node__WEBPACK_IMPORTED_MODULE_2__.IndexBuilder({\n        logger: env.logger,\n        searchEngine\n    });\n    const schedule = env.scheduler.createScheduledTaskRunner({\n        frequency: {\n            minutes: 10\n        },\n        timeout: {\n            minutes: 15\n        },\n        // A 3 second delay gives the backend server a chance to initialize before\n        // any collators are executed, which may attempt requests against the API.\n        initialDelay: {\n            seconds: 3\n        }\n    });\n    // Collators are responsible for gathering documents known to plugins. This\n    // collator gathers entities from the software catalog.\n    indexBuilder.addCollator({\n        schedule,\n        factory: _backstage_plugin_catalog_backend__WEBPACK_IMPORTED_MODULE_3__.DefaultCatalogCollatorFactory.fromConfig(env.config, {\n            discovery: env.discovery,\n            tokenManager: env.tokenManager\n        })\n    });\n    env.pluginProvider.backendPlugins().map((p)=>p.installer).filter((i)=>i.kind === 'legacy').forEach((i)=>{\n        if (i.search) {\n            i.search(indexBuilder, schedule, env);\n        }\n    });\n    // The scheduler controls when documents are gathered from collators and sent\n    // to the search engine for indexing.\n    const { scheduler } = await indexBuilder.build();\n    scheduler.start();\n    (0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.useHotCleanup)(module, ()=>scheduler.stop());\n    return await (0,_backstage_plugin_search_backend__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n        engine: indexBuilder.getSearchEngine(),\n        types: indexBuilder.getDocumentTypes(),\n        permissions: env.permissions,\n        config: env.config,\n        logger: env.logger\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9zZWFyY2gudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBT0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL25pbWVyL0Rlc2t0b3AvamFudXMtcmJhYy9iYWNrc3RhZ2UtY29udGFpbmFyaXplcy9iYWNrc3RhZ2Utc2hvd2Nhc2UvcGFja2FnZXMvYmFja2VuZC9zcmMvcGx1Z2lucy9zZWFyY2gudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlSG90Q2xlYW51cCB9IGZyb20gJ0BiYWNrc3RhZ2UvYmFja2VuZC1jb21tb24nO1xuaW1wb3J0IHsgY3JlYXRlUm91dGVyIH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tc2VhcmNoLWJhY2tlbmQnO1xuaW1wb3J0IHtcbiAgSW5kZXhCdWlsZGVyLFxuICBMdW5yU2VhcmNoRW5naW5lLFxufSBmcm9tICdAYmFja3N0YWdlL3BsdWdpbi1zZWFyY2gtYmFja2VuZC1ub2RlJztcbmltcG9ydCB7IERlZmF1bHRDYXRhbG9nQ29sbGF0b3JGYWN0b3J5IH0gZnJvbSAnQGJhY2tzdGFnZS9wbHVnaW4tY2F0YWxvZy1iYWNrZW5kJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHtcbiAgTGVnYWN5QmFja2VuZFBsdWdpbkluc3RhbGxlcixcbiAgTGVnYWN5UGx1Z2luRW52aXJvbm1lbnQgYXMgUGx1Z2luRW52aXJvbm1lbnQsXG59IGZyb20gJ0BiYWNrc3RhZ2UvYmFja2VuZC1wbHVnaW4tbWFuYWdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBsdWdpbihcbiAgZW52OiBQbHVnaW5FbnZpcm9ubWVudCxcbik6IFByb21pc2U8Um91dGVyPiB7XG4gIC8vIEluaXRpYWxpemUgYSBjb25uZWN0aW9uIHRvIGEgc2VhcmNoIGVuZ2luZS5cbiAgY29uc3Qgc2VhcmNoRW5naW5lID0gbmV3IEx1bnJTZWFyY2hFbmdpbmUoe1xuICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgfSk7XG4gIGNvbnN0IGluZGV4QnVpbGRlciA9IG5ldyBJbmRleEJ1aWxkZXIoe1xuICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICBzZWFyY2hFbmdpbmUsXG4gIH0pO1xuXG4gIGNvbnN0IHNjaGVkdWxlID0gZW52LnNjaGVkdWxlci5jcmVhdGVTY2hlZHVsZWRUYXNrUnVubmVyKHtcbiAgICBmcmVxdWVuY3k6IHsgbWludXRlczogMTAgfSxcbiAgICB0aW1lb3V0OiB7IG1pbnV0ZXM6IDE1IH0sXG4gICAgLy8gQSAzIHNlY29uZCBkZWxheSBnaXZlcyB0aGUgYmFja2VuZCBzZXJ2ZXIgYSBjaGFuY2UgdG8gaW5pdGlhbGl6ZSBiZWZvcmVcbiAgICAvLyBhbnkgY29sbGF0b3JzIGFyZSBleGVjdXRlZCwgd2hpY2ggbWF5IGF0dGVtcHQgcmVxdWVzdHMgYWdhaW5zdCB0aGUgQVBJLlxuICAgIGluaXRpYWxEZWxheTogeyBzZWNvbmRzOiAzIH0sXG4gIH0pO1xuXG4gIC8vIENvbGxhdG9ycyBhcmUgcmVzcG9uc2libGUgZm9yIGdhdGhlcmluZyBkb2N1bWVudHMga25vd24gdG8gcGx1Z2lucy4gVGhpc1xuICAvLyBjb2xsYXRvciBnYXRoZXJzIGVudGl0aWVzIGZyb20gdGhlIHNvZnR3YXJlIGNhdGFsb2cuXG4gIGluZGV4QnVpbGRlci5hZGRDb2xsYXRvcih7XG4gICAgc2NoZWR1bGUsXG4gICAgZmFjdG9yeTogRGVmYXVsdENhdGFsb2dDb2xsYXRvckZhY3RvcnkuZnJvbUNvbmZpZyhlbnYuY29uZmlnLCB7XG4gICAgICBkaXNjb3Zlcnk6IGVudi5kaXNjb3ZlcnksXG4gICAgICB0b2tlbk1hbmFnZXI6IGVudi50b2tlbk1hbmFnZXIsXG4gICAgfSksXG4gIH0pO1xuXG4gIGVudi5wbHVnaW5Qcm92aWRlclxuICAgIC5iYWNrZW5kUGx1Z2lucygpXG4gICAgLm1hcChwID0+IHAuaW5zdGFsbGVyKVxuICAgIC5maWx0ZXIoKGkpOiBpIGlzIExlZ2FjeUJhY2tlbmRQbHVnaW5JbnN0YWxsZXIgPT4gaS5raW5kID09PSAnbGVnYWN5JylcbiAgICAuZm9yRWFjaChpID0+IHtcbiAgICAgIGlmIChpLnNlYXJjaCkge1xuICAgICAgICBpLnNlYXJjaChpbmRleEJ1aWxkZXIsIHNjaGVkdWxlLCBlbnYpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIC8vIFRoZSBzY2hlZHVsZXIgY29udHJvbHMgd2hlbiBkb2N1bWVudHMgYXJlIGdhdGhlcmVkIGZyb20gY29sbGF0b3JzIGFuZCBzZW50XG4gIC8vIHRvIHRoZSBzZWFyY2ggZW5naW5lIGZvciBpbmRleGluZy5cbiAgY29uc3QgeyBzY2hlZHVsZXIgfSA9IGF3YWl0IGluZGV4QnVpbGRlci5idWlsZCgpO1xuICBzY2hlZHVsZXIuc3RhcnQoKTtcblxuICB1c2VIb3RDbGVhbnVwKG1vZHVsZSwgKCkgPT4gc2NoZWR1bGVyLnN0b3AoKSk7XG5cbiAgcmV0dXJuIGF3YWl0IGNyZWF0ZVJvdXRlcih7XG4gICAgZW5naW5lOiBpbmRleEJ1aWxkZXIuZ2V0U2VhcmNoRW5naW5lKCksXG4gICAgdHlwZXM6IGluZGV4QnVpbGRlci5nZXREb2N1bWVudFR5cGVzKCksXG4gICAgcGVybWlzc2lvbnM6IGVudi5wZXJtaXNzaW9ucyxcbiAgICBjb25maWc6IGVudi5jb25maWcsXG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/search.ts\n");

/***/ }),

/***/ "../../plugins/scalprum-backend/src/index.ts":
/*!***************************************************!*\
  !*** ../../plugins/scalprum-backend/src/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createRouter: () => (/* reexport safe */ _service_router__WEBPACK_IMPORTED_MODULE_0__.createRouter)\n/* harmony export */ });\n/* harmony import */ var _service_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/router */ \"../../plugins/scalprum-backend/src/service/router.ts\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9zY2FscHJ1bS1iYWNrZW5kL3NyYy9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9uaW1lci9EZXNrdG9wL2phbnVzLXJiYWMvYmFja3N0YWdlLWNvbnRhaW5hcml6ZXMvYmFja3N0YWdlLXNob3djYXNlL3BsdWdpbnMvc2NhbHBydW0tYmFja2VuZC9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlL3JvdXRlcic7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../plugins/scalprum-backend/src/index.ts\n");

/***/ }),

/***/ "../../plugins/scalprum-backend/src/service/router.ts":
/*!************************************************************!*\
  !*** ../../plugins/scalprum-backend/src/service/router.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createRouter: () => (/* binding */ createRouter)\n/* harmony export */ });\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @backstage/backend-common */ \"@backstage/backend-common\");\n/* harmony import */ var _backstage_backend_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-promise-router */ \"express-promise-router?94cb\");\n/* harmony import */ var express_promise_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_promise_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nasync function createRouter(options) {\n    const { logger, pluginManager, discovery } = options;\n    const router = express_promise_router__WEBPACK_IMPORTED_MODULE_2___default()();\n    router.use(express__WEBPACK_IMPORTED_MODULE_1___default().json());\n    const externalBaseUrl = await discovery.getExternalBaseUrl('scalprum');\n    const availablePackages = pluginManager.availablePackages;\n    const plugins = pluginManager.plugins;\n    const scalprumPlugins = {};\n    plugins.filter((p)=>p.platform === 'web').forEach((plugin)=>{\n        const pkg = availablePackages.find((p)=>p.manifest.name === plugin.name && p.manifest.version === plugin.version);\n        if (!pkg) {\n            logger.warn(`Could not find package for plugin ${plugin.name}@${plugin.version}`);\n            return;\n        }\n        const scalprumEntry = pkg.manifest.scalprum;\n        if (!scalprumEntry || !scalprumEntry.name) {\n            logger.warn(`Could not find scalprum entry for plugin ${plugin.name}@${plugin.version}`);\n            return;\n        }\n        const pkgDistLocation = path__WEBPACK_IMPORTED_MODULE_4__.resolve(url__WEBPACK_IMPORTED_MODULE_3__.fileURLToPath(pkg.location), 'dist-scalprum');\n        if (!fs__WEBPACK_IMPORTED_MODULE_5__.existsSync(pkgDistLocation)) {\n            logger.warn(`Could not find 'scalprum-dist' folder for plugin ${plugin.name}@${plugin.version}`);\n            return;\n        }\n        const pkgManifestLocation = path__WEBPACK_IMPORTED_MODULE_4__.resolve(pkgDistLocation, 'plugin-manifest.json');\n        if (!fs__WEBPACK_IMPORTED_MODULE_5__.existsSync(pkgManifestLocation)) {\n            logger.warn(`Could not find 'dist-scalprum/plugin-manifest.json' for plugin ${plugin.name}@${plugin.version}`);\n            return;\n        }\n        router.use(`/${scalprumEntry.name}`, express__WEBPACK_IMPORTED_MODULE_1___default()[\"static\"](pkgDistLocation));\n        scalprumPlugins[scalprumEntry.name] = {\n            name: scalprumEntry.name,\n            manifestLocation: `${externalBaseUrl}/${scalprumEntry.name}/plugin-manifest.json`\n        };\n    });\n    router.get('/plugins', (_, response)=>{\n        response.send(scalprumPlugins);\n    });\n    router.use((0,_backstage_backend_common__WEBPACK_IMPORTED_MODULE_0__.errorHandler)({\n        logger: logger\n    }));\n    return router;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGx1Z2lucy9zY2FscHJ1bS1iYWNrZW5kL3NyYy9zZXJ2aWNlL3JvdXRlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBUUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBR0E7QUFLQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL25pbWVyL0Rlc2t0b3AvamFudXMtcmJhYy9iYWNrc3RhZ2UtY29udGFpbmFyaXplcy9iYWNrc3RhZ2Utc2hvd2Nhc2UvcGx1Z2lucy9zY2FscHJ1bS1iYWNrZW5kL3NyYy9zZXJ2aWNlL3JvdXRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBQbHVnaW5FbmRwb2ludERpc2NvdmVyeSxcbiAgZXJyb3JIYW5kbGVyLFxufSBmcm9tICdAYmFja3N0YWdlL2JhY2tlbmQtY29tbW9uJztcbmltcG9ydCB7IFBsdWdpbk1hbmFnZXIgfSBmcm9tICdAYmFja3N0YWdlL2JhY2tlbmQtcGx1Z2luLW1hbmFnZXInO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ2V4cHJlc3MtcHJvbWlzZS1yb3V0ZXInO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJ0BiYWNrc3RhZ2UvYmFja2VuZC1wbHVnaW4tYXBpJztcbmltcG9ydCAqIGFzIHVybCBmcm9tICd1cmwnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZXJPcHRpb25zIHtcbiAgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlO1xuICBwbHVnaW5NYW5hZ2VyOiBQbHVnaW5NYW5hZ2VyO1xuICBkaXNjb3Zlcnk6IFBsdWdpbkVuZHBvaW50RGlzY292ZXJ5O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUm91dGVyKFxuICBvcHRpb25zOiBSb3V0ZXJPcHRpb25zLFxuKTogUHJvbWlzZTxleHByZXNzLlJvdXRlcj4ge1xuICBjb25zdCB7IGxvZ2dlciwgcGx1Z2luTWFuYWdlciwgZGlzY292ZXJ5IH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xuICByb3V0ZXIudXNlKGV4cHJlc3MuanNvbigpKTtcbiAgY29uc3QgZXh0ZXJuYWxCYXNlVXJsID0gYXdhaXQgZGlzY292ZXJ5LmdldEV4dGVybmFsQmFzZVVybCgnc2NhbHBydW0nKTtcblxuICBjb25zdCBhdmFpbGFibGVQYWNrYWdlcyA9IHBsdWdpbk1hbmFnZXIuYXZhaWxhYmxlUGFja2FnZXM7XG4gIGNvbnN0IHBsdWdpbnMgPSBwbHVnaW5NYW5hZ2VyLnBsdWdpbnM7XG5cbiAgY29uc3Qgc2NhbHBydW1QbHVnaW5zOiB7XG4gICAgW2tleTogc3RyaW5nXTogeyBuYW1lOiBzdHJpbmc7IG1hbmlmZXN0TG9jYXRpb246IHN0cmluZyB9O1xuICB9ID0ge307XG5cbiAgcGx1Z2luc1xuICAgIC5maWx0ZXIocCA9PiBwLnBsYXRmb3JtID09PSAnd2ViJylcbiAgICAuZm9yRWFjaChwbHVnaW4gPT4ge1xuICAgICAgY29uc3QgcGtnID0gYXZhaWxhYmxlUGFja2FnZXMuZmluZChcbiAgICAgICAgcCA9PlxuICAgICAgICAgIHAubWFuaWZlc3QubmFtZSA9PT0gcGx1Z2luLm5hbWUgJiZcbiAgICAgICAgICBwLm1hbmlmZXN0LnZlcnNpb24gPT09IHBsdWdpbi52ZXJzaW9uLFxuICAgICAgKTtcbiAgICAgIGlmICghcGtnKSB7XG4gICAgICAgIGxvZ2dlci53YXJuKFxuICAgICAgICAgIGBDb3VsZCBub3QgZmluZCBwYWNrYWdlIGZvciBwbHVnaW4gJHtwbHVnaW4ubmFtZX1AJHtwbHVnaW4udmVyc2lvbn1gLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNjYWxwcnVtRW50cnkgPSAocGtnLm1hbmlmZXN0IGFzIGFueSkuc2NhbHBydW07XG4gICAgICBpZiAoIXNjYWxwcnVtRW50cnkgfHwgIXNjYWxwcnVtRW50cnkubmFtZSkge1xuICAgICAgICBsb2dnZXIud2FybihcbiAgICAgICAgICBgQ291bGQgbm90IGZpbmQgc2NhbHBydW0gZW50cnkgZm9yIHBsdWdpbiAke3BsdWdpbi5uYW1lfUAke3BsdWdpbi52ZXJzaW9ufWAsXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGtnRGlzdExvY2F0aW9uOiBzdHJpbmcgPSBwYXRoLnJlc29sdmUoXG4gICAgICAgIHVybC5maWxlVVJMVG9QYXRoKHBrZy5sb2NhdGlvbiksXG4gICAgICAgICdkaXN0LXNjYWxwcnVtJyxcbiAgICAgICk7XG4gICAgICBpZiAoIWZzLmV4aXN0c1N5bmMocGtnRGlzdExvY2F0aW9uKSkge1xuICAgICAgICBsb2dnZXIud2FybihcbiAgICAgICAgICBgQ291bGQgbm90IGZpbmQgJ3NjYWxwcnVtLWRpc3QnIGZvbGRlciBmb3IgcGx1Z2luICR7cGx1Z2luLm5hbWV9QCR7cGx1Z2luLnZlcnNpb259YCxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwa2dNYW5pZmVzdExvY2F0aW9uID0gcGF0aC5yZXNvbHZlKFxuICAgICAgICBwa2dEaXN0TG9jYXRpb24sXG4gICAgICAgICdwbHVnaW4tbWFuaWZlc3QuanNvbicsXG4gICAgICApO1xuICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKHBrZ01hbmlmZXN0TG9jYXRpb24pKSB7XG4gICAgICAgIGxvZ2dlci53YXJuKFxuICAgICAgICAgIGBDb3VsZCBub3QgZmluZCAnZGlzdC1zY2FscHJ1bS9wbHVnaW4tbWFuaWZlc3QuanNvbicgZm9yIHBsdWdpbiAke3BsdWdpbi5uYW1lfUAke3BsdWdpbi52ZXJzaW9ufWAsXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcm91dGVyLnVzZShgLyR7c2NhbHBydW1FbnRyeS5uYW1lfWAsIGV4cHJlc3Muc3RhdGljKHBrZ0Rpc3RMb2NhdGlvbikpO1xuXG4gICAgICBzY2FscHJ1bVBsdWdpbnNbc2NhbHBydW1FbnRyeS5uYW1lXSA9IHtcbiAgICAgICAgbmFtZTogc2NhbHBydW1FbnRyeS5uYW1lLFxuICAgICAgICBtYW5pZmVzdExvY2F0aW9uOiBgJHtleHRlcm5hbEJhc2VVcmx9LyR7c2NhbHBydW1FbnRyeS5uYW1lfS9wbHVnaW4tbWFuaWZlc3QuanNvbmAsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gIHJvdXRlci5nZXQoJy9wbHVnaW5zJywgKF8sIHJlc3BvbnNlKSA9PiB7XG4gICAgcmVzcG9uc2Uuc2VuZChzY2FscHJ1bVBsdWdpbnMpO1xuICB9KTtcblxuICByb3V0ZXIudXNlKGVycm9ySGFuZGxlcih7IGxvZ2dlcjogbG9nZ2VyIH0pKTtcbiAgcmV0dXJuIHJvdXRlcjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../plugins/scalprum-backend/src/service/router.ts\n");

/***/ }),

/***/ "../../node_modules/webpack/hot/log-apply-result.js":
/*!**********************************************************!*\
  !*** ../../node_modules/webpack/hot/log-apply-result.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\n/**\n * @param {(string | number)[]} updatedModules updated modules\n * @param {(string | number)[] | null} renewedModules renewed modules\n */\nmodule.exports = function (updatedModules, renewedModules) {\n\tvar unacceptedModules = updatedModules.filter(function (moduleId) {\n\t\treturn renewedModules && renewedModules.indexOf(moduleId) < 0;\n\t});\n\tvar log = __webpack_require__(/*! ./log */ \"../../node_modules/webpack/hot/log.js\");\n\n\tif (unacceptedModules.length > 0) {\n\t\tlog(\n\t\t\t\"warning\",\n\t\t\t\"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)\"\n\t\t);\n\t\tunacceptedModules.forEach(function (moduleId) {\n\t\t\tlog(\"warning\", \"[HMR]  - \" + moduleId);\n\t\t});\n\t}\n\n\tif (!renewedModules || renewedModules.length === 0) {\n\t\tlog(\"info\", \"[HMR] Nothing hot updated.\");\n\t} else {\n\t\tlog(\"info\", \"[HMR] Updated modules:\");\n\t\trenewedModules.forEach(function (moduleId) {\n\t\t\tif (typeof moduleId === \"string\" && moduleId.indexOf(\"!\") !== -1) {\n\t\t\t\tvar parts = moduleId.split(\"!\");\n\t\t\t\tlog.groupCollapsed(\"info\", \"[HMR]  - \" + parts.pop());\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t\tlog.groupEnd(\"info\");\n\t\t\t} else {\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t}\n\t\t});\n\t\tvar numberIds = renewedModules.every(function (moduleId) {\n\t\t\treturn typeof moduleId === \"number\";\n\t\t});\n\t\tif (numberIds)\n\t\t\tlog(\n\t\t\t\t\"info\",\n\t\t\t\t'[HMR] Consider using the optimization.moduleIds: \"named\" for module names.'\n\t\t\t);\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy1hcHBseS1yZXN1bHQuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL25pbWVyL0Rlc2t0b3AvamFudXMtcmJhYy9iYWNrc3RhZ2UtY29udGFpbmFyaXplcy9iYWNrc3RhZ2Utc2hvd2Nhc2Uvbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy1hcHBseS1yZXN1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxuLyoqXG4gKiBAcGFyYW0geyhzdHJpbmcgfCBudW1iZXIpW119IHVwZGF0ZWRNb2R1bGVzIHVwZGF0ZWQgbW9kdWxlc1xuICogQHBhcmFtIHsoc3RyaW5nIHwgbnVtYmVyKVtdIHwgbnVsbH0gcmVuZXdlZE1vZHVsZXMgcmVuZXdlZCBtb2R1bGVzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVwZGF0ZWRNb2R1bGVzLCByZW5ld2VkTW9kdWxlcykge1xuXHR2YXIgdW5hY2NlcHRlZE1vZHVsZXMgPSB1cGRhdGVkTW9kdWxlcy5maWx0ZXIoZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0cmV0dXJuIHJlbmV3ZWRNb2R1bGVzICYmIHJlbmV3ZWRNb2R1bGVzLmluZGV4T2YobW9kdWxlSWQpIDwgMDtcblx0fSk7XG5cdHZhciBsb2cgPSByZXF1aXJlKFwiLi9sb2dcIik7XG5cblx0aWYgKHVuYWNjZXB0ZWRNb2R1bGVzLmxlbmd0aCA+IDApIHtcblx0XHRsb2coXG5cdFx0XHRcIndhcm5pbmdcIixcblx0XHRcdFwiW0hNUl0gVGhlIGZvbGxvd2luZyBtb2R1bGVzIGNvdWxkbid0IGJlIGhvdCB1cGRhdGVkOiAoVGhleSB3b3VsZCBuZWVkIGEgZnVsbCByZWxvYWQhKVwiXG5cdFx0KTtcblx0XHR1bmFjY2VwdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdICAtIFwiICsgbW9kdWxlSWQpO1xuXHRcdH0pO1xuXHR9XG5cblx0aWYgKCFyZW5ld2VkTW9kdWxlcyB8fCByZW5ld2VkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gTm90aGluZyBob3QgdXBkYXRlZC5cIik7XG5cdH0gZWxzZSB7XG5cdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdIFVwZGF0ZWQgbW9kdWxlczpcIik7XG5cdFx0cmVuZXdlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdGlmICh0eXBlb2YgbW9kdWxlSWQgPT09IFwic3RyaW5nXCIgJiYgbW9kdWxlSWQuaW5kZXhPZihcIiFcIikgIT09IC0xKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IG1vZHVsZUlkLnNwbGl0KFwiIVwiKTtcblx0XHRcdFx0bG9nLmdyb3VwQ29sbGFwc2VkKFwiaW5mb1wiLCBcIltITVJdICAtIFwiICsgcGFydHMucG9wKCkpO1xuXHRcdFx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gIC0gXCIgKyBtb2R1bGVJZCk7XG5cdFx0XHRcdGxvZy5ncm91cEVuZChcImluZm9cIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gIC0gXCIgKyBtb2R1bGVJZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dmFyIG51bWJlcklkcyA9IHJlbmV3ZWRNb2R1bGVzLmV2ZXJ5KGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiBtb2R1bGVJZCA9PT0gXCJudW1iZXJcIjtcblx0XHR9KTtcblx0XHRpZiAobnVtYmVySWRzKVxuXHRcdFx0bG9nKFxuXHRcdFx0XHRcImluZm9cIixcblx0XHRcdFx0J1tITVJdIENvbnNpZGVyIHVzaW5nIHRoZSBvcHRpbWl6YXRpb24ubW9kdWxlSWRzOiBcIm5hbWVkXCIgZm9yIG1vZHVsZSBuYW1lcy4nXG5cdFx0XHQpO1xuXHR9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../node_modules/webpack/hot/log-apply-result.js\n");

/***/ }),

/***/ "../../node_modules/webpack/hot/log.js":
/*!*********************************************!*\
  !*** ../../node_modules/webpack/hot/log.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/** @typedef {\"info\" | \"warning\" | \"error\"} LogLevel */\n\n/** @type {LogLevel} */\nvar logLevel = \"info\";\n\nfunction dummy() {}\n\n/**\n * @param {LogLevel} level log level\n * @returns {boolean} true, if should log\n */\nfunction shouldLog(level) {\n\tvar shouldLog =\n\t\t(logLevel === \"info\" && level === \"info\") ||\n\t\t([\"info\", \"warning\"].indexOf(logLevel) >= 0 && level === \"warning\") ||\n\t\t([\"info\", \"warning\", \"error\"].indexOf(logLevel) >= 0 && level === \"error\");\n\treturn shouldLog;\n}\n\n/**\n * @param {(msg?: string) => void} logFn log function\n * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient\n */\nfunction logGroup(logFn) {\n\treturn function (level, msg) {\n\t\tif (shouldLog(level)) {\n\t\t\tlogFn(msg);\n\t\t}\n\t};\n}\n\n/**\n * @param {LogLevel} level log level\n * @param {string|Error} msg message\n */\nmodule.exports = function (level, msg) {\n\tif (shouldLog(level)) {\n\t\tif (level === \"info\") {\n\t\t\tconsole.log(msg);\n\t\t} else if (level === \"warning\") {\n\t\t\tconsole.warn(msg);\n\t\t} else if (level === \"error\") {\n\t\t\tconsole.error(msg);\n\t\t}\n\t}\n};\n\n/* eslint-disable node/no-unsupported-features/node-builtins */\nvar group = console.group || dummy;\nvar groupCollapsed = console.groupCollapsed || dummy;\nvar groupEnd = console.groupEnd || dummy;\n/* eslint-enable node/no-unsupported-features/node-builtins */\n\nmodule.exports.group = logGroup(group);\n\nmodule.exports.groupCollapsed = logGroup(groupCollapsed);\n\nmodule.exports.groupEnd = logGroup(groupEnd);\n\n/**\n * @param {LogLevel} level log level\n */\nmodule.exports.setLogLevel = function (level) {\n\tlogLevel = level;\n};\n\n/**\n * @param {Error} err error\n * @returns {string} formatted error\n */\nmodule.exports.formatError = function (err) {\n\tvar message = err.message;\n\tvar stack = err.stack;\n\tif (!stack) {\n\t\treturn message;\n\t} else if (stack.indexOf(message) < 0) {\n\t\treturn message + \"\\n\" + stack;\n\t} else {\n\t\treturn stack;\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL1VzZXJzL25pbWVyL0Rlc2t0b3AvamFudXMtcmJhYy9iYWNrc3RhZ2UtY29udGFpbmFyaXplcy9iYWNrc3RhZ2Utc2hvd2Nhc2Uvbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQHR5cGVkZWYge1wiaW5mb1wiIHwgXCJ3YXJuaW5nXCIgfCBcImVycm9yXCJ9IExvZ0xldmVsICovXG5cbi8qKiBAdHlwZSB7TG9nTGV2ZWx9ICovXG52YXIgbG9nTGV2ZWwgPSBcImluZm9cIjtcblxuZnVuY3Rpb24gZHVtbXkoKSB7fVxuXG4vKipcbiAqIEBwYXJhbSB7TG9nTGV2ZWx9IGxldmVsIGxvZyBsZXZlbFxuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUsIGlmIHNob3VsZCBsb2dcbiAqL1xuZnVuY3Rpb24gc2hvdWxkTG9nKGxldmVsKSB7XG5cdHZhciBzaG91bGRMb2cgPVxuXHRcdChsb2dMZXZlbCA9PT0gXCJpbmZvXCIgJiYgbGV2ZWwgPT09IFwiaW5mb1wiKSB8fFxuXHRcdChbXCJpbmZvXCIsIFwid2FybmluZ1wiXS5pbmRleE9mKGxvZ0xldmVsKSA+PSAwICYmIGxldmVsID09PSBcIndhcm5pbmdcIikgfHxcblx0XHQoW1wiaW5mb1wiLCBcIndhcm5pbmdcIiwgXCJlcnJvclwiXS5pbmRleE9mKGxvZ0xldmVsKSA+PSAwICYmIGxldmVsID09PSBcImVycm9yXCIpO1xuXHRyZXR1cm4gc2hvdWxkTG9nO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KG1zZz86IHN0cmluZykgPT4gdm9pZH0gbG9nRm4gbG9nIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7KGxldmVsOiBMb2dMZXZlbCwgbXNnPzogc3RyaW5nKSA9PiB2b2lkfSBmdW5jdGlvbiB0aGF0IGxvZ3Mgd2hlbiBsb2cgbGV2ZWwgaXMgc3VmZmljaWVudFxuICovXG5mdW5jdGlvbiBsb2dHcm91cChsb2dGbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGxldmVsLCBtc2cpIHtcblx0XHRpZiAoc2hvdWxkTG9nKGxldmVsKSkge1xuXHRcdFx0bG9nRm4obXNnKTtcblx0XHR9XG5cdH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtMb2dMZXZlbH0gbGV2ZWwgbG9nIGxldmVsXG4gKiBAcGFyYW0ge3N0cmluZ3xFcnJvcn0gbXNnIG1lc3NhZ2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGV2ZWwsIG1zZykge1xuXHRpZiAoc2hvdWxkTG9nKGxldmVsKSkge1xuXHRcdGlmIChsZXZlbCA9PT0gXCJpbmZvXCIpIHtcblx0XHRcdGNvbnNvbGUubG9nKG1zZyk7XG5cdFx0fSBlbHNlIGlmIChsZXZlbCA9PT0gXCJ3YXJuaW5nXCIpIHtcblx0XHRcdGNvbnNvbGUud2Fybihtc2cpO1xuXHRcdH0gZWxzZSBpZiAobGV2ZWwgPT09IFwiZXJyb3JcIikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihtc2cpO1xuXHRcdH1cblx0fVxufTtcblxuLyogZXNsaW50LWRpc2FibGUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zICovXG52YXIgZ3JvdXAgPSBjb25zb2xlLmdyb3VwIHx8IGR1bW15O1xudmFyIGdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZCB8fCBkdW1teTtcbnZhciBncm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQgfHwgZHVtbXk7XG4vKiBlc2xpbnQtZW5hYmxlIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGlucyAqL1xuXG5tb2R1bGUuZXhwb3J0cy5ncm91cCA9IGxvZ0dyb3VwKGdyb3VwKTtcblxubW9kdWxlLmV4cG9ydHMuZ3JvdXBDb2xsYXBzZWQgPSBsb2dHcm91cChncm91cENvbGxhcHNlZCk7XG5cbm1vZHVsZS5leHBvcnRzLmdyb3VwRW5kID0gbG9nR3JvdXAoZ3JvdXBFbmQpO1xuXG4vKipcbiAqIEBwYXJhbSB7TG9nTGV2ZWx9IGxldmVsIGxvZyBsZXZlbFxuICovXG5tb2R1bGUuZXhwb3J0cy5zZXRMb2dMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCkge1xuXHRsb2dMZXZlbCA9IGxldmVsO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnIgZXJyb3JcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGZvcm1hdHRlZCBlcnJvclxuICovXG5tb2R1bGUuZXhwb3J0cy5mb3JtYXRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0dmFyIG1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcblx0dmFyIHN0YWNrID0gZXJyLnN0YWNrO1xuXHRpZiAoIXN0YWNrKSB7XG5cdFx0cmV0dXJuIG1lc3NhZ2U7XG5cdH0gZWxzZSBpZiAoc3RhY2suaW5kZXhPZihtZXNzYWdlKSA8IDApIHtcblx0XHRyZXR1cm4gbWVzc2FnZSArIFwiXFxuXCIgKyBzdGFjaztcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../node_modules/webpack/hot/log.js\n");

/***/ }),

/***/ "../../node_modules/webpack/hot/poll.js?100":
/*!**************************************************!*\
  !*** ../../node_modules/webpack/hot/poll.js?100 ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __resourceQuery = \"?100\";\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n/*globals __resourceQuery */\nif (true) {\n\tvar hotPollInterval = +__resourceQuery.slice(1) || 0;\n\tvar log = __webpack_require__(/*! ./log */ \"../../node_modules/webpack/hot/log.js\");\n\n\t/**\n\t * @param {boolean=} fromUpdate true when called from update\n\t */\n\tvar checkForUpdate = function checkForUpdate(fromUpdate) {\n\t\tif (module.hot.status() === \"idle\") {\n\t\t\tmodule.hot\n\t\t\t\t.check(true)\n\t\t\t\t.then(function (updatedModules) {\n\t\t\t\t\tif (!updatedModules) {\n\t\t\t\t\t\tif (fromUpdate) log(\"info\", \"[HMR] Update applied.\");\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\t__webpack_require__(/*! ./log-apply-result */ \"../../node_modules/webpack/hot/log-apply-result.js\")(updatedModules, updatedModules);\n\t\t\t\t\tcheckForUpdate(true);\n\t\t\t\t})\n\t\t\t\t.catch(function (err) {\n\t\t\t\t\tvar status = module.hot.status();\n\t\t\t\t\tif ([\"abort\", \"fail\"].indexOf(status) >= 0) {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Cannot apply update.\");\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] \" + log.formatError(err));\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] You need to restart the application!\");\n\t\t\t\t\t} else {\n\t\t\t\t\t\tlog(\"warning\", \"[HMR] Update failed: \" + log.formatError(err));\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t}\n\t};\n\tsetInterval(checkForUpdate, hotPollInterval);\n} else {}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L3BvbGwuanM/MTAwIiwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9uaW1lci9EZXNrdG9wL2phbnVzLXJiYWMvYmFja3N0YWdlLWNvbnRhaW5hcml6ZXMvYmFja3N0YWdlLXNob3djYXNlL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9wb2xsLmpzPzEwMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLypnbG9iYWxzIF9fcmVzb3VyY2VRdWVyeSAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcblx0dmFyIGhvdFBvbGxJbnRlcnZhbCA9ICtfX3Jlc291cmNlUXVlcnkuc2xpY2UoMSkgfHwgMTAgKiA2MCAqIDEwMDA7XG5cdHZhciBsb2cgPSByZXF1aXJlKFwiLi9sb2dcIik7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbj19IGZyb21VcGRhdGUgdHJ1ZSB3aGVuIGNhbGxlZCBmcm9tIHVwZGF0ZVxuXHQgKi9cblx0dmFyIGNoZWNrRm9yVXBkYXRlID0gZnVuY3Rpb24gY2hlY2tGb3JVcGRhdGUoZnJvbVVwZGF0ZSkge1xuXHRcdGlmIChtb2R1bGUuaG90LnN0YXR1cygpID09PSBcImlkbGVcIikge1xuXHRcdFx0bW9kdWxlLmhvdFxuXHRcdFx0XHQuY2hlY2sodHJ1ZSlcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gKHVwZGF0ZWRNb2R1bGVzKSB7XG5cdFx0XHRcdFx0aWYgKCF1cGRhdGVkTW9kdWxlcykge1xuXHRcdFx0XHRcdFx0aWYgKGZyb21VcGRhdGUpIGxvZyhcImluZm9cIiwgXCJbSE1SXSBVcGRhdGUgYXBwbGllZC5cIik7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJlcXVpcmUoXCIuL2xvZy1hcHBseS1yZXN1bHRcIikodXBkYXRlZE1vZHVsZXMsIHVwZGF0ZWRNb2R1bGVzKTtcblx0XHRcdFx0XHRjaGVja0ZvclVwZGF0ZSh0cnVlKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdFx0XHR2YXIgc3RhdHVzID0gbW9kdWxlLmhvdC5zdGF0dXMoKTtcblx0XHRcdFx0XHRpZiAoW1wiYWJvcnRcIiwgXCJmYWlsXCJdLmluZGV4T2Yoc3RhdHVzKSA+PSAwKSB7XG5cdFx0XHRcdFx0XHRsb2coXCJ3YXJuaW5nXCIsIFwiW0hNUl0gQ2Fubm90IGFwcGx5IHVwZGF0ZS5cIik7XG5cdFx0XHRcdFx0XHRsb2coXCJ3YXJuaW5nXCIsIFwiW0hNUl0gXCIgKyBsb2cuZm9ybWF0RXJyb3IoZXJyKSk7XG5cdFx0XHRcdFx0XHRsb2coXCJ3YXJuaW5nXCIsIFwiW0hNUl0gWW91IG5lZWQgdG8gcmVzdGFydCB0aGUgYXBwbGljYXRpb24hXCIpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRsb2coXCJ3YXJuaW5nXCIsIFwiW0hNUl0gVXBkYXRlIGZhaWxlZDogXCIgKyBsb2cuZm9ybWF0RXJyb3IoZXJyKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cdHNldEludGVydmFsKGNoZWNrRm9yVXBkYXRlLCBob3RQb2xsSW50ZXJ2YWwpO1xufSBlbHNlIHtcblx0dGhyb3cgbmV3IEVycm9yKFwiW0hNUl0gSG90IE1vZHVsZSBSZXBsYWNlbWVudCBpcyBkaXNhYmxlZC5cIik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../node_modules/webpack/hot/poll.js?100\n");

/***/ }),

/***/ "@backstage/backend-common":
/*!******************************************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/backend-common/dist/index.cjs.js" ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/backend-common/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/backend-plugin-manager":
/*!**************************************************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/backend-plugin-manager/dist/index.cjs.js" ***!
  \**************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/backend-plugin-manager/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/backend-tasks":
/*!*****************************************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/backend-tasks/dist/index.cjs.js" ***!
  \*****************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/backend-tasks/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/catalog-client":
/*!******************************************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/catalog-client/dist/index.cjs.js" ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/catalog-client/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/catalog-model":
/*!*****************************************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/catalog-model/dist/index.cjs.js" ***!
  \*****************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/catalog-model/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/integration":
/*!***************************************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/integration/dist/index.cjs.js" ***!
  \***************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/integration/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-app-backend":
/*!**********************************************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-app-backend/dist/index.cjs.js" ***!
  \**********************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-app-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-auth-backend":
/*!***********************************************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-auth-backend/dist/index.cjs.js" ***!
  \***********************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-auth-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-auth-node":
/*!********************************************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-auth-node/dist/index.cjs.js" ***!
  \********************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-auth-node/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-catalog-backend-module-github":
/*!****************************************************************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-catalog-backend-module-github/dist/index.cjs.js" ***!
  \****************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-catalog-backend-module-github/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-catalog-backend-module-openapi":
/*!*****************************************************************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-catalog-backend-module-openapi/dist/index.cjs.js" ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-catalog-backend-module-openapi/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-catalog-backend":
/*!**************************************************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-catalog-backend/dist/index.cjs.js" ***!
  \**************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-catalog-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-events-backend":
/*!*************************************************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-events-backend/dist/index.cjs.js" ***!
  \*************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-events-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-permission-node":
/*!**************************************************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-permission-node/dist/index.cjs.js" ***!
  \**************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-permission-node/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-proxy-backend":
/*!************************************************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-proxy-backend/dist/index.cjs.js" ***!
  \************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-proxy-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-scaffolder-backend":
/*!*****************************************************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-scaffolder-backend/dist/index.cjs.js" ***!
  \*****************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-scaffolder-backend/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-search-backend-node":
/*!******************************************************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-search-backend-node/dist/index.cjs.js" ***!
  \******************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-search-backend-node/dist/index.cjs.js");

/***/ }),

/***/ "@backstage/plugin-search-backend":
/*!*************************************************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-search-backend/dist/index.cjs.js" ***!
  \*************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@backstage/plugin-search-backend/dist/index.cjs.js");

/***/ }),

/***/ "@janus-idp/backstage-plugin-rbac-backend":
/*!*********************************************************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@janus-idp/backstage-plugin-rbac-backend/dist/index.cjs.js" ***!
  \*********************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/@janus-idp/backstage-plugin-rbac-backend/dist/index.cjs.js");

/***/ }),

/***/ "express-prom-bundle":
/*!*******************************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/express-prom-bundle/src/index.js" ***!
  \*******************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/express-prom-bundle/src/index.js");

/***/ }),

/***/ "express":
/*!***************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/express/index.js" ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/express/index.js");

/***/ }),

/***/ "prom-client":
/*!*******************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/prom-client/index.js" ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/node_modules/prom-client/index.js");

/***/ }),

/***/ "express-promise-router?2520":
/*!********************************************************************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/packages/backend/node_modules/express-promise-router/lib/express-promise-router.js" ***!
  \********************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/packages/backend/node_modules/express-promise-router/lib/express-promise-router.js");

/***/ }),

/***/ "express-promise-router?94cb":
/*!****************************************************************************************************************************************************************************************!*\
  !*** external "/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/plugins/scalprum-backend/node_modules/express-promise-router/lib/express-promise-router.js" ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/nimer/Desktop/janus-rbac/backstage-containarizes/backstage-showcase/plugins/scalprum-backend/node_modules/express-promise-router/lib/express-promise-router.js");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("module");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("c0b5c8feebc74497be8c")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			})['catch'](function(err) { if(err.code !== 'MODULE_NOT_FOUND') throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("../../node_modules/webpack/hot/poll.js?100");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;