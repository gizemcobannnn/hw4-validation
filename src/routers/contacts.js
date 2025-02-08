import { Router } from "express";
import { getContactsController, getContactController, createContactController, patchContactController,deleteContactController } from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import { isValidId } from "../middlewares/isValidId.js";

const router  = Router();
router.get('/contacts', isValidId, ctrlWrapper(getContactsController));
router.get('/contacts/:contactId', isValidId, ctrlWrapper(getContactController));
router.post('/contacts', isValidId, ctrlWrapper(createContactController));
router.patch('/contacts/:contactId', isValidId, ctrlWrapper(patchContactController));
router.delete('/contacts/:contactId', isValidId, ctrlWrapper(deleteContactController));

export default router;