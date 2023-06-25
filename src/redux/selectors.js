
export const selectContacts = state => state.contacts.array;
export const selectFilter = state => state.filter.query;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

