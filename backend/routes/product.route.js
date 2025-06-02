import express from 'express';
import Product from '../models/products.model.js'; // Adjust the path as necessary

const router = express.Router();


router.get('/products', async(req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.error("Error in fetching products: ",error);
        res.status(404).json({ success: false, message: "Server Error" });
    }
    });

router.post('/products',async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.imageUrl) {
    return res.status(400).json({success:false, message: 'All field are required' });
  }

  const newProduct = new Product({
    name: product.name,
    price: product.price,
    imageUrl: product.imageUrl,
  });

  try {
    await newProduct.save();
    res.status(201).json({ success: true, message: 'Product created successfully' ,data: newProduct});
  } catch (error) {
    console.error("Error in creating products: ",error);
    res.status(500).json({ success: false, message: "Server Error" })
  }

});


router.delete('/products/:id', async (req, res) => {
    const {id}= req.params;
    try {
        await Product.findByIdAndDelete(id);
        
        res.status(200).json({ success: true, message: 'Product deleted successfully'});
    } catch (error) {
        console.error("Error in deleting products: ",error);
        res.status(404).json({ success: false, message: 'Product not found' });
    }
});


router.put('/products/:id', async (req, res) => {
    const {id} = req.params;
    const product = req.body;

    if (!product.name || !product.price || !product.imageUrl) {
        return res.status(400).json({success:false, message: 'All field are required' });
      }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });

        res.status(200).json({ success: true, message: 'Product updated successfully', data: updatedProduct });
    } catch (error) {
        console.error("Error in updating products: ",error);
        res.status(500).json({ success: false, message: "Product not found" });
    }
});




export default router;
