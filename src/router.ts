import { Router } from 'express';
import { body, oneOf } from 'express-validator';
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from './handlers/products';
import { handleInputErrors } from './modules/middleware';

const router = Router();

// Product
router.get('/product', getProducts);
router.get('/product/:id', getOneProduct);
router.put(
  '/product/:id',
  body('name').isString(),
  handleInputErrors,
  updateProduct
);
router.post('/product', body('name').isString(), handleInputErrors, createProduct);
router.delete('/product/:id', deleteProduct);

// Update
router.get('/update', () => {});
router.get('/update/:id', () => {});
router.put(
  '/update/:id',
  body('title').isString().optional(),
  body('body').isString().optional(),
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
  body('version').isString().optional(),
  handleInputErrors,
  () => {}
);
router.post(
  '/update',
  body('title').isString(),
  body('body').isString(),
  handleInputErrors,
  () => {}
);
router.delete('/update/:id', () => {});

// Update Point
router.get('/update-point', () => {});
router.get('/update-point/:id', () => {});
router.put(
  '/update-point/:id',
  body('name').isString().optional(),
  body('description').isString().optional(),
  handleInputErrors,
  () => {}
);
router.post(
  '/update-point',
  body('name').isString(),
  body('description').isString(),
  () => {}
);
router.delete('/update-point/:id', () => {});

export default router;
