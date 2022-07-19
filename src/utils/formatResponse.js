const formatResponse = (data) => {
    const md = [];
    data.forEach((element) => {
        md.push({
            _id: element._id,
            Comercio: element.name,
            CUIT: element.cuit,
            Conceptos: conceptsFormat(element.concepts),
            'balance actual:': balanceFormat(element.currentBalance),
            Activo: activeFormat(element.active),
            'ultima venta:': element.lastSale,
        });
    });
    return md;
};

const conceptsFormat = (data) => {
    return data.sort((a, b) => {
       return a.number - b.number;
   });
}

const activeFormat = (data) => {
    if (data) {
        return 'Si';
    }
    return 'No';
}

const balanceFormat = (data) => {
    const numberFormatter = new Intl.NumberFormat("en-US", {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    });
    return numberFormatter.format(data);
}
module.exports = {formatResponse};

