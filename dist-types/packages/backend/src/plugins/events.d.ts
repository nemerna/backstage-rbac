import { LegacyPluginEnvironment } from '@backstage/backend-plugin-manager';
import { Router } from 'express';
export default function createPlugin(env: LegacyPluginEnvironment): Promise<Router>;
