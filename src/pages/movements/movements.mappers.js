export const mapMovementListFromApiToViewModel =
    (movementList) => {
        return movementList.map(movement => mapMovementFromApiToViewModel(movement));
    }

const mapMovementFromApiToViewModel = (movement) => {
    return {
        id: movement.id,
        transaction: new Date
            (movement.transaction)
            .toLocaleDateString(),
        realTransaction: new Date
            (movement.realTransaction)
            .toLocaleDateString(),
        description: movement.description,
        amount: movement.amount,
        balance: `${movement.balance}€`,

    };

};


