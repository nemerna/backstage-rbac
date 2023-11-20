import React from 'react';
export declare const fetcher: <T>(input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<T[]>;
export declare const ErrorReport: ({ title, errorText, }: {
    title: string;
    errorText: string;
}) => React.JSX.Element;
