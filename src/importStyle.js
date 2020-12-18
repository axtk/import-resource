import importResource from './importResource';

export default async (href, attrs) => {
    return await importResource('link', {rel: 'stylesheet', ...attrs, href});
};
