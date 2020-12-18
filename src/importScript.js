import importResource from './importResource';

export default async (src, attrs) => {
    return await importResource('script', {...attrs, src});
};
