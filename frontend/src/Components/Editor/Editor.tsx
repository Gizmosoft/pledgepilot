import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import  ClassicEditor  from '@ckeditor/ckeditor5-build-classic';

const Editor = () => {
    return (
        <div>
            <div className="App">
                <h2>Using CKEditor&nbsp;5 build in React</h2>
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor&nbsp;5!</p>"
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event) => {
                        console.log(event);
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
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