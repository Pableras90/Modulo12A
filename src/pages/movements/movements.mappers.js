export const mapMovementListFromApiToViewModel =
    (accountList) => {
        return accountList.map(account => mapMovementFromApiToViewModel(account));
    }

const mapMovementFromApiToViewModel = (movements) => {
    return {
        id: movements.id,
        fecha: new Date
            (movements.transaction)
            .toLocaleDateString(),
        fechaValor: new Date
            (movements.realTransaction)
            .toLocaleDateString(),
        descripcion: movements.description,
        importe: movements.amount,
        saldoDisponible: `${movements.balance}€`,

    };

};


