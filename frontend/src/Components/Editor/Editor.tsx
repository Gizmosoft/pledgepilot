import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import  ClassicEditor  from '@ckeditor/ckeditor5-build-classic';

const Editor = () => {
    let ckEditor = {};
    // const onChangeInEditor = (event, editor) => {
    //     const data = editor.getData()
    //     this.setState({data: data})
        //}

    return (
        <div>
            <div className="App">
                <CKEditor
                    id="textInput"
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor&nbsp;5!</p>"
                    onReady={editor => {
                        ckEditor = editor;
                    }}
                    onChange={(event, ckEditor) => {
                       // onChangeInEditor(event, ckEditor);
                    }}
                    onBlur={(event, ckEditor) => {
                    }}
                    onFocus={(event, ckEditor) => {
                    }}
                />
                <div className="btn-forgot-password">
                    <button type="submit">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Editor;