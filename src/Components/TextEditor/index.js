import React, { Component } from 'react';
import styles from './styles.module.css';
import { EditorState, convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML, convertFromHTML, } from 'draft-convert';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

/**
 * You must add these packages.
 * yarn add draft-js react-draft-wysiwyg draft-convert
*/

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }
 
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
		if(this.props.onConvertToHTML)
		{
			this.props.onConvertToHTML(convertToHTML(editorState.getCurrentContent()));
		}
  };

 
  render() {
    const { editorState } = this.state;
    return (
      <div className={styles.editor}>
        <Editor
          editorState={editorState}
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
          }}
					wrapperClassName={styles.wrapperClass}
					editorClassName={styles.editorClass}
					toolbarClassName={styles.toolbar}
        />
      </div>
    );
  }
}

export default TextEditor;