import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';
import { tinymceApi } from '../constants/tinyApi'

export const TextArea = ({ control, fieldName }) => {
    return (
        <Controller
            name={fieldName}
            control={control}
            defaultValue={''}
            render={({ field: { onChange } }) => (
                <Editor
                    apiKey={tinymceApi}
                    onEditorChange={onChange}
                />
            )}
        />
    );
}