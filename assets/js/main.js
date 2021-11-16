// перетаскивание
const dropItems = document.getElementById('drop-items')

new Sortable(dropItems, {
    animation: 350,
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    store: {
    	// Получаем порядок списка
    	set: (sortable) =>{
    		const order = sortable.toArray()
    		localStorage.setItem(sortable.options.group.name, order.join('|'))
    	},

    	// Получаем порядок списка
    	get: (sortable) =>{
    		const order = localStorage.getItem(sortable.options.group.name)
    		return order ? order.split('|') : []
    	}
    }
});
