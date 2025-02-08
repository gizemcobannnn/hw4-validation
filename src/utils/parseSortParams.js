import {SORT_ORDER} from '../constants/index.js'
const parseSortOrder = (sortOrder)=>{
    const knownOrder = [SORT_ORDER.ASC,SORT_ORDER.DESC].includes(sortOrder);
    if(knownOrder){
        return sortOrder;
    }else{
        return SORT_ORDER.ASC;
    }
}

const parseSortBy = (sortBy)=>{
    const keysOfContacts = [
        '_id',
        'name',
        'createdAt',
        'updatedAt',
      ]
    if(keysOfContacts.includes(sortBy)){
        return sortBy;
    }else{
        return '_id';
    }
}
export const parseSortParams = (query)=>{
    const { sortOrder, sortBy } = query;
    const parsedSortOrder=parseSortOrder(sortOrder);
    const parsedSortBy=parseSortBy(sortBy);
    return{
        sortOrder: parsedSortOrder,
        sortBy:parsedSortBy,
    }
}