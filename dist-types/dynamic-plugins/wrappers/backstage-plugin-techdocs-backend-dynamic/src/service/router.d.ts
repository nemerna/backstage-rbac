import { LegacyPluginEnvironment as PluginEnvironment } from '@backstage/backend-plugin-manager';
export declare function buildRouter(env: Pick<PluginEnvironment, 'config' | 'logger' | 'discovery' | 'cache' | 'reader'>): Promise<import("express").Router>;
