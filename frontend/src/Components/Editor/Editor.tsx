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
                <h2>Using CKEditor&nbsp;5 build in React</h2>
                <CKEditor
                    id="textInput"
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor&nbsp;5!</p>"
                    onReady={editor => {
                        ckEditor = editor;
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, ckEditor) => {
                        console.log(event);
                        console.log(ckEditor.getData());
                       // onChangeInEditor(event, ckEditor);
                    }}
                    onBlur={(event, ckEditor) => {
                        console.log('Blur.', ckEditor);
                    }}
                    onFocus={(event, ckEditor) => {
                        console.log('Focus.', ckEditor);
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