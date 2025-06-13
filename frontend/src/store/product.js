import {create} from 'zustand';

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {

        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return {
                success: false,
                message: 'All fields are required'
            };

        }

        const res = await fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        });
        const data = await res.json();
        set((state => ({
            products: [...state.products, data.data]
        })));

        return {
             success: true,
             message: 'Products created successfully',
        };
    },

    fetchProducts: async () => {
        const res = await fetch('http://localhost:5000/products');
        const data = await res.json();
        set({ products: data.data });
    },

    }));
