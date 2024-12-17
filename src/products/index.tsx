const modules = import.meta.glob('./*.product.tsx', { eager: true });

const products = Object.values(modules).map((module: any) => module.default);

export default products;