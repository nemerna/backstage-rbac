import { PluginEndpointDiscovery } from '@backstage/backend-common';
import { PluginManager } from '@backstage/backend-plugin-manager';
import express from 'express';
import { LoggerService } from '@backstage/backend-plugin-api';
export interface RouterOptions {
    logger: LoggerService;
    pluginManager: PluginManager;
    discovery: PluginEndpointDiscovery;
}
export declare function createRouter(options: RouterOptions): Promise<express.Router>;
