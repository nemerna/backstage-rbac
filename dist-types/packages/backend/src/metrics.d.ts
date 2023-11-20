import { RequestHandler } from 'express';
export declare function normalizePath(req: any): string;
/**
 * Adds a /metrics endpoint, register default runtime metrics and instrument the router.
 */
export declare function metricsHandler(): RequestHandler;
