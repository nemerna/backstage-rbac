import { TechRadarApi, type TechRadarLoaderResponse } from '@backstage/plugin-tech-radar';
import { JanusBackstageCustomizeApi } from '../api';
export declare class CustomTechRadar implements TechRadarApi {
    private readonly janusBackstageCustomizeApi;
    constructor(options: {
        janusBackstageCustomizeApi: JanusBackstageCustomizeApi;
    });
    load(id: string | undefined): Promise<TechRadarLoaderResponse>;
}
