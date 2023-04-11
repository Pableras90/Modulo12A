export const mapTransferFromViewModelToApi = (transfer) => {
      return {
          id: transfer.id,
          accountId: transfer.accountId,
          iban: transfer.iban,
          name: transfer.name,
          amount: transfer.amount,
          concept: transfer.concept,
          notes: transfer.notes,
          day: transfer.day,
          month: transfer.month,
          year: transfer.year,
          email: transfer.email
  
      };
  
  };