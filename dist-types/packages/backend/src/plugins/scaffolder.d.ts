import { Router } from 'express';
import { LegacyPluginEnvironment as PluginEnvironment } from '@backstage/backend-plugin-manager';
export default function createPlugin(env: PluginEnvironment): Promise<Router>;
