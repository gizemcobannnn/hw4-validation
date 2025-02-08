import { ContactsCollection } from '../db/contacts.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';
import { SORT_ORDER } from '../constants/index.js';
//getAllContacts getContactById
export const getAllContacts = async ({page = 1,  perPage = 10, sortOrder = SORT_ORDER.ASC,  sortBy = '_id',  filter = {}}) => {
  const limit=perPage;
  const skip = (page-1)*perPage;

  const contactsCount = await ContactsCollection.countDocuments(filter);
  const contacts = await ContactsCollection.find(filter)
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = calculatePaginationData(contactsCount, page, perPage);

  return {
    data: contacts,
    ...paginationData
  };

};

export const getContactById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact; 
};

export const createContact = async(payload)=>{
  const contact = await ContactsCollection.create(payload);
  return contact;
};

export const updateContact = async(contactId,payload,options)  => {
  const rawResult = await ContactsCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );
  if (!rawResult || !rawResult.value) return null;

  return {
    student: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
}

export const deleteContact = async (contactId) => {
  const contact = await ContactsCollection.findByIdAndDelete({ _id: contactId });
  return contact;
};