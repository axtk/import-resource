const cache = {};

export default async (tagName, attrs, targetNode) => {
    let attrEntries = Object.entries(attrs);
    let selector = `${tagName}${attrEntries.map(([k, v]) => `[${k}="${v}"]`).join('')}`;
    let e = document.querySelector(selector);

    if (e)
        return Promise.resolve(e);

    if (cache[selector])
        return cache[selector];

    return (cache[selector] = new Promise((resolve, reject) => {
        let e = document.createElement(tagName);

        e.addEventListener('load', () => {
            delete cache[selector];
            resolve(e);
        });

        e.addEventListener('error', () => {
            delete cache[selector];
            reject(e);
        });

        for (let [k, v] of attrEntries)
            e.setAttribute(k, v);

        (targetNode || document.head).appendChild(e);
    }));
};
