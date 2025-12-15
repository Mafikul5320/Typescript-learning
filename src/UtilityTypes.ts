type product = {
    id: number,
    name: string,
    isAvliable: boolean,
    stock?: number,
}

type product1 = Required<product>;
type product2 = Pick<product, "id">;
type product3 = Omit<product, "isAvliable">;
type product4 = Readonly<product>;
const product5: Record<string, unknown> = {};