import { ModuleLoader } from '@backstage/backend-plugin-manager';
import { Logger } from 'winston';
export declare class CommonJSModuleLoader implements ModuleLoader {
    readonly logger: Logger;
    constructor(logger: Logger);
    bootstrap(backstageRoot: string, dynamicPluginsPaths: string[]): Promise<void>;
    load(packagePath: string): Promise<any>;
}
