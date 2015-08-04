
var Editor = React.createClass({displayName: "Editor",
    getInitialState: function() {
        return {value: 'Hello'};
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    handleKeydown: function(event) {
        console.log(event.which);
        if (event.which == 9) {
            // Tab按键处理
            event.preventDefault();

            var val = event.target.value,
                start = event.target.selectionStart,
                end = event.target.selectionEnd;

            event.target.value = val.substring(0, start) + '\t' + val.substring(end);

            event.target.selectionStart = event.target.selectionEnd = start + 1;
        }
    },
    render: function() {
        return (
            React.createElement("div", {className: "editor-groups"}, 
                React.createElement("div", {className: "editor"}, 
                    React.createElement("textarea", {onChange: this.handleChange, onKeyDown: this.handleKeydown, ref: "editor", value: this.state.value})
                ), 
                React.createElement("div", {className: "preview am-article", dangerouslySetInnerHTML: {__html: marked(this.state.value, {sanitize: true})}})
            )
        );
    }
});


React.render(
    React.createElement(Editor, null),
    document.getElementById('editor')
);
