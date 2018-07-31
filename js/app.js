const loadTemplates = (parent) => {
    
    handleColumnsSelector(parent);

    /// Find all tags which have the attribute template
    const items = parent.querySelectorAll('[template]');
    
    /// iterate through all elements which the query has found
    items.forEach(item => {
        
        const template = item.getAttribute('template');

        /// fetch the html content from the server
        fetch(template)
        /// handle a successful response
        .then((response) => {
            return response.text();
        })
        .then(content => {
            /// assign the html content loaded to 
            /// the items innerHTML
            item.innerHTML = content;

            /// run this command on the item element so as to find any child templates
            loadTemplates(item);
        })
        
   });
}

const onWindowLoaded = () => {
    loadTemplates(document);
    
    if (window.ready === undefined) {
        return;
    }

    window.ready.forEach(cb => {
        cb();
    });
}

window.onload = onWindowLoaded;