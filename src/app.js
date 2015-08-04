
var Editor = React.createClass({
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
            <div className="editor-groups">
                <div className="editor">
                    <textarea onChange={this.handleChange} onKeyDown={this.handleKeydown} ref="editor" value={this.state.value} />
                </div>
                <div className="preview am-article" dangerouslySetInnerHTML={{__html: marked(this.state.value, {sanitize: true})}} />
            </div>
        );
    }
});


React.render(
    <Editor />,
    document.getElementById('editor')
);
