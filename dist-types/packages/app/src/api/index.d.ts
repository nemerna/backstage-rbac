import { ConfigApi, DiscoveryApi } from '@backstage/core-plugin-api';
import { TechRadarLoaderResponse } from '@backstage/plugin-tech-radar';
import { QuickAccessLinks } from '../types/types';
export interface JanusBackstageCustomizeApi {
    getHomeDataJson(): Promise<QuickAccessLinks[]>;
    getTechRadarDataJson(): Promise<TechRadarLoaderResponse>;
}
export declare const janusBackstageCustomizeApiRef: import("@backstage/core-plugin-api").ApiRef<JanusBackstageCustomizeApi>;
export type Options = {
    discoveryApi: DiscoveryApi;
    configApi: ConfigApi;
};
export declare class JanusBackstageCustomizeApiClient implements JanusBackstageCustomizeApi {
    private readonly discoveryApi;
    private readonly configApi;
    constructor(options: Options);
    private getBaseUrl;
    private fetcher;
    getHomeDataJson(): Promise<any>;
    getTechRadarDataJson(): Promise<any>;
}
