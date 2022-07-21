const formatResponse = (data) => {
    const md = [];
    data.forEach((element) => {
        md.push({
            "id": element._id,
            "comercio": element.name,
            "cuit": element.cuit,
            "conceptos": conceptsFormat(element.concepts),
            'balance actual': balanceFormat(element.currentBalance),
            "activo": activeFormat(element.active),
            'ultima venta': element.lastSale,
        });
    });
    return md;
};

const conceptsFormat = (data) => {
    return data.sort((a, b) => {
       return a.order - b.order;
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

