import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function CKEditorComponent({ onChange, initialData }) {
    const [editorData, setEditorData] = useState(initialData || '');

    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        setEditorData(data);
        if (onChange) {
            onChange(data);
        }
    };

    return (
        <div className="rounded-md shadow-sm border border-gray-300 overflow-hidden">
            <CKEditor
                editor={ClassicEditor}
                data={editorData}
                config={{
                    // Configuration de l'éditeur (plugins, toolbar, etc.)
                    toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'undo', 'redo'],
                    // Vous pouvez ajouter d'autres configurations ici
                }}
                onChange={handleEditorChange}
            />
        </div>
    );
}

export default CKEditorComponent;