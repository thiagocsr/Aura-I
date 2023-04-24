({
    init: function (cmp, event, helper) {
        cmp.set('v.columns', [
            { label: 'Produto', fieldName: 'nomeProduto', type: 'text'},
			{ label: 'Quantidade', fieldName: 'qtdProduto', type: 'number'},
            { label: 'Preço', fieldName: 'precoProduto', type: 'currency'},
			{label: 'Data Compra', fieldName: 'dataCompra', sortable: true, type: 'date', 
            	typeAttributes: {
              	day: 'numeric',
              	month: 'short',
              	year: 'numeric',
              	hour: '2-digit',
              	minute: '2-digit',
              	second: '2-digit',
              	hour12: true
            }}
        ]);

            cmp.set('v.data', [{
                    id: 'a',
                    nomeProduto: 'Cadeira',
                    qtdProduto: 2,
                    precoProduto: 500,
					dataCompra: '2023-09-10'
                },
                {
                    id: 'b',
                    nomeProduto: 'Monitor',
                    qtdProduto: 5,
                    precoProduto: 1700,
					dataCompra: '2023-08-10'
            }]);
    },
    getSelectedName: function (cmp, event) {
        var selectedRows = event.getParam('selectedRows');
        // Display that fieldName of the selected rows
        for (var i = 0; i < selectedRows.length; i++){
            alert("You selected: " + selectedRows[i].opportunityName);
        }
    }
})