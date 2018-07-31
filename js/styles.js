const handleColumnsSelector = (parent) => {

    const rows = parent.getElementsByClassName('row');

    if(rows.length === 0) {
        return;
    }

    Array.from(rows).forEach(row => {

        const rect = row.getBoundingClientRect();
        let cols = row.querySelectorAll('[col]');

        cols.forEach(col => {
            const size = col.getAttribute('col');
            col.setAttribute('style' , "height: "+ rect.height +"px;float: left; width: " + size + "%;" );
        });

    });

}


const stylesWindowLoaded = () => {
    handleColumnsSelector(document);
}

if (window.ready === undefined ) {
    window.ready = [];
}

window.ready.push(stylesWindowLoaded);